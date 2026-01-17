import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
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
            <span className="bg-gradient-to-r from-primary via-[hsl(200_100%_60%)] to-secondary bg-clip-text text-transparent text-glow">
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
            <Button variant="hero" className="group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline">
              Explore Our Solutions
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="glass-card inline-flex items-center gap-8 sm:gap-12 px-8 py-5 rounded-2xl">
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-secondary">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Global Clients</div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="text-center hidden sm:block">
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary">99%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
