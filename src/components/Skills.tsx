
import React from "react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "other";
};

const Skills = () => {
  const skills: Skill[] = [
    { name: "HTML", level: 80, category: "frontend" },
    { name: "CSS", level: 75, category: "frontend" },
    { name: "JavaScript", level: 70, category: "frontend" },
    { name: "Python", level: 80, category: "backend" },
    { name: "Java", level: 70, category: "backend" },
    { name: "C", level: 65, category: "backend" },
    { name: "C++", level: 68, category: "backend" },
    { name: "PHP", level: 60, category: "backend" },
    { name: "Arduino", level: 70, category: "other" }
  ];

  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filteredSkills = skills.filter((skill) => 
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-white"></div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {["all", "frontend", "backend", "tools", "other"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-background text-muted-foreground hover:text-foreground"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="animate-fade-in">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
