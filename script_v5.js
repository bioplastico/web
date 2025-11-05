
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') AOS.init({ duration: 700, once: true });
  if (typeof GLightbox !== 'undefined') GLightbox({ selector: '.glightbox' });
  const btnMobile = document.getElementById('btn-mobile');
  const mobileMenu = document.getElementById('mobile-menu');
  btnMobile.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  // Smooth scrolling para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Fechar menu mobile se estiver aberto
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Adicionar animação de contador simples para números
  const animateNumbers = () => {
    const numbers = document.querySelectorAll('[data-number]');
    numbers.forEach(number => {
      const target = parseInt(number.getAttribute('data-number'));
      const increment = target / 50;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        number.textContent = Math.floor(current) + '%';
      }, 30);
    });
  };

  // Observador para animações quando elementos entram na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Se for uma seção de números, animar
        if (entry.target.querySelector('[data-number]')) {
          animateNumbers();
        }
      }
    });
  }, { threshold: 0.1 });

  // Observar elementos para animação
  document.querySelectorAll('.benefit-card, .research-card').forEach(el => {
    observer.observe(el);
  });

  // Adicionar efeito de hover nos cards
  document.querySelectorAll('.bg-gradient-to-br').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Criar ícones Lucide
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
