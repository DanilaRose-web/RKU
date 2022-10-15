/**
 * Импорт модулей
 */
import * as testWebp from "./modules/addWebpInCss.js";
testWebp.isWebp();



/**
 * маска для телефона 
 */

var elements = document.querySelectorAll('input[type=tel]');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7}(000)000-00-00',
  });
}




/**
 * Главный слайдер
 */
$(function() {
   $('.main-slider').slick({
      dots: true,
      prevArrow: '<button class=" prev"><svg><use xlink:href="../img/svg-sprite.svg#icon-arrow-left"></use></svg></button>',
      nextArrow: '<button class=" next"><svg><use xlink:href="../img/svg-sprite.svg#icon-arrow-right"></use></svg></button>',
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: true,
      fade: true,
      speed: 800,
      // autoplay: true,
      autoplaySpeed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      waitForAnimate: false,
      responsive: [
      ]
   })
})


/**
 * Инициализация слайдера в секции application
 */
$(window).on('load', function() {
      $('.app-sl-main').slick({
         arrows: true,
         prevArrow: '<button class="dcut-slider-arrow prev"><svg><use xlink:href="../img/svg-sprite.svg#icon-arrow-left"></use></svg></button>',
         nextArrow: '<button class="dcut-slider-arrow next"><svg><use xlink:href="../img/svg-sprite.svg#icon-arrow-right"></use></svg></button>',
         dots: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: false,
         fade: true,
         speed: 10,
         adaptiveHeight: true,
         infinite: true,
         waitForAnimate: false
      })

   
      /**
       * Слайдер в модальном окне
       */
      $('.popup-sl').slick({
         arrows: true,
         prevArrow: '<button class="dcut-slider-arrow prev"><svg><use xlink:href="../img/svg-sprite.svg#icon-arrow-left"></use></svg></button>',
         nextArrow: '<button class="dcut-slider-arrow next"><svg><use xlink:href="../img/svg-sprite.svg#icon-arrow-right"></use></svg></button>',
         dots: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: false,
         fade: true,
         speed: 800,
         adaptiveHeight: true,
         infinite: true,
      })

   
   $('.popup-sl').slick('setPosition').slick();
   $('.app-sl-main').slick('setPosition').slick();
})


/**
 * Переключение .slide-name и .app-info в слайдере "применение"
 */
$('.app-info').not(':first').hide()
$('.app-sl').on('afterChange', function (event, slick, currentSlide, nextSlide) {
   $('.slide-names').removeClass('active')
   $('.app-info').hide()
   let getRelSlide = $('.app-sl .slick-current .slide').attr('data-rel')
   $("[id='" + getRelSlide + "']").addClass('active')
   $("[rel='" + getRelSlide + "']").fadeIn()
});


$('.app-sl .slide').on('click', function () {
   $('.popup-sl').slick('setPosition')
   $('.popup-modal').addClass('show')
   $('.popup-modal-window').addClass('show')
   $('.popup-overlay').addClass('show')
   $('body').addClass('hidden')
   $('.popup-sl').slick('setPosition').slick();
})

$('.popup-overlay').on('click', function () {
   $('.popup-modal').removeClass('show')
   $('.popup-modal-window').removeClass('show')
   $(this).removeClass('show')
   $('body').removeClass('hidden')
})



/**
 * анимация .slide-name в слайдере "применение"
 */
window.addEventListener('resize', function () {
   appSlHover()
})
appSlHover()


function appSlHover() {
   if (window.innerWidth >= 980) {
      $('.app-sl').on('mouseover', function () {
         $('.slide-names').addClass('hover')
      })
      $('.app-sl').on('mouseleave', function () {
         $('.slide-names').removeClass('hover')
      })
   } else {
      $('.slide-names').removeClass('hover')
   }
}



/**
 * Плавающий header
 */
$(document).ready(function () {
   var HeaderTop = $('header').offset().top;
   var headerHeight = $('header').height()
   $(window).scroll(function () {
      if ($(window).scrollTop() > headerHeight + 100 ) {
         $('header').addClass('fixed');
         $('header').removeClass('absolute');
      } else {
         $('header').removeClass('fixed');
         $('header').addClass('absolute');
      }
   });
});



/**
 * Открытие/Закрытие мобильного меню
 */

function OpenMobileMenu(burgerIcon, overlay, mobileMenu) {
   $(burgerIcon).on('click', function () {
      $(mobileMenu).toggleClass('show')
      $(overlay).toggleClass('show')
      $('body').toggleClass('hidden')
   })
}

function CloseMobileMenu(mobileMenu, overlay) {
   $(mobileMenu).removeClass('show')
   $(overlay).removeClass('show')
   $('body').removeClass('hidden')
   $('.modal-overlay').removeClass('show');
   $('.wrap-modal').removeClass('show');
   $('.modal-window').removeClass('show');
   $('body').removeClass('hidden')
   $('.response-result').html('')
   $('input').val('')
   $('.message-error-phone, .message-error-name').css({ display: 'none' })
}



let openMobileMenu = new OpenMobileMenu('.burger', '.menu-overlay', '.i-mobile-menu')
let closeMobileMenu

$('.i-close').on('click', function () {
   closeMobileMenu = new CloseMobileMenu('.i-mobile-menu', '.overlay')
})

$('.close-modal').on('click', function () {
   closeMobileMenu = new CloseMobileMenu('.i-mobile-menu', '.overlay')
})

$('.mobile-navigation li').on('click', function () {
   closeMobileMenu = new CloseMobileMenu('.i-mobile-menu', '.overlay')
})

$('.overlay').on('click', function () {
   closeMobileMenu = new CloseMobileMenu('.i-mobile-menu', '.overlay')
})

document.body.onkeydown = function (e) {
   if (e.keyCode == 27)
      closeMobileMenu = new CloseMobileMenu('.i-mobile-menu', '.overlay')
};







 



/**
 * Модалка (форма)
 */

$('.request-btn').on('click', function () {
   console.log('click');
   $('.request-overlay').toggleClass('show')
   $('.request-modal').toggleClass('show')
   $('.request-modal-window').toggleClass('show')
   $('body').addClass('hidden')
   $('.request-form').css({ display: 'block' })
   $('.response-result').css({ display: 'none' })
   $('input').removeClass('error')
})

$('.request-overlay').on('click', function () {
   $('.request-overlay').removeClass('show')
   $('.request-modal').removeClass('show')
   $('.request-modal-window').removeClass('show')
   $('.input, .input-modal').removeClass('error')
   $('body').removeClass('hidden')
   $('.response-result').html('')
   $('input').val('')
   $('.message-error-phone, .message-error-name').css({ display: 'none' })
})

$('.close-modal').on('click', function () {
   $('.modal-overlay').removeClass('show')
   $('.request-modal').removeClass('show')
   $('.request-modal-window').removeClass('show')
   $('.input, .input-modal').removeClass('error')
   $('body').removeClass('hidden')
   $('.response-result').html('')
   $('input').val('')
   $('.message-error-phone, .message-error-name').css({ display: 'none' })
})




/**
 * Плавный переход по ссылкам
 */
$(function () {
   $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      // $('.top-menu-item a').removeClass('active').filter(this).addClass('active');
      var selector = $(this).attr('href');
      var h = $(selector);

      $('html, body').animate({
         scrollTop: h.offset().top - 60
      }, 300);
   });
});
 





/**
 * Отправка формы на почту
 */
$(document).ready(function () {
   $("#form-contact").submit(function () { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function () {
         alert("Спасибо, Ваши данные успешно отправлены! Мы свяжемся с Вами в ближайшее время");
         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000); 
      });
      return false;
   });
});













