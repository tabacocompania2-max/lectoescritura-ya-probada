import { motion } from "framer-motion";
import { Gamepad2, ArrowUpRight, Trophy, SmilePlus, Clock, HeartHandshake } from "lucide-react";

const benefits = [
{ icon: Gamepad2, title: "Aprendizaje divertido", desc: "Tu hijo pedirá hacer las actividades porque son emocionantes como un juego." },
{ icon: ArrowUpRight, title: "Método progresivo", desc: "Avanza paso a paso, construyendo una base sólida sin saltar etapas importantes." },
{ icon: Clock, title: "Solo 15 minutos al día", desc: "Actividades cortas y efectivas que no cansan ni aburren a tu pequeño." },
{ icon: HeartHandshake, title: "Fortalece el vínculo", desc: "Momentos de calidad con tu hijo mientras aprenden juntos." },
{ icon: SmilePlus, title: "Sin frustraciones", desc: "Diseñado para que siempre sienta que está ganando y avanzando." },
{ icon: Trophy, title: "Fácil para los padres", desc: "No necesitas ser maestro. Todo viene explicado paso a paso." }];


const SolutionSection = () =>
<section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14">

        <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
          La solución perfecta
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Un programa diseñado para padres preocupados por el aprendizaje de sus hijos

      </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Diseñado por expertos en educación infantil para que cada niño triunfe.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) =>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-float hover:border-primary/20 transition-all duration-300">

            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default SolutionSection;