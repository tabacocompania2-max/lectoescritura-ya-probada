import { Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center">
    <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-bold">
      <Clock className="w-4 h-4" />
      <span>Precio especial por tiempo limitado — No esperes más para ayudar a tu hijo</span>
    </div>
  </div>
);

export default TopBar;
