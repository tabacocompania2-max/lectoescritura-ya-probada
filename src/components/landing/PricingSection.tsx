import { motion } from "framer-motion";
import { Check, ShoppingCart, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.webp";
import CountdownTimer from "./CountdownTimer";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const programItems = [
  "Programa completo de 6 niveles (+120 páginas)",
  "Material 100% imprimible — úsalo con todos tus hijos",
  "Ejercicios progresivos paso a paso",
  "Plan guiado de 30 días incluido",
  "Diploma de graduación personalizable",
  "Acceso de por vida — descarga ilimitada",
];

const bonusItems = [
  "Actividades de refuerzo extra (Valor $19.99)",
  "Plan guiado de 30 días (Valor $29.99)",
  "Planillas de seguimiento del progreso (Valor $14.99)",
  "Diploma editable premium (Valor $9.99)",
];

const PricingSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold mb-4">
          Precio especial por tiempo limitado
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Invierte hoy en el futuro de tu hijo
        </h2>
        <p className="text-muted-foreground">Este precio no estará disponible por mucho tiempo.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-background rounded-3xl shadow-float border-2 border-primary overflow-hidden"
      >
        <div className="bg-primary text-primary-foreground p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Programa Completo de Lectoescritura</h2>
          <p className="text-primary-foreground/80 mt-1">6 niveles + 4 bonos + plan de 30 días</p>
        </div>

        <div className="p-8">
          <div className="flex justify-center mb-6">
            <img src={heroProduct} alt="Material de lectoescritura" className="w-40 rounded-xl shadow-lg" />
          </div>

          <h3 className="font-bold mb-4">Incluye:</h3>
          <ul className="space-y-2 mb-6">
            {programItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-bold mb-4">Bonos incluidos sin costo:</h3>
          <ul className="space-y-2 mb-8">
            {bonusItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground mb-1">Valor real del programa + bonos:</p>
            <p className="text-2xl text-muted-foreground line-through opacity-60 font-bold">$124.95 USD</p>
            <p className="text-sm text-muted-foreground mt-3 mb-1">Hoy lo llevas por:</p>
            <p className="text-5xl md:text-6xl font-black text-primary">$9.99</p>
            <p className="text-sm text-secondary font-bold mt-1">Menos de lo que cuesta una clase particular</p>
          </div>

          <Button
            asChild
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm md:text-lg px-6 md:px-8 py-7 rounded-2xl shadow-float font-bold"
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="w-5 h-5 mr-2" />
              QUIERO EL PROGRAMA COMPLETO
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Pago 100% seguro · Acceso inmediato · Garantía 7 días
          </p>

          <div className="mt-8 pt-6 border-t border-border">
            <CountdownTimer />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
