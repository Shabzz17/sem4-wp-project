// Fade-up on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Stagger siblings inside grids/stats
document.querySelectorAll('.grid, .plans, .stats').forEach(parent => {
  parent.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.09}s`;
  });
});