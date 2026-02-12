import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Mi hijo Sebastián tenía 5 años y no reconocía ni las vocales. Yo me sentía la peor mamá del mundo porque trabajaba todo el día y no le dedicaba tiempo. Compré el material sin muchas expectativas. La primera semana solo hacíamos una hoja al día después de cenar. Al mes, Sebastián ya escribía su nombre solito y me lo mostraba orgulloso.",
    name: "Carolina M.",
    location: "Bogotá, Colombia",
    before: "No reconocía las vocales. Se frustraba y lloraba.",
    after: "Escribe su nombre, lee palabras simples, pide él mismo hacer sus hojas.",
  },
  {
    text: "Intenté con apps, con videos de YouTube, con un cuaderno de la librería. Nada funcionaba. Mi hija Valentina se aburría en 2 minutos. Con este material, empezamos por los trazos más básicos. En 6 semanas ya formaba sílabas sola. Lo más importante: dejó de decir \"no puedo\" y empezó a decir \"mami, ¿hacemos las hojas?\".",
    name: "Daniela R.",
    location: "Guayaquil, Ecuador",
    before: "Se aburría con apps. Decía 'no puedo'. No quería practicar.",
    after: "Forma sílabas sola. Pide hacer los ejercicios. Más segura de sí misma.",
  },
  {
    text: "Como papá, no sabía cómo enseñarle a leer a mi hijo. Este programa me dio las herramientas exactas. Ahora es nuestro momento especial cada tarde.",
    name: "Carlos Ramírez",
    location: "Bogotá, Colombia • Hijo de 6 años",
  },
  {
    text: "El sistema de niveles es genial. Mi pequeño siente que está en una aventura y no quiere parar. Nunca pensé que aprender a leer pudiera ser tan divertido.",
    name: "Ana Lucia Pérez",
    location: "Lima, Perú • Hijo de 4 años",
  },
  {
    text: "Mi hijo tenía dificultades en el colegio. Con este método logró ponerse al día en solo un mes. Los profesores no pueden creer el avance.",
    name: "Roberto Mendoza",
    location: "Buenos Aires, Argentina • Hijo de 7 años",
  },
  {
    text: "Lo que más me gusta es que no necesito ser maestra para usarlo. Todo viene explicado perfectamente. Mi hija ya escribe su nombre sola.",
    name: "Claudia Torres",
    location: "Santiago, Chile • Hijo de 5 años",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
          Familias felices
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Mira lo que dicen los padres que ya lo probaron
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Miles de familias en Latinoamérica ya transformaron el aprendizaje de sus hijos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background rounded-2xl p-6 shadow-lg border border-border"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-foreground mb-4 italic">"{t.text}"</p>
            {t.before && (
              <div className="bg-muted rounded-xl p-3 mb-4 space-y-2 text-sm">
                <div>
                  <span className="font-bold text-destructive">ANTES: </span>
                  <span className="text-muted-foreground">{t.before}</span>
                </div>
                <div>
                  <span className="font-bold text-secondary">DESPUÉS: </span>
                  <span className="text-muted-foreground">{t.after}</span>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {t.name[0]}
              </span>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-12 flex-wrap">
        {[
          { num: "2,500+", label: "Familias felices" },
          { num: "97%", label: "Satisfacción" },
          { num: "15+", label: "Países" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-bold text-primary">{s.num}</p>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
