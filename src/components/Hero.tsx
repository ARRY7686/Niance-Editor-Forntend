import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden h-[100dvh] flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-3xl mx-auto opacity-0 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Welcome to Niance Editor
            </h1>
            <p className="text-xl md:text-2xl text-niance-text/80 mb-10 max-w-2xl mx-auto">
              An editor fully incorporated in your web
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="cursor-pointer bg-niance-accent hover:bg-niance-accent/90 text-white px-8 animate-fade-up animate-delay-100"
              >
                <Link to="/project">Try It Now</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-niance-text px-6 animate-fade-up animate-delay-200"
              >
                <Link
                  to="https://github.com/ojasmaheshwari/CodeEditorFromScratch-JS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub (Editor)
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-niance-text px-6 animate-fade-up animate-delay-300"
              >
                <Link
                  to="https://github.com/ARRY7686/Niance-Editor-Forntend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub (Website)
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-niance-accent/20 rounded-full blur-[120px] opacity-30 animate-pulse-subtle pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] opacity-20 animate-pulse-subtle pointer-events-none"></div>
    </section>
  );
};

export default Hero;
