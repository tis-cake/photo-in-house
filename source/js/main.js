const width = $(window).width();

// // мобильное меню
// $(document).ready(function() {
//   $('.menu-toggle').click(function() {
//     $(this).toggleClass('active');
//     $('.header').toggleClass('active');
//     $("body").toggleClass('noscroll');
//   });
// });

// скользящая полоса в навигации
$(document).ready(function() {
  // if (width >= 756) {
    // let marker = $('.tab-toggle__decor-block-js');
    // let item = $('.tab-toggle__item');

    // let leftItem;
    // let widthItem = item.width();
    // let widthItemBefore = parseInt(item.css('--tab-toggle-before-width'));
    // widthItemBefore = widthItemBefore - 5;


    // item.each(function() {
    //   $(this).on('click', () => {
    //     // leftItem = $(this).position().left;
    //     // leftItem = leftItem - (widthItemBefore - widthItem) / 2

    //     // marker.css('left', leftItem);
    //     // marker.css('width', widthItemBefore);
    //   })
    // });
  // }

  let marker = $('.tab-toggle__decor-block-js');


  $('.tab-toggle__btn').on('click', function(evt) {
    evt.preventDefault();

    // показываем выбранный таб, скрываем все остальные
    let tab = $(this).closest('.tab-toggle__item');
    let id = $(this).attr('href');
    let list = $(id);

    $('.tab-toggle__item').removeClass('active');
    $('.suggestions__list').removeClass('active');

    tab.addClass('active');
    list.addClass('active');

    // рисуем белую линию под актиным табом
    hideLine(tab);
  })

  function hideLine(tab) {
    // точка left у выбранного таба
    let tabPropertyLeft;
    // ширина выбранного таба
    let tabPropertyWidth = tab.width();
    // css-переменная --tab-toggle-before-width отвечает за ширину у .tab-toggle__item::before
    let tabBeforePropertyWidth = parseInt(tab.css('--tab-toggle-before-width'));

    tabBeforePropertyWidth = tabBeforePropertyWidth - 5;

    tabPropertyLeft = tab.position().left;
    tabPropertyLeft = tabPropertyLeft - (tabBeforePropertyWidth - tabPropertyWidth) / 2

    marker.css('left', tabPropertyLeft);
    marker.css('width', tabBeforePropertyWidth);
  }
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
