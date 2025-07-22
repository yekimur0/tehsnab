 const tbannerSwiper = new Swiper('.t-banner-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      prevEl: '.tbanner-nav .prev',
      nextEl: '.tbanner-nav .next',
    },

    pagination: {
      el: '.tbanner-pagination',
      clickable: true,
      type: 'bullets',
    },

    speed: 1500,
  });

  const tbrandSwiper = new Swiper('.tbrand-swiper', {
    spaceBetween: 10,

    navigation: {
      prevEl: '.tbrand-nav .prev',
      nextEl: '.tbrand-nav .next',
    },

    breakpoints: {
      320: {
        // Мобильные устройства
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row',
        },
        spaceBetween: 15,
      },
      768: {
        // Планшеты
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1024: {
        // Десктоп
        slidesPerView: 6,
        grid: {
          rows: 1,
        },
      },
    },

    speed: 1500,
});

 const ttrustedSwiper = new Swiper('.ttrusted-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,

    navigation: {
      prevEl: '.ttrusted-nav .prev',
      nextEl: '.ttrusted-nav .next',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },

    speed: 1500,
  });

   const tarticlesSwiper = new Swiper('.tarticles-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,

    navigation: {
      prevEl: '.tarticles-nav .prev',
      nextEl: '.tarticles-nav .next',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },

    speed: 1500,
  });

  const tpopularSwiper = new Swiper('.swiper-tpopular', {
    slidesPerView: 5,
    spaceBetween: 5,

    navigation: {
      prevEl: '.tpopular-nav .prev',
      nextEl: '.tpopular-nav .next',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      }
    },

    speed: 1500,
  });