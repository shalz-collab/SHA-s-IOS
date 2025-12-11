import { Apple, Wifi, Battery, Search, SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";

interface MenuBarProps {
  onSearch?: (query: string) => void;
  folders?: string[];
  onOpenFolder?: (folder: string) => void;
  onOpenSettings?: () => void;
}

const MenuBar = ({ onSearch, folders = [], onOpenFolder, onOpenSettings }: MenuBarProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  
  const formattedDate = currentTime.toLocaleDateString('en-US', { 
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery("");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const filteredFolders = folders.filter(folder => 
    folder.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-4 py-1">
        {/* Left side */}
        <div className="flex items-center gap-5">
          <Apple className="w-4 h-4 text-white fill-white cursor-pointer" onClick={onOpenSettings} />
          <span className="text-[13px] font-semibold text-white">Sha's Portfolio</span>
          
          {/* File Menu */}
          <div className="relative">
            <span 
              className={`text-[13px] text-white/90 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer ${activeMenu === 'file' ? 'bg-white/20' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}
            >
              File
            </span>
            {activeMenu === 'file' && (
              <div className="absolute top-7 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 overflow-hidden z-50">
                <div className="py-1">
                  <button onClick={() => { onOpenFolder?.('projects'); setActiveMenu(null); }} className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10">Open Projects</button>
                  <button onClick={() => { onOpenFolder?.('about'); setActiveMenu(null); }} className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10">Open About</button>
                  <div className="border-t border-white/10 my-1" />
                  <button onClick={() => setActiveMenu(null)} className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10">Close</button>
                </div>
              </div>
            )}
          </div>

          {/* Edit Menu */}
          <div className="relative">
            <span 
              className={`text-[13px] text-white/90 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer ${activeMenu === 'edit' ? 'bg-white/20' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'edit' ? null : 'edit')}
            >
              Edit
            </span>
            {activeMenu === 'edit' && (
              <div className="absolute top-7 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 overflow-hidden z-50">
                <div className="py-1">
                  <button className="w-full px-4 py-2 text-left text-sm text-white/50 cursor-not-allowed">Undo ⌘Z</button>
                  <button className="w-full px-4 py-2 text-left text-sm text-white/50 cursor-not-allowed">Redo ⌘⇧Z</button>
                  <div className="border-t border-white/10 my-1" />
                  <button className="w-full px-4 py-2 text-left text-sm text-white/50 cursor-not-allowed">Copy ⌘C</button>
                  <button className="w-full px-4 py-2 text-left text-sm text-white/50 cursor-not-allowed">Paste ⌘V</button>
                </div>
              </div>
            )}
          </div>

          {/* View Menu */}
          <div className="relative">
            <span 
              className={`text-[13px] text-white/90 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer ${activeMenu === 'view' ? 'bg-white/20' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'view' ? null : 'view')}
            >
              View
            </span>
            {activeMenu === 'view' && (
              <div className="absolute top-7 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 overflow-hidden z-50">
                <div className="py-1">
                  <button onClick={() => { onOpenFolder?.('skills'); setActiveMenu(null); }} className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10">View Skills</button>
                  <button onClick={() => { onOpenFolder?.('blog'); setActiveMenu(null); }} className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10">View Blog</button>
                  <button onClick={() => { onOpenFolder?.('photos'); setActiveMenu(null); }} className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10">View Photos</button>
                </div>
              </div>
            )}
          </div>

          {/* Go Menu */}
          <div className="relative">
            <span 
              className={`text-[13px] text-white/90 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer ${activeMenu === 'go' ? 'bg-white/20' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'go' ? null : 'go')}
            >
              Go
            </span>
            {activeMenu === 'go' && (
              <div className="absolute top-7 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 overflow-hidden z-50">
                <div className="py-1">
                  <a href="https://github.com/shalz-collab" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-white hover:bg-white/10">GitHub</a>
                  <a href="https://www.linkedin.com/in/shalini-mk-b3b67b273" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-white hover:bg-white/10">LinkedIn</a>
                  <div className="border-t border-white/10 my-1" />
                  <button onClick={() => { onOpenFolder?.('contact'); setActiveMenu(null); }} className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10">Contact Me</button>
                </div>
              </div>
            )}
          </div>

          {/* Window Menu */}
          <div className="relative">
            <span 
              className={`text-[13px] text-white/90 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer ${activeMenu === 'window' ? 'bg-white/20' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'window' ? null : 'window')}
            >
              Window
            </span>
            {activeMenu === 'window' && (
              <div className="absolute top-7 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 overflow-hidden z-50">
                <div className="py-1">
                  {folders.map(folder => (
                    <button 
                      key={folder}
                      onClick={() => { onOpenFolder?.(folder.toLowerCase().replace(' ', '')); setActiveMenu(null); }} 
                      className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10"
                    >
                      {folder}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Help Menu */}
          <div className="relative">
            <span 
              className={`text-[13px] text-white/90 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer ${activeMenu === 'help' ? 'bg-white/20' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'help' ? null : 'help')}
            >
              Help
            </span>
            {activeMenu === 'help' && (
              <div className="absolute top-7 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 overflow-hidden z-50">
                <div className="py-1">
                  <button onClick={() => { onOpenFolder?.('about'); setActiveMenu(null); }} className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10">About Me</button>
                  <a href="mailto:shalinimuthukumar1434@gmail.com" className="block px-4 py-2 text-sm text-white hover:bg-white/10">Send Feedback</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 text-[13px] text-white/90">
          <div className="flex items-center gap-1">
            <Battery className="w-5 h-5" />
          </div>
          <Wifi className="w-4 h-4" />
          <div className="relative">
            <Search 
              className="w-4 h-4 cursor-pointer hover:text-white" 
              onClick={handleSearchClick}
            />
            {showSearch && (
              <div className="absolute right-0 top-8 w-64 bg-black/80 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 overflow-hidden">
                <input
                  type="text"
                  placeholder="Search folders..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 bg-transparent text-white text-sm placeholder:text-white/50 outline-none"
                  autoFocus
                />
                {searchQuery && filteredFolders.length > 0 && (
                  <div className="border-t border-white/10">
                    {filteredFolders.map(folder => (
                      <div 
                        key={folder}
                        className="px-4 py-2 text-white/80 hover:bg-white/10 cursor-pointer text-sm"
                        onClick={() => {
                          onSearch?.(folder);
                          setShowSearch(false);
                          setSearchQuery("");
                        }}
                      >
                        📁 {folder}
                      </div>
                    ))}
                  </div>
                )}
                {searchQuery && filteredFolders.length === 0 && (
                  <div className="px-4 py-2 text-white/50 text-sm">
                    No folders found
                  </div>
                )}
              </div>
            )}
          </div>
          <SlidersHorizontal className="w-4 h-4" />
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
