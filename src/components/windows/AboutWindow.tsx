import { Code, Palette, Lightbulb, Heart, Monitor, Gamepad2, Sparkles } from "lucide-react";

const interests = [
  "UI/UX design",
  "Secure web applications", 
  "Anime-style aesthetics",
  "Experimenting with new ideas",
  "Visual problem solving"
];

const focusAreas = [
  "Responsive web design",
  "Interactive user interfaces",
  "Data visualization",
  "Clean, maintainable code",
  "Creative problem solving"
];

const AboutWindow = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-3xl font-bold text-primary-foreground">SM</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Shalini M</h2>
        <p className="text-primary font-medium">Frontend Developer & Designer</p>
        <p className="text-muted-foreground text-sm">Chennai, India</p>
      </div>

      {/* Bio */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-400" />
          About Me
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          I'm Shalini M, a Frontend Developer, Designer, and Analytical Thinker from Chennai, India. 
          I enjoy crafting responsive, interactive websites that merge creativity with structured logic. 
          I'm passionate about writing clean code, solving problems visually, and building things that just work.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Outside of tech, I love watching web series, playing cricket, and exploring new ideas through 
          experiments and side projects. I believe in learning by doing and constantly seek ways to grow 
          through code and creativity.
        </p>
      </div>

      {/* What I do */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
          <Code className="w-8 h-8 text-folder-blue mb-3" />
          <h4 className="font-semibold text-foreground mb-2">Development</h4>
          <p className="text-sm text-muted-foreground">Building responsive, interactive web applications with modern technologies</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
          <Palette className="w-8 h-8 text-purple-400 mb-3" />
          <h4 className="font-semibold text-foreground mb-2">Design</h4>
          <p className="text-sm text-muted-foreground">Creating intuitive and visually appealing user interfaces with clean aesthetics</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
          <Lightbulb className="w-8 h-8 text-orange-400 mb-3" />
          <h4 className="font-semibold text-foreground mb-2">Problem Solving</h4>
          <p className="text-sm text-muted-foreground">Analytical thinking to solve complex problems with creative solutions</p>
        </div>
      </div>

      {/* Interests & Focus Areas */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-card rounded-xl p-5 border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            Interests
          </h4>
          <ul className="space-y-2">
            {interests.map((interest) => (
              <li key={interest} className="flex items-center gap-2 text-muted-foreground text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {interest}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-folder-blue" />
            Focus Areas
          </h4>
          <ul className="space-y-2">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-2 text-muted-foreground text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hobbies */}
      <div className="bg-card rounded-xl p-5 border border-border">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-green-400" />
          When I'm Not Coding
        </h4>
        <div className="flex flex-wrap gap-2">
          {["Watching Web Series", "Playing Cricket", "Side Projects", "Learning New Tech"].map((hobby) => (
            <span
              key={hobby}
              className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
