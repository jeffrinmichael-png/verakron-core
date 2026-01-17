import { Lightbulb, Rocket, Target, Shield } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Pioneering cutting-edge solutions that push the boundaries of technology",
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Expert guidance in modernizing your business for the digital age",
    },
    {
      icon: Target,
      title: "Business-First Approach",
      description: "Technology solutions designed around your unique business objectives",
    },
    {
      icon: Shield,
      title: "Enterprise Scalability",
      description: "Robust architectures that grow seamlessly with your ambitions",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="stagger-children">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Verakron
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Building the{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Future-Ready
              </span>{" "}
              Enterprise
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Verakron Infotech Solution Pvt Ltd stands at the forefront of digital innovation, 
              combining deep industry expertise with cutting-edge technology to deliver transformative 
              solutions. We partner with organizations worldwide to architect their digital success stories.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our multidisciplinary team of strategists, engineers, and consultants work collaboratively 
              to understand your challenges and craft bespoke solutions that drive measurable business outcomes. 
              From startups to global enterprises, we scale with your ambitions.
            </p>

            <div className="flex items-center gap-6">
              <div className="glass-card px-6 py-4 rounded-xl">
                <div className="font-display text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card px-6 py-4 rounded-xl">
                <div className="font-display text-3xl font-bold text-secondary">25+</div>
                <div className="text-sm text-muted-foreground">Tech Experts</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 rounded-2xl group hover:border-primary/30 transition-all duration-500 gradient-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-500">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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

export default AboutSection;
