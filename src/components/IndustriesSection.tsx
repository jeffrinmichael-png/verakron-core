import { 
  Rocket, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Landmark, 
  Factory, 
  Truck, 
  Building 
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    { icon: Rocket, name: "Startups", description: "MVP to Scale" },
    { icon: ShoppingCart, name: "E-commerce", description: "Digital Commerce" },
    { icon: Heart, name: "Healthcare", description: "HealthTech Solutions" },
    { icon: GraduationCap, name: "Education", description: "EdTech Platforms" },
    { icon: Landmark, name: "FinTech", description: "Financial Innovation" },
    { icon: Factory, name: "Manufacturing", description: "Industry 4.0" },
    { icon: Truck, name: "Logistics", description: "Supply Chain Tech" },
    { icon: Building, name: "Real Estate", description: "PropTech Solutions" },
  ];

  return (
    <section id="industries" className="section-padding relative overflow-hidden bg-card/30">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Industries
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Our deep domain expertise spans across diverse sectors, enabling us to 
            deliver industry-specific solutions that drive real impact.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="glass-card p-6 sm:p-8 rounded-2xl text-center group hover:border-primary/30 transition-all duration-500 gradient-border cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display font-semibold text-lg mb-1 text-foreground">
                {industry.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
