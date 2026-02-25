import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Contact Us
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
            Let's Build <span className="text-gradient-gold">Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
            Ready to transform your idea into a scalable tech venture? Partner with India's leading AI venture studio.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-border bg-muted/30 px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-border bg-muted/30 px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full rounded-lg border border-border bg-muted/30 px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              placeholder="Tell us about your venture idea..."
              rows={4}
              required
              className="w-full rounded-lg border border-border bg-muted/30 px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-body font-semibold text-primary-foreground transition-all glow-gold hover:opacity-90"
            >
              {submitted ? "Message Sent!" : "Send Enquiry"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Office Address</h4>
                <div className="mt-1 font-body text-sm text-muted-foreground space-y-1">
                  <p>AIKYA BUILDERS PVT LTD</p>
                  <p>NO 2, EDEN PARK STREET, KRUNJI NAGAR, WEST TAMBARAM, CHENNAI - 600045</p>
                  <p>B. GOPALAKRISHNAN / M B FURHAN SIDDIQ</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Phone</h4>
                <p className="mt-1 font-body text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Email</h4>
                <p className="mt-1 font-body text-sm text-muted-foreground">info@aikyabuildsfuture.com</p>
              </div>
            </div>
          </motion.div>

          {/* Map embed */}
          <div className="mt-8">
            <iframe
              src="https://maps.google.com/maps?q=12.92,80.12&z=15&output=embed"
              width="100%"
              height="300"
              className="rounded-lg"
              allowFullScreen
              loading="lazy"
              title="Aikya Builders Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
