const track = document.querySelector('.team-track');
const next = document.getElementById('nextBtn');
const prev = document.getElementById('prevBtn');

let index = 0;
const cardWidth = 310;

function slide() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

next.onclick = () => {
  index++;
  if (index > track.children.length - 1) index = 0;
  slide();
};

prev.onclick = () => {
  index--;
  if (index < 0) index = track.children.length - 1;
  slide();
};

setInterval(() => {
  next.click();
}, 5000);
