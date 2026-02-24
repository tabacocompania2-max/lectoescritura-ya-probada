import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const levels = [
{ num: "1", title: "Preparación Motriz", desc: "Fortalece la coordinación de la mano para escribir. Trazos, laberintos y ejercicios de precisión.", items: ["Ejercicios de trazo", "Laberintos", "Colorear con precisión", "Recortar y pegar"] },
{ num: "2", title: "Vocales", desc: "Aprende las 5 vocales de forma visual y práctica. La base de todo el proceso.", items: ["A, E, I, O, U ilustradas", "Reconocimiento visual", "Asociación con objetos", "Escritura guiada"] },
{ num: "3", title: "Sílabas", desc: "Combina consonantes con vocales. El paso clave donde empieza la lectura real.", items: ["MA, ME, MI, MO, MU…", "Juegos de unión", "Lectura de sílabas", "Escritura de sílabas"] },
{ num: "4", title: "Palabras", desc: "Une sílabas para formar palabras completas. Tu hijo empieza a leer por sí solo.", items: ["Palabras de 2 sílabas", "Palabras de 3 sílabas", "Asociación imagen-palabra", "Dictado visual"] },
{ num: "5", title: "Frases", desc: "Forma oraciones cortas y comprende lo que lee. Comprensión lectora inicial.", items: ["Frases cortas", "Comprensión de textos", "Preguntas sencillas", "Lectura en voz alta"] },
{ num: "6", title: "Escritura", desc: "Escribe palabras, frases y pequeños textos por sí mismo. El logro final.", items: ["Escritura libre", "Copia de textos", "Creación de oraciones", "Evaluación final"] }];


const LevelsSection = () =>
<section className="py-10 md:py-16 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          6 niveles progresivos: del trazo a la lectura
        </h2>
        <p className="text-lg text-muted-foreground">
          Cada nivel construye sobre el anterior. Sin saltar pasos, sin presionar.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {levels.map((l, i) =>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="bg-background rounded-2xl p-6 border border-border shadow-sm">

            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold">
                {l.num}
              </span>
              <span className="text-xs text-muted-foreground font-semibold uppercase">Nivel {l.num}</span>
            </div>
            <h3 className="text-lg font-bold mb-2">{l.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{l.desc}</p>
            <ul className="space-y-1">
              {l.items.map((item, j) =>
          <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {item}
                </li>
          )}
            </ul>
          </motion.div>
      )}
      </div>

      











    </div>
  </section>;


export default LevelsSection;