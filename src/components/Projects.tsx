
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Microchip, CircuitBoard, Wifi, Database, Cpu, Cloud, Server, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  category: string;
  icon?: React.ReactNode;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Calculator",
      description: "The Basic Java Calculator is a beginner-friendly project that helps you build a simple calculator using Java. This calculator lets users add, subtract, multiply, and divide numbers effortlessly. ",
      image: "Images/2024-02-25_01-54-36.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      repoUrl: "#",
      category: "fullstack",
      icon: <Monitor className="w-10 h-10 text-white" />
    },
    {
      id: 2,
      title: "ShomeTech",
      description: "The App or Tool will help you to deal with the different Types of numbers you might deal with in the programming world.",
      image: "Images/project3.png",
      tags: ["Java"],
      demoUrl: "https://www.techie499.com/2018/12/shometech-know-your-number.html",
      repoUrl: "https://github.com",
      category: "fullstack",
      icon: <Monitor className="w-10 h-10 text-white" />
    },
    {
      id: 3,
      title: "RFID Door Lock",
      description: "RFID Door Lock is a low-cost, secure, and easy-to-install DIY project using an Arduino board and an RFID reader that enables users to control door locks by reading RFID tags.",
      image: "Images/project.png",
      tags: ["Arduino", "Raspberry Pi", "MQTT"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "electronics",
      icon: <Monitor className="w-10 h-10 text-white" />
    },
    {
      id: 4,
      title: "IoT Mini Clock",
      description: "A mini clock project that utilizes ESP01 and TM1637 Display to display Internet Time in a compact and convenient manner.",
      image: "Images/project2.png",
      tags: ["ESP32", "IoT"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "iot",
      icon: <Microchip className="w-10 h-10 text-white" />
    },
    // {
    //   id: 5,
    //   title: "Wearable Health Tracker",
    //   description: "A wearable device that monitors heart rate and activity levels, with a companion mobile application.",
    //   image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&w=600&h=400",
    //   tags: ["Arduino", "BLE", "React Native", "Health API"],
    //   demoUrl: "https://example.com",
    //   repoUrl: "https://github.com",
    //   category: "electronics",
    //   icon: <CircuitBoard className="w-10 h-10 text-white" />
    // },
    // {
    //   id: 6,
    //   title: "Industrial Automation Dashboard",
    //   description: "A real-time monitoring and control dashboard for industrial IoT applications with data visualization.",
    //   image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&h=400",
    //   tags: ["React", "WebSockets", "MQTT", "D3.js"],
    //   demoUrl: "https://example.com",
    //   repoUrl: "https://github.com",
    //   category: "electronics",
    //   icon: <CircuitBoard className="w-10 h-10 text-white" />
    // },
    // {
    //   id: 7,
    //   title: "Energy Monitoring System",
    //   description: "A smart energy monitoring solution for residential and commercial buildings to optimize energy consumption.",
    //   image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400",
    //   tags: ["IoT", "Python", "Machine Learning", "Dashboard"],
    //   demoUrl: "https://example.com",
    //   repoUrl: "https://github.com",
    //   category: "iot",
    //   icon: <Cpu className="w-10 h-10 text-white" />
    // },
    // {
    //   id: 8,
    //   title: "Cloud-based Data Logger",
    //   description: "A scalable cloud solution for collecting, storing, and analyzing data from distributed sensor networks.",
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=400",
    //   tags: ["AWS", "IoT Core", "Node.js", "Time Series DB"],
    //   demoUrl: "https://example.com",
    //   repoUrl: "https://github.com",
    //   category: "iot",
    //   icon: <Cloud className="w-10 h-10 text-white" />
    // },
    // {
    //   id: 9,
    //   title: "Edge Computing Gateway",
    //   description: "A low-latency edge computing solution for processing sensor data before transmission to the cloud.",
    //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400",
    //   tags: ["Edge Computing", "C++", "Linux", "MQTT"],
    //   demoUrl: "https://example.com",
    //   repoUrl: "https://github.com",
    //   category: "electronics",
    //   icon: <Server className="w-10 h-10 text-white" />
    // }
  ];

  const categories = ["all", "fullstack", "iot", "electronics"]; 
  // "frontend", "backend",
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Helper function to render project card
  const renderProjectCard = (project: Project) => (
    <div 
      key={project.id}
      className="bg-secondary rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-white/10 transition-all h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {project.icon && (
          <div className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full">
            {project.icon}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-background rounded-full text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <Button size="sm" asChild variant="outline">
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={16} />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-white"></div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                activeFilter === category
                  ? "bg-white text-black"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Carousel for projects */}
        <div className="relative px-4 md:px-10">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {filteredProjects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  {renderProjectCard(project)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-4" />
            <CarouselNext className="right-0 lg:-right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
