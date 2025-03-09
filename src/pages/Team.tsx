import ProfileCard from "../components/ProfileCard";
import akshat from "/akshat.jpeg";
import Ojas from "/Ojas.jpg";
import Aadi from "/Aadi.jpg";
import DefaultPic from "/default.jpg";
export default function About() {
  const teamMembers = [
    {
      name: "Ojas Maheshwari",
      role: "Project lead, Developer, Researcher",
      imageUrl: Ojas,
      social: {
        twitter: undefined,
        linkedin: "https://www.linkedin.com/in/0jasmaheshwari/",
        github: "https://github.com/ojasmaheshwari",
        instagram: undefined,
      },
    },
    {
      name: "Aadi Gupta",
      role: "Developer, Researcher, UI and UX in-charge",
      imageUrl: Aadi,
      social: {
        twitter: undefined,
        linkedin: "https://www.linkedin.com/in/aadi-gupta-600605247/",
        github: "https://github.com/ARRY7686",
        instagram: undefined,
      },
    },
    {
      name: "Akshat Sipany",
      role: "Developer, Researcher",
      imageUrl: akshat,
      social: {
        twitter: "https://x.com/akshat2106",
        linkedin: "https://www.linkedin.com/in/akshat-sipany-a56122237/",
        github: "https://github.com/akshat-code21",
        instagram: undefined,
      },
    },
    {
      name: "Arjun Yadav",
      role: "Developer,Researcher",
      imageUrl: DefaultPic,
      social: {
        twitter: undefined,
        linkedin: "https://www.linkedin.com/in/arjunydv/",
        github: undefined,
        instagram: undefined,
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Our Team
      </h1>
      <div className="md:mt-42 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-22 lg:gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex justify-center h-full">
            <ProfileCard
              name={member.name}
              role={member.role}
              social={member.social}
              imageUrl={member.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
