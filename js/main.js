// TODO: Временный код, перед тем как отдать ИЗМЕНИТЬ ЕГО!!!
// let btnForm = document.querySelector('.form__button');
// let loginWrap = document.querySelector('.wrapper_login');
// let mainWrap = document.querySelector('.wrapper_main');

// btnForm.addEventListener('click', changeWrapper);

// function changeWrapper() {
// 	mainWrap.classList.remove('hide');
// 	loginWrap.classList.add('hide');
// }
// TODO: Временный код, перед тем как отдать ИЗМЕНИТЬ ЕГО!!!


// let input = document.getElementById('password-input');
// let passLink = document.querySelector('.password__control');

// passLink.addEventListener('click', (event) => {
//     if (input.getAttribute('type') == 'password') {
// 		event.target.classList.add('view');
// 		input.setAttribute('type', 'text');
// 	} else {
// 		event.target.classList.remove('view');
// 		input.setAttribute('type', 'password');
// 	}
// 	return false;
// })

// Tabs menu
$('.js-tab-trigger').click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// Prev/Next Buttons
$(document).ready(() => {
    $('.js-btn-next').click(function () {
        if (!$('.js-tab-content').last().hasClass('active')) {
            $('.active').removeClass('active').next().addClass('active')
        }
    });
    $('.js-btn-prev').click(function () {
        if (!$('.js-tab-content').first().hasClass('active')) { 
            $('.active').removeClass('active').prev().addClass('active')
        }
    });
})

// Acccordion menu navigation
$('.accordion-parent-js').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(this).siblings('.submenu').toggleClass('open');
});

// User button
$('.user-js').on('click', function () {
    $('.user__inner').toggleClass('hide');
    $('.user').toggleClass('open');
});

// Search
$('.search__icon').on('click', function () {
    $('.search').toggleClass('open');
    $('.search__field').toggleClass('hide');
});