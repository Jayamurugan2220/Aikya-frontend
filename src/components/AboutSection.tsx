import { motion } from "framer-motion";
import { Brain, Rocket, Target, Zap } from "lucide-react";

const pillars = [
  { icon: Brain, title: "AI-First Approach", desc: "Leveraging cutting-edge AI to build intelligent, scalable products." },
  { icon: Rocket, title: "Venture Building", desc: "End-to-end ideation, development, and launch of tech startups." },
  { icon: Target, title: "Market Fit", desc: "Data-driven strategies ensuring product-market alignment." },
  { icon: Zap, title: "Rapid Execution", desc: "From concept to MVP in weeks, not months." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-navy-gradient">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.span variants={fadeUp} custom={0} className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Who We Are
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-heading text-4xl font-bold md:text-5xl">
            About <span className="text-gradient-gold">Aikya Builds Future</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mx-auto mt-6 max-w-3xl font-body text-lg text-muted-foreground">
           Aikya Builders Pvt. Ltd. is a trusted real estate and construction company based in Chennai — delivering quality residential and commercial developments with unwavering commitment, precision, and customer focus. For over 20 years, we have been transforming dreams into landmark addresses across the city.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i}
              className="group rounded-xl bg-card-glass p-8 transition-all hover:border-primary/40 hover:glow-gold"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
