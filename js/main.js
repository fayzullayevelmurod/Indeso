document.addEventListener('DOMContentLoaded', function () {
  "use strict";
  // header
  const openHeaderMenu = document.querySelector('.open-menu__btn');
  const closeMenuBtn = document.querySelector('.close-menu');
  const headerMenu = document.querySelector('.header-right__box');

  openHeaderMenu.addEventListener('click', () => {
    headerMenu.classList.add('show');
    document.body.classList.add('no-scroll');
  })
  closeMenuBtn.addEventListener('click', () => {
    headerMenu.classList.remove('show');
    document.body.classList.remove('no-scroll');
  })

  var swiper = new Swiper('.our-services__swiper', {
    slidesPerView: 3.6,
    spaceBetween: 30,
    speed: 700,
    navigation: {
      nextEl: '.our-services__swiper-next-btn',
      prevEl: '.our-services__swiper-prev-btn',
    },
    scrollbar: {
      el: '.our-services__slider-scroll-bar',
      hide: false,
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      850: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.6,
        spaceBetween: 30,
      },
    }
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
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 1.8,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1110: {
        slidesPerView: 3,
        spaceBetween: 130,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 130,
      },
    }
  });


  // accordion
  const accordionsContainer = document.querySelectorAll('.accordions');

  if (accordionsContainer) {
    accordionsContainer.forEach((container) => {
      const accordions = container.querySelectorAll('.accordion');

      const firstAccordionContent = accordions[0].querySelector('.accordion-wrapper');
      const firstAccordionHeader = accordions[0].querySelector('.accordion-header');
      if (firstAccordionContent) {
        firstAccordionContent.style.maxHeight = firstAccordionContent.style.maxHeight ? null : firstAccordionContent.scrollHeight + 'px';
        firstAccordionHeader.classList.add('active');
      }
      accordions.forEach((accordion) => {
        const accordionHeader = accordion.querySelector('.accordion-header');
        const accordionContent = accordion.querySelector('.accordion-wrapper');


        accordionHeader.addEventListener('click', () => {

          accordions.forEach((otherAccordion) => {
            const otherHeader = otherAccordion.querySelector('.accordion-header');
            const otherContent = otherAccordion.querySelector('.accordion-wrapper');

            if (otherAccordion !== accordion) {
              otherContent.style.maxHeight = null;
              otherHeader.classList.remove('active')
            }
          });
          accordionContent.style.maxHeight = accordionContent.style.maxHeight ? null : accordionContent.scrollHeight + 'px';
          accordionHeader.classList.toggle('active');
        });
      });
    });
  }
  let marketSwiper = new Swiper('.market-analysis__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.market-analysis__swiper-next',
      prevEl: '.market-analysis__swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}">01</span>
                <span> / </span>
                <span class="${totalClass}">0${this.slides.length}</span>`;
      }
    },
    on: {
      init: function () { // Sahifa yuklanganda bir martalik chiqarish
        const paginationEl = document.querySelector('.swiper-pagination');
        const current = `0${this.realIndex + 1}`.slice(-2);
        const total = `0${this.slides.length}`.slice(-2);
        paginationEl.innerHTML = `<span class="swiper-pagination-current">${current}</span> <span> / </span> <span class="swiper-pagination-total">${total}</span>`;
      },
      slideChange: function () { // Slide change bo‘lganda ham chiqarish
        const paginationEl = document.querySelector('.swiper-pagination');
        const current = `0${this.realIndex + 1}`.slice(-2);
        const total = `0${this.slides.length}`.slice(-2);
        paginationEl.innerHTML = `<span class="swiper-pagination-current">${current}</span> <span> / </span> <span class="swiper-pagination-total">${total}</span>`;
        if (this.slides.length == this.realIndex + 1) {
          document.querySelector('.market-analysis').classList.add('active');
        } else {
          document.querySelector('.market-analysis').classList.remove('active');
        }
      }
    }
  });
  var swiper = new Swiper('.client-results__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 700,
    scrollbar: {
      el: '.client-results__swiper-scrollbar',
      hide: false,
      draggable: true,
    },
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
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1110: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });

  function updateOpacity() {
    // Barcha slaydlarni olish
    var slides = document.querySelectorAll('.client-results__swiper .swiper-slide');
    var activeIndex = swiper.activeIndex;
    var slidesPerView = swiper.params.slidesPerView;

    // Barcha slaydlarning opacity ni boshlang'ich holatga qaytarish
    slides.forEach(function (slide, index) {
      if (index >= activeIndex - 1 && index < activeIndex + slidesPerView + 1) {
        // Hozirgi ko'rinayotgan va unga yaqin slaydlar
        // slide.style.opacity = '1';
        slide.classList.remove('opacity-slider');
      } else {
        // Ko'rinmayotgan slaydlar
        // slide.style.opacity = '0.5';
        slide.classList.add('opacity-slider');
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
    breakpoints: {
      0: {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1110: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });
  var articlesSwiper2 = new Swiper('.articles-swiper__two', {
    slidesPerView: 3,
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
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 2.1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
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
  if (modal) {
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
  }

  //
  try {
    var swiper = new Swiper('.business-analytics__swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: '.business-analytics__swiper-next',
        prevEl: '.business-analytics__swiper-prev',
      },
      pagination: {
        el: '.business-analytics__pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}">01</span>
                  <span> / </span>
                  <span class="${totalClass}">0${this.slides.length}</span>`;
        }
      },
      on: {
        init: function () {
          const paginationEl = document.querySelector('.business-analytics__pagination');
          const current = `0${this.realIndex + 1}`.slice(-2);
          const total = `0${this.slides.length}`.slice(-2);
          paginationEl.innerHTML = `<span class="swiper-pagination-current">${current}</span> <span> / </span> <span class="swiper-pagination-total">${total}</span>`;
        },
        slideChange: function () {
          const paginationEl = document.querySelector('.business-analytics__pagination');
          const current = `0${this.realIndex + 1}`.slice(-2);
          const total = `0${this.slides.length}`.slice(-2);
          paginationEl.innerHTML = `<span class="swiper-pagination-current">${current}</span> <span> / </span> <span class="swiper-pagination-total">${total}</span>`;

          // Agar oxirgi slaydga yetib kelsa, 'active' klassini qo'shamiz
          if (this.slides.length === this.realIndex + 1) {
            document.querySelector('.business-analytics').classList.add('active');
            paginationEl.style.display = 'none'; // Oxirgi slaydga yetganda paginationni yashirish
          } else {
            document.querySelector('.business-analytics').classList.remove('active');
            paginationEl.style.display = 'block'; // Oxirgi slayddan qaytganda paginationni ko'rsatish
          }
        },
      }
    });
  } catch (error) {

  }
  try {
    // content-cards__swiper
    var swiper = new Swiper('.content-cards__swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.content-cards__swiper-next',
        prevEl: '.content-cards__swiper-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1180: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });
  } catch (error) {

  }

  // heart btn
  const articlesCardFooter = document.querySelectorAll('.articles-card__footer');

  if (articlesCardFooter) {
    articlesCardFooter.forEach(footer => {
      const heartBtn = footer.querySelector('.heart-btn');
      heartBtn.addEventListener('click', () => {
        heartBtn.classList.toggle('active');
      })
    })
  }


  // input box
  try {
    const inputBox = document.querySelectorAll('.input-box');
    if (inputBox) {
      inputBox.forEach(item => {
        const input = item.querySelector('.input-box__input');
        const label = item.querySelector('.input-box__label');

        // Focus event: inputga focus tushganda active class qo'shish
        input.addEventListener('focus', () => {
          label.classList.add('active');
        });

        // Blur event: inputdan focus olinganda active classni olib tashlash
        input.addEventListener('blur', () => {
          if (input.value.trim() === '') { // Agar qiymat kiritilmagan bo'lsa
            label.classList.remove('active');
          }
        });

        // Change event: qiymat kiritilganda active class doimiy qoladi
        input.addEventListener('change', () => {
          if (input.value.trim() !== '') {
            label.classList.add('active');
          }
        });
      });
    }
  } catch (error) {

  }

  // input mask
  const numberInputs = document.querySelectorAll('.number-input');
  if (numberInputs) {
    numberInputs.forEach(input => {
      IMask(input, {
        mask: '+{7}(000)000-00-00'
      });
    });
  }

});


try {
  document.querySelectorAll('.more-comment__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Tugma ostidagi barcha child-comment elementlarini olamiz
      let sibling = this.nextElementSibling;

      // Sibling elementlarni child-comment ekanligini tekshirib, toggle qilamiz
      while (sibling && sibling.classList.contains('child-comment')) {
        sibling.classList.toggle('hide');
        sibling = sibling.nextElementSibling; // Keyingi aka-uka elementga o'tamiz
      }

      // Tugma ichidagi span elementini topamiz va matnini o'zgartiramiz
      const span = this.querySelector('span');
      if (span.textContent.trim() === "Свернуть ветку") {
        span.textContent = "Развернуть ветку";
      } else {
        span.textContent = "Свернуть ветку";
      }
    });
  });
} catch (error) {

}

// JavaScript yordamida accordionni boshqarish
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function () {
    const item = this.parentElement;

    // Faqat mobilda accordionni yoqish
    if (window.innerWidth <= 768) {
      item.classList.toggle('active');
    }
  });
});




var swiper = new Swiper('.market-challenges__swiper-two', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  scrollbar: {
    el: '.market-challenges__swiper-scroll-bar',
    hide: false,
    draggable: true,
  },
  freeMode: true,
});


/// reviews-swiper
var reviewsSwiper = new Swiper('.reviews-swiper__top', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.reviews-swiper__next',
    prevEl: '.reviews-swiper__prev',
  },
  initialSlide: 2,
});
var reviewsSwiperBottom = new Swiper('.reviews-swiper__bottom .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 2,
  thumbs: {
    swiper: reviewsSwiper,
  },
});

reviewsSwiper.on('slideChange', function (e) {
  reviewsSwiperBottom.slideTo(reviewsSwiper.realIndex)
});

try {
  // Elementlarni olish
  const dropdown = document.querySelector('.article-nav__dropdown');
  const selectedBox = dropdown.querySelector('.selected-box');
  const selectedText = dropdown.querySelector('.selected-text');
  const options = dropdown.querySelector('.options');
  const optionItems = options.querySelectorAll('.option');

  // Ochish va yopish uchun funksiyalar
  const toggleDropdown = () => {
    options.classList.toggle('show');
  };

  const closeDropdown = () => {
    options.classList.remove('show');
  };

  // Dropdownni bosilganda ochish/yopish
  selectedBox.addEventListener('click', (event) => {
    event.stopPropagation(); // To prevent closing immediately
    toggleDropdown();
  });

  // Option bosilganda tanlash va textcontentni o'zgartirish
  optionItems.forEach(option => {
    option.addEventListener('click', (event) => {
      event.stopPropagation();
      selectedText.textContent = option.textContent;
      closeDropdown();
    });
  });

  // Optionsdan tashqari boshqa joyni bosganda yopish
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }
  });
} catch (error) {

}
