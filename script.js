(function () {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      mainNav.classList.toggle('nav-open', !isOpen);
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
        mainNav.classList.remove('nav-open');
      });
    });
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateInput.min = localToday;
  }

  const inquiryForm = document.getElementById('inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!inquiryForm.reportValidity()) return;

      const formData = new FormData(inquiryForm);
      const details = [
        'Hello BLOOM Dental & Medical Clinic, I would like to make an enquiry.',
        '',
        'Name: ' + formData.get('name').toString().trim(),
        'Phone: ' + formData.get('phone').toString().trim(),
        'Enquiry about: ' + formData.get('service'),
        'Preferred date: ' + (formData.get('date') || 'Not specified'),
        'Preferred time: ' + formData.get('time'),
        '',
        'Message: ' + formData.get('message').toString().trim()
      ].join('\n');

      const whatsappUrl = 'https://wa.me/917028657619?text=' + encodeURIComponent(details);
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!newWindow) window.location.href = whatsappUrl;
    });
  }
})();
