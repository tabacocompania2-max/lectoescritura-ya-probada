import { motion } from "framer-motion";
import { Check } from "lucide-react";
import productSpread from "@/assets/product-spread.jpg";

const items = [
  "Más de 200 páginas de ejercicios progresivos",
  "6 niveles completos de aprendizaje",
  "Actividades de trazo y motricidad fina",
  "Ejercicios de reconocimiento de letras",
  "Formación de sílabas y palabras",
  "Lecturas cortas con ilustraciones",
  "Ejercicios de escritura guiada",
  "Sistema de recompensas y stickers",
  "Diploma de graduación personalizable",
];

const stats = [
  { num: "200+", label: "Páginas" },
  { num: "6", label: "Niveles" },
  { num: "50+", label: "Juegos" },
  { num: "∞", label: "Descargas" },
];

const ContentSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
          Todo lo que recibirás
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Un programa completo para el éxito de tu hijo
        </h2>
        <p className="text-lg text-muted-foreground">
          Contenido extenso y de calidad premium diseñado para resultados reales.
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

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-bold mb-6">Contenido del programa</h3>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={productSpread}
            alt="Vista general del material completo"
            className="rounded-3xl shadow-float"
          />
          <div className="flex justify-center gap-3 mt-4">
            {["Material", "Premium", "Acceso inmediato", "Paso a paso"].map((tag) => (
              <span key={tag} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContentSection;
