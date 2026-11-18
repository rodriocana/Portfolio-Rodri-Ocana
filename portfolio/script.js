/* ============================================
   PORTFOLIO — Interactive Script
   ============================================ */

// ---- Datos de proyectos (edítalos a tu gusto) ----
const projectsData = {
  1: {
    title: "Dashboard de Analítica",
    tags: ["Angular", "Full Stack", "KPIs", "Base de datos"],
    description:
      "Desarrollo Full Stack de un Dashboard de analítica con Angular, orientado a la visualización de KPIs e indicadores de negocio. Implementación integral desde el diseño y gestión de la base de datos hasta la lógica de negocio y la construcción de una interfaz de usuario interactiva.",
    features: [
      "Visualización de KPIs e indicadores de negocio",
      "Diseño y gestión de base de datos",
      "Lógica de negocio completa",
      "Interfaz de usuario interactiva con Angular",
    ],
    demo: "#",
    repo: "#",
  },
      2:{
      title: "Proyecto Netflix",
      tags: ["React JS", "Vite", "Firebase", "TMDB", "JustWatch", "Spotify"],
      description:
        "Aplicación de descubrimiento cinematográfico que integra estrenos, disponibilidad en plataformas de streaming y bandas sonoras, con gestión de usuarios y listas de películas favoritas.",
      features: [
        "Catálogo de películas y estrenos en tiempo real con TMDB",
        "Consulta de plataformas de streaming mediante JustWatch",
        "Integración de bandas sonoras con Spotify",
        "Autenticación de usuarios y favoritos con Firebase",
      ],
      demo: "#",
      repo: "#",
    },
  3: {
    title: "Mufit - Centro de Entrenamiento Personal",
    tags: ["WordPress", "PHP", "CSS", "JavaScript"],
    description:
      "Desarrollo de una página web para Mufit, un centro de entrenamiento personal. Un sitio web moderno y responsive diseñado para dar visibilidad al centro, presentar sus servicios de entrenamiento y facilitar a los clientes potenciales el contacto y la solicitud de información.",
    features: [
      "Desarrollo web personalizado con WordPress y PHP",
      "Presentación de servicios y planes de entrenamiento",
      "Diseño responsive adaptado a móviles y tablets",
      "Secciones informativas sobre el centro y sus entrenamientos",
      "Formulario de contacto para nuevos clientes",
    ],
    demo: "#",
    repo: "#",
  },
  4: {
    title: "Proyecto final de grado -  Cine web",
    tags: ["Angular", "API", "Tailwind"],
    description:
      "Proyecto de un cine con cartelera de películas, gestión de usuarios, lista de favoritos, compra de entradas y tienda.",
    features: [
      "SSG + ISR para rendimiento máximo",
      "Checkout con Stripe",
      "SEO y Core Web Vitals optimizados",
      "Admin dashboard",
    ],
    demo: "#",
    repo: "#",
  },
  5: {
    title: "Code Snippets Manager",
    tags: ["Vue", "Electron", "SQLite"],
    description:
      "Aplicación de escritorio multiplataforma para organizar, buscar y sincronizar snippets de código. Ideal para desarrolladores que trabajan en múltiples lenguajes.",
    features: [
      "Búsqueda fuzzy ultrarrápida",
      "Sincronización en la nube",
      "Soporte multi-lenguaje",
      "Atajos de teclado personalizables",
    ],
    demo: "#",
    repo: "#",
  },
  6: {
    title: "FitTrack",
    tags: ["Flutter", "Dart", "Firebase"],
    description:
      "App de seguimiento de entrenamiento con análisis de progreso, rutinas personalizadas y comunidad. Diseño limpio y enfoque en la experiencia de usuario.",
    features: [
      "Rutinas personalizadas",
      "Gráficos de progreso",
      "Comunidad y retos",
      "Modo offline",
    ],
    demo: "#",
    repo: "#",
  },
};

// ---- Cursor personalizado ----
const cursor = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursorFollower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorFollower.style.left = e.clientX + "px";
  cursorFollower.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button, .project-card, .filter-btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    cursorFollower.classList.add("hover");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    cursorFollower.classList.remove("hover");
  });
});

// ---- Partículas de fondo ----
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];
let animationId;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 80);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
    ctx.fill();

    // Conexiones sutiles
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });

  animationId = requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();
window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

// ---- Navegación ----
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

// Active link on scroll
const sections = document.querySelectorAll("section[id], header[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

// ---- Typed text (Hero) ----
const typedText = document.getElementById("typedText");
const phrases = [
  "Desarrollador Full Stack",
  "Angular Specialist",
  "Desarrollador Web",
  "Backend & Frontend",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    typedText.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}
typeEffect();

// ---- Filtro de proyectos ----
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      if (filter === "all" || category === filter) {
        card.style.display = "";
        setTimeout(() => card.classList.add("visible"), 50);
      } else {
        card.classList.remove("visible");
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// ---- Modal de proyectos ----
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = btn.dataset.project;
    const data = projectsData[id];
    if (!data) return;

    modalBody.innerHTML = `
      <h3>${data.title}</h3>
      <div class="modal-tags">${data.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <p>${data.description}</p>
      <ul style="list-style: none; margin: 1rem 0;">
        ${data.features
          .map(
            (f) =>
              `<li style="color: var(--text-muted); margin-bottom: 0.4rem; padding-left: 1.2rem; position: relative;">
                <span style="position: absolute; left: 0; color: var(--accent);">▹</span> ${f}
              </li>`
          )
          .join("")}
      </ul>
      <div class="modal-links">
        <a href="${data.demo}" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          Demo en vivo
        </a>
        <a href="${data.repo}" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
          Código
        </a>
      </div>
    `;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

// ---- Animaciones al scroll (Intersection Observer) ----
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -40px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Skills bars
      if (entry.target.classList.contains("skill-item")) {
        const level = entry.target.dataset.level;
        const fill = entry.target.querySelector(".skill-fill");
        if (fill) fill.style.width = level + "%";
      }
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card, .timeline-item, .skill-item").forEach((el) => {
  observer.observe(el);
});

// ---- Formulario de contacto (simulado) ----
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = "¡Mensaje enviado! ✓";
  btn.style.background = "var(--success)";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = "";
    btn.disabled = false;
    contactForm.reset();
  }, 2500);
});

// ---- Reveal inicial de project cards ----
setTimeout(() => {
  document.querySelectorAll(".project-card").forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), i * 80);
  });
}, 300);
