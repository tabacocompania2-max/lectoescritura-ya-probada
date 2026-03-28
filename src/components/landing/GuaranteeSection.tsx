import { motion } from "framer-motion";
import { ShieldCheck, Mail, HelpCircle } from "lucide-react";
import guaranteeBadge from "@/assets/guarantee-badge.jpg";

const GuaranteeSection = () => (
  <section className="py-6 md:py-10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src={guaranteeBadge}
          alt="Garantía de satisfacción"
          className="w-64 mx-auto rounded-full shadow-float"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compra sin riesgo: Garantía total de 7 días</h2>
          <p className="text-muted-foreground mb-4">
            Sabemos que invertir genera dudas. Por eso, te damos <strong className="text-foreground">7 días completos para probarlo con tu hijo.</strong>
          </p>
          <p className="text-muted-foreground mb-6">
            Si sientes que no es para tu familia, simplemente nos escribes y te devolvemos <strong className="text-foreground">cada centavo. Sin preguntas, sin formularios, sin complicaciones.</strong> El único riesgo es no intentarlo.
          </p>
          <div className="space-y-3">
            {[
              { icon: ShieldCheck, text: "Devolución 100% garantizada — sin letra pequeña" },
              { icon: Mail, text: "Solo envía un correo y listo" },
              { icon: HelpCircle, text: "Sin preguntas, sin trámites, sin esperas" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-secondary shrink-0" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic mt-6">
            "El riesgo lo asumimos nosotros. Tu única responsabilidad es darle la oportunidad a tu hijo."
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
