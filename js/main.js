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
  if($(this).hasClass('showed')) {
    let id = $(this).attr('data-tab'),
    content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active');
    $('.js-tab-content.active').removeClass('active');

    content.addClass('active');
    $(this).addClass('showed');
    $(this).addClass('active');
  }
  if(!$(this).hasClass('showed')) {
    $('.popup_access').css('display', 'flex');
  }

  $('.task-header').removeClass('hide');
  $('.task-content.active').removeClass('active');

  if ($('.private-cabinet').hasClass('active')) {
    $('.tab-buttons').css('display', 'none');
    $('.tab-content').addClass('open');
    $('.cabinet-menu').removeClass('hide');
  } else {
    $('.tab-buttons').css('display', 'flex');
    $('.tab-content').removeClass('open');
    $('.cabinet-menu').addClass('hide');
  }
});

$('.submenu__item-js').click(function () {
  if($(this).hasClass('showed')) {
    $(this).next().addClass('add');
    $(this).next().addClass('showed');
  }
});

$('.submenu__head').click(function (e) {
  $(this).next().children('.submenu__item_sub:first-child').addClass('add');
  $(this).next().children('.submenu__item_sub:first-child').addClass('showed');

  if($(this).parent().hasClass('showed')) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(this).addClass('showed');
    $(this).siblings('.submenu').toggleClass('open');
  }  
  if(!$(this).hasClass('showed')) {
    $('.popup_access').css('display', 'flex');
  }
});
$('.submenu__item_sub').click(function () {
  if($(this).hasClass('showed')) {
    $(this).next().addClass('add');
    $(this).next().addClass('showed');
  }
  if($(this).hasClass('submenu__item_last')) {
    $(this).parent().parent().next().addClass('add');
    $(this).parent().parent().next().addClass('showed');
  }
});

// Prev/Next Buttons

$(document).ready(() => {
  $('.js-btn-next').click(function () {
    
    if (!$('.js-next').last().hasClass('active')) {
      $('.active').removeClass('active').next().addClass('active');

      // if (!$('.submenu__item:last-child').hasClass('add')) {        
      //   $('.submenu__item:last-child').parent().next('.tab-header__item').removeClass('active');
      // } else {
      //   $('.submenu__item:last-child').parent().next('.tab-header__item').addClass('active');
      // }
      
      if($('.active').hasClass('accordion-parent-js')) {
        $('.active').addClass('open');
        $('.active').next('.submenu').addClass('open');
        $('.active').next('.submenu').addClass('active');
      }
      if($('.active').hasClass('submenu__item')) {
        $('.active').children('.submenu').addClass('showed');
        $('.active').children('.submenu').addClass('open');
        $('.active').next('.submenu__head').addClass('open');
        $('.active').next('.submenu__head').addClass('showed');
        $('.active').addClass('showed');
        $('.active').addClass('add');
      }
      if($('.submenu').hasClass('open')) {
        $('.submenu__item_sub:first-child').addClass('showed');
        $('.submenu__item_sub:first-child').addClass('add');
        $('.submenu__item_sub:first-child').addClass('active');
      }
    }
  });
  $('.js-btn-prev').click(function () {
    if (!$('.js-next').first().hasClass('active')) {
      $('.active').removeClass('active').prev().addClass('active');

      if($('.active').hasClass('accordion-parent-js')) {
        $('.active').addClass('open');
        $('.active').prev('.submenu').addClass('open');
        $('.active').prev('.submenu').addClass('active');
      }
      if($('.active').hasClass('submenu__item')) {
        $('.active').children('.submenu').addClass('showed');
        $('.active').children('.submenu').addClass('open');
        $('.active').prev('.submenu__head').addClass('open');
        $('.active').prev('.submenu__head').addClass('showed');
        $('.active').addClass('showed');
        $('.active').addClass('add');
      }
      if($('.submenu').hasClass('open')) {
        $('.submenu__item_sub:first-child').addClass('showed');
        $('.submenu__item_sub:first-child').addClass('add');
        $('.submenu__item_sub:first-child').addClass('active');
      }
    }
  });
})

// Acccordion menu navigation

$('.accordion-parent-js').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('open');
  $(this).addClass('showed');
  $(this).siblings('.submenu').toggleClass('open');
});

// Search

$('.search__icon').on('click', function () {
  $('.search').toggleClass('open');
  $('.search__field').toggleClass('hide');
});

// Popup shot and task
// TODO: Поменять цвет кнопки "Отправить скрин о просмотре" при отправке скринов

const videoButtons = document.querySelectorAll('.video__button');
const popupShot = document.querySelector('.popup_shot');
const popupAccess = document.querySelector('.popup_access');
const closeButtonAccess = document.querySelector('.popup__close_access');
const closeButtonShot = document.querySelector('.popup__close_shot');
const closeButtonTask = document.querySelector('.popup__close_task');
const noScreensBtn = document.querySelector('.no-screans');
const addScreensBtn = document.querySelector('.add-screans');
const taskButton = document.querySelector('.task-button');
const fileFormTitle = document.querySelector('.file-form__title');
const fileComment = document.querySelector('.file-form__comment');
const fileContent = document.querySelector('.file-form__content');
const fileFormButtons= document.querySelector('.file-form__buttons');
const fileFormTextarea = document.querySelector('.file-form__textarea');
const popupWrapper = document.querySelector('.popup__wrapper');
const popupTitle = document.querySelector('.popup__title_shot');
const buttonVideo = document.querySelector('.gallery-files__btn_video');
const buttonTask = document.querySelector('.gallery-files__btn_task');
const gallery = document.getElementById('gallery');
const galleryButton = document.querySelector('.gallery-files__button-js');
const buttonTaskSend = document.querySelector('.gallery-files__button_task');
const body = document.body;

function showCommentPopup() {
  fileComment.classList.remove('hide');
  fileFormButtons.classList.add('hide');
  const fileForm = document.querySelector('.file-form');
  fileForm.style.display = 'block';
  fileForm.style.width = '100%';
  //const galleryBlocks = document.querySelectorAll('.gallery-files__block');
  //galleryBlocks.forEach(block => block.classList.add('gallery-files__block_min'));
  fileContent.classList.add('hide');
  fileContent.classList.add('file-form__content_mrg');
  fileFormTitle.innerHTML = 'Комментарий и скриншоты';
  buttonTaskSend.innerHTML = 'Отправить';
  buttonTaskSend.classList.add('button-send');

  const bthTaskSend = document.querySelector('.button-send');
  bthTaskSend.addEventListener('click', resetPopupShot);
}

function showPopupShot() {
  popupShot.style.display = 'flex';
  body.style.overflow = 'hidden';
}

function resetPopupShot() {  
  popupShot.style.display = 'none';
  body.style.overflow = 'auto';
  const galleryBlocks = document.querySelectorAll('.gallery-files__block');
  fileContent.classList.remove('hide');
  galleryBlocks.forEach(block => block.remove());
  dropArea.classList.remove('open');
  galleryButton.style.display = 'none';
  popupWrapper.classList.remove('popup-task');
  buttonVideo.classList.remove('hide');
  buttonTask.classList.add('hide');
  fileFormButtons.classList.remove('hide');
  fileFormTitle.innerHTML = 'Вставь комментарий и скриншоты о выполнении задачи №1';
  buttonTaskSend.innerHTML = 'Отправить скрины';
  fileFormTextarea.value = '';
  fileContent.classList.remove('file-form__content_mrg');
}

function closePopupAccess() {
  popupAccess.style.display = 'none';
  body.style.overflow = 'auto';
}

function showScreensTask() {
  fileComment.classList.add('hide');
  fileContent.classList.remove('hide');
  popupWrapper.classList.remove('popup__wrapper_task');
  popupTitle.innerHTML = 'Вставь комментарии и скрины о выполнении задачи';
  const buttonSend = document.querySelector('.gallery-files__button');
  buttonSend.setAttribute('data-sendData', 6);
}

videoButtons.forEach(btn => btn.addEventListener('click', () => {
  showPopupShot();
  const btnData = btn.dataset.buttonid;
  const buttonSend = document.querySelector('.gallery-files__button');
  buttonSend.setAttribute('data-sendData', btnData);
  fileComment.classList.add('hide');
  popupWrapper.classList.remove('popup__wrapper_task');
}));

closeButtonShot.addEventListener('click', resetPopupShot);
closeButtonAccess.addEventListener('click', closePopupAccess);
taskButton.addEventListener('click', () => {
  showPopupShot();
  fileComment.classList.remove('hide');
  fileContent.classList.add('hide');
  popupWrapper.classList.add('popup__wrapper_task');
  popupWrapper.classList.add('popup-task');
});

noScreensBtn.addEventListener('click', resetPopupShot);
addScreensBtn.addEventListener('click', showScreensTask);
galleryButton.addEventListener('click', resetPopupShot);
buttonTaskSend.addEventListener('click', showCommentPopup);

// ************************ Drag and drop ***************** //
let dropArea = document.querySelector(".drop-area");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
})

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight(e) {
  dropArea.classList.add('highlight');
}

function unhighlight(e) {
  dropArea.classList.remove('highlight');
}

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  files = [...files];
  uploadFiles(files);
  files.forEach(previewFile);
}

function previewFile(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    if (dropArea.classList.contains('popup-task')) {
      buttonVideo.classList.add('hide');
      buttonTask.classList.remove('hide');
      buttonTaskSend.style.display = 'block';
    } else {
      galleryButton.style.display = 'block';
    }

    dropArea.classList.add('open');

    let divImage = document.createElement('div');
    divImage.className = 'gallery-files__block';
    let imageTrash = document.createElement('div');
    imageTrash.className = 'gallery-files__trash';
    let img = document.createElement('img');
    img.className = 'gallery-files__image';
    img.src = reader.result;
    gallery.appendChild(divImage).appendChild(img);
    divImage.appendChild(imageTrash);

    let galleryBlocks = document.querySelectorAll('.gallery-files__block');
    for (let i = 0; i < galleryBlocks.length; i++) {
      if (galleryBlocks.length > 1) {
        fileContent.classList.add('hide');
      }
    }
    galleryBlocks.forEach(el => el.addEventListener('click', function () {
      this.remove();
      fileContent.classList.remove('hide');      
    }));
  }
}

function uploadFiles(files) {
  let url = '';
  let xhr = new XMLHttpRequest();
  let formData = new FormData();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  formData.append('file', files);
  xhr.send(formData);
}

// Timer

let time = 1800;
let intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;
  let mins = Math.floor(time / 60);
  let secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  $(".timer__time").html(mins + ':' + secs);
}

// Quiz

// TODO: Скорректировать сброс счетчика, и возможно, чекбоксов!!! Сделать сброс теста при успешном прохождении и переходе на следующую тему

const answers = document.querySelectorAll('.answer__radio');
const answerTitle = document.querySelectorAll('.quiz__title');
const quizButton = document.querySelector('.quiz-submit');
const quizResultCorrect = document.querySelector('.quiz-result_correct');
const quizResultInorrect = document.querySelector('.quiz-result_incorrect');
const quizResultFail = document.querySelector('.quiz-result_fail');
const timerTime = document.querySelector('.timer__time');
const quizButtonIncorrect = document.querySelector('.quiz-button_incorrect');
const quizButtonStart = document.querySelector('.quiz-preview__button');
const articleWrapper = document.querySelector('.article__wrap');
const quizLength = document.querySelectorAll('.quiz-questions');
const quizTextCorrect = document.querySelector('.quiz-text_correct');
const quizTextFail = document.querySelector('.quiz-text_fail');
const qiuzPreviewWrapper = document.querySelector('.quiz-preview');
let score = 0;
let trying = 0;

function startQuiz() {
  start_timer();
  articleWrapper.style.display = 'flex';
  qiuzPreviewWrapper.classList.add('hide');
}

function showResult() {
  for (let radio of answers) {
    if (radio.checked && radio.value == '1') {
      score++;      
    }    
  }

  for (let quest of quizLength) {
    quest.innerText = answerTitle.length;
  }
  
  if (score >= 2) {
    quizResultCorrect.classList.remove('hide');
    quizButton.style.display = 'none';
    quizTextCorrect.innerText = score;
    time = 1800;
    clearInterval(intr);
    timerTime.innerText = '10:00';
  }
  if (score < 2) {
    quizResultInorrect.classList.remove('hide');
    quizButton.style.display = 'none';
    quizTextFail.innerText = score;
    time = 1800;
    clearInterval(intr);
    timerTime.innerText = '10:00';
  }
}

function restartQuiz() {
  score = 0;
  start_timer();
  quizButton.style.display = 'block';
  quizResultInorrect.classList.add('hide');
  quizResultCorrect.classList.add('hide');
  trying++;

  if (trying == 3) {
    quizButton.style.display = 'none';
    quizResultFail.classList.remove('hide');
    time = 1800;
    clearInterval(intr);
  }
}

quizButtonStart.addEventListener('click', startQuiz);
quizButton.addEventListener('click', showResult);
quizButtonIncorrect.addEventListener('click', restartQuiz);

// Tasks script

$('.task-header').click(function () {
  let id = $(this).attr('data-task'),
    content = $('.task-content[data-task="' + id + '"]');

  $('.task-header').addClass('hide');
  $('.task-content.active').removeClass('active');
  content.addClass('active');
});