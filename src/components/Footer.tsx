import { Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-white/5 w-full bg-niance-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-niance-text/70 text-sm text-center md:text-left">
            © {currentYear} Niance Editor. All rights reserved.
          </p>

          <div className="flex items-center">
            <a
              href="https://github.com/ARRY7686/Niance-Editor-Forntend"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-niance-text/70 hover:text-niance-text transition-colors p-2"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
