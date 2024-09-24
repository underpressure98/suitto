const heroCat = document.querySelector('.hero__cat');
const tokenomicsCat = document.querySelector('.tokenomics__cat');

setInterval(() => {
  heroCat.classList.toggle('hero__cat_active');
  tokenomicsCat.classList.toggle('tokenomics__cat_active');
}, 500);
