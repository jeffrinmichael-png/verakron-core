import { 
  Globe, 
  Smartphone, 
  Building2, 
  Cloud, 
  Bot, 
  Database,
  TrendingUp,
  Palette,
  Target,
  FileCheck,
  Calculator,
  Briefcase,
  Users
} from "lucide-react";

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Technology Solutions",
      description: "Cutting-edge digital products and platforms",
      color: "primary",
      services: [
        { icon: Globe, name: "Website & Web App Development" },
        { icon: Smartphone, name: "Mobile App Development" },
        { icon: Building2, name: "Enterprise Software" },
        { icon: Cloud, name: "SaaS Product Development" },
        { icon: Database, name: "CRM & ERP Solutions" },
        { icon: Cloud, name: "Cloud & DevOps" },
        { icon: Bot, name: "AI & Automation" },
      ],
    },
    {
      title: "Digital Marketing",
      description: "Accelerate your market presence",
      color: "secondary",
      services: [
        { icon: TrendingUp, name: "SEO & Growth Marketing" },
        { icon: Palette, name: "Branding & UI/UX" },
        { icon: Target, name: "Lead Generation Systems" },
      ],
    },
    {
      title: "Business Consulting",
      description: "Strategic advisory for growth",
      color: "primary",
      services: [
        { icon: FileCheck, name: "Business Registration & Compliance" },
        { icon: Calculator, name: "Accounting, Audit & Tax" },
        { icon: Briefcase, name: "Startup Consulting" },
        { icon: Users, name: "Corporate Advisory" },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-card/30">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital & Business
            </span>{" "}
            Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to execution, we provide end-to-end services that transform 
            your business vision into scalable reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              {/* Category Header */}
              <div className={`p-6 pb-4 border-b border-white/5 ${
                category.color === "secondary" 
                  ? "bg-gradient-to-r from-secondary/10 to-transparent" 
                  : "bg-gradient-to-r from-primary/10 to-transparent"
              }`}>
                <h3 className={`font-display text-xl font-bold mb-2 ${
                  category.color === "secondary" ? "text-secondary" : "text-primary"
                }`}>
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Services List */}
              <div className="p-6 space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 group/item"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      category.color === "secondary"
                        ? "bg-secondary/10 group-hover/item:bg-secondary/20"
                        : "bg-primary/10 group-hover/item:bg-primary/20"
                    }`}>
                      <service.icon className={`w-5 h-5 ${
                        category.color === "secondary" ? "text-secondary" : "text-primary"
                      }`} />
                    </div>
                    <span className="text-sm font-medium text-foreground/90">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
