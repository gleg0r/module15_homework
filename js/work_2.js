const screenBtn = document.querySelector('.js-btn');

screenBtn.addEventListener('click', () => {
    screenBtn.style.boxShadow = "none";

    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    alert('Ваша ширина: ' + width + '. Ваша высота:' + height);
    setTimeout(() => {
        screenBtn.style.boxShadow = "0px 3px 2px #00A4FF";
    }, 80);   
});