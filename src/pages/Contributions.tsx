import ContributorStats from '../components/ContributorStats';

export default function Contributions() {
  return (
    <div className="flex-grow animate-fade-up">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">
          Contributions
        </h1>
        <ContributorStats />
      </div>
    </div>
  );
}
