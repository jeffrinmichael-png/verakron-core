import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 btn-premium",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground shadow-button hover:shadow-button-hover hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-glow hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0",
        secondary:
          "bg-gradient-to-r from-secondary to-primary text-primary-foreground shadow-glow-gold hover:shadow-[0_0_50px_hsl(43_74%_49%/0.6)] hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98]",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero: 
          "bg-gradient-to-r from-[hsl(50_85%_60%)] via-primary to-secondary text-primary-foreground px-8 py-6 text-base font-bold shadow-button hover:shadow-[0_10px_40px_hsl(43_74%_49%/0.6)] hover:scale-[1.05] hover:-translate-y-2 active:scale-[0.97] active:translate-y-0 rounded-xl",
        heroOutline:
          "border-2 border-primary/40 bg-black/30 backdrop-blur-xl text-foreground px-8 py-6 text-base font-bold hover:bg-primary/10 hover:border-primary hover:shadow-glow hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 rounded-xl",
        glass:
          "bg-black/40 backdrop-blur-xl border border-primary/20 text-foreground hover:bg-black/50 hover:border-primary/40 hover:shadow-glow-soft hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0",
        gold:
          "bg-gradient-to-r from-[hsl(50_85%_60%)] via-primary to-[hsl(38_70%_40%)] text-primary-foreground font-bold shadow-glow-gold hover:shadow-[0_10px_50px_hsl(43_74%_49%/0.7)] hover:scale-[1.05] hover:-translate-y-2 active:scale-[0.97] active:translate-y-0",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };