let menuBtn = document.querySelectorAll('.menu__humbarger');
let navList = document.querySelectorAll('.nav__list--mob');

menuBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        navList[index].classList.toggle('nav__list--active');
        btn.classList.toggle('menu__humbarger--active');
    });
});



gsap.from('.hero__logo img', {
    scrollTrigger: {
      trigger: '.hero__content',
      start: 'top 80%',
      toggleActions: 'play none none none',
    //   markers: true,
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });
  