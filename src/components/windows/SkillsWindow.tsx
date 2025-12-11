const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "TypeScript", icon: "📘" },
      { name: "React", icon: "⚛️" },
    ]
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Firebase", icon: "🔥" },
      { name: "GIT", icon: "📦" },
    ]
  },
  {
    category: "Additional Languages",
    skills: [
      { name: "Kotlin", icon: "🟣" },
      { name: "PHP", icon: "🐘" },
    ]
  },
];

const SkillsWindow = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Skills & Technologies</h2>
        <p className="text-muted-foreground">Technologies I work with</p>
      </div>

      <div className="grid gap-6">
        {skillCategories.map((category) => (
          <div key={category.category} className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-all hover:scale-105 cursor-default"
                >
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill bars */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Proficiency</h3>
        <div className="space-y-4">
          {[
            { name: "React / TypeScript", level: 90 },
            { name: "HTML / CSS", level: 95 },
            { name: "UI/UX Design", level: 85 },
            { name: "Python", level: 75 },
            { name: "Firebase / Backend", level: 70 },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsWindow;
