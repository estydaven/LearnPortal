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

// Prev/Next Buttons
$(document).ready(() => {
  $('.js-btn-next').click(function () {
    if (!$('.js-tab-content').last().hasClass('active')) {
      $('.active').removeClass('active').next().addClass('active');
    }
  });
  $('.js-btn-prev').click(function () {
    if (!$('.js-tab-content').first().hasClass('active')) {
      $('.active').removeClass('active').prev().addClass('active');
    }
  });
})

// Acccordion menu navigation
$('.accordion-parent-js').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('open');
  $(this).siblings('.submenu').toggleClass('open');
});

// Search
$('.search__icon').on('click', function () {
  $('.search').toggleClass('open');
  $('.search__field').toggleClass('hide');
});

// Popup shot
const videoButtons = document.querySelectorAll('.video__button');
const popupShot = document.querySelector('.popup_shot');
const closeButton = document.querySelectorAll('.popup__close');
const body = document.body;

function showPopupShot() {
  popupShot.style.display = 'flex';
  body.style.overflow = 'hidden';
}
function closePopupShot() {
  popupShot.style.display = 'none';
  body.style.overflow = 'auto';
}

videoButtons.forEach(btn => btn.addEventListener('click', showPopupShot));
closeButton.forEach(btnClose => btnClose.addEventListener('click', closePopupShot));

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
  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  files = [...files];
  files.forEach(uploadFile);
  files.forEach(previewFile);
}

let gallery = document.getElementById('gallery');
let galleryButton = document.querySelector('.gallery-files__button');
galleryButton.addEventListener('click', closePopupShot);

function previewFile(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    galleryButton.style.display = 'block';
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
        document.querySelector('.file-form').style.display = 'none';
      }
    }
    galleryBlocks.forEach(el => el.addEventListener('click', function () {
      this.remove();
      document.querySelector('.file-form').style.display = 'block';
    }));
  }
}

function uploadFile(file, i) {
  var url = '';
  var xhr = new XMLHttpRequest();
  var formData = new FormData();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  formData.append('file', file);
  xhr.send(formData);
}

// Timer
let time = 600;
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
  $(".timer__time").html("0" + mins + ':' + secs);
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
const quizButtonStart = document.querySelector('.quiz-button_start');
const articleWrapper = document.querySelector('.article__wrap');
const quizLength = document.querySelectorAll('.quiz-questions');
const quizTextCorrect = document.querySelector('.quiz-text_correct');
const quizTextFail = document.querySelector('.quiz-text_fail');
let score = 0;
let trying = 0;

function startQuiz() {
  start_timer();
  articleWrapper.style.display = 'flex';
  quizButtonStart.style.display = 'none';
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
    time = 600;
    clearInterval(intr);
    timerTime.innerText = '10:00';
  }
  if (score < 2) {
    quizResultInorrect.classList.remove('hide');
    quizButton.style.display = 'none';
    quizTextFail.innerText = score;
    time = 600;
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
    time = 600;
    clearInterval(intr);
  }
}

quizButtonStart.addEventListener('click', startQuiz);
quizButton.addEventListener('click', showResult);
quizButtonIncorrect.addEventListener('click', restartQuiz);