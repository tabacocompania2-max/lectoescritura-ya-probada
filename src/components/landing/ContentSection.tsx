import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Más de 120 páginas de ejercicios progresivos — de lo simple a lo complejo",
  "6 niveles completos: tu hijo avanza a su ritmo sin frustrarse",
  "Actividades de motricidad fina que preparan su mano para escribir",
  "Reconocimiento de vocales y consonantes de forma visual y divertida",
  "Formación de sílabas, palabras y frases — el camino a la lectura real",
  "Lecturas cortas con comprensión: tu hijo no solo lee, entiende",
  "Escritura guiada paso a paso — sin improvisar",
  "Plan de 30 días incluido: sabes exactamente qué hacer cada día",
  "Diploma de graduación personalizable — un premio por su esfuerzo",
];

const stats = [
  { num: "120+", label: "Páginas" },
  { num: "6", label: "Niveles" },
  { num: "30", label: "Días de plan" },
  { num: "∞", label: "Impresiones" },
];

const ContentSection = () => (
  <section id="programa" className="py-6 md:py-10">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
          Contenido completo
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Todo lo que tu hijo necesita para aprender a leer — en un solo programa
        </h2>
        <p className="text-lg text-muted-foreground">
          Material profesional, estructurado y listo para imprimir. Sin improvisar, sin adivinar.
        </p>
      </motion.div>

      <div className="flex justify-center gap-6 md:gap-10 mb-12 flex-wrap">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary">{s.num}</p>
            <p className="text-muted-foreground font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-6 text-center">¿Qué incluye el programa?</h3>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-foreground">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ContentSection;
