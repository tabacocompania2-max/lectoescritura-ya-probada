import { AlertTriangle, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center">
    <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-bold">
      <AlertTriangle className="w-4 h-4" />
      <span>¡OFERTA ESPECIAL!</span>
      <Clock className="w-4 h-4" />
      <span className="font-normal">Precio promocional por tiempo limitado</span>
    </div>
  </div>
);

export default TopBar;
