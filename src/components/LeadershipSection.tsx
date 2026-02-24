import { motion } from "framer-motion";
import { Award, Briefcase, TrendingUp, Users } from "lucide-react";

const achievements = [
  { icon: Briefcase, value: "20+", label: "Years in Tech & Venture Building" },
  { icon: TrendingUp, value: "100+", label: "Projects Delivered Successfully" },
  { icon: Award, value: "95%", label: "Client Success Rate" },
  { icon: Users, value: "50+", label: "Strategic Partnerships" },
];

const projectExamples = [
  "AI-powered FinTech platforms",
  "HealthTech SaaS solutions",
  "EdTech marketplace ventures",
  "Enterprise automation tools",
  "D2C brand tech stacks",
  "Smart city IoT systems",
];

const leaders = [
  {
    initial: "G",
    name: "B. Gopalakrishnan",
    title: "Managing Director",
    bio: "With over 20 plus years  of experience in the construction industry, Mr. Gopalakrishnan has been the driving force behind Aikya Builders' commitment to quality and innovation.",
  },
  {
    initial: "F",
    name: "M.D. Furhan Siddiq",
    title: "Director & Head of Operations",
    bio: "A visionary leader with deep expertise in project management and client relations, ensuring every Aikya project is delivered with precision and excellence.",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Leadership
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
            Meet Our <span className="text-gradient-gold">Leadership Team</span>
          </h2>
        </motion.div>

        {/* Leaders */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl bg-card-glass p-8 text-center transition-all hover:glow-gold md:p-10"
            >
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{leader.name}</h3>
              <p className="mt-1 font-body text-sm font-semibold text-primary">{leader.title}</p>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">{leader.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl bg-card-glass p-6 text-center transition-all hover:glow-gold"
            >
              <a.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="font-heading text-3xl font-bold text-gradient-gold">{a.value}</div>
              <p className="mt-1 font-body text-xs text-muted-foreground">{a.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Project domains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Key Project Domains
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {projectExamples.map((ex) => (
              <span
                key={ex}
                className="rounded-full border border-border bg-muted/50 px-3 py-1 font-body text-xs text-muted-foreground"
              >
                {ex}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
