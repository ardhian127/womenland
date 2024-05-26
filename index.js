let sky = document.getElementById("sky");
let sea = document.getElementById("sea");
let land = document.getElementById("land");
let decor = document.getElementById("decor");
let cloud = document.getElementById("cloud");
let island = document.getElementById("island");
let boat = document.getElementById("boat");
let text = document.getElementById("text");
let section = document.getElementById("content");

const image = document.querySelector(".ukiyo");
new Ukiyo(image);

let latestKnownScrollY = 0;
let ticking = false;

function onScroll() {
  latestKnownScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  let value = latestKnownScrollY;
  let windowHeight = window.innerHeight;

  if (value < windowHeight) {
    island.style.transform = `translateX(${value * -0.5}px) translateY(${value * 0.3}px)`;
    boat.style.transform = `translateX(${value * 0.5}px) translateY(${value * 0.3}px)`;
    text.style.transform = `translateY(${(value / 1.5)}px)`;
  }

  if (value < 400) {
    land.style.transform = `translateY(${(value / 2)}px)`;
    decor.style.transform = `translateY(${(value / 2)}px)`;
    sea.style.transform = `translateY(${(value / 3)}px)`;
    island.style.transform = `translateY(${(value / 3)}px)`;
    boat.style.transform = `translateY(${(value / 3)}px)`;
    section.style.top = Math.floor(land.offsetHeight + (value / 2)) + 'px';
  }

  // Fade-in effect
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight) {
      element.classList.add('visible');
    }
  });

  ticking = false;
}

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
