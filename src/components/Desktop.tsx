import FolderIcon from "./FolderIcon";

interface DesktopProps {
  onFolderClick: (folder: string) => void;
}

const desktopFolders = [
  { id: "projects", label: "Projects", position: "right-8 top-12" },
  { id: "about", label: "About Me", position: "left-12 top-32" },
  { id: "skills", label: "Skills", position: "right-24 top-[45%]" },
  { id: "blog", label: "Blog", position: "left-8 top-[55%]" },
  { id: "contact", label: "Contact", position: "right-12 bottom-40" },
  { id: "explore", label: "Explore", position: "left-20 bottom-36" },
];

const Desktop = ({ onFolderClick }: DesktopProps) => {
  return (
    <div className="relative w-full h-full">
      {/* Video Background - Fixed fullscreen */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-screen h-screen object-cover"
        style={{ zIndex: -20 }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/10" style={{ zIndex: -15 }} />
      

      {/* Hero text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <p className="hero-script text-white/90 text-lg md:text-2xl mb-2 animate-fade-in drop-shadow-lg">
          welcome to my
        </p>
        <h1 
          className="text-white text-5xl md:text-7xl lg:text-8xl tracking-tight animate-fade-in drop-shadow-2xl"
          style={{ 
            animationDelay: "0.1s",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: "italic"
          }}
        >
          portfolio.
        </h1>
      </div>

      {/* Folder icons - scattered */}
      {desktopFolders.map((folder) => (
        <div key={folder.id} className={`absolute ${folder.position}`}>
          <FolderIcon
            label={folder.label}
            onClick={() => onFolderClick(folder.id)}
          />
        </div>
      ))}

      {/* Copyright */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs text-white/70 drop-shadow-md">
          © SHALINI MK 2025
        </p>
      </div>
    </div>
  );
};

export default Desktop;
