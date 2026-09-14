document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var WHATSAPP_NUMBER = '56991395424';
  var QUOTE_EMAIL = 'administracion@satichile.cl';

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

  /* ---------- Contact form -> Correo ---------- */
  var form = document.getElementById('quoteForm');
  var successBox = document.getElementById('formSuccess');
  var errorBox = document.getElementById('formError');
  var submitBtn = form.querySelector('button[type="submit"]');
  var submitBtnDefaultHTML = submitBtn.innerHTML;

  function mailtoFallback(data) {
    var subject = 'Solicitud de cotización — ' + data.servicio;
    var lines = [
      'Hola SATI, quiero solicitar una cotización:',
      '',
      'Nombre: ' + data.nombre,
      data.empresa ? 'Empresa: ' + data.empresa : null,
      'Teléfono: ' + data.telefono,
      'Correo: ' + data.email,
      'Servicio: ' + data.servicio,
      '',
      'Detalle:',
      data.mensaje
    ].filter(function (line) { return line !== null; });

    window.location.href = 'mailto:' + QUOTE_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(lines.join('\n'));
  }

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

    successBox.classList.remove('show');
    if (errorBox) errorBox.classList.remove('show');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando...';

    fetch('https://formsubmit.co/ajax/' + QUOTE_EMAIL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: 'Solicitud de cotización — ' + data.servicio,
        Nombre: data.nombre,
        Empresa: data.empresa || '(no indicada)',
        Teléfono: data.telefono,
        Correo: data.email,
        Servicio: data.servicio,
        Detalle: data.mensaje
      })
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Respuesta no válida del servidor');
        return res.json();
      })
      .then(function () {
        successBox.classList.add('show');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        form.reset();
      })
      .catch(function () {
        // Sin conexión al servicio de envío: abrimos el correo del
        // visitante como respaldo para que la solicitud no se pierda.
        if (errorBox) {
          errorBox.classList.add('show');
          errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        mailtoFallback(data);
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtnDefaultHTML;
      });
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});
