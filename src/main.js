
function main() {

    const share = document.getElementById('share');
    const social = document.querySelector('.article__social');

    share.addEventListener('click', function (e) {

        social.classList.toggle('appear');
        share.classList.toggle('clicked');
    });
}





window.addEventListener('DOMContentLoaded', main);