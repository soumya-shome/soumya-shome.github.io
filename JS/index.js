function onLo(){
(function(){
    emailjs.init("Zx6YskytANj24jfjK");
 })();
}


function navb(){ 
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const menuB = document.querySelector(".menu-list");

    menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
    }

    menuB.onclick = ()=>{
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabled");
    }

    cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    }
    navbar.classList.add("sticky")
}

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = 'service_84kcyls';
    const templateID = 'template_bk6svmd';

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("Your message has been sent successfully");
        })
        .catch((err) => console.log(err));
    }

/* =========================================================================
   New Portfolio (static/index.html) — converted from the React homepage.
   All globals here are prefixed "np" so they never collide with navb(),
   sendMail(), onLo() above.
   ========================================================================= */

const npSkills = [
  { name: "HTML", level: 80, category: "frontend" },
  { name: "CSS", level: 75, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Java", level: 70, category: "backend" },
  { name: "C", level: 65, category: "backend" },
  { name: "C++", level: 68, category: "backend" },
  { name: "PHP", level: 60, category: "backend" },
  { name: "Arduino", level: 70, category: "other" },
];

const npProjects = [
  {
    id: 1,
    title: "Calculator",
    description: "The Basic Java Calculator is a beginner-friendly project that helps you build a simple calculator using Java. This calculator lets users add, subtract, multiply, and divide numbers effortlessly. ",
    image: "../Images/2024-02-25_01-54-36.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
    category: "fullstack",
    icon: "fa-desktop",
  },
  {
    id: 2,
    title: "ShomeTech",
    description: "The App or Tool will help you to deal with the different Types of numbers you might deal with in the programming world.",
    image: "../Images/project3.png",
    tags: ["Java"],
    demoUrl: "https://www.techie499.com/2018/12/shometech-know-your-number.html",
    repoUrl: "https://github.com",
    category: "fullstack",
    icon: "fa-desktop",
  },
  {
    id: 3,
    title: "RFID Door Lock",
    description: "RFID Door Lock is a low-cost, secure, and easy-to-install DIY project using an Arduino board and an RFID reader that enables users to control door locks by reading RFID tags.",
    image: "../Images/project.png",
    tags: ["Arduino", "Raspberry Pi", "MQTT"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "electronics",
    icon: "fa-desktop",
  },
  {
    id: 4,
    title: "IoT Mini Clock",
    description: "A mini clock project that utilizes ESP01 and TM1637 Display to display Internet Time in a compact and convenient manner.",
    image: "../Images/project2.png",
    tags: ["ESP32", "IoT"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "iot",
    icon: "fa-microchip",
  },
];

function npEscapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function npInitLoader() {
  const loader = document.getElementById("np-loading");
  if (!loader) return;
  setTimeout(() => loader.classList.add("np-hidden"), 500);
}

function npInitNavbarScroll() {
  const navbar = document.getElementById("np-navbar");
  if (!navbar) return;
  const navLinks = navbar.querySelectorAll(".np-nav-link");
  const sections = document.querySelectorAll(".np-page section[id]");

  const onScroll = () => {
    navbar.classList.toggle("np-scrolled", window.scrollY > 50);

    let activeId = "home";
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
        activeId = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle("np-active", link.dataset.section === activeId);
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.getElementById(link.dataset.section);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", onScroll);
  onScroll();
}

function npInitScrollButtons() {
  document.querySelectorAll("[data-np-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.npScrollTo);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function npRenderSkills(filter) {
  const grid = document.getElementById("np-skills-grid");
  if (!grid) return;
  const filtered = filter === "all" ? npSkills : npSkills.filter((s) => s.category === filter);
  grid.innerHTML = filtered.map((skill) => `
    <div>
      <div class="np-skill-row-top">
        <span class="np-skill-name">${npEscapeHtml(skill.name)}</span>
        <span class="np-skill-pct">${skill.level}%</span>
      </div>
      <div class="np-skill-track">
        <div class="np-skill-fill" style="width:${skill.level}%"></div>
      </div>
    </div>
  `).join("");
}

function npInitSkillsFilter() {
  const buttons = document.querySelectorAll("#np-skills-filters .np-filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("np-active"));
      btn.classList.add("np-active");
      npRenderSkills(btn.dataset.filter);
    });
  });
  npRenderSkills("all");
}

function npProjectCard(project) {
  return `
    <div class="np-carousel-item">
      <div class="np-project-card">
        <div class="np-project-image">
          <img src="${project.image}" alt="${npEscapeHtml(project.title)}">
          <div class="np-project-icon"><i class="fas ${project.icon}"></i></div>
        </div>
        <div class="np-project-body">
          <h3>${npEscapeHtml(project.title)}</h3>
          <p>${npEscapeHtml(project.description)}</p>
          <div class="np-project-tags">
            ${project.tags.map((t) => `<span>${npEscapeHtml(t)}</span>`).join("")}
          </div>
          <div class="np-project-actions">
            <a class="np-btn np-btn-sm np-btn-outline" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i> Code
            </a>
            <a class="np-btn np-btn-sm" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function npRenderProjects(filter) {
  const track = document.getElementById("np-projects-track");
  if (!track) return;
  const filtered = filter === "all" ? npProjects : npProjects.filter((p) => p.category === filter);
  track.innerHTML = filtered.map(npProjectCard).join("");
  track.scrollTo({ left: 0 });
}

function npInitProjectsFilter() {
  const buttons = document.querySelectorAll("#np-projects-filters .np-filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("np-active"));
      btn.classList.add("np-active");
      npRenderProjects(btn.dataset.filter);
    });
  });
  npRenderProjects("all");
}

function npInitCarouselNav() {
  const track = document.getElementById("np-projects-track");
  const prev = document.getElementById("np-carousel-prev");
  const next = document.getElementById("np-carousel-next");
  if (!track || !prev || !next) return;

  const step = () => (track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + 16 : 300);
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
}

function npInitContactForm() {
  const form = document.getElementById("np-contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted");
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
  });
}

function npInitFooter() {
  const yearEl = document.getElementById("np-footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const topBtn = document.getElementById("np-footer-top");
  if (topBtn) {
    topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

function npInit() {
  npInitLoader();
  npInitNavbarScroll();
  npInitScrollButtons();
  npInitSkillsFilter();
  npInitProjectsFilter();
  npInitCarouselNav();
  npInitContactForm();
  npInitFooter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", npInit);
} else {
  npInit();
}