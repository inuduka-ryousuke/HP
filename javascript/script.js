//画像をスクロール//

const images = ['img/top.jpg', 'img/top2.jpg', 'img/top3.jpg', 'img/top4.jpg'];
let current = 0;

const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
let showingFirst = true;

function changeImage() {
  current = (current + 1) % images.length;

  if (showingFirst) {
    slide2.src = images[current];
    slide2.classList.add('show');
    slide1.classList.remove('show');
  } else {
    slide1.src = images[current];
    slide1.classList.add('show');
    slide2.classList.remove('show');
  }

  showingFirst = !showingFirst;
}

setInterval(changeImage, 4000);

//フェードイン//

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate');

  const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', showOnScroll);
  showOnScroll(); 
});

//トップに戻る//

document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.getElementById('top-button');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
