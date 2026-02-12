import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Star, Award, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import childLearning from "@/assets/child-learning.webp";
import heroProduct from "@/assets/hero-product.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const HeroSection = () =>
<section className="relative overflow-hidden py-12 md:py-20">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mb-6">
        <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-bold">
          <Users className="w-4 h-4" />
          Para niños de 4 a 7 años
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
            <span className="text-primary">Pequeños</span>{" "}
            <span className="text-accent">Exploradores</span>
            <br />
            <span className="text-foreground">de la Lectura</span>
          </h1>
          <p className="text-lg text-primary font-semibold mb-4">
            Método Aventura Lectoescritora
          </p>
          <p className="text-lg text-muted-foreground mb-6 max-w-lg">
            Transforma el aprendizaje de tu hijo en una{" "}
            <strong className="text-primary">aventura divertida</strong>. Método probado que enseña a leer y escribir{" "}
            <strong className="text-secondary">sin frustraciones</strong>.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-card border px-4 py-2 rounded-full text-sm font-semibold">+150 páginas
            <BookOpen className="w-4 h-4 text-primary" /> +200 páginas
            </span>
            <span className="inline-flex items-center gap-2 bg-card border px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4 text-accent" /> 6 niveles
            </span>
            <span className="inline-flex items-center gap-2 bg-card border px-4 py-2 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4 text-secondary" /> Diploma incluido
            </span>
          </div>

          <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-7 rounded-2xl shadow-float font-bold">

            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">¡Quiero que mi hijo aprenda Hoy!
            <ShoppingCart className="w-5 h-5 mr-2" />
              ¡Quiero que mi hijo aprenda!
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D", "E"].map((l) =>
            <span
              key={l}
              className="w-8 h-8 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center text-xs font-bold border-2 border-background">

                  {l}
                </span>
            )}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">+2,500 familias</strong> ya lo usan
            </p>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative">

          <img
          src={childLearning}
          alt="Niño aprendiendo a escribir con su mamá"
          className="rounded-3xl shadow-float w-full object-cover max-h-[500px]" />

          <img
          src={heroProduct}
          alt="Material de lectoescritura imprimible"
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 md:w-56 rounded-2xl shadow-float border-4 border-background" />

          <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground px-5 py-3 rounded-2xl shadow-lg font-bold text-sm">
            ¡Resultados garantizados!
          </div>
        </motion.div>
      </div>
    </div>
  </section>;


export default HeroSection;