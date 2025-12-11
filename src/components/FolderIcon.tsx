import { useState } from "react";
import { cn } from "@/lib/utils";

interface FolderIconProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const FolderIcon = ({ label, onClick, className }: FolderIconProps) => {
  const [isClicking, setIsClicking] = useState(false);

  const handleClick = () => {
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 150);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200",
        "hover:bg-white/10 focus:outline-none focus:bg-white/10",
        "group cursor-pointer",
        isClicking && "scale-95",
        className
      )}
    >
      <div className="w-16 h-14 md:w-20 md:h-16 relative">
        <svg viewBox="0 0 80 64" className="w-full h-full drop-shadow-lg">
          <defs>
            <linearGradient id="folderBack" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5AC8FA" />
              <stop offset="100%" stopColor="#007AFF" />
            </linearGradient>
            <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64D2FF" />
              <stop offset="50%" stopColor="#5AC8FA" />
              <stop offset="100%" stopColor="#007AFF" />
            </linearGradient>
            <linearGradient id="folderTab" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7AD4FF" />
              <stop offset="100%" stopColor="#5AC8FA" />
            </linearGradient>
          </defs>
          {/* Folder tab/back */}
          <path
            d="M6 14 L6 8 Q6 4 10 4 L28 4 Q32 4 34 8 L38 14 L74 14 Q78 14 78 18 L78 56 Q78 60 74 60 L6 60 Q2 60 2 56 L2 18 Q2 14 6 14 Z"
            fill="url(#folderBack)"
          />
          {/* Front panel */}
          <path
            d="M2 22 L78 22 L78 56 Q78 60 74 60 L6 60 Q2 60 2 56 Z"
            fill="url(#folderFront)"
          />
          {/* Top highlight */}
          <path
            d="M2 22 L78 22 L78 28 L2 28 Z"
            fill="rgba(255,255,255,0.3)"
          />
          {/* Tab top */}
          <path
            d="M6 14 L6 10 Q6 6 10 6 L26 6 Q30 6 32 10 L36 14 Z"
            fill="url(#folderTab)"
          />
        </svg>
      </div>
      <span className="text-white text-[11px] md:text-xs font-medium text-center max-w-[80px] md:max-w-[100px] leading-tight drop-shadow-md">
        {label}
      </span>
    </button>
  );
};

export default FolderIcon;
