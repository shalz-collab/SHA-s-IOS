import { ArrowRight } from "lucide-react";

interface BlogLink {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  url: string;
  source: string;
}

const blogLinks: BlogLink[] = [
  {
    id: "1",
    title: "Overreacted - Dan Abramov",
    excerpt: "Personal blog by Dan Abramov, co-creator of Redux and React team member at Meta.",
    category: "React",
    url: "https://overreacted.io/",
    source: "overreacted.io"
  },
  {
    id: "2",
    title: "CSS-Tricks",
    excerpt: "Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.",
    category: "CSS",
    url: "https://css-tricks.com/",
    source: "css-tricks.com"
  },
  {
    id: "3",
    title: "Smashing Magazine",
    excerpt: "For web designers and developers. Articles on coding, design, UX, and more.",
    category: "Design",
    url: "https://www.smashingmagazine.com/",
    source: "smashingmagazine.com"
  },
  {
    id: "4",
    title: "Dev.to",
    excerpt: "A constructive and inclusive social network for software developers.",
    category: "Community",
    url: "https://dev.to/",
    source: "dev.to"
  },
  {
    id: "5",
    title: "freeCodeCamp",
    excerpt: "Learn to code for free with millions of other people around the world.",
    category: "Tutorial",
    url: "https://www.freecodecamp.org/news/",
    source: "freecodecamp.org"
  },
  {
    id: "6",
    title: "The GitHub Blog",
    excerpt: "Updates, ideas, and inspiration from GitHub to help developers build better software.",
    category: "Developer",
    url: "https://github.blog/",
    source: "github.blog"
  },
];

const BlogWindow = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Blog</h2>
        <p className="text-muted-foreground">Thoughts, tutorials, and insights</p>
      </div>

      <div className="space-y-4">
        {blogLinks.map((blog) => (
          <a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card hover:bg-card-hover rounded-xl p-5 transition-all duration-300 border border-border hover:border-primary/30 cursor-pointer block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className="inline-block px-2 py-1 text-xs rounded-md bg-primary/10 text-primary mb-3">
                  {blog.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {blog.excerpt}
                </p>
                <span className="text-xs text-muted-foreground">{blog.source}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogWindow;
