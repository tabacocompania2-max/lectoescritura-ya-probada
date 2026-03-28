import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import productSpread from "@/assets/product-spread.jpg";

const DACAST_SRC = "https://iframe.dacast.com/vod/d7bf5532-39cf-f838-cfb6-4aab8c1f263f/8372e8c5-e09a-4c23-a269-505835b1bf81";

const ProductVideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-6 md:py-10 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Mira por dentro exactamente cómo funciona el programa y lo que vas a recibir
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-float aspect-video bg-muted">
            {playing ? (
              <iframe
                src={DACAST_SRC}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group cursor-pointer"
                aria-label="Reproducir video del programa"
              >
                <img
                  src={productSpread}
                  alt="Vista previa del programa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground font-semibold mt-6 text-lg"
        >
          Así de simple es empezar: una hoja al día puede cambiar completamente su proceso de aprendizaje.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductVideoSection;
