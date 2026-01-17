import { 
  Layers, 
  Cpu, 
  Settings, 
  Shield, 
  Clock, 
  HeadphonesIcon 
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Layers,
      title: "End-to-End Solutions",
      description: "Complete digital ecosystem from strategy to deployment and beyond",
    },
    {
      icon: Cpu,
      title: "Technology + Business Expertise",
      description: "Unique blend of technical prowess and strategic business acumen",
    },
    {
      icon: Settings,
      title: "Custom Enterprise Architecture",
      description: "Tailored solutions designed specifically for your business needs",
    },
    {
      icon: Shield,
      title: "Scalable & Secure Systems",
      description: "Enterprise-grade security with unlimited scalability potential",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance ensuring uninterrupted operations",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Consulting Team",
      description: "Personal team of experts committed to your success",
    },
  ];

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Verakron
            </span>{" "}
            Advantage
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just deliver solutions — we become your strategic technology 
            partner invested in your long-term success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative group"
            >
              {/* Card */}
              <div className="glass-card p-8 rounded-2xl h-full transition-all duration-500 hover:border-secondary/30 gradient-border">
                {/* Number badge */}
                <div className="absolute top-6 right-6 font-display text-5xl font-bold text-white/5 group-hover:text-secondary/10 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:shadow-glow-gold transition-shadow duration-500">
                  <reason.icon className="w-7 h-7 text-secondary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
