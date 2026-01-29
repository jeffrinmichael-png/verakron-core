import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [expectation, setExpectation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExpectationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!expectation.trim()) return;
    
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    toast({
      title: "Thank you for sharing!",
      description: "We'll craft the perfect solution for your vision.",
    });
    
    setExpectation("");
    setIsSubmitting(false);
    scrollToContact();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Gold Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/12 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center stagger-children">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Engineering Digital Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Powering the Future of </span>
            <br />
            <span className="text-gold-gradient text-glow-gold">
              Business with Intelligent
            </span>
            <br />
            <span className="text-foreground">Technology Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Verakron Infotech delivers world-class software, SaaS platforms, digital transformation, 
            automation, and business consulting solutions to scale modern enterprises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" className="group" onClick={scrollToContact}>
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" onClick={scrollToServices}>
              Explore Our Solutions
            </Button>
          </div>

          {/* Expectation Input Section */}
          <div className="glass-card px-6 sm:px-8 py-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Tell us your expectation for your website
            </p>
            <form onSubmit={handleExpectationSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="E.g., A modern e-commerce platform with AI recommendations..."
                value={expectation}
                onChange={(e) => setExpectation(e.target.value)}
                className="flex-1 bg-background/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground/60"
              />
              <Button 
                type="submit" 
                variant="gold" 
                disabled={isSubmitting || !expectation.trim()}
                className="group px-6"
              >
                {isSubmitting ? "Sending..." : "Share"}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;