const width = $(window).width();

// // мобильное меню
// $(document).ready(function() {
//   $('.menu-toggle').click(function() {
//     $(this).toggleClass('active');
//     $('.header').toggleClass('active');
//     $("body").toggleClass('noscroll');
//   });
// });

// показываем выбранный таб, скрываем все остальные
$(document).ready(function() {

  $('.tab-toggle__btn').on('click', function(evt) {
    evt.preventDefault();

    let tab = $(this).closest('.tab-toggle__item');
    let id = $(this).attr('href');
    let list = $(id);

    $('.tab-toggle__item').removeClass('active');
    $('.suggestions__list').removeClass('active');

    tab.addClass('active');
    list.addClass('active');

    let decorImgClass = 'tab-toggle__decor-img';
    let decorImgEl = $('.'+decorImgClass);

    let decorImgNum = parseInt(id.match(/\d+/));
    // let decorImgNum = +/\d+/.exec(id)

    // let decorImgCustomClass = decorImgClass + ' ' + decorImgClass + '--' + decorImgNum;
    // decorImgEl.removeClass();
    // decorImgEl.addClass(decorImgCustomClass);

    $('.tab-toggle__decor-image').removeClass('active');
    $('.tab-toggle__decor-image--'+decorImgNum).addClass('active');

    $(this).blur();
  })
});

// // мобильное подменю
// $(document).ready(function() {
//   if (width <= 756) {
//     $('.main-nav-sub').click(function(evt) {
//       evt.preventDefault();

//       let currentSublist = $(this).closest('.main-nav__item').find('.main-nav__sublist');
//       $('.main-nav__sublist').not(currentSublist).toggleClass('active');
//       currentSublist.toggleClass('active');

//       $('.main-nav-sub').not($(this)).toggleClass('active');
//       $(this).toggleClass('active');
//     });
//   }
// });

// // доступное навигационное меню (enter и пробел)
// $(document).ready(function() {
//   $('.main-nav-sub').on('keydown', function(evt) {
//     if (evt.keyCode === 13 || evt.keyCode === 32) {
//       evt.preventDefault();
//       let currentSublist = $(this).closest('.main-nav__item');

//       $('.main-nav__item').not(currentSublist).removeClass('selected-on-tab');
//       currentSublist.toggleClass('selected-on-tab');

//       // клик мышкой вне выпадающего меню
//       $(document).on('mouseup', function(evt) {
//         if (!currentSublist.is(evt.target) && currentSublist.has(evt.target).length === 0) {
//           currentSublist.removeClass('selected-on-tab');
//         }
//       });
//     }
//   });
// });

// // маска для поля ввода номера
// $(document).ready(function() {
//   $(".js-phone-mask").mask("+7 ( 999 ) 999 - 99 - 99");
// });

// модальные окна
// оставить заявку (модалка 1)
// $('.js-modal-callback').click(function(evt) {
//   evt.preventDefault();
//   openModal('.modal-callback', '.modal__name');
// });

// коммерческое предложение (модалка 2)
// $('.js-modal-business').click(function(evt) {
//   evt.preventDefault();
//   openModal('.modal-business', '.modal__name');
// });

// открыть модальное окно
function openModal(modalClass, focusClass) {
  $('.overlay').fadeIn();
  $('body').addClass('noscroll');
  $(modalClass).addClass('active'); // класс модального окна
  $(focusClass).focus(); // класс для фокуса
}

// закрыть модальное окно
function closeModal() {
  if ($('.modal').hasClass('active')) {
    $('.modal').removeClass('active');
    $('.overlay').fadeOut();
    $('body').removeClass('noscroll');
  }
}

// клик/тач вне модального окна -> закрыть окно
function clickOutsideModal(evt) {
  let modal = $('.modal');
  if (!modal.is(evt.target) && modal.has(evt.target).length === 0) {
    closeModal();
  }
}

// нажат esc -> закрыть окно
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    closeModal();
  }
});

// слушаем клик/тач вне модального окна
$(document).on('mouseup touchstart', clickOutsideModal);

// кнопка закрыть
$('.modal__close').click(function(evt) {
  closeModal();
});

// !NB добавить в ajax-запрос
// сообщение об успешной отправке
// showMessageAfterRequest($(this));

// // сообщение об успешной отправке в модальном окне (для пользователя)
// function showMessageAfterRequest(current) {
//   current.closest('.modal').addClass('reply');

//   setTimeout(function() {
//     closeModal();
//     $('.modal').removeClass('reply');
//   }, 3000);
// }
