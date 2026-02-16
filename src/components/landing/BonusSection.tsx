import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bonus1Image from "@/assets/bonus-1-actividades.png";
import bonus2Image from "@/assets/bonus-2-plan30dias.webp";
import bonus3Image from "@/assets/bonus-3-planillas.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const bonuses = [
  { num: "1", title: "Actividades de Refuerzo Extra", desc: "Ejercicios adicionales para consolidar lo aprendido: crucigramas infantiles, sopas de letras y juegos de asociación.", value: "$19.99", image: bonus1Image },
  { num: "2", title: "Plan Guiado de 30 Días", desc: "Calendario completo con exactamente qué hacer cada día. Sin improvisar, sin adivinar. Solo seguir el plan.", value: "$29.99", image: bonus2Image },
  { num: "3", title: "Planillas de Seguimiento", desc: "Registra el avance de tu hijo semana a semana. Saber dónde está y hacia dónde va te da tranquilidad.", value: "$14.99", image: bonus3Image },
  { num: "4", title: "Diploma Editable Premium", desc: "Diploma de graduación personalizable con el nombre de tu hijo. Un reconocimiento real de su esfuerzo.", value: "$9.99" },
];

const BonusSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
          Incluido sin costo adicional
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Además, recibes estos 4 bonos gratis
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Herramientas complementarias que hacen el proceso más fácil para ti y más efectivo para tu hijo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {bonuses.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-bonus relative overflow-hidden"
          >
            <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <Gift className="w-8 h-8" />
            </div>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-4">
              <span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {b.num}
              </span>
              BONO INCLUIDO
            </div>
            <h3 className="text-xl font-bold mb-2">{b.title}</h3>
            {b.image && (
              <img src={b.image} alt={b.title} className="w-full rounded-xl mb-4" />
            )}
            <p className="text-muted-foreground mb-4">{b.desc}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">Valor:</span>
              <span className="text-lg font-bold text-primary">{b.value}</span>
              <span className="text-sm font-bold text-secondary">GRATIS</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-card rounded-2xl p-8 text-center shadow-float border-2 border-accent"
      >
        <p className="text-lg text-muted-foreground mb-2">Valor total de los bonos:</p>
        <p className="text-4xl md:text-5xl font-black text-destructive line-through opacity-60 mb-2">
          $74.96
        </p>
        <p className="text-2xl font-bold text-accent mb-6">Incluidos gratis con tu compra hoy</p>
        <Button
          asChild
          size="lg"
          className="w-full md:w-auto min-h-[60px] bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm md:text-lg px-6 md:px-12 py-7 rounded-2xl shadow-float font-bold"
        >
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            QUIERO APROVECHAR LOS BONOS
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-3">
          Acceso inmediato · Garantía 7 días · Sin riesgo
        </p>
      </motion.div>
    </div>
  </section>
);

export default BonusSection;
