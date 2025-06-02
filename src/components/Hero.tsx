
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-white font-medium">Hello, I am</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Soumyadeep Shome</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Full Stack & IoT Developer
            </h2>
            {/* <p className="text-lg text-muted-foreground">
              I craft elegant solutions with code, from web applications to IoT devices.
              Specializing in building exceptional digital experiences that live beyond the screen.
            </p> */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View Projects
              </Button>
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block animate-fade-in">
            <div className="rounded-full overflow-hidden border-4 border-white/20 shadow-xl shadow-white/10 w-[320px] h-[320px] mx-auto">
              <img 
                src="Images/profile.jpg"
                // src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=800&crop=entropy" 
                alt="Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background animation elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="floating-circle bg-white/5 w-64 h-64 rounded-full absolute -top-20 -left-20"></div>
        <div className="floating-circle delay-300 bg-white/5 w-96 h-96 rounded-full absolute top-1/3 -right-48"></div>
        <div className="floating-circle delay-700 bg-white/5 w-48 h-48 rounded-full absolute -bottom-10 left-1/4"></div>
      </div>
    </section>
  );
};

export default Hero;
