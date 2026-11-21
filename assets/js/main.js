/* Kyne Solutions site scripts */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');

  // Header shadow on scroll + mobile action bar
  var nav = document.querySelector('.site-nav');
  var bar = document.querySelector('.mobile-bar');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('scrolled', y > 8);
    if (bar) bar.classList.toggle('show', y > 420);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Coverage filter
  var filter = document.getElementById('locFilter');
  if (filter) {
    var items = document.querySelectorAll('[data-loc]');
    var empty = document.getElementById('locEmpty');
    filter.addEventListener('input', function () {
      var q = filter.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (it) {
        var hit = !q || it.getAttribute('data-loc').indexOf(q) > -1;
        it.classList.toggle('d-none', !hit);
        if (hit) shown++;
      });
      document.querySelectorAll('[data-region]').forEach(function (r) {
        var any = r.querySelectorAll('[data-loc]:not(.d-none)').length;
        r.classList.toggle('d-none', !any);
      });
      if (empty) empty.classList.toggle('d-none', shown > 0);
    });
  }

  // Contact form: compose an email to Kyne with the details
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
      var d = new FormData(form);
      var subject = 'Website enquiry: ' + (d.get('topic') || 'General') + ' - ' + (d.get('name') || '');
      var body = [
        'Name: ' + (d.get('name') || ''),
        'Business: ' + (d.get('business') || ''),
        'Phone: ' + (d.get('phone') || ''),
        'Email: ' + (d.get('email') || ''),
        'Topic: ' + (d.get('topic') || ''),
        'Area: ' + (d.get('area') || ''),
        '',
        d.get('message') || ''
      ].join('\n');
      window.location.href = 'mailto:' + form.getAttribute('data-to') +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var ok = document.getElementById('formSent');
      if (ok) ok.classList.remove('d-none');
    });
  }

  // Year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
