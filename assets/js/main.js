/* Zhang Peng — academic homepage interactions */

// ---------- Theme toggle ----------
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ---------- Mobile nav ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

// ---------- Scroll reveal ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ---------- BibTeX cite modal ----------
const modal = document.getElementById('citeModal');
const citeText = document.getElementById('citeText');
const copyBtn = document.getElementById('copyCite');

document.querySelectorAll('.cite-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const src = document.getElementById(btn.dataset.cite);
    if (!src) return;
    citeText.textContent = src.textContent;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}
modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citeText.textContent);
    copyBtn.textContent = 'Copied!';
  } catch {
    copyBtn.textContent = 'Copy failed — select manually';
  }
  setTimeout(() => (copyBtn.textContent = 'Copy to clipboard'), 1800);
});
