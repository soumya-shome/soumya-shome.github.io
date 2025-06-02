
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gradient text-lg font-bold">JD</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {year} John Developer. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
