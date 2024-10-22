document.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var swiper = new Swiper('.our-services__swiper', {
    slidesPerView: 3.5,
    spaceBetween: 30,
    speed: 700,
    navigation: {
      nextEl: '.our-services__swiper-next-btn',
      prevEl: '.our-services__swiper-prev-btn',
    },
  });

  //exploration-countries__swiper
  var swiper = new Swiper('.exploration-countries__swiper', {
    slidesPerView: 3,
    spaceBetween: 130,
    speed: 700,
    navigation: {
      nextEl: '.exploration-countries__swiper-next-btn',
      prevEl: '.exploration-countries__swiper-prev-btn',
    },
  });


  // accordion
  const accordionsContainer = document.querySelectorAll('.accordions'); // Bir nechta accordion bo'limlari bo'lishi mumkin

  accordionsContainer.forEach((container) => {
    const accordions = container.querySelectorAll('.accordion');

    const firstAccordionContent = accordions[0].querySelector('.accordion-content');
    const firstAccordionHeader = accordions[0].querySelector('.accordion-header');
    firstAccordionContent.classList.add('show');
    firstAccordionHeader.classList.add('active');

    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector('.accordion-header');
      const accordionContent = accordion.querySelector('.accordion-content');

      accordionHeader.addEventListener('click', () => {
        accordions.forEach((otherAccordion) => {
          const otherHeader = otherAccordion.querySelector('.accordion-header');
          const otherContent = otherAccordion.querySelector('.accordion-content');

          if (otherAccordion !== accordion) {
            otherContent.classList.remove('show');
            otherHeader.classList.remove('active');
          }
        });

        accordionContent.classList.add('show');
        accordionHeader.classList.add('active');
      });
    });
  });

  var swiper = new Swiper('.market-analysis__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.market-analysis__swiper-next',
      prevEl: '.market-analysis__swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',  // Pagination elementi
      type: 'fraction', // Pagination turini raqamli fraction qilish
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          '<span> / </span>' +
          '<span class="' + totalClass + '"></span>';
      }
    },
  });

  // market-challenges
  var swiper = new Swiper('.market-challenges__swiper', {
    slidesPerView: 3,
    spaceBetween: 105,
    speed: 700,
    // grid: {
    //   rows: 1,
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
    },
  });

  var swiper = new Swiper('.client-results__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 700,
    on: {
      slideChange: function () {
        updateOpacity();
      },
      init: function () {
        updateOpacity();
      },
      reachEnd: function () {
        resetOpacity();
      }
    }
  });

  function updateOpacity() {
    // Barcha slaydlarni olish
    var slides = document.querySelectorAll('.client-results__swiper .swiper-slide');

    // Barcha slaydlarning opacity ni boshlang'ich holatga qaytarish
    slides.forEach(function (slide, index) {
      if (index >= 4) {
        slide.style.opacity = '0.5'; // 4-chidan keyingi slaydlarni .5 qilish
      } else {
        slide.style.opacity = '1';   // 4-tagacha bo'lgan slaydlarni to'liq ko'rinishga qaytarish
      }
    });
  }

  function resetOpacity() {
    // Barcha slaydlarni olish
    var slides = document.querySelectorAll('.client-results__swiper .swiper-slide');

    // Oxirgi slaydga yetganda barcha slaydlar uchun opacity 1 qilish
    slides.forEach(function (slide) {
      slide.style.opacity = '1';
    });
  }

  // articles-swiper
  var articlesSwiper = new Swiper('.articles-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 700,
    scrollbar: {
      el: '.articles-swiper__scrollbar',
      hide: false,
      draggable: true,
    },
    navigation: {
      nextEl: '.articles-swiper__next-btn',
      prevEl: '.articles-swiper__prev-btn',
    },
  });

  // modal-swiper
  var modalSwiper = new Swiper('.modal-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 700,
    navigation: {
      nextEl: '.modal-swiper__next-btn',
      prevEl: '.modal-swiper__prev-btn',
    },
  });

  // modal
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('.open-modal');
  const closeModalBtn = document.querySelector('.modal-close');

  modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('worked');
      modal.classList.add('show');
      document.body.classList.add('no-scroll');
    });
  })
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.classList.remove('no-scroll');
  });
  modal.addEventListener('click', () => {
    if (event.target === modal) {
      modal.classList.remove('show');
      document.body.classList.remove('no-scroll');
    }
  });
});
