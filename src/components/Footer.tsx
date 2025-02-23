import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-4 text-center text-sm  ">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <p>© {new Date().getFullYear()} Niance Editor. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/ARRY7686/Niance-Editor-Forntend"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
