import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.webp";
import videoThumb2 from "@/assets/video-thumb-2.webp";

const VideoSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mira cómo se ve en la vida real
        </h2>
        <p className="text-lg text-muted-foreground">
          Papás dedicando solo 15 minutos al día para garantizar el aprendizaje de sus pequeños.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[videoThumb1, videoThumb2].map((thumb, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-float"
          >
            <img src={thumb} alt={`Demo del material ${i + 1}`} className="w-full" />
            <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center text-primary-foreground font-bold text-sm">
              Toca para reproducir
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
