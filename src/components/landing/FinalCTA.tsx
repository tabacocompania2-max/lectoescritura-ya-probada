import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const FinalCTA = () => (
  <section className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Cada día que pasa, la brecha crece
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-4">
          Mientras esperas, otros niños avanzan. Tu hijo merece las mismas oportunidades. Y tú puedes dárselas hoy — con un método que funciona.
        </p>
        <p className="text-primary-foreground/90 font-semibold max-w-xl mx-auto mb-6">
          No necesitas ser maestro. No necesitas horas. Solo necesitas dar el primer paso.
        </p>
        <div className="mb-8 [&_span]:text-primary-foreground [&_p]:text-primary-foreground/70 [&_div]:bg-primary-foreground/15">
          <CountdownTimer />
        </div>
        <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-12 py-7 rounded-2xl shadow-float font-bold"
        >
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            QUIERO AYUDAR A MI HIJO HOY
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </Button>
        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Garantía 7 días
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-4 h-4" /> Acceso inmediato
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
