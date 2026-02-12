import { motion } from "framer-motion";
import { BookOpen, PenTool, Brain, TrendingUp } from "lucide-react";
import worksheetSyllables from "@/assets/worksheet-syllables.webp";

const results = [
  { icon: BookOpen, title: "Lee palabras y frases cortas", desc: "Tu hijo podrá leer de forma independiente textos sencillos adaptados a su nivel." },
  { icon: PenTool, title: "Escribe su nombre y palabras", desc: "Desarrollará la escritura paso a paso, desde trazos hasta oraciones completas." },
  { icon: Brain, title: "Comprende lo que lee", desc: "No solo decodifica letras — entiende el significado de lo que está leyendo." },
  { icon: TrendingUp, title: "Se pone al nivel de su grado", desc: "Si iba atrasado en el colegio, este programa lo ayuda a alcanzar a sus compañeros." },
];

const timeline = [
  { week: "Semana 1", text: "Domina trazos y reconoce vocales" },
  { week: "Semana 2", text: "Forma sílabas con consonantes" },
  { week: "Semana 3", text: "Lee palabras completas" },
  { week: "Semana 4", text: "Lee frases y empieza a escribir" },
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
          Resultados reales
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          ¿Qué logrará tu hijo en 30 días?
        </h2>
        <p className="text-lg text-muted-foreground">
          No son promesas — son resultados que miles de familias ya comprobaron.
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
          alt="Ejercicio de sílabas del programa"
          className="rounded-3xl shadow-float"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-center mb-8">Progreso semana a semana</h3>
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
