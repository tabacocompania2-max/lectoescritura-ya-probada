import { motion } from "framer-motion";
import { BookOpen, PenTool, Heart, Trophy } from "lucide-react";
import worksheetSyllables from "@/assets/worksheet-syllables.webp";

const results = [
  { icon: BookOpen, title: "Lee palabras y frases cortas", desc: "Tu hijo podrá leer de forma independiente textos sencillos." },
  { icon: PenTool, title: "Escribe su nombre y palabras", desc: "Desarrollará la habilidad de escritura paso a paso." },
  { icon: Heart, title: "Ama la lectura", desc: "Creará un vínculo positivo con los libros para toda la vida." },
  { icon: Trophy, title: "Confianza en sí mismo", desc: "Se sentirá capaz y orgulloso de sus logros." },
];

const timeline = [
  { week: "Semana 1", text: "Domina trazos y vocales" },
  { week: "Semana 2", text: "Forma sílabas fácilmente" },
  { week: "Semana 3", text: "Lee palabras completas" },
  { week: "Semana 4", text: "¡Lee frases y escribe!" },
];

const ResultsSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
          Transformación real
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          En 30 días tu hijo podrá...
        </h2>
        <p className="text-lg text-muted-foreground">
          Resultados comprobados por miles de familias latinoamericanas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="grid grid-cols-2 gap-4">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-5 border border-border shadow-sm"
            >
              <r.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-sm mb-1">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src={worksheetSyllables}
          alt="Ejercicio de sílabas"
          className="rounded-3xl shadow-float"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-center mb-8">El viaje de transformación de tu hijo</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                {i + 1}
              </div>
              <p className="font-bold text-sm text-primary">{t.week}</p>
              <p className="text-xs text-muted-foreground">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResultsSection;
