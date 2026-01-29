import { 
  Rocket, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Landmark, 
  Factory, 
  Truck, 
  Building,
  Layers,
  Plus
} from "lucide-react";

interface Industry {
  icon: typeof Rocket;
  name: string;
  description: string;
  isCustom?: boolean;
}

const IndustriesSection = () => {
  const industries: Industry[] = [
    { icon: Rocket, name: "Startups", description: "MVP to Scale" },
    { icon: ShoppingCart, name: "E-commerce", description: "Digital Commerce" },
    { icon: Heart, name: "Healthcare", description: "HealthTech Solutions" },
    { icon: GraduationCap, name: "Education", description: "EdTech Platforms" },
    { icon: Landmark, name: "FinTech", description: "Financial Innovation" },
    { icon: Factory, name: "Manufacturing", description: "Industry 4.0" },
    { icon: Truck, name: "Logistics", description: "Supply Chain Tech" },
    { icon: Building, name: "Real Estate", description: "PropTech Solutions" },
    { icon: Layers, name: "Custom Domain", description: "Any Industry, Your Vision", isCustom: true },
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
              className={`glass-card p-6 sm:p-8 rounded-2xl text-center group transition-all duration-500 cursor-pointer ${
                industry.isCustom 
                  ? "border-2 border-secondary/50 hover:border-secondary bg-gradient-to-br from-secondary/10 to-transparent hover:shadow-glow-gold" 
                  : "hover:border-primary/30 gradient-border"
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 relative ${
                industry.isCustom 
                  ? "bg-gradient-to-br from-secondary/30 to-secondary/10 group-hover:shadow-glow-gold" 
                  : "bg-gradient-to-br from-primary/20 to-primary/5 group-hover:shadow-glow"
              }`}>
                <industry.icon className={`w-8 h-8 ${industry.isCustom ? "text-secondary" : "text-primary"}`} />
                {industry.isCustom && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                    <Plus className="w-3 h-3 text-secondary-foreground" />
                  </div>
                )}
              </div>
              
              {/* Content */}
              <h3 className={`font-display font-semibold text-lg mb-1 ${
                industry.isCustom ? "text-secondary" : "text-foreground"
              }`}>
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
