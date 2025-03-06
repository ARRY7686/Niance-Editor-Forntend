import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";

const LandingPage = () => {
  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.body.classList.remove("overflow-x-hidden");
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-niance-bg text-niance-text">
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default LandingPage;
