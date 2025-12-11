import { X, Minus, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface MacWindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const MacWindow = ({ title, isOpen, onClose, children, className }: MacWindowProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShouldRender(false);
      onClose();
    }, 200);
  };

  if (!shouldRender) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8",
      isClosing ? "animate-fade-out" : "animate-fade-in"
    )}>
      {/* Backdrop */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200",
          isClosing ? "opacity-0" : "opacity-100"
        )}
        onClick={handleClose}
      />
      
      {/* Window */}
      <div 
        className={cn(
          "relative w-full max-w-4xl max-h-[85vh] window-glass rounded-xl overflow-hidden",
          "transition-all duration-200 ease-out",
          isClosing 
            ? "scale-95 opacity-0 translate-y-4" 
            : "scale-100 opacity-100 translate-y-0 animate-scale-in",
          className
        )}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-window-header border-b border-window-border">
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleClose}
              className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors flex items-center justify-center group"
            >
              <X className="w-2 h-2 text-[#990000] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors flex items-center justify-center group">
              <Minus className="w-2 h-2 text-[#996600] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors flex items-center justify-center group">
              <Square className="w-1.5 h-1.5 text-[#006600] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          
          {/* Title */}
          <span className="flex-1 text-center text-sm font-medium text-foreground/80 -ml-12">
            {title}
          </span>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-48px)] p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MacWindow;
