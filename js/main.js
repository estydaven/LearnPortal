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

// Acccordion menu navigation
$('.accordion-parent-js').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(this).siblings('.submenu').toggleClass('open');
});