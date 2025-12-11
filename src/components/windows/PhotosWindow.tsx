import { ExternalLink } from "lucide-react";

const photos = [
  {
    id: "1",
    title: "Apple WWDC 2024",
    description: "Apple's latest developer conference",
    url: "https://developer.apple.com/wwdc24/",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop"
  },
  {
    id: "2",
    title: "GitHub Universe",
    description: "The biggest GitHub event of the year",
    url: "https://githubuniverse.com/",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    title: "Google I/O",
    description: "Google's annual developer conference",
    url: "https://io.google/",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop"
  },
  {
    id: "4",
    title: "React Conf",
    description: "Official React conference by Meta",
    url: "https://conf.react.dev/",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
  },
  {
    id: "5",
    title: "AWS re:Invent",
    description: "Amazon Web Services cloud conference",
    url: "https://reinvent.awsevents.com/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
  },
  {
    id: "6",
    title: "Microsoft Build",
    description: "Microsoft's flagship developer event",
    url: "https://build.microsoft.com/",
    image: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=400&h=300&fit=crop"
  },
];

const PhotosWindow = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Tech Events & Conferences</h2>
        <p className="text-muted-foreground">Explore the biggest events in tech</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <a
            key={photo.id}
            href={photo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all hover:scale-105"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm font-medium">{photo.title}</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotosWindow;
