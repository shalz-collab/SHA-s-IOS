import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Homomorphic Data Spark",
    description: "A modern, cloud-secure analytics system that uses homomorphic encryption with the CKKS scheme. It enables fast, privacy-preserving computations through SIMD batching without exposing sensitive data.",
    tech: ["React", "TypeScript", "Encryption", "Cloud Security"],
    github: "https://github.com/shalz-collab",
    live: "https://collegeprojectsshalzprizz.vercel.app/"
  },
  {
    id: "2",
    title: "Shalzzzminecraft",
    description: "Creative portfolio website with modern design and interactive elements. A unique showcase of creativity and web development skills.",
    tech: ["React", "CSS", "Animation", "Creative Design"],
    github: "https://github.com/shalz-collab",
    live: "https://ghibli-night-folio-shalz-collabs-projects.vercel.app/"
  },
  {
    id: "3",
    title: "Mental Health Tracker & Mood Journal",
    description: "UI/UX for a mental wellness app prototype with journaling and mood-based chatbot interaction. Designed to help users track their emotional well-being.",
    tech: ["UI Design", "Figma", "React.js", "UX Research"],
    github: "https://github.com/shalz-collab",
  },
  {
    id: "4",
    title: "E-Commerce App UI Design",
    description: "Full mobile app prototype with modern cart and product flow designed in Figma. Features intuitive navigation and seamless shopping experience.",
    tech: ["Figma", "UI Design", "Mobile Design", "Prototyping"],
    github: "https://github.com/shalz-collab",
    status: "UPCOMING"
  },
  {
    id: "5",
    title: "PreCare - Agentic AI",
    description: "An intelligent health assistant that automatically analyzes uploaded medical reports for pregnant women. When needed, it instantly books a doctor's appointment, providing proactive and reliable care support.",
    tech: ["AI", "Healthcare", "React", "Machine Learning"],
    github: "https://github.com/shalz-collab",
    status: "UPCOMING"
  },
  {
    id: "6",
    title: "PayFlow - Payroll System",
    description: "A comprehensive payroll management system with modern UI for managing employee salaries, deductions, and payments efficiently.",
    tech: ["React", "TypeScript", "Payroll", "Finance"],
    github: "https://github.com/shalz-collab",
    live: "https://aurapayroll.vercel.app/"
  },
];

const ProjectsWindow = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Featured Projects</h2>
        <p className="text-muted-foreground">A collection of my development work</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card hover:bg-card-hover rounded-xl p-5 transition-all duration-300 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 relative"
          >
            {/* Status badge */}
            {project.status && (
              <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                {project.status}
              </span>
            )}
            
            {/* Project header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-16">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsWindow;
