import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation for logos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const clientLogos = [
    { name: "TechCorp", initials: "TC" },
    { name: "GlobalFinance", initials: "GF" },
    { name: "HealthPlus", initials: "H+" },
    { name: "EduSmart", initials: "ES" },
    { name: "LogiFlow", initials: "LF" },
    { name: "RetailMax", initials: "RM" },
    { name: "CloudNine", initials: "C9" },
    { name: "DataDrive", initials: "DD" },
  ];

  const testimonials = [
    {
      quote: "Verakron transformed our entire digital infrastructure. Their team delivered a scalable enterprise platform that increased our operational efficiency by 300%.",
      author: "Rajesh Kumar",
      role: "CTO",
      company: "TechCorp Industries",
      rating: 5,
    },
    {
      quote: "The business consulting and technology expertise combined made Verakron the perfect partner for our digital transformation journey. Exceptional results.",
      author: "Sarah Mitchell",
      role: "CEO",
      company: "GlobalFinance Ltd",
      rating: 5,
    },
    {
      quote: "From strategy to deployment, Verakron's process was seamless. They understood our healthcare compliance needs and delivered a HIPAA-compliant solution on time.",
      author: "Dr. Priya Sharma",
      role: "Director of IT",
      company: "HealthPlus Networks",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-card/30">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 stagger-children">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted by Leaders
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of enterprises that have transformed their business with Verakron
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative mb-16">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-hidden py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Double the logos for seamless loop */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 glass-card px-8 py-4 rounded-xl flex items-center gap-3 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center font-display font-bold text-sm text-foreground">
                  {client.initials}
                </div>
                <span className="font-medium text-foreground whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card p-8 rounded-2xl relative group hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary/80 flex items-center justify-center shadow-glow opacity-80 group-hover:opacity-100 transition-opacity">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-display font-bold text-primary">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 glass-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "98%", label: "Client Retention" },
            { value: "50+", label: "Countries Served" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
