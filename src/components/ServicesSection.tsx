import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import * as THREE from "three";
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

// 3D Floating Shape Component
const FloatingShape = ({ position, color, shape, speed = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  shape: "sphere" | "box" | "torus" | "icosahedron";
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case "sphere":
        return <Sphere args={[1, 32, 32]} ref={meshRef}>
          <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
        </Sphere>;
      case "box":
        return <Box args={[1.5, 1.5, 1.5]} ref={meshRef}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
        </Box>;
      case "torus":
        return <Torus args={[1, 0.4, 16, 32]} ref={meshRef}>
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} />
        </Torus>;
      case "icosahedron":
        return <Icosahedron args={[1.2, 0]} ref={meshRef}>
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} wireframe />
        </Icosahedron>;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} scale={0.8}>
        {renderShape()}
      </group>
    </Float>
  );
};

// 3D Scene for each category
const Scene3D = ({ category }: { category: "tech" | "marketing" | "consulting" }) => {
  const colors = {
    tech: "#00d4ff",
    marketing: "#f0a500",
    consulting: "#00d4ff",
  };

  const shapes: Record<string, Array<{ pos: [number, number, number]; shape: "sphere" | "box" | "torus" | "icosahedron"; speed: number }>> = {
    tech: [
      { pos: [-2, 1, 0], shape: "sphere", speed: 1 },
      { pos: [2, -1, -1], shape: "icosahedron", speed: 0.8 },
      { pos: [0, 0, 0], shape: "torus", speed: 0.6 },
    ],
    marketing: [
      { pos: [0, 0, 0], shape: "sphere", speed: 1.2 },
      { pos: [-1.5, 1.5, -1], shape: "box", speed: 0.7 },
    ],
    consulting: [
      { pos: [0, 0, 0], shape: "icosahedron", speed: 0.9 },
      { pos: [1.5, -1, 0], shape: "torus", speed: 1.1 },
    ],
  };

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f0a500" />
      <Suspense fallback={null}>
        {shapes[category].map((item, index) => (
          <FloatingShape 
            key={index}
            position={item.pos}
            color={colors[category]}
            shape={item.shape}
            speed={item.speed}
          />
        ))}
      </Suspense>
    </Canvas>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const serviceCategories = [
    {
      id: "tech",
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
      id: "marketing",
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
      id: "consulting",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-card/30"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        {/* Services Grid with 3D */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              {/* 3D Canvas Header */}
              <div className="h-48 relative overflow-hidden">
                <Scene3D category={category.id as "tech" | "marketing" | "consulting"} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
              </div>

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
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.2 + serviceIndex * 0.1,
                      duration: 0.5 
                    }}
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
