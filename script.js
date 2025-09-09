// initialize variables
document.getElementById('year').innerText = new Date().getFullYear();

// Typed.js hero subtitle
const typed = new Typed('#typed', {
  strings: ['Software Enthusiast', 'Web Developer', 'Problem Solver', 'Data Analytics Intern'],
  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 2000,
  loop: true
});

// AOS init
AOS.init({
  duration: 700,
  easing: 'ease-out-quart',
  once: true
});

// small nav toggle for mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth', block:'start'});
    if(window.innerWidth < 980) { navLinks.classList.remove('open'); navToggle.classList.remove('open'); }
  });
});

// ScrollReveal subtle on project cards
ScrollReveal().reveal('.project-card', { interval: 120, distance: '20px', origin: 'bottom', opacity: 0, duration: 700 });

// Contact fallback: open mail client with populated mailto when user submits (since no backend)
function contactFallback(form){
  const name = encodeURIComponent(form.name.value || 'Guest');
  const email = encodeURIComponent(form.email.value || '');
  const message = encodeURIComponent(form.message.value || '');
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:ankitamhasade@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
