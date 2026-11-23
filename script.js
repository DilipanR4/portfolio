/**
 * ==========================================================================
 * DILIPAN R — PORTFOLIO SCRIPT (script.js)
 * Modern interactive features: navigation, filter tabs, project rendering,
 * smooth scrolling, and responsive drawer.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Navigation & Mobile Drawer
  initNavigation();

  // 2. Render Projects from PROJECTS_DATA
  renderProjectsSection('all');

  // 3. Project Filter Tabs
  initProjectFilters();

  // 4. Skills Filter Tabs
  initSkillFilters();

  // 5. Back to Top Button
  initBackToTop();

  // 6. Header Scroll Effect
  initHeaderScroll();

  // 7. Interactive Contact Form
  initContactForm();
});

/**
 * Navigation & Mobile Toggle Handler
 */
function initNavigation() {
  var mobileToggle = document.querySelector('.mobile-toggle');
  var navMenu = document.querySelector('.nav-menu');
  var navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = '☰';
      }
    });
  }

  // Smooth scroll and active state updates
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        var targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          var headerOffset = 70;
          var elementPosition = targetSection.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update active link
          navLinks.forEach(function (l) { l.classList.remove('active'); });
          this.classList.add('active');

          // Close mobile menu if open
          if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (mobileToggle) {
              mobileToggle.setAttribute('aria-expanded', 'false');
              mobileToggle.innerHTML = '☰';
            }
          }
        }
      }
    });
  });

  // Scroll spy to highlight active link in navigation
  if ('IntersectionObserver' in window) {
    var sections = document.querySelectorAll('section[id]');
    var observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
}

/**
 * Header background opacity on scroll
 */
function initHeaderScroll() {
  var header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Back to Top Button
 */
function initBackToTop() {
  var backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Escapes HTML characters to prevent XSS.
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Project filtering by category
 */
function initProjectFilters() {
  var filterButtons = document.querySelectorAll('.project-filter-btn');
  if (!filterButtons.length) return;

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var filterCategory = this.getAttribute('data-filter') || 'all';
      renderProjectsSection(filterCategory);
    });
  });
}

/**
 * Skill category filtering
 */
function initSkillFilters() {
  var filterButtons = document.querySelectorAll('.skill-filter-btn');
  var categoryCards = document.querySelectorAll('.skill-category-card');

  if (!filterButtons.length || !categoryCards.length) return;

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var category = this.getAttribute('data-category');

      categoryCards.forEach(function (card) {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Renders project cards from PROJECTS_DATA configuration.
 * @param {string} filterCategory - 'all' or specific category
 */
function renderProjectsSection(filterCategory) {
  var projectsContainer = document.getElementById('projects-grid');
  if (!projectsContainer) return;

  var data = (typeof window !== 'undefined' && window.PROJECTS_DATA) 
    ? window.PROJECTS_DATA 
    : (typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA : null);

  if (!data || !Array.isArray(data) || data.length === 0) return;

  // Filter projects by category
  var filteredProjects = data.filter(function (project) {
    if (!filterCategory || filterCategory === 'all') return true;
    return project.category === filterCategory;
  });

  var cardsHtml = filteredProjects.map(function (project) {
    var statusBadgeClass = project.status && project.status.type === 'in-development' 
      ? 'status-in-development' 
      : 'status-featured';

    var statusLabel = project.status ? project.status.label : 'Featured Project';

    // Subtitle
    var subtitleHtml = project.subtitle 
      ? '<p class="project-subtitle">' + escapeHtml(project.subtitle) + '</p>'
      : '';

    // Technology tags
    var tagsHtml = '';
    if (Array.isArray(project.tags)) {
      tagsHtml = project.tags.map(function (tag) {
        return '<span class="badge">' + escapeHtml(tag) + '</span>';
      }).join('');
    }

    // Repository button vs hidden/pending
    var footerActionHtml = '';
    var hasValidRepo = project.repoUrl && typeof project.repoUrl === 'string' && project.repoUrl.trim() !== '';

    if (hasValidRepo) {
      footerActionHtml = 
        '<a href="' + escapeHtml(project.repoUrl.trim()) + '" target="_blank" rel="noopener noreferrer" class="btn btn-project-repo" aria-label="View ' + escapeHtml(project.title) + ' repository on GitHub (opens in a new tab)">' +
          '<svg class="icon-github" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">' +
            '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>' +
          '</svg>' +
          '<span>GitHub Repository</span>' +
          '<svg class="icon-external" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>' +
            '<polyline points="15 3 21 3 21 9"></polyline>' +
            '<line x1="10" y1="14" x2="21" y2="3"></line>' +
          '</svg>' +
        '</a>';
    } else {
      footerActionHtml = 
        '<div class="action-status-pill">' +
          '<span class="status-indicator"></span>' +
          'Repository Setup In Progress' +
        '</div>';
    }

    return (
      '<article class="project-card" data-project-id="' + escapeHtml(project.id) + '">' +
        '<div class="project-banner-preview">' +
          '<div class="banner-icon-box">' + (project.icon || '📁') + '</div>' +
          '<div class="banner-badge-group">' +
            '<span class="project-status-badge ' + statusBadgeClass + '">' +
              '<span class="status-indicator"></span>' +
              escapeHtml(statusLabel) +
            '</span>' +
          '</div>' +
        '</div>' +
        '<div class="project-inner-content">' +
          '<div class="project-title-group">' +
            '<h3 class="project-title">' + escapeHtml(project.title) + '</h3>' +
            subtitleHtml +
          '</div>' +
          '<p class="project-desc">' + escapeHtml(project.description) + '</p>' +
          '<div class="project-tags" aria-label="Technologies used">' +
            tagsHtml +
          '</div>' +
          '<div class="project-footer">' +
            footerActionHtml +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }).join('');

  projectsContainer.innerHTML = cardsHtml;
}

/**
 * Interactive Contact Form Handler
 * Directly sends messages to Gmail via background AJAX without any redirects or Outlook popups.
 */
function initContactForm() {
  var form = document.getElementById('contact-form');
  var feedback = document.getElementById('form-feedback');
  var submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nameInput = document.getElementById('contact-name');
    var emailInput = document.getElementById('contact-email');
    var subjectInput = document.getElementById('contact-subject');
    var messageInput = document.getElementById('contact-message');

    var name = nameInput ? nameInput.value.trim() : '';
    var email = emailInput ? emailInput.value.trim() : '';
    var subject = subjectInput ? subjectInput.value.trim() : '';
    var message = messageInput ? messageInput.value.trim() : '';

    // Form validation
    if (!name || !email || !subject || !message) {
      showFeedback('Please fill out all required fields before sending.', 'error');
      return;
    }

    // Email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Please enter a valid email address (e.g. name@domain.com).', 'error');
      if (emailInput) emailInput.focus();
      return;
    }

    // Visual sending state on button
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="spin-icon" aria-hidden="true">' +
          '<path d="M21 12a9 9 0 1 1-6.219-8.56"></path>' +
        '</svg>' +
        '<span>Sending to Gmail...</span>';
    }

    showFeedback('Transmitting your message directly to Dilipan\'s inbox...', 'info');

    // Send directly in background via AJAX to Dilipan's Gmail (no redirect, no Outlook!)
    fetch('https://formsubmit.co/ajax/dilipan.r2007@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: 'Portfolio Contact from ' + name + ': ' + subject,
        subject: subject,
        message: message,
        _template: 'table',
        _captcha: 'false'
      })
    })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .then(function () {
      // Direct success without any redirect!
      showFeedback(
        '✓ Message sent directly to Dilipan\'s Gmail! Thank you, ' + escapeHtml(name) + ' — I will reply to ' + escapeHtml(email) + ' soon.',
        'success'
      );

      // Reset form fields
      form.reset();

      // Reset button to success state
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<polyline points="20 6 9 17 4 12"></polyline>' +
          '</svg>' +
          '<span>Sent Successfully!</span>';

        setTimeout(function () {
          submitBtn.innerHTML = 
            '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<line x1="22" y1="2" x2="11" y2="13"></line>' +
              '<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>' +
            '</svg>' +
            '<span>Send Another Message</span>';
        }, 3500);
      }
    })
    .catch(function () {
      // Graceful fallback to direct web Gmail compose if browser blocks the background request
      var gmailWebUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=dilipan.r2007@gmail.com&su=' + 
        encodeURIComponent(subject + ' - from ' + name) + 
        '&body=' + encodeURIComponent(message + '\n\n---\nFrom: ' + name + ' (' + email + ')');

      showFeedback(
        'Direct connection busy. <a href="' + gmailWebUrl + '" target="_blank" rel="noopener noreferrer" style="color:var(--accent-gold-light);text-decoration:underline;font-weight:700;">Click here to open and send directly via Gmail web</a>.',
        'error'
      );

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<line x1="22" y1="2" x2="11" y2="13"></line>' +
            '<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>' +
          '</svg>' +
          '<span>Retry Send</span>';
      }
    });
  });

  function showFeedback(text, type) {
    if (!feedback) return;
    feedback.className = 'form-feedback ' + type;
    feedback.innerHTML = text;
    feedback.style.display = 'flex';
  }
}
