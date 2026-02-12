import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Para qué edades está diseñado el programa?", a: "El programa está diseñado para niños de 4 a 7 años. Es ideal para quienes están comenzando su proceso de lectoescritura o necesitan reforzar las bases." },
  { q: "¿Necesito impresora para usar el material?", a: "Sí, recomendamos imprimirlo para que tu hijo pueda trazar, escribir y colorear directamente en las hojas. Puedes usar cualquier impresora casera con papel blanco." },
  { q: "¿Cuánto tiempo debo dedicar al día?", a: "Solo 15 minutos al día son suficientes. Las actividades están diseñadas para ser cortas y efectivas, sin cansar ni aburrir a tu pequeño." },
  { q: "¿Necesito conocimientos especiales para enseñar?", a: "No, absolutamente no. Todo viene explicado paso a paso. No necesitas ser maestro ni tener experiencia previa en enseñanza." },
  { q: "¿Cuándo recibiré el material?", a: "El acceso es inmediato. Una vez completada la compra, recibirás un enlace de descarga en tu correo electrónico." },
  { q: "¿Puedo usar el material con más de un hijo?", a: "¡Sí! Al ser un PDF imprimible, puedes imprimirlo tantas veces como necesites para todos tus hijos." },
  { q: "¿Qué pasa si mi hijo ya conoce algunas letras?", a: "El programa tiene 6 niveles progresivos. Puedes comenzar en el nivel que mejor se adapte al conocimiento actual de tu hijo." },
  { q: "¿Cómo funciona la garantía de 7 días?", a: "Si por cualquier razón no estás satisfecho, solo envíanos un correo dentro de los 7 días posteriores a la compra y te devolvemos el 100% de tu dinero. Sin preguntas." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
          Preguntas frecuentes
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Tienes dudas? Aquí las respondemos
        </h2>
        <p className="text-muted-foreground">
          Si tu pregunta no está aquí, escríbenos y te ayudaremos.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
