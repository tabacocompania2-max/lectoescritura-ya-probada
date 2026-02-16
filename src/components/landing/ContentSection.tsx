import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Play } from "lucide-react";
import productSpread from "@/assets/product-spread.jpg";

const DACAST_SRC = "https://iframe.dacast.com/vod/592280d6-f4cf-e74b-ad87-72de9cf6c3f2/61132211-e482-4adf-bc3a-ce2f7a2b7f00";

const items = [
  "Más de 120 páginas de ejercicios progresivos",
  "6 niveles completos: desde trazos hasta lectura",
  "Actividades de motricidad fina y preparación",
  "Reconocimiento de vocales y consonantes",
  "Formación de sílabas, palabras y frases",
  "Lecturas cortas con comprensión lectora",
  "Escritura guiada paso a paso",
  "Plan de 30 días incluido",
  "Diploma de graduación personalizable",
];

const stats = [
  { num: "120+", label: "Páginas" },
  { num: "6", label: "Niveles" },
  { num: "30", label: "Días de plan" },
  { num: "∞", label: "Impresiones" },
];

const ContentSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="programa" className="py-16 md:py-24">
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
            Todo lo que necesitas para enseñarle a leer a tu hijo
          </h2>
          <p className="text-lg text-muted-foreground">
            Material profesional, estructurado y listo para imprimir. Sin improvisar.
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
            <h3 className="text-xl font-bold mb-6">¿Qué incluye el programa?</h3>
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
            <p className="text-sm font-bold text-primary mb-3">Programa por dentro</p>
            <div className="relative rounded-2xl overflow-hidden shadow-float aspect-video bg-muted">
              {playing ? (
                <iframe
                  src={DACAST_SRC}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 w-full h-full group cursor-pointer"
                  aria-label="Reproducir video del programa"
                >
                  <img
                    src={productSpread}
                    alt="Vista previa del programa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
