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

function preventDefaults (e) {
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
  reader.onloadend = function() {
    galleryButton.style.display = 'block';
    dropArea.classList.add('open');
    
    let divImage = document.createElement('div');
    divImage.className = 'gallery-files__block';
    let imageTrash = document.createElement('div');
    imageTrash.className = 'gallery-files__trash';
    let img = document.createElement('img');
    img.className = 'gallery-files__image'  ;  
    img.src = reader.result;
    gallery.appendChild(divImage).appendChild(img);
    divImage.appendChild(imageTrash);

    let galleryBlocks = document.querySelectorAll('.gallery-files__block');
    galleryBlocks.forEach(el => el.addEventListener('click', function(e) {
      this.style.display = 'none';
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