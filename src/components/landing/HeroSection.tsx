import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import childLearning from "@/assets/child-learning.webp";
import heroProduct from "@/assets/hero-product.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const promises = [
  "Sin ser maestro — cualquier padre puede hacerlo",
  "Solo 15 minutos al día, sin estrés ni presión",
  "Más de 2,500 familias ya lo están usando con éxito",
];

const HeroSection = () => (
  <section className="relative overflow-hidden py-10 md:py-16">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            <span className="text-foreground">Si tu hijo evita leer, se frustra o dice </span>
            <span className="text-primary">"no puedo"</span>
            <span className="text-foreground">… esto </span>
            <span className="text-destructive font-black">NO</span>
            <span className="text-foreground"> es su culpa</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-4 max-w-lg">
            La mayoría de los padres sienten culpa, frustración y miedo de que su hijo se quede atrás. Pero el problema no es tu hijo ni tú — es que nadie te dio un método claro para enseñarle.
          </p>

          <p className="text-foreground font-bold text-lg mb-6 max-w-lg">
            Descubre el sistema paso a paso que ya ayudó a más de 2,500 familias a enseñar a leer a sus hijos en casa — en solo 15 minutos al día.
          </p>

          <div className="space-y-3 mb-8">
            {promises.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-sm">{p}</p>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="w-full md:w-auto min-h-[60px] bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-7 rounded-2xl shadow-float font-bold"
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
