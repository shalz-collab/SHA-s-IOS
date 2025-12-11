import { cn } from "@/lib/utils";
interface DockProps {
  onFolderClick: (folder: string) => void;
  activeFolder: string | null;
}
const DockIcon = ({
  children,
  onClick,
  href,
  label,
  isActive
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  label: string;
  isActive?: boolean;
}) => {
  const Wrapper = href ? 'a' : 'button';
  const props = href ? {
    href,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {
    onClick
  };
  return <Wrapper {...props} className="relative group flex flex-col items-center">
      <div className={cn("w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center", "transition-all duration-200 ease-out", "hover:scale-[1.4] hover:-translate-y-3", "shadow-lg")}>
        {children}
      </div>
      
      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800/95 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-md shadow-lg">
        {label}
      </span>
      
      {/* Active indicator */}
      {isActive && <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-white/90" />}
    </Wrapper>;
};
const Dock = ({
  onFolderClick,
  activeFolder
}: DockProps) => {
  return <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-white/15 backdrop-blur-2xl rounded-2xl px-2 py-1.5 flex items-end gap-1 border border-white/20 shadow-2xl">
        {/* Finder */}
        <DockIcon onClick={() => onFolderClick("projects")} label="Finder" isActive={activeFolder === "projects"}>
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#4DB6F5] to-[#1085E4] flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 32 32" className="w-7 h-7">
              <rect x="4" y="8" width="24" height="18" rx="2" fill="white" fillOpacity="0.95" />
              <rect x="4" y="8" width="24" height="5" rx="2" fill="#E8E8E8" />
              <circle cx="7" cy="10.5" r="1.2" fill="#FF5F57" />
              <circle cx="10.5" cy="10.5" r="1.2" fill="#FFBD2E" />
              <circle cx="14" cy="10.5" r="1.2" fill="#28C840" />
            </svg>
          </div>
        </DockIcon>

        {/* Safari - Opens Explore */}
        <DockIcon onClick={() => onFolderClick("explore")} label="Explore" isActive={activeFolder === "explore"}>
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#5AC8FA] to-[#0A84FF] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <circle cx="16" cy="16" r="12" fill="none" stroke="white" strokeWidth="1.5" />
              <path d="M16 5v2M16 25v2M5 16h2M25 16h2" stroke="white" strokeWidth="1" opacity="0.7" />
              <path d="M21 11l-7 3-3 7 7-3z" fill="white" fillOpacity="0.95" />
              <path d="M14 14l4-2-2 4z" fill="#FF3B30" />
            </svg>
          </div>
        </DockIcon>

        {/* Messages */}
        <DockIcon onClick={() => onFolderClick("contact")} label="Messages" isActive={activeFolder === "contact"}>
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#65D96A] to-[#2DC833] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
              <path d="M26 4H6C4.9 4 4 4.9 4 6v16c0 1.1.9 2 2 2h4v6l8-6h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
        </DockIcon>

        {/* Mail */}
        <DockIcon onClick={() => onFolderClick("contact")} label="Mail" isActive={activeFolder === "contact"}>
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#5AC8FA] to-[#007AFF] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
              <path d="M26 6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 4l-10 6L6 10V8l10 6 10-6v2z" />
            </svg>
          </div>
        </DockIcon>

        {/* Photos */}
        <DockIcon onClick={() => onFolderClick("photos")} label="Photos" isActive={activeFolder === "photos"}>
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#FF9500] to-[#FF2D55] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
              <path d="M26 4H6C4.9 4 4 4.9 4 6v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM10 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm16 15c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1l5-5 3 3 7-7 5 5v5z" />
            </svg>
          </div>
        </DockIcon>

        {/* Settings */}
        <DockIcon onClick={() => onFolderClick("settings")} label="Settings" isActive={activeFolder === "settings"}>
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#8E8E93] to-[#48484A] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
              <path d="M25.4 17.2c.1-.4.1-.8.1-1.2s0-.8-.1-1.2l2.7-2.1c.2-.2.3-.5.1-.8l-2.5-4.4c-.1-.3-.4-.4-.7-.3l-3.2 1.3c-.6-.5-1.3-.9-2-1.2l-.5-3.4c0-.3-.3-.5-.6-.5h-5.1c-.3 0-.5.2-.6.5l-.5 3.4c-.7.3-1.4.7-2 1.2L7 7.2c-.3-.1-.6 0-.7.3L3.8 12c-.2.3-.1.6.1.8l2.7 2.1c-.1.4-.1.8-.1 1.2s0 .8.1 1.2l-2.7 2.1c-.2.2-.3.5-.1.8l2.5 4.4c.1.3.4.4.7.3l3.2-1.3c.6.5 1.3.9 2 1.2l.5 3.4c.1.3.3.5.6.5h5.1c.3 0 .5-.2.6-.5l.5-3.4c.7-.3 1.4-.7 2-1.2l3.2 1.3c.3.1.6 0 .7-.3l2.5-4.4c.2-.3.1-.6-.1-.8l-2.7-2.1zM16 20.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" />
            </svg>
          </div>
        </DockIcon>

        {/* Skills */}
        <DockIcon onClick={() => onFolderClick("skills")} label="Skills" isActive={activeFolder === "skills"}>
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#FF9F0A] to-[#FF6B00] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
              <path d="M16 4l2.5 8H27l-6.5 5 2.5 8-7-5.5L9 25l2.5-8L5 12h8.5z" />
            </svg>
          </div>
        </DockIcon>

        {/* Terminal */}
        <DockIcon onClick={() => onFolderClick("terminal")} label="Terminal" isActive={activeFolder === "terminal"}>
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#1e1e1e] to-[#000000] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
              <path d="M6 8l8 8-8 8" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 24h10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </DockIcon>

        {/* Divider */}
        <div className="w-px h-10 bg-white/20 mx-1" />

        {/* GitHub */}
        <DockIcon href="https://github.com/shalz-collab" label="GitHub">
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#2D2D2D] to-[#1a1a1a] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
        </DockIcon>

        {/* LinkedIn */}
        <DockIcon href="https://www.linkedin.com/in/shalini-mk-b3b67b273" label="LinkedIn">
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#0A66C2] to-[#004182] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        </DockIcon>

        {/* Divider */}
        <div className="w-px h-10 bg-white/20 mx-1" />

        {/* Trash */}
        <DockIcon onClick={() => {}} label="Trash">
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#8E8E93] to-[#48484A] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
              <path d="M8 26c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10H8v16zM24 6h-4l-1-1h-6l-1 1H8v2h16V6z" />
            </svg>
          </div>
        </DockIcon>
      </div>
    </div>;
};
export default Dock;