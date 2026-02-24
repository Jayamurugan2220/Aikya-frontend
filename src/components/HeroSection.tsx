import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "95%", label: "Success Rate" },
  { value: "20+", label: "Years Experience" },
  { value: "50+", label: "Active Partners" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Futuristic Indian cityscape" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-body text-sm font-medium text-primary">AI Venture Studio · India</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
          >
            Building India's
            <br />
            <span className="text-gradient-gold">Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl font-body text-lg text-muted-foreground md:text-xl"
          >
            India's premier AI-powered venture studio — turning bold ideas into scalable
            tech ventures. 100+ projects delivered, shaping tomorrow's innovation landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-body font-semibold text-primary-foreground transition-all glow-gold hover:opacity-90"
            >
              Start a Partnership
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-body font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-muted"
            >
              Explore Our Work
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-card-glass p-6 text-center">
              <div className="font-heading text-3xl font-bold text-gradient-gold md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-body text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
