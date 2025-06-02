
import React from "react";
import { Github, Linkedin, Twitter, Codepen, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github className="h-5 w-5" />, 
      url: "https://github.com/" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://linkedin.com/" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="h-5 w-5" />, 
      url: "https://twitter.com/" 
    },
    { 
      name: "CodePen", 
      icon: <Codepen className="h-5 w-5" />, 
      url: "https://codepen.io/" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="h-5 w-5" />, 
      url: "https://instagram.com/" 
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Who I am</h3>
            <p className="text-muted-foreground">
            Hi there! I'm Soumyadeep Shome, a software engineer with a passion for innovation. With a broad skill set in various programming languages and technologies, I love taking on complex challenges and delivering scalable solutions that exceed expectations. Let's work together to create something amazing!
            </p>
            {/* <p className="text-muted-foreground">
              My journey in web development started when I built my first website at 16. 
              Since then, I've worked with startups and established companies to deliver 
              high-quality, scalable solutions.
            </p> */}
            {/* <p className="text-muted-foreground">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or 
              experimenting with new technologies.
            </p> */}
            <div className="pt-4">
              <Button>Download Resume</Button>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-muted-foreground">Name</h4>
                  <p>Soumyadeep Shome</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Email</h4>
                  <p>soumyadeepshome99@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Location</h4>
                  <p>Kolkata, West Bengal, India</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Experience</h4>
                  <p>5+ Years</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.name}
                      className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
