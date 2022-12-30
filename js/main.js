let input = document.getElementById('password-input');
let passLink = document.querySelector('.password__control');

passLink.addEventListener('click', (event) => {
    if (input.getAttribute('type') == 'password') {
		event.target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		event.target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
})