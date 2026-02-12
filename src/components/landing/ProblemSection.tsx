import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import worksheetCollage from "@/assets/worksheet-syllables-collage.webp";

const painPoints = [
  {
    question: "¿Tu hijo tiene 5 o 6 años y todavía no reconoce las letras?",
    detail: "Mientras otros niños ya leen palabras, el tuyo se queda atrás. Y tú no sabes si es normal o si deberías preocuparte.",
  },
  {
    question: "¿Se frustra, llora o dice 'no puedo' cuando intenta escribir?",
    detail: "Cada vez que se sienta a practicar, termina en lágrimas. Tú quieres ayudarlo pero no sabes cómo sin presionarlo más.",
  },
  {
    question: "¿En el colegio te dicen que va atrasado y tú no sabes qué hacer?",
    detail: "La maestra te lo dice con buenas intenciones, pero tú sientes culpa y no tienes las herramientas para ayudarlo en casa.",
  },
  {
    question: "¿Has probado apps, videos y cuadernos pero nada funciona?",
    detail: "Tu hijo se aburre en 2 minutos. Los métodos genéricos no están diseñados para su nivel ni su ritmo de aprendizaje.",
  },
  {
    question: "¿Sientes que estás fallando como mamá o papá?",
    detail: "Trabajas todo el día, llegas cansado/a, y sientes que no le dedicas el tiempo que merece. La culpa es real.",
  },
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
          Esto le pasa a miles de padres
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          ¿Te identificas con alguna de estas situaciones?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Si respondiste "sí" a alguna, no estás solo. Y no es tu culpa. El problema es que nadie te enseñó cómo hacerlo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-destructive/5 rounded-xl p-5 border border-destructive/10"
            >
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-foreground font-bold text-sm">{p.question}</p>
              </div>
              <p className="text-muted-foreground text-sm ml-8">{p.detail}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="sticky top-8"
        >
          <img
            src={worksheetCollage}
            alt="Material de lectoescritura"
            className="rounded-3xl shadow-float"
          />
          <div className="bg-background rounded-2xl p-6 mt-6 border border-border shadow-sm">
            <p className="text-foreground font-bold text-lg mb-2">
              La buena noticia:
            </p>
            <p className="text-muted-foreground">
              Existe un método estructurado, paso a paso, que le permite a <strong className="text-foreground">cualquier padre</strong> enseñar a leer a su hijo en casa — sin ser maestro, sin necesitar horas, y sin frustraciones.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
