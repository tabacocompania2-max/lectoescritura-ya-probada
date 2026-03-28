import { motion } from "framer-motion";

const TransitionSection = () => (
  <section className="py-8 md:py-12">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          El problema <span className="text-destructive">no es tu hijo.</span>
          <br />
          <span className="text-primary">Es el método.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tu hijo no necesita más presión, más apps ni más videos genéricos. Necesita un sistema estructurado, paso a paso, diseñado para que <strong className="text-foreground">tú puedas guiarlo en casa</strong> — aunque no seas maestro, aunque solo tengas 15 minutos al día.
        </p>
        <p className="text-foreground font-bold text-lg mt-4">
          Ese sistema ya existe. Y más de 2,500 familias lo están usando hoy.
        </p>
      </motion.div>
    </div>
  </section>
);

export default TransitionSection;
