import { motion } from "framer-motion";
import { Clock, BookOpen, TrendingUp, ShieldCheck, Heart, GraduationCap } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Solo 15 minutos al día", desc: "No necesitas horas. Actividades cortas y efectivas que se adaptan a tu rutina diaria, incluso si trabajas todo el día." },
  { icon: BookOpen, title: "No necesitas ser maestro", desc: "Todo viene explicado paso a paso. Solo sigue las instrucciones y tu hijo avanza. Sin conocimientos pedagógicos previos." },
  { icon: TrendingUp, title: "Avance progresivo real", desc: "Cada actividad construye sobre la anterior. Tu hijo nunca se siente perdido porque el método respeta su ritmo de aprendizaje." },
  { icon: Heart, title: "Sin frustraciones ni lágrimas", desc: "Diseñado para que tu hijo sienta que puede. Pequeños logros diarios que construyen su confianza y motivación." },
  { icon: ShieldCheck, title: "Método probado", desc: "Más de 2,500 familias en Latinoamérica ya lo usan. Resultados reales, no promesas vacías." },
  { icon: GraduationCap, title: "Resultados en 30 días", desc: "En un mes tu hijo reconocerá letras, formará sílabas y comenzará a leer palabras. Resultados que puedes medir." },
];

const SolutionSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
          La solución que funciona
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Un programa diseñado para padres reales, con hijos reales
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          No es una app que lo entretiene. No es un video que ve pasivamente. Es un sistema estructurado que <strong className="text-foreground">tú puedes usar hoy mismo</strong>.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-float hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
