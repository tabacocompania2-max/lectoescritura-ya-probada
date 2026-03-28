import { motion } from "framer-motion";
import { Download, BookOpen, Award } from "lucide-react";

const steps = [
  { icon: Download, num: "1", title: "Descarga e imprime", desc: "Recibes todo al instante. Lo imprimes en cualquier impresora casera. En 5 minutos ya estás listo para empezar." },
  { icon: BookOpen, num: "2", title: "Solo 10–15 minutos al día", desc: "Tu hijo completa una hoja diaria con actividades claras y divertidas. Sin estrés, sin presión, sin lágrimas." },
  { icon: Award, num: "3", title: "Ve los resultados tú mismo", desc: "En semanas, tu hijo reconocerá letras, formará sílabas y empezará a leer. Tú lo verás con tus propios ojos — y él se sentirá orgulloso." },
];

const HowItWorks = () => (
  <section className="py-6 md:py-10 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          3 pasos simples. Eso es todo.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          No necesitas experiencia. No necesitas horas. Solo seguir un plan que ya funciona.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
              {s.num}
            </div>
            <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
