import { motion } from "framer-motion";
import { Download, Map, PartyPopper } from "lucide-react";

const steps = [
  { icon: Download, num: "1", title: "Descarga e imprime", desc: "Acceso inmediato al material. Solo imprime y comienza." },
  { icon: Map, num: "2", title: "Sigue la aventura", desc: "Tu hijo avanza por niveles como un explorador valiente." },
  { icon: PartyPopper, num: "3", title: "¡Celebra el logro!", desc: "Recibe su diploma al completar todos los niveles." },
];

const HowItWorks = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Cómo funciona el Método Aventura Lectoescritora?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
              {s.num}
            </div>
            <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
