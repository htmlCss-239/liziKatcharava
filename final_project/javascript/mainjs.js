
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  if (!carousel) {
    console.error('Carousel element with id="carousel" not found.');
    return;
  }

  
  function pause() { carousel.style.animationPlayState = 'paused'; }
  function resume() { carousel.style.animationPlayState = 'running'; }

  carousel.addEventListener('mouseenter', pause);
  carousel.addEventListener('mouseleave', resume);
  carousel.addEventListener('pointerenter', pause);
  carousel.addEventListener('pointerleave', resume);


  const items = carousel.querySelectorAll('.carousel-item');
  items.forEach(item => {
    const url = item.dataset.url;
    if (!url) return;
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
     
      window.location.href = url;
    });
  });

 
  console.log('Carousel JS initialized — items found:', items.length);
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });


    document.querySelectorAll('.nav-item.dropdown').forEach(drop => {
        drop.addEventListener('click', () => {
            drop.classList.toggle('active');
        });
    });

    document.querySelectorAll('.dropdown-sub').forEach(sub => {
        sub.addEventListener('click', (e) => {
            e.stopPropagation();
            sub.classList.toggle('active');
        });
    });
});
