import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          Dale a tu hijo el regalo de la lectura
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          No dejes pasar esta oportunidad. Cada día que pasa es un día menos para aprovechar la ventana de aprendizaje de tu hijo.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-12 py-7 rounded-2xl shadow-float font-bold"
        >
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            ¡QUIERO QUE MI HIJO APRENDA HOY!
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
