import ProfileCard from "../components/ProfileCard";
import akshat from "../assets/akshat.jpeg";
export default function About() {
  const teamMembers = [
    {
      name: "Ojas Maheshwari",
      role: "Lead Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      imageUrl: "/team/jane-doe.jpg",
      social: {
        twitter: undefined,
        linkedin: undefined,
        github: "https://github.com/ojasmaheshwari",
        instagram: undefined,
      },
    },
    {
      name: "Aadi Gupta",
      role: "Lead Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      imageUrl: "/team/john-smith.jpg",
      social: {
        twitter: undefined,
        linkedin: undefined,
        github: "https://github.com/ARRY7686",
        instagram: undefined,
      },
    },
    {
      name: "Akshat Sipany",
      role: "Lead Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
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
      role: "Lead Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      imageUrl: "/team/john-smith.jpg",
      social: {
        twitter: undefined,
        linkedin: undefined,
        github: undefined,
        instagram: undefined,
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Our Team
      </h1>
      <div className="md:mt-42 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-22 lg:gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex justify-center h-full">
            <ProfileCard
              name={member.name}
              role={member.role}
              bio={member.bio}
              social={member.social}
              imageUrl={member.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
