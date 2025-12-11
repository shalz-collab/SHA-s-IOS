import { useState, useEffect } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

const SettingsWindow = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "dark" || (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const themes = [
    { id: "light" as Theme, label: "Light", icon: Sun, description: "Light theme for bright environments" },
    { id: "dark" as Theme, label: "Dark", icon: Moon, description: "Dark theme for low-light environments" },
    { id: "system" as Theme, label: "System", icon: Monitor, description: "Follow system preferences" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Settings</h2>
        <p className="text-muted-foreground">Customize your experience</p>
      </div>

      {/* Theme Section */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Appearance</h3>
        <div className="grid gap-3">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => handleThemeChange(t.id)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                theme === t.id
                  ? "bg-primary/20 border-2 border-primary"
                  : "bg-secondary hover:bg-secondary/80 border-2 border-transparent"
              }`}
            >
              <div className={`p-2 rounded-lg ${theme === t.id ? "bg-primary text-primary-foreground" : "bg-background"}`}>
                <t.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">{t.label}</p>
                <p className="text-sm text-muted-foreground">{t.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">About This Portfolio</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Version 1.0.0</p>
          <p>Built with React, TypeScript & Tailwind CSS</p>
          <p>Designed to look like macOS</p>
          <p className="pt-2">© 2025 Shalini M</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsWindow;
