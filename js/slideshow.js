// Simple slideshow script with keyboard support
const images = [
  // small inline SVG placeholders — replace these with your own image paths like 'img/gus.jpg'
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'><rect fill='%23ffd6e7' width='100%25' height='100%25'/><g fill='%23ff6fa0'><circle cx='360' cy='360' r='260'/></g><text x='50%25' y='90%25' font-family='Arial' font-size='64' fill='%2399425a' text-anchor='middle'>Gus</text></svg>",
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'><rect fill='%23fff3f6' width='100%25' height='100%25'/><g fill='%23ff8fb6'><rect x='120' y='180' width='480' height='480' rx='60'/></g><text x='50%25' y='90%25' font-family='Arial' font-size='64' fill='%2399425a' text-anchor='middle'>Abby</text></svg>"
];

const imgEl = document.getElementById('slideImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let idx = 0;

function show(i){
  idx = (i + images.length) % images.length;
  imgEl.src = images[idx];
  imgEl.alt = `Slide ${idx + 1}`;
}

prevBtn.addEventListener('click', ()=> show(idx - 1));
nextBtn.addEventListener('click', ()=> show(idx + 1));

window.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowLeft') show(idx - 1);
  if(e.key === 'ArrowRight') show(idx + 1);
});

// initialize
show(0);
