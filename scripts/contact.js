//D.1: Includ js to validate email
function confirmEmail(e) {
    let alert = document.getElementById('submitSuccess');
    let email = document.getElementById('email');
    let confirm = document.getElementById('emailConfirm');
    alert.style.display = 'none';
    confirm.classList.remove('is-invalid');
    if (email.value != confirm.value) {
        confirm.classList.add('is-invalid');
    }
    else {
        alert.style.display = '';
    }
    e.preventDefault();
    e.stopPropagation();
}

document.getElementById('contactForm').addEventListener('submit', e => confirmEmail(e));