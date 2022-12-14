// cursor
const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // between 0 and 1

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
};

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function loop() {
  updatePosition();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);


// Precounter
new PureCounter();

// AOS init
AOS.init();


// banner height
$(document).ready(function(){
    $('.banner').css('height', $(window).height());
    $('.banner-wrapper').css('height', $(window).height());
    // $('.banner').css('margin-top', $('nav').outerHeight()-"10px");
});
$(window).resize(function(){
    $('.banner').css('height', $(window).height());
    $('.banner-wrapper').css('height', $(window).height());
});


// about image
$(window).resize(function(){
  if($(window).width() <992){
    $('.about-image-wrapper').addClass('container');

    $('.container .story-content').removeClass('container');
  }
})

// business mobile only slider
var swiper= Swiper;
var init = false;
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.businessSlider', {
                slidesPerView: 1,
                spaceBetween: 10,
                effect:'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                centeredSlides: true,
                loop: true,
                spaceBetween: 10,
                direction: 'horizontal',

                pagination: {
                  el: ".swiper-pagination",
                  type: "progressbar",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },

                breakpoints: {

                    767: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    }

                }

            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}
window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
});


// business mobile only slider
var swiper= Swiper;
var init = false;
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.updatesSlider', {
                slidesPerView: 1,
                spaceBetween: 10,
                effect:'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                centeredSlides: true,
                loop: true,
                spaceBetween: 10,
                direction: 'horizontal',

                pagination: {
                  el: ".swiper-pagination",
                  type: "progressbar",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },

                breakpoints: {

                    767: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    }

                }

            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}
window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
});


// business mobile only slider
var swiper= Swiper;
var init = false;
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.teamMembersSlider', {
                slidesPerView: 1,
                spaceBetween: 10,
                effect:'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                centeredSlides: true,
                loop: true,
                spaceBetween: 10,
                direction: 'horizontal',

                pagination: {
                  el: ".swiper-pagination",
                  type: "progressbar",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },

                breakpoints: {

                    767: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    }

                }

            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}
window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
});



// fixed footer
function footer_behind_ctn(){
  var footerHeight = $('.footer').outerHeight();
  $('.footer-top').css('margin-bottom', footerHeight);
}
$(document).ready(footer_behind_ctn);
$(window).resize(footer_behind_ctn);


// teamSwiper
var swiper = new Swiper(".teamSwiper", {
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// historySwiper
var swiper = new Swiper(".historySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  });


