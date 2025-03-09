import { LucideCode, LucideFeather, LucideArrowUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Completely Built from Scratch",
      description:
        "The editor does not rely on any third-party libraries or dependencies",
      icon: <LucideCode className="w-10 h-10 text-niance-accent" />,
      delay: "0",
    },
    {
      title: "Custom Syntax Highlighting",
      description:
        "Uses regular expressions to apply syntax highlighting dynamically",
      icon: <LucideFeather className="w-10 h-10 text-niance-accent" />,
      delay: "100",
    },
    {
      title: "Lightweight and Browser-Based",
      description:
        "Unlike popular editors like Monaco, this editor is minimalistic and built for in-browser use",
      icon: <LucideArrowUp className="w-10 h-10 text-niance-accent" />,
      delay: "200",
    },
  ];

  return (
    <section className="py-20 relative h-[70vh] flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 opacity-0 animate-fade-up"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-niance-text/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Features;
