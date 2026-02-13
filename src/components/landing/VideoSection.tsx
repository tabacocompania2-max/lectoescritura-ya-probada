import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.webp";
import videoThumb2 from "@/assets/video-thumb-2.webp";

const videos = [
{
  thumb: videoThumb1,
  src: "https://iframe.dacast.com/vod/592280d6-f4cf-e74b-ad87-72de9cf6c3f2/f1136951-5f1f-462b-bbaa-52f32c5af3fe"
},
{
  thumb: videoThumb2,
  src: "https://iframe.dacast.com/vod/592280d6-f4cf-e74b-ad87-72de9cf6c3f2/9d214bb4-3e68-4603-98b6-5f0f838ce105"
}];


const VideoCard = ({ thumb, src, index }: {thumb: string;src: string;index: number;}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative rounded-2xl overflow-hidden shadow-float">

      {/* Image always in DOM to preserve natural dimensions */}
      <img
        src={thumb}
        alt={`Demostración del método ${index + 1}`}
        className={`w-full block ${playing ? "invisible" : ""}`} />


      {playing ?
      <iframe
        src={src}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen /> :


      <button
        onClick={() => setPlaying(true)}
        className="absolute inset-0 w-full h-full group cursor-pointer"
        aria-label={`Reproducir video ${index + 1}`}>

          <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center text-primary-foreground font-bold text-sm">
            Toca para reproducir
          </p>
        </button>
      }
    </motion.div>);

};

const VideoSection = () =>
<section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mira cómo funciona en la vida real
        </h2>
        <p className="text-lg text-muted-foreground">Padres reales, usando el método con sus hijos.

      </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {videos.map((v, i) =>
      <VideoCard key={i} thumb={v.thumb} src={v.src} index={i} />
      )}
      </div>
    </div>
  </section>;


export default VideoSection;