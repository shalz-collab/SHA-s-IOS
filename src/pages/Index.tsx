import { useState } from "react";
import MenuBar from "@/components/MenuBar";
import Desktop from "@/components/Desktop";
import Dock from "@/components/Dock";
import MacWindow from "@/components/MacWindow";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import AboutWindow from "@/components/windows/AboutWindow";
import BlogWindow from "@/components/windows/BlogWindow";
import ContactWindow from "@/components/windows/ContactWindow";
import ExploreWindow from "@/components/windows/ExploreWindow";
import SkillsWindow from "@/components/windows/SkillsWindow";
import SettingsWindow from "@/components/windows/SettingsWindow";
import PhotosWindow from "@/components/windows/PhotosWindow";
import TerminalWindow from "@/components/windows/TerminalWindow";

const windowTitles: Record<string, string> = {
  projects: "Projects",
  about: "About Me",
  skills: "Skills",
  blog: "Blog",
  contact: "Contact Me",
  explore: "Explore",
  settings: "Settings",
  photos: "Photos",
  terminal: "Terminal",
};

const folderNames = ["Projects", "About Me", "Skills", "Blog", "Contact", "Explore", "Photos", "Settings", "Terminal"];

const Index = () => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const handleFolderClick = (folder: string) => {
    setActiveFolder(folder);
  };

  const handleSearch = (query: string) => {
    const folderMap: Record<string, string> = {
      "projects": "projects",
      "about me": "about",
      "skills": "skills", 
      "blog": "blog",
      "contact": "contact",
      "explore": "explore"
    };
    const lowerQuery = query.toLowerCase();
    const matchedFolder = folderMap[lowerQuery];
    if (matchedFolder) {
      setActiveFolder(matchedFolder);
    }
  };

  const handleCloseWindow = () => {
    setActiveFolder(null);
  };

  const renderWindowContent = () => {
    switch (activeFolder) {
      case "projects":
        return <ProjectsWindow />;
      case "about":
        return <AboutWindow />;
      case "skills":
        return <SkillsWindow />;
      case "blog":
        return <BlogWindow />;
      case "contact":
        return <ContactWindow />;
      case "explore":
        return <ExploreWindow />;
      case "settings":
        return <SettingsWindow />;
      case "photos":
        return <PhotosWindow />;
      case "terminal":
        return <TerminalWindow />;
      default:
        return null;
    }
  };

  const handleOpenFolder = (folder: string) => {
    const folderMap: Record<string, string> = {
      "projects": "projects",
      "aboutme": "about",
      "about": "about",
      "skills": "skills", 
      "blog": "blog",
      "contact": "contact",
      "explore": "explore",
      "photos": "photos",
      "settings": "settings",
      "terminal": "terminal"
    };
    const matchedFolder = folderMap[folder] || folder;
    setActiveFolder(matchedFolder);
  };

  return (
    <main className="h-screen w-screen overflow-hidden" onClick={() => {}}>
      {/* Menu Bar */}
      <MenuBar 
        onSearch={handleSearch} 
        folders={folderNames} 
        onOpenFolder={handleOpenFolder}
        onOpenSettings={() => setActiveFolder("settings")}
      />

      {/* Desktop */}
      <div className="pt-8 pb-20 h-full">
        <Desktop onFolderClick={handleFolderClick} />
      </div>

      {/* Dock */}
      <Dock onFolderClick={handleFolderClick} activeFolder={activeFolder} />

      {/* Window */}
      {activeFolder && (
        <MacWindow
          title={windowTitles[activeFolder] || ""}
          isOpen={!!activeFolder}
          onClose={handleCloseWindow}
        >
          {renderWindowContent()}
        </MacWindow>
      )}
    </main>
  );
};

export default Index;
