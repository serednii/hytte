

$(document).ready(function () {
  // console.log($('.main'))
  $('.form__input-location').styler();

  // // Ваш код, де ви використовуєте методи jQuery та jquery-form-styler

  $('#calendar_in').fullCalendar({
    // Опції календаря
    events: [
      // Події календаря
    ],
    select: function (start, end) {
      // currentSelectedDate = start;
      // console.log('Вибрана дата: ' + start.format() + ' до ' + end.format());
      // console.log('Вибрана дата: ' + currentSelectedDate.format());
    },
    dayNamesShort: ['s', 'm', 't', 'w', 't', 'f', 's'],
  });

  $('#calendar_out').fullCalendar({
    // Опції календаря
    events: [
      // Події календаря
    ],
    select: function (start, end) {
      // currentSelectedDate = start;
      // console.log('Вибрана дата: ' + start.format() + ' до ' + end.format());
      // console.log('Вибрана дата: ' + currentSelectedDate.format());
    },
    dayNamesShort: ['s', 'm', 't', 'w', 't', 'f', 's'],
  });









  $('.fa-address-book-o-in').on('click', function (e) { showCalendarIn(e) });
  $('.fa-address-book-o-out').on('click', function (e) { showCalendarOut(e) });

  const calendarIn = $('.calendar-check-in')
  const calendarOut = $('.calendar-check-out')



  function showCalendarIn(e) {
    e.stopPropagation()
    calendarOut.removeClass('active');
    calendarIn.toggleClass('active')
  }

  function showCalendarOut(e) {
    e.stopPropagation();
    calendarIn.removeClass('active')
    calendarOut.toggleClass('active');
  }

  // function changeInputColor(target) {
  //   const nextEl = target.nextElementSibling;
  //   nextEl.classList.toggle('white');
  // }




  //burger menu
  const body = $('body');
  const menuBtn = $('.menu__btn');
  const menuList = $('.menu__list');
  const calendarCheckIn = $('.calendar-check-in')
  const calendarCheckOut = $('.calendar-check-out')

  body.on('click', function (e) {
    removeClass()
    if (!$(e.target).closest('.calendar').length) {
      removeClassCalendar()
    }
  })

  $(document).on('keydown', function (event) {
    if (event.code == 'Escape') {
      removeClass()
      removeClassCalendar()
    }
  });

  $('.menu__btn').on('click', function (e) {
    e.stopPropagation()
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    body.toggleClass('overflow-hidden');
  });

  function removeClass() {
    menuBtn.removeClass('menu__btn--active');
    menuList.removeClass('menu__list--active');
    body.removeClass('overflow-hidden');
  }

  function removeClassCalendar() {
    calendarCheckIn.removeClass('active');
    calendarCheckOut.removeClass('active');
  }

});
