import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const bonuses = [
  { num: "1", title: "Actividades Divertidas Extra", desc: "Pack adicional de actividades lúdicas para reforzar el aprendizaje con más juegos, crucigramas infantiles y sopas de letras.", value: "$19.99" },
  { num: "2", title: "Plan Guiado de 30 Días", desc: "Calendario completo día por día con exactamente qué hacer cada jornada. Sin adivinar, solo seguir el plan.", value: "$29.99" },
  { num: "3", title: "Sistema de Seguimiento", desc: "Planillas de seguimiento del progreso para que veas el avance de tu hijo y celebres cada logro junto a él.", value: "$14.99" },
  { num: "4", title: "Diploma Editable Premium", desc: "Diploma de graduación en alta calidad totalmente personalizable con el nombre de tu hijo y fecha de logro.", value: "$9.99" },
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
          🎁 Regalos especiales
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          ¡Además recibirás estos BONOS GRATIS!
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Valor total de bonos: $74.96 - ¡Todo GRATIS si compras hoy!
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
              BONO GRATIS
            </div>
            <h3 className="text-xl font-bold mb-2">{b.title}</h3>
            <p className="text-muted-foreground mb-4">{b.desc}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">Valor:</span>
              <span className="text-lg font-bold text-primary">{b.value}</span>
              <span className="text-sm font-bold text-secondary">¡GRATIS!</span>
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
        <p className="text-2xl font-bold text-accent">¡TODO INCLUIDO GRATIS HOY!</p>
      </motion.div>
    </div>
  </section>
);

export default BonusSection;
