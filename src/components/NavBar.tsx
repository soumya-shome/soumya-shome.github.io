
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar styling based on scroll position
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300", 
      scrolled ? "py-4 bg-background/90 backdrop-blur-md" : "py-6"
    )}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          <span className="text-gradient">JD</span>
        </a>
        
        <nav>
          <ul className="flex gap-8">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={cn("nav-link capitalize", 
                    activeSection === section && "active"
                  )}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
