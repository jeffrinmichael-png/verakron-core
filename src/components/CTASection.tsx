import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      
      <div className="container mx-auto relative">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto border-primary/20 animate-pulse-glow">
          {/* Content */}
          <div className="stagger-children">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build the{" "}
              <span className="text-gold-gradient">
                Digital Future
              </span>
              <br />
              of Your Business
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Verakron Infotech Solution Pvt Ltd and transform your 
              vision into scalable success. Our team of experts is ready to architect 
              your digital transformation journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" className="group" onClick={scrollToContact}>
                <Calendar className="w-5 h-5" />
                Book Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="gold" size="xl" className="group" onClick={scrollToContact}>
                <FileText className="w-5 h-5" />
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;