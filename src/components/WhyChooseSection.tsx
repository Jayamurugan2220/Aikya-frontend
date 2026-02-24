import { motion } from "framer-motion";
import { Clock, Shield, MessageCircle, Heart, Palette, Star } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Rapid Delivery", desc: "We honor timelines — MVPs in weeks, full products in months." },
  { icon: Shield, title: "Proven Track Record", desc: "100+ successful projects with a 95% client success rate." },
  { icon: MessageCircle, title: "Transparent Process", desc: "Open communication at every milestone of your venture." },
  { icon: Heart, title: "Partner-First Mindset", desc: "Your success is our success. We co-invest, co-build, co-grow." },
  { icon: Palette, title: "Innovation-Led Design", desc: "AI-driven product design for delightful user experiences." },
  { icon: Star, title: "Trusted by Founders", desc: "50+ strategic partnerships with visionary entrepreneurs." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span variants={fadeUp} custom={0} className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Our Promise
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-heading text-4xl font-bold md:text-5xl">
            Why Choose <span className="text-gradient-gold">Aikya</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              custom={i}
              className="group rounded-xl bg-card-glass p-8 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted text-primary transition-colors group-hover:bg-primary/20">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
