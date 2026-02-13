import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShoppingCart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import childLearning from "@/assets/child-learning.webp";
import heroProduct from "@/assets/hero-product.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const questions = [
  "¿Tu hijo tiene 5 años y todavía no escribe su nombre?",
  "¿Te preocupa que otros niños avancen más rápido?",
  "¿Sientes que no sabes cómo ayudarlo sin ser maestro?",
];

const HeroSection = () => (
  <section className="relative overflow-hidden py-12 md:py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-6">
            <BookOpen className="w-4 h-4" />
            Para niños de 4 a 7 años
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Mientras otros niños avanzan, </span>
            <span className="text-primary">tú no sabes cómo ayudar</span>
            <br />
            <span className="text-foreground">al tuyo</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-6 max-w-lg">
            Un método paso a paso, probado por más de 2,500 familias en Latinoamérica, diseñado para que <strong className="text-foreground">tú puedas enseñarle en casa</strong> — sin ser maestro, sin frustraciones.
          </p>

          <div className="space-y-3 mb-8">
            {questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-sm">{q}</p>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-7 rounded-2xl shadow-float font-bold"
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Quiero ayudar a mi hijo hoy
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Acceso inmediato · Garantía de 7 días · Pago seguro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img
            src={childLearning}
            alt="Niño aprendiendo a escribir con su mamá"
            className="rounded-3xl shadow-float w-full object-cover max-h-[500px]"
          />
          <img
            src={heroProduct}
            alt="Material de lectoescritura imprimible"
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 md:w-56 rounded-2xl shadow-float border-4 border-background"
          />
          <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground px-5 py-3 rounded-2xl shadow-lg font-bold text-sm">
            +2,500 familias confían en este método
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
