document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  var mobileToggle = document.querySelector('.mobile-toggle');
  var navMenu = document.querySelector('.nav-menu');
  var navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Contact Email Button Handler
  var emailBtn = document.getElementById('email-btn');
  if (emailBtn) {
    emailBtn.addEventListener('click', function () {
      window.location.href = emailBtn.href;
    });
  }

  // Render Projects from Data Structure
  renderProjectsSection();
});

/**
 * Escapes HTML characters to prevent XSS.
 * @param {string} str 
 * @returns {string}
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
 * Renders project cards dynamically from the PROJECTS_DATA configuration.
 * To update projects or add the Campus Lost & Found repository URL,
 * edit projects-data.js.
 */
function renderProjectsSection() {
  var projectsContainer = document.getElementById('projects-grid');
  if (!projectsContainer) return;

  var data = (typeof window !== 'undefined' && window.PROJECTS_DATA) ? window.PROJECTS_DATA : (typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA : null);
  if (!data || !Array.isArray(data) || data.length === 0) return;

  var cardsHtml = data.map(function (project) {
    // Status badge configuration
    var statusBadgeHtml = '';
    if (project.status && project.status.label) {
      var statusTypeClass = project.status.type === 'in-development' ? 'status-in-development' : 'status-featured';
      statusBadgeHtml = 
        '<span class="project-status-badge ' + statusTypeClass + '">' +
          '<span class="status-indicator"></span>' +
          escapeHtml(project.status.label) +
        '</span>';
    }

    // Subtitle if available
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

    // Repository action button or pending placeholder
    var footerActionHtml = '';
    var hasValidRepo = project.repoUrl && typeof project.repoUrl === 'string' && project.repoUrl.trim() !== '';

    if (hasValidRepo) {
      footerActionHtml = 
        '<a href="' + escapeHtml(project.repoUrl.trim()) + '" target="_blank" rel="noopener noreferrer" class="btn btn-project-repo" aria-label="View ' + escapeHtml(project.title) + ' repository on GitHub (opens in a new tab)">' +
          '<svg class="icon-github" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">' +
            '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>' +
          '</svg>' +
          '<span>View Repository</span>' +
          '<svg class="icon-external" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>' +
            '<polyline points="15 3 21 3 21 9"></polyline>' +
            '<line x1="10" y1="14" x2="21" y2="3"></line>' +
          '</svg>' +
        '</a>';
    } else {
      footerActionHtml = 
        '<div class="project-action-placeholder">' +
          '<span class="action-status-pill">' +
            '<span class="status-indicator"></span>' +
            'Repository Setup In Progress' +
          '</span>' +
        '</div>';
    }

    return (
      '<article class="project-card ' + (project.status && project.status.type === 'in-development' ? 'card-in-development' : 'card-featured') + '" data-project-id="' + escapeHtml(project.id) + '">' +
        '<div class="project-header-row">' +
          '<span class="project-icon-badge" aria-hidden="true">' + (project.icon || '📁') + '</span>' +
          '<div class="project-badges">' +
            statusBadgeHtml +
          '</div>' +
        '</div>' +
        '<div class="project-body">' +
          '<div class="project-title-group">' +
            '<h3 class="project-title">' + escapeHtml(project.title) + '</h3>' +
            subtitleHtml +
          '</div>' +
          '<p class="project-desc">' + escapeHtml(project.description) + '</p>' +
          '<div class="project-tags" aria-label="Technologies used">' +
            tagsHtml +
          '</div>' +
        '</div>' +
        '<div class="project-footer">' +
          footerActionHtml +
        '</div>' +
      '</article>'
    );
  }).join('');

  projectsContainer.innerHTML = cardsHtml;
}
