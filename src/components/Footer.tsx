import { Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 w-full mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-niance-text/70 text-sm mb-4 md:mb-0">
            © {currentYear} Niance Editor. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ARRY7686/Niance-Editor-Forntend"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-niance-text/70 hover:text-niance-text transition-colors"
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
