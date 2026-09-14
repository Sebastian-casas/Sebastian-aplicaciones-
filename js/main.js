document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var WHATSAPP_NUMBER = '56991395424';

  /* ---------- Header scroll shadow ---------- */
  var header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    toggleBackTop();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  navToggle.addEventListener('click', function () {
    header.classList.toggle('nav-open');
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('nav-open');
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll('a'));
  function setActiveLink() {
    var scrollPos = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current.id);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Back to top ---------- */
  var backTop = document.getElementById('backTop');
  function toggleBackTop() {
    backTop.classList.toggle('show', window.scrollY > 500);
  }
  backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Animated counters (hero + stats band) ---------- */
  function animateCounter(el) {
    var raw = el.textContent.trim();
    var match = raw.match(/^([^\d]*)(\d[\d.]*)(.*)$/);
    if (!match) return;
    var prefix = match[1];
    var numberPart = match[2];
    var suffix = match[3];
    var hasThousands = numberPart.indexOf('.') > -1 && numberPart.length > 3;
    var target = parseInt(numberPart.replace(/\./g, ''), 10);
    if (isNaN(target)) return;
    var duration = 1200;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(target * eased);
      var display = hasThousands ? value.toLocaleString('es-CL') : String(value);
      el.textContent = prefix + display + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + numberPart + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  var counterEls = document.querySelectorAll('.hero-stats b');
  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(function (el) { counterObserver.observe(el); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll(
    '.service-card, .reason-item, .gallery-item, .testi-card'
  );
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      revealObserver.observe(el);
    });
  }

  /* ---------- Parallax (decorative elements only) ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if (!reduceMotion && parallaxEls.length) {
    var parallaxTicking = false;
    function updateParallax() {
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var factor = parseFloat(el.getAttribute('data-parallax')) || 0;
        var rect = el.getBoundingClientRect();
        var center = rect.top + rect.height / 2;
        var offset = (center - vh / 2) * factor;
        el.style.setProperty('--py', offset.toFixed(1) + 'px');
      });
      parallaxTicking = false;
    }
    function onScrollParallax() {
      if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
      }
    }
    window.addEventListener('scroll', onScrollParallax, { passive: true });
    window.addEventListener('resize', onScrollParallax);
    updateParallax();
  }

  /* ---------- Contact form -> WhatsApp ---------- */
  var form = document.getElementById('quoteForm');
  var successBox = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var data = {
      nombre: form.nombre.value.trim(),
      empresa: form.empresa.value.trim(),
      telefono: form.telefono.value.trim(),
      email: form.email.value.trim(),
      servicio: form.servicio.value,
      mensaje: form.mensaje.value.trim()
    };

    var lines = [
      'Hola SATI, quiero solicitar una cotización:',
      'Nombre: ' + data.nombre,
      data.empresa ? 'Empresa: ' + data.empresa : null,
      'Teléfono: ' + data.telefono,
      'Correo: ' + data.email,
      'Servicio: ' + data.servicio,
      'Detalle: ' + data.mensaje
    ].filter(Boolean);

    var text = encodeURIComponent(lines.join('\n'));
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text;

    successBox.classList.add('show');
    window.open(url, '_blank', 'noopener');
    form.reset();

    setTimeout(function () {
      successBox.classList.remove('show');
    }, 8000);
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});
