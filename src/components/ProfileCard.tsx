import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  social?: {
    twitter: string | undefined;
    linkedin: string | undefined;
    github: string | undefined;
    instagram: string | undefined;
  };
  imageUrl: string;
}
export default function ProfileCard({ name, role, bio, social, imageUrl }: ProfileCardProps) {
  return (
    <div className="w-full max-w-sm h-full">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg relative hover:shadow-xl transition-shadow duration-300 border border-white/10 h-full flex flex-col">
        <div className="relative -mt-12 mx-auto w-full aspect-square max-w-[240px] lg:max-w-[280px]">
          <div className="absolute inset-0 border-[6px] border-[#D4B483]/80 rounded-xl shadow-md" />
          <img
            src={imageUrl}
            alt="Profile photo"
            className="rounded-xl object-cover w-full h-full bg-gray-800/50"
          />
        </div>

        <div className="text-center px-4 sm:px-6 pb-8 pt-6 flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
          <h3 className="text-lg text-[#D4B483] font-medium mb-4">{role}</h3>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto flex-1">{bio}</p>
          
          {social && (
            <div className="flex justify-center space-x-4 mt-6">
              {social.twitter && (
                <a href={social.twitter} target="_blank" className="text-gray-400 hover:text-[#D4B483] transition-colors">
                  <Twitter size={20} />
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" className="text-gray-400 hover:text-[#D4B483] transition-colors">
                  <Linkedin size={20} />
                </a>
              )}
              {social.github && (
                <a href={social.github} target="_blank" className="text-gray-400 hover:text-[#D4B483] transition-colors">
                  <Github size={20} />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" className="text-gray-400 hover:text-[#D4B483] transition-colors">
                  <Instagram size={20} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
