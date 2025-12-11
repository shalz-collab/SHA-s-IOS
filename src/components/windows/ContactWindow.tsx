import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactWindow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:shalinimuthukumar1434@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the message. You can also reach me at +91 82209 11995",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "shalinimuthukumar1434@gmail.com",
      href: "mailto:shalinimuthukumar1434@gmail.com",
      color: "text-pink-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 82209 11995",
      href: "tel:+918220911995",
      color: "text-green-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@shalz-collab",
      href: "https://github.com/shalz-collab",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Shalini MK",
      href: "https://www.linkedin.com/in/shalini-mk-b3b67b273",
      color: "text-folder-blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
      color: "text-emerald-400"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Let's Connect</h2>
        <p className="text-muted-foreground">
          Ready to collaborate on your next project? I'd love to hear from you!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className={`p-2 rounded-lg bg-secondary ${link.color}`}>
                <link.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{link.label}</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Leave a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-secondary border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-secondary border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-secondary border-border focus:border-primary resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;
