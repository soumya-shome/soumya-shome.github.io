
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Form submitted");
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-background p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:soumyadeepshome99@gmail.com" className="hover:text-primary transition-colors">
                    john@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-background p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+919804359379" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-background p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Profiles</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/soumya-shome" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/soumya-shome/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/techie499/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-1 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    className="bg-background border-none focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-1 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-background border-none focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm text-muted-foreground mb-1 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  required
                  className="bg-background border-none focus-visible:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  required
                  className="min-h-32 bg-background border-none focus-visible:ring-primary"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
