document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('certificateModalImage');
  const closeButton = document.querySelector('.certificate-modal-close');

  document.querySelectorAll('.certificate-preview').forEach((preview) => {
    preview.addEventListener('click', () => {
      const img = preview.querySelector('img');
      if (!img || !modal || !modalImage) return;

      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modal.classList.add('visible');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
  };

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.dataset.close === 'true') {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('visible')) {
        closeModal();
      }
    });
  }
});
