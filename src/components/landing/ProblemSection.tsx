import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import problemCollage from "@/assets/problem-collage.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const painPoints = [
  {
    question: "Tu hijo tiene 5 o 6 años y todavía no reconoce las letras…",
    detail: "Ves que otros niños ya leen palabras mientras el tuyo se queda atrás. El miedo crece cada día — ¿y si ya es tarde?",
  },
  {
    question: "Se frustra, llora o dice 'no puedo' cuando intenta escribir…",
    detail: "Cada intento termina en lágrimas. Tú quieres ayudarlo pero sientes que lo presionas más. La culpa te come por dentro.",
  },
  {
    question: "En el colegio te dicen que va atrasado y tú no sabes qué hacer…",
    detail: "La maestra te lo dice con preocupación y tú sientes un nudo en el estómago. No tienes las herramientas y no sabes por dónde empezar.",
  },
  {
    question: "Has probado apps, videos y cuadernos… pero nada funciona…",
    detail: "Tu hijo se aburre en 2 minutos. Nada está diseñado para su nivel real ni para su ritmo. Te sientes más perdido/a que antes.",
  },
  {
    question: "Sientes que estás fallando como mamá o papá…",
    detail: "Trabajas todo el día, llegas agotado/a, y sientes que no le dedicas lo que merece. Esa culpa silenciosa no te deja dormir.",
  },
];

const ProblemSection = () => (
  <section className="py-6 md:py-10 bg-card">
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
          Esto es lo que viven miles de padres cada día
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Si leer esto te hace sentir un nudo en la garganta, no estás solo. Y lo más importante: <strong className="text-foreground">tiene solución.</strong>
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
            src={problemCollage}
            alt="Niño frustrado intentando escribir"
            className="rounded-3xl shadow-float"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Button
          asChild
          size="lg"
          className="w-full md:w-auto min-h-[60px] bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-12 py-7 rounded-2xl shadow-float font-bold"
        >
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            SÍ, QUIERO LA SOLUCIÓN
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-3">
          Acceso inmediato · Garantía 7 días · Pago seguro
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
