import { ExternalLink, Star, GitFork, Book, Video, Headphones, Globe } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
  category: string;
}

const resources: Resource[] = [
  {
    title: "My GitHub Repositories",
    description: "Explore all my open source projects and contributions",
    link: "https://github.com/shalz-collab",
    icon: GitFork,
    category: "Code"
  },
  {
    title: "Tech Articles",
    description: "Read articles on Medium and Dev.to from tech leaders",
    link: "https://dev.to/",
    icon: Book,
    category: "Writing"
  },
  {
    title: "YouTube Channel",
    description: "Watch coding tutorials from Fireship & Traversy Media",
    link: "https://www.youtube.com/@Fireship",
    icon: Video,
    category: "Video"
  },
  {
    title: "Podcast Appearances",
    description: "Listen to Syntax.fm - conversations about web development",
    link: "https://syntax.fm/",
    icon: Headphones,
    category: "Audio"
  },
];

const interests = [
  "Web Development",
  "Open Source",
  "UI/UX Design",
  "Machine Learning",
  "Cloud Computing",
  "Mobile Apps",
  "DevOps",
  "Blockchain"
];

const ExploreWindow = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Explore More</h2>
        <p className="text-muted-foreground">Discover my work across the web</p>
      </div>

      {/* Resources */}
      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card hover:bg-card-hover rounded-xl p-5 transition-all duration-300 border border-border hover:border-primary/30"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/20 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
                <span className="inline-block mt-2 px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                  {resource.category}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Interests */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          Areas of Interest
        </h3>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-foreground text-sm border border-primary/20 hover:border-primary/50 transition-colors cursor-default"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
        <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Let's Connect!</h3>
        <p className="text-muted-foreground mb-4">
          I'm always excited to collaborate on new projects and ideas
        </p>
        <a
          href="https://github.com/shalz-collab"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <GitFork className="w-5 h-5" />
          Follow on GitHub
        </a>
      </div>
    </div>
  );
};

export default ExploreWindow;
