import { motion } from "framer-motion";
import { X } from "lucide-react";
import worksheetCollage from "@/assets/worksheet-syllables-collage.webp";

const problems = [
  "Tu hijo se frustra cuando intenta leer y no lo logra",
  "No sabes cómo enseñarle sin que se aburra o se rinda",
  "Los métodos tradicionales le parecen aburridos y difíciles",
  "No tienes tiempo para buscar el método correcto",
];

const ProblemSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold mb-4">
          ¿Te suena familiar?
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Sabemos lo difícil que es ver a tu hijo luchar con la lectura
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src={worksheetCollage}
          alt="Ejercicios de sílabas"
          className="rounded-3xl shadow-float"
        />
        <div className="space-y-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-destructive/5 rounded-xl p-4"
            >
              <X className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{p}</p>
            </motion.div>
          ))}
          <p className="text-muted-foreground mt-6">
            Pero no te preocupes... <strong className="text-secondary">¡hay una solución!</strong>
          </p>
          <p className="text-lg font-semibold text-foreground">
            Un método diseñado para que aprender a leer sea una aventura, no un problema.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
