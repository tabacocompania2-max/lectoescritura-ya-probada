import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const levels = [
  { num: "1", title: "Preparación Motriz", desc: "Fortalecemos los músculos de la mano y la coordinación necesaria para escribir.", items: ["Ejercicios de trazo libre", "Laberintos divertidos", "Colorear dentro de líneas", "Recortar y pegar"] },
  { num: "2", title: "Reconocimiento de Vocales", desc: "Aprende las 5 vocales de forma visual, auditiva y kinestésica.", items: ["A, E, I, O, U ilustradas", "Sonidos y canciones", "Identificación visual", "Escritura guiada"] },
  { num: "3", title: "Formación de Sílabas", desc: "Combinamos consonantes con vocales para formar las primeras sílabas.", items: ["MA, ME, MI, MO, MU...", "Juegos de unión", "Lectura de sílabas", "Escritura de sílabas"] },
  { num: "4", title: "Construcción de Palabras", desc: "Unimos sílabas para formar palabras completas con significado.", items: ["Palabras de 2 sílabas", "Palabras de 3 sílabas", "Asociación imagen-palabra", "Dictado visual"] },
  { num: "5", title: "Lectura de Frases", desc: "Formamos oraciones cortas y comenzamos la comprensión lectora.", items: ["Frases cortas", "Comprensión de textos", "Preguntas sencillas", "Lectura en voz alta"] },
  { num: "6", title: "Escritura Inicial", desc: "El niño escribe sus propias palabras, frases y pequeños textos.", items: ["Escritura libre", "Copia de textos", "Creación de oraciones", "Evaluación final"] },
];

const LevelsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          El camino hacia la lectura explicado
        </h2>
        <p className="text-lg text-muted-foreground">
          6 niveles progresivos diseñados científicamente para el éxito.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {levels.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background rounded-2xl p-6 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold">
                {l.num}
              </span>
              <span className="text-xs text-muted-foreground font-semibold uppercase">Nivel {l.num}</span>
            </div>
            <h3 className="text-lg font-bold mb-2">{l.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{l.desc}</p>
            <ul className="space-y-1">
              {l.items.map((item, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 bg-secondary/10 rounded-2xl p-8 text-center max-w-3xl mx-auto border-2 border-secondary/30"
      >
        <GraduationCap className="w-12 h-12 text-secondary mx-auto mb-3" />
        <h3 className="text-2xl font-bold mb-2">🎓 ¡Graduación con Diploma Oficial!</h3>
        <p className="text-muted-foreground">
          Al completar los 6 niveles, tu hijo recibirá un diploma personalizado que celebra su logro. Un momento de orgullo para toda la familia.
        </p>
      </motion.div>
    </div>
  </section>
);

export default LevelsSection;
