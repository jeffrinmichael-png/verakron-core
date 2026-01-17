import { Search, MapPin, Palette, Rocket, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Business Discovery",
      description: "Deep dive into your business objectives, challenges, and market landscape",
    },
    {
      step: "02",
      icon: MapPin,
      title: "Strategy & Planning",
      description: "Crafting a comprehensive roadmap aligned with your business goals",
    },
    {
      step: "03",
      icon: Palette,
      title: "Design & Development",
      description: "Building scalable solutions with cutting-edge technology and elegant design",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Testing & Deployment",
      description: "Rigorous quality assurance and seamless launch execution",
    },
    {
      step: "05",
      icon: TrendingUp,
      title: "Growth & Support",
      description: "Continuous optimization and dedicated support for sustained success",
    },
  ];

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Vision to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven methodology ensures every project is delivered with 
            precision, transparency, and exceptional quality.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-card to-muted flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-glow">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  {/* Step badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[hsl(220_100%_60%)] flex items-center justify-center font-display font-bold text-sm text-primary-foreground shadow-glow">
                    {item.step}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
