
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') AOS.init({ duration: 700, once: true });
  if (typeof GLightbox !== 'undefined') GLightbox({ selector: '.glightbox' });
  const btnMobile = document.getElementById('btn-mobile');
  const mobileMenu = document.getElementById('mobile-menu');
  btnMobile.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  const ctx = document.getElementById('degradationChart');
  if (ctx) {
    new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['0 d','7 d','14 d','21 d','28 d','42 d'],
        datasets: [{ label: 'Perda de massa (%)', data: [0,6,15,27,39,55], fill: true, tension: 0.35, pointRadius: 3, backgroundColor: 'rgba(16,185,129,0.12)', borderColor: 'rgba(16,185,129,0.95)' }]
      },
      options: { responsive: true, plugins: { legend: { display: true } }, scales: { y: { beginAtZero: true, max: 100 } } }
    });
  }

  const sendBtn = document.getElementById('sendBtn');
  sendBtn.addEventListener('click', () => {
    const name = encodeURIComponent(document.getElementById('name').value || 'Interessado');
    const email = encodeURIComponent(document.getElementById('email').value || '');
    const message = encodeURIComponent(document.getElementById('message').value || '');
    const text = encodeURIComponent(`Olá, vim pelo site do Projeto Bioplástico.\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
    const phone = '558193121967';
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
    window.open(url, '_blank');
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
});
