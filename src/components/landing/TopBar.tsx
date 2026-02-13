import { Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const TopBar = () => (
  <div className="sticky top-0 z-50 bg-foreground/95 backdrop-blur text-background py-2 px-4 text-center">
    <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-medium">
      <Clock className="w-3.5 h-3.5 shrink-0" />
      <span>Precio promocional disponible por</span>
      <CountdownTimer variant="compact" />
    </div>
  </div>
);

export default TopBar;
