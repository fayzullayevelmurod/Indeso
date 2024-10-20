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
});
