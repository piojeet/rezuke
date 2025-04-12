let menuBtn = document.querySelectorAll('.menu__humbarger');
let navList = document.querySelectorAll('.nav__list--mob');

menuBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    navList[index].classList.toggle('nav__list--active');
    btn.classList.toggle('menu__humbarger--active');
  });
});


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero__content',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
});

// Animate these together
tl.from('.hero__badge img', { scaleX: 0, opacity: 0, duration: 1, ease: 'power2.out' }, 0)
  .from('.hero__image', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' }, 0)
  .from('.hero__second-para', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' }, 0)

  // Now animate sequentially
  .from('.hero__title', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' }, 0)
  .from('.hero__desc', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' }, 0)
  .from('.hero__buttons', { y: 100, opacity: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }, 0)
  .from('.hero__logo img', { scale: 0, opacity: 0, duration: 1, ease: 'power2.out' })
  .from('.hero__clients-title', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' }, 2)
  .from('.hero__logo-item', { y: 100, opacity: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }, 2);


gsap.utils.toArray('.services__ani').forEach((box, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      start: 'top 80%',
      toggleActions: 'play none none none',
    }
  });

  tl.from(box, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: i * 0.1
    // stagger effect through index-based delay
  });

  // Skip hover for index 0
  if (i === 0) return;

  box.addEventListener('mouseenter', () => {
    gsap.to(box, {
      rotate: -2,
      transformOrigin: 'left bottom',
      backgroundColor: 'var(--btn-color)',
      color: 'var(--primery-color)',
      duration: 0.3
    });
  });

  box.addEventListener('mouseleave', () => {
    gsap.to(box, {
      rotate: 0,
      backgroundColor: '',
      color: '',
      duration: 0.3
    });
  });
});


const td = gsap.timeline({
  scrollTrigger: {
    trigger: '.process__container',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
});

td.from('.process__title', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' }, 0)
  .from('.process__subtitle', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' }, 0)
  .from('.process__step', { y: 100, opacity: 0, duration: 1, stagger: 0.1, ease: 'power2.out' })
  .from('.schedule__cta', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' })


gsap.from('.testimonials__container', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.ptestimonials__container',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})


gsap.from('.global-clients__content', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.global-clients__content',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})


gsap.from('.global-clients__image', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.global-clients__image',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})


gsap.from('.qualities__content', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.qualities__content',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})


gsap.from('.qualities__image img', {
  x: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.qualities__image',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})


gsap.from('.case-studies__header', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.case-studies__header',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})

gsap.utils.toArray('.case-studies__item').forEach((item, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none none',
    }
  });

  tl.from(item, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: i * 0.2 // staggered delay via index
  });

  item.addEventListener('mouseenter', () => {
    gsap.to(item, {
      y: -10,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  item.addEventListener('mouseleave', () => {
    gsap.to(item, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});




gsap.from('.contact-cta__container', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact-cta__container',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})

gsap.from('.contact__info', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact__info',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})

gsap.from('.qualities__list-about', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.qualities__list-about',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})

gsap.from('.contact__form-container', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact__form-container',
    start: 'top 80%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})

gsap.utils.toArray('.faq__item').forEach(item => {
  const ti= gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      toggleActions: 'play none none none',
      // markers: true
    }
  });

  ti.from(item, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });
});


gsap.from('.values__title', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.values__container',
    start: 'top 90%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})


gsap.from('.values__list', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.values__list',
    start: 'top 90%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})


gsap.from('.values__cta', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.values__cta',
    start: 'top 90%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})


gsap.utils.toArray('.stats__item, .stats__description').forEach((item, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      toggleActions: 'play none none none',
      // markers: true
    }
  });

  tl.from(item, {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: i * 0.2, // delay based on index
    ease: 'power2.out'
  });
});

gsap.from('.stats__title', {
  y: 100, opacity: 0, duration: 1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.stats__title',
    start: 'top 90%',
    toggleActions: 'play none none none',
    // markers: true,
  }
})