import { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface GitHubContributor {
  login: string;
  contributions: number;
  avatar_url: string;
}

interface CommitData {
  date: string;
  codeEditor: number;
  nianceEditor: number;
  nicoEditor: number;
}

interface RepoContributors {
  codeEditor: GitHubContributor[];
  nianceEditor: GitHubContributor[];
  nicoEditor: GitHubContributor[];
}

export default function ContributorStats() {
  const [contributors, setContributors] = useState<RepoContributors>({
    codeEditor: [],
    nianceEditor: [],
    nicoEditor: [],
  });
  const [commitData, setCommitData] = useState<CommitData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const octokit = new Octokit({
          auth: import.meta.env.VITE_GITHUB_TOKEN,
        });

        const [codeEditorResponse, nianceEditorResponse, nicoEditorResponse] = await Promise.all([
          octokit.repos.listContributors({
            owner: 'ojasmaheshwari',
            repo: 'CodeEditorFromScratch-JS',
          }),
          octokit.repos.listContributors({
            owner: 'ARRY7686',
            repo: 'Niance-Editor-Forntend',
          }),
          octokit.repos.listContributors({
            owner: 'ojasmaheshwari',
            repo: 'Nico-Text-Editor',
          }),
        ]);

        const [codeEditorCommits, nianceEditorCommits, nicoEditorCommits] = await Promise.all([
          octokit.repos.listCommits({
            owner: 'ojasmaheshwari',
            repo: 'CodeEditorFromScratch-JS',
            per_page: 100,
          }),
          octokit.repos.listCommits({
            owner: 'ARRY7686',
            repo: 'Niance-Editor-Forntend',
            per_page: 100,
          }),
          octokit.repos.listCommits({
            owner: 'ojasmaheshwari',
            repo: 'Nico-Text-Editor',
            per_page: 100,
          }),
        ]);

        const commitsByDate: { [key: string]: { codeEditor: number; nianceEditor: number; nicoEditor: number } } = {};

        codeEditorCommits.data.forEach((commit) => {
          const date = new Date(commit.commit.author?.date || '').toISOString().split('T')[0];
          if (!commitsByDate[date]) {
            commitsByDate[date] = { codeEditor: 0, nianceEditor: 0, nicoEditor: 0 };
          }
          commitsByDate[date].codeEditor++;
        });

        nianceEditorCommits.data.forEach((commit) => {
          const date = new Date(commit.commit.author?.date || '').toISOString().split('T')[0];
          if (!commitsByDate[date]) {
            commitsByDate[date] = { codeEditor: 0, nianceEditor: 0, nicoEditor: 0 };
          }
          commitsByDate[date].nianceEditor++;
        });

        nicoEditorCommits.data.forEach((commit) => {
          const date = new Date(commit.commit.author?.date || '').toISOString().split('T')[0];
          if (!commitsByDate[date]) {
            commitsByDate[date] = { codeEditor: 0, nianceEditor: 0, nicoEditor: 0 };
          }
          commitsByDate[date].nicoEditor++;
        });

        const sortedCommitData = Object.entries(commitsByDate)
          .map(([date, counts]) => ({
            date,
            codeEditor: counts.codeEditor,
            nianceEditor: counts.nianceEditor,
            nicoEditor: counts.nicoEditor,
          }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setContributors({
          codeEditor: codeEditorResponse.data as GitHubContributor[],
          nianceEditor: nianceEditorResponse.data as GitHubContributor[],
          nicoEditor: nicoEditorResponse.data as GitHubContributor[],
        });
        setCommitData(sortedCommitData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch contributor data. Please check your GitHub token.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading contributor data...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-4">Contribution Timeline</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={commitData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="date"
                stroke="#9CA3AF"
                tick={{ fill: '#9CA3AF' }}
              />
              <YAxis
                stroke="#9CA3AF"
                tick={{ fill: '#9CA3AF' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  color: '#F3F4F6'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="codeEditor"
                stroke="#8884d8"
                name="Niance Editor"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="nianceEditor"
                stroke="#82ca9d"
                name="Frontend Website"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="nicoEditor"
                stroke="#ffc658"
                name="Nico Text Editor"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            <a 
              href="https://github.com/ojasmaheshwari/CodeEditorFromScratch-JS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Niance Editor Contributors
            </a>
          </h3>
          <div className="space-y-4">
            {contributors.codeEditor.map((contributor) => (
              <div key={contributor.login} className="flex items-center space-x-3">
                <a
                  href={`https://github.com/${contributor.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-10 h-10 rounded-full hover:ring-2 hover:ring-blue-400 transition-all"
                  />
                </a>
                <div>
                  <a
                    href={`https://github.com/${contributor.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-blue-400 transition-colors"
                  >
                    {contributor.login}
                  </a>
                  <p className="text-gray-400 text-sm">
                    {contributor.contributions} contributions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            <a 
              href="https://github.com/ARRY7686/Niance-Editor-Forntend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Frontend Website Contributors
            </a>
          </h3>
          <div className="space-y-4">
            {contributors.nianceEditor.map((contributor) => (
              <div key={contributor.login} className="flex items-center space-x-3">
                <a
                  href={`https://github.com/${contributor.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-10 h-10 rounded-full hover:ring-2 hover:ring-blue-400 transition-all"
                  />
                </a>
                <div>
                  <a
                    href={`https://github.com/${contributor.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-blue-400 transition-colors"
                  >
                    {contributor.login}
                  </a>
                  <p className="text-gray-400 text-sm">
                    {contributor.contributions} contributions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            <a 
              href="https://github.com/ojasmaheshwari/Nico-Text-Editor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Nico Text Editor Contributors
            </a>
          </h3>
          <div className="space-y-4">
            {contributors.nicoEditor.map((contributor) => (
              <div key={contributor.login} className="flex items-center space-x-3">
                <a
                  href={`https://github.com/${contributor.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-10 h-10 rounded-full hover:ring-2 hover:ring-blue-400 transition-all"
                  />
                </a>
                <div>
                  <a
                    href={`https://github.com/${contributor.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-blue-400 transition-colors"
                  >
                    {contributor.login}
                  </a>
                  <p className="text-gray-400 text-sm">
                    {contributor.contributions} contributions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 