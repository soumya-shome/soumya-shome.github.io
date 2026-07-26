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
   New Portfolio (index.html) — converted from the React homepage.
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
    image: "Images/2024-02-25_01-54-36.jpg",
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
    image: "Images/project3.png",
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
    image: "Images/project.png",
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
    image: "Images/project2.png",
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
  npCarouselOnContentChange();
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

/* Sliding carousel: pages by `perView` items at a time, loops at the ends,
   and shows one dot per page so it scales cleanly as more projects are added. */
const npCarousel = {
  wrap: null,
  track: null,
  dotsEl: null,
  prevBtn: null,
  nextBtn: null,
  index: 0,
  maxIndex: 0,
  perView: 1,
  gap: 16,
  autoplayTimer: null,
};

function npCarouselItemsPerView() {
  const w = window.innerWidth;
  if (w >= 1024) return 3;
  if (w >= 768) return 2;
  return 1;
}

function npCarouselLayout() {
  const { wrap, track } = npCarousel;
  if (!wrap || !track) return;
  const items = Array.from(track.children);
  const total = items.length;
  npCarousel.perView = npCarouselItemsPerView();
  if (total === 0) {
    npCarousel.maxIndex = 0;
    npCarouselRenderDots();
    return;
  }
  const wrapWidth = wrap.clientWidth;
  const itemWidth = (wrapWidth - npCarousel.gap * (npCarousel.perView - 1)) / npCarousel.perView;
  items.forEach((item) => { item.style.flex = `0 0 ${itemWidth}px`; });
  npCarousel.maxIndex = Math.max(0, total - npCarousel.perView);
  if (npCarousel.index > npCarousel.maxIndex) npCarousel.index = npCarousel.maxIndex;
  npCarouselRenderDots();
  npCarouselGoTo(npCarousel.index, false);
}

function npCarouselRenderDots() {
  const { dotsEl, track, perView } = npCarousel;
  if (!dotsEl) return;
  const total = track.children.length;
  const pageCount = Math.max(1, Math.ceil(total / perView));
  dotsEl.innerHTML = Array.from({ length: pageCount }, (_, i) =>
    `<button class="np-dot" data-page="${i}" aria-label="Go to slide ${i + 1}"></button>`
  ).join("");
  dotsEl.querySelectorAll(".np-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      npCarouselGoTo(Number(dot.dataset.page) * perView);
      npCarouselResetAutoplay();
    });
  });
  npCarouselUpdateDots();
}

function npCarouselUpdateDots() {
  const { dotsEl, perView, index } = npCarousel;
  if (!dotsEl) return;
  const activePage = Math.round(index / perView);
  dotsEl.querySelectorAll(".np-dot").forEach((dot, i) => {
    dot.classList.toggle("np-active", i === activePage);
  });
}

function npCarouselGoTo(index, animate = true) {
  const { track, maxIndex, gap } = npCarousel;
  if (!track) return;
  index = Math.max(0, Math.min(index, maxIndex));
  npCarousel.index = index;
  const firstItem = track.children[0];
  const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : 0;
  const offset = index * (itemWidth + gap);
  track.style.transition = animate ? "transform 0.5s ease" : "none";
  track.style.transform = `translateX(-${offset}px)`;
  npCarouselUpdateDots();
}

function npCarouselNext() {
  const { index, perView, maxIndex } = npCarousel;
  npCarouselGoTo(index + perView > maxIndex ? 0 : index + perView);
}

function npCarouselPrev() {
  const { index, perView, maxIndex } = npCarousel;
  npCarouselGoTo(index - perView < 0 ? maxIndex : index - perView);
}

function npCarouselResetAutoplay() {
  clearInterval(npCarousel.autoplayTimer);
  npCarousel.autoplayTimer = setInterval(npCarouselNext, 5000);
}

function npCarouselOnContentChange() {
  npCarousel.index = 0;
  npCarouselLayout();
  npCarouselResetAutoplay();
}

function npInitCarouselNav() {
  npCarousel.wrap = document.querySelector(".np-carousel-wrap");
  npCarousel.track = document.getElementById("np-projects-track");
  npCarousel.dotsEl = document.getElementById("np-carousel-dots");
  npCarousel.prevBtn = document.getElementById("np-carousel-prev");
  npCarousel.nextBtn = document.getElementById("np-carousel-next");
  if (!npCarousel.wrap || !npCarousel.track) return;

  npCarousel.prevBtn.addEventListener("click", () => { npCarouselPrev(); npCarouselResetAutoplay(); });
  npCarousel.nextBtn.addEventListener("click", () => { npCarouselNext(); npCarouselResetAutoplay(); });

  npCarousel.wrap.addEventListener("mouseenter", () => clearInterval(npCarousel.autoplayTimer));
  npCarousel.wrap.addEventListener("mouseleave", () => npCarouselResetAutoplay());
  npCarousel.wrap.addEventListener("touchstart", () => clearInterval(npCarousel.autoplayTimer), { passive: true });
  npCarousel.wrap.addEventListener("touchend", () => npCarouselResetAutoplay());

  npCarouselLayout();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(npCarouselLayout, 150);
  });
}

function npInitThemeToggle() {
  const btn = document.getElementById("np-theme-toggle");
  if (!btn) return;
  const icon = btn.querySelector("i");

  const applyIcon = (theme) => {
    if (!icon) return;
    icon.classList.remove("fa-sun", "fa-moon");
    icon.classList.add(theme === "light" ? "fa-sun" : "fa-moon");
  };

  applyIcon(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("np-theme", next);
    applyIcon(next);
  });
}

function npInitNavToggle() {
  const toggle = document.getElementById("np-nav-toggle");
  const list = document.querySelector(".np-nav-list");
  const icon = toggle ? toggle.querySelector("i") : null;
  if (!toggle || !list) return;

  // Mutate the existing icon's classes instead of replacing it via innerHTML —
  // swapping the node out would orphan it mid-click, so the document-level
  // "click outside" listener below would see e.target as no longer inside
  // `toggle` and immediately close the menu that was just opened.
  const closeMenu = () => {
    list.classList.remove("np-open");
    toggle.setAttribute("aria-expanded", "false");
    if (icon) { icon.classList.remove("fa-times"); icon.classList.add("fa-bars"); }
  };
  const openMenu = () => {
    list.classList.add("np-open");
    toggle.setAttribute("aria-expanded", "true");
    if (icon) { icon.classList.remove("fa-bars"); icon.classList.add("fa-times"); }
  };

  toggle.addEventListener("click", () => {
    list.classList.contains("np-open") ? closeMenu() : openMenu();
  });
  list.querySelectorAll(".np-nav-link").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("click", (e) => {
    if (!list.classList.contains("np-open")) return;
    if (!list.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });
}

function npInitReveal() {
  const items = document.querySelectorAll(".np-reveal");
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("np-in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("np-in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => observer.observe(el));
}

function npInitScrollTopButton() {
  const btn = document.getElementById("np-scroll-top");
  if (!btn) return;
  const footer = document.querySelector(".np-footer");
  let footerVisible = false;

  const updateVisibility = () => {
    btn.classList.toggle("np-visible", window.scrollY > 400 && !footerVisible);
  };

  if (footer && "IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      footerVisible = entries[0].isIntersecting;
      updateVisibility();
    }).observe(footer);
  }

  window.addEventListener("scroll", updateVisibility);
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* Relays the contact form through FormSubmit.co (https://formsubmit.co) —
   no Gmail OAuth involved; FormSubmit emails CONTACT_EMAIL from its own
   infrastructure. The first-ever submission to a new address triggers a
   one-time confirmation email from FormSubmit that must be clicked before
   delivery actually starts — expect the first real test to "succeed" here
   but not arrive until that link is clicked. */
function npInitContactForm() {
  const form = document.getElementById("np-contact-form");
  if (!form) return;

  // FormSubmit's activation ID for this form, used in place of a plaintext
  // address so it doesn't sit exposed in public view-source as scraper bait.
  const CONTACT_EMAIL = "b36700547b203a9104689facc4ab2679";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;

    const name = document.getElementById("np-name").value;
    const email = document.getElementById("np-email").value;
    const subject = document.getElementById("np-subject").value;
    const message = document.getElementById("np-message").value;

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        _subject: `Portfolio contact: ${subject}`,
        _template: "table",
        _captcha: "false",
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`FormSubmit responded with ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // FormSubmit can return HTTP 200 with success:"false" (a string, not
        // a boolean) in the body on a logical failure, so the HTTP status
        // alone isn't enough to tell success from failure.
        if (data.success === "false" || data.success === false) {
          throw new Error(data.message || "FormSubmit reported failure");
        }
        alert("Thank you for your message! I'll get back to you soon.");
        form.reset();
      })
      .catch((err) => {
        console.error("FormSubmit send failed:", err);
        alert("Sorry, something went wrong sending your message. Please try emailing me directly instead.");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      });
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

/* =========================================================================
   Secret project hub (myhub/index.html) — not linked from the main nav.
   Three maintained lists, each rendered into its own section; add an entry
   to the matching array and it shows up as a card, no HTML editing required.
   ========================================================================= */

const HUB_BRAND_ICONS = ["fa-github", "fa-linkedin", "fa-twitter", "fa-instagram", "fa-codepen", "fa-facebook"];

const hubLearnings = [
  { name: "LeetCode", url: "https://leetcode.com/u/soumya-shome/", description: "Problem-solving practice and progress.", icon: "fa-code" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/soumya-shome", description: "Coding challenges and skill certifications.", icon: "fa-terminal" },
  { name: "Certifications", url: "certificate.html", description: "Certifications and training records.", icon: "fa-certificate" },
];

const hubTrackers = [
  // TODO: swap this URL for your actual sheet link.
  { name: "Tracker Sheet", url: "https://docs.google.com/spreadsheets/d/12do1G6ixs7GTyFAjH3T7Ln1x0bYyTLcb8vovlKfFINs/", description: "Daily Habit spreadsheet.", icon: "fa-table" },
  { name: "Notion-Projects", url: "https://app.notion.com/p/ff6a9e3c6f934f6db25d0dc59387895e?v=204ee05d7e8a4b20a924d321965b1152", description: "Project Portfolio - Notion", icon: "fa-table" },
];

const hubProjects = [
  { name: "ShomeTech", url: "https://www.techie499.com/2018/12/shometech-know-your-number.html", description: "Number-type identification tool.", icon: "fa-desktop" },
  { name: "NanoTools", url: "https://nanotools.vercel.app", description: "A lightweight collection of everyday developer utilities.", icon: "fa-toolbox" },
  { name: "MedStore", url: "https://medstore-demo.vercel.app", description: "An online medicine store demo with browsing and checkout.", icon: "fa-pills" },
  { name: "TutionFinder", url: "https://tuitionfinder.vercel.app", description: "A platform to discover and connect with tutors and tuition classes.", icon: "fa-chalkboard-teacher" },
  { name: "Folio", url: "https://couple-journals.vercel.app", description: "A shared digital journal for couples to capture memories together.", icon: "fa-heart" },
  { name: "Code-Mentor", url: "https://code-champ-mentor.vercel.app", description: "A mentorship platform connecting learners with coding mentors.", icon: "fa-laptop-code" },
  { name: "EmberLog", url: "https://emberlogs.vercel.app", description: "A daily logging app for tracking habits and reflections.", icon: "fa-fire" },
  { name: "FundsTracker", url: "https://fundstracker.vercel.app", description: "A personal finance tracker for managing expenses and budgets.", icon: "fa-wallet" },
];

const hubRepository = [
  { name: "GitHub", url: "https://github.com/soumya-shome", description: "Source code and repositories.", icon: "fa-github" },
];

// General service dashboards — add more as you pick up new tools.
const hubPortals = [
  { name: "Vercel", url: "https://vercel.com/dashboard", description: "Deployments and hosting dashboard.", icon: "fa-server" },
  { name: "Notion", url: "https://www.notion.so", description: "Notes, docs, and project workspaces.", icon: "fa-clipboard-list" },
  { name: "Supabase", url: "https://supabase.com/dashboard/projects", description: "Database and backend projects.", icon: "fa-database" },
  { name: "NeonDB", url: "https://console.neon.tech", description: "Serverless Postgres database console.", icon: "fa-bolt" },
  { name: "Meta Business Suite", url: "https://business.facebook.com", description: "Manage Facebook & Instagram business assets.", icon: "fa-facebook" },
];

function hubCardHtml(link) {
  const external = /^https?:\/\//.test(link.url);
  const iconClass = HUB_BRAND_ICONS.includes(link.icon) ? "fab" : "fas";
  return `
    <a class="hub-card" href="${link.url}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
      <div class="hub-card-icon"><i class="${iconClass} ${link.icon}"></i></div>
      <div>
        <h3>${npEscapeHtml(link.name)}</h3>
        <p>${npEscapeHtml(link.description)}</p>
      </div>
      <i class="fas fa-arrow-right hub-card-arrow"></i>
    </a>`;
}

function hubRenderGrid(containerId, links, emptyMessage) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = links.length
    ? links.map(hubCardHtml).join("")
    : `<p class="hub-empty">${npEscapeHtml(emptyMessage)}</p>`;
}

function hubRenderLinks() {
  hubRenderGrid("hub-learnings-grid", hubLearnings, "Nothing added yet — check back soon.");
  hubRenderGrid("hub-trackers-grid", hubTrackers, "Nothing added yet — check back soon.");
  hubRenderGrid("hub-projects-grid", hubProjects, "Nothing added yet — check back soon.");
  hubRenderGrid("hub-repository-grid", hubRepository, "Nothing added yet — check back soon.");
  hubRenderGrid("hub-portals-grid", hubPortals, "Nothing added yet — check back soon.");
}

function npInit() {
  npInitLoader();
  npInitNavbarScroll();
  npInitThemeToggle();
  npInitNavToggle();
  npInitScrollButtons();
  npInitSkillsFilter();
  npInitCarouselNav();
  npInitProjectsFilter();
  npInitContactForm();
  npInitFooter();
  npInitReveal();
  npInitScrollTopButton();
  hubRenderLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", npInit);
} else {
  npInit();
}