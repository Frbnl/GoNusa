const videos = document.querySelectorAll('.bg-video');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.querySelectorAll('.video-slide');
const titles = ['Video 1', 'Video 2', 'Video 3', 'lok4', 'lok5'];
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 10000);

const spotCards = document.querySelectorAll('.spotlight-card');
const progressBar = document.querySelector('.progress-bar');
const totalEl = document.getElementById('total');
const currentEl = document.getElementById('current');
const spotNext = document.getElementById('spot-next'); // new spotlight next
const spotPrev = document.getElementById('spot-prev'); // new spotlight prev

let spotIndex = 0;
const spotMax = spotCards.length || 1;
if (totalEl) totalEl.textContent = spotMax < 10 ? `0${spotMax}` : `${spotMax}`;

function showSpotlightSlide(i) {
  if (!spotCards.length) return;
  spotCards.forEach(c => c.classList.remove('active'));
  spotCards[i].classList.add('active');
  if (currentEl) currentEl.textContent = (i+1) < 10 ? `0${i+1}` : `${i+1}`;
  if (progressBar) progressBar.style.width = `${((i+1)/spotMax)*100}%`;
}
if (spotNext) {
  spotNext.addEventListener('click', () => {
    spotIndex = (spotIndex + 1) % spotMax;
    showSpotlightSlide(spotIndex);
  });
}
if (spotPrev) {
  spotPrev.addEventListener('click', () => {
    spotIndex = (spotIndex - 1 + spotMax) % spotMax;
    showSpotlightSlide(spotIndex);
  });
}
setInterval(() => {
  spotIndex = (spotIndex + 1) % spotMax;
  showSpotlightSlide(spotIndex);
}, 5000);

showSpotlightSlide(0);
  
