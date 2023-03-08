let mobileMenu = document.querySelector('.aside-logo__mobile-btn');
let asideBlock = document.querySelector('.aside-block');
let asideManager = document.querySelector('.aside-block__manager');
let asideLogo = document.querySelector('.aside-block__logo');

mobileMenu.addEventListener('click', function() {
    asideBlock.classList.remove = 'aside-block-hover';
    if (asideBlock.getBoundingClientRect().height < 420 + 'px') {
        asideBlock.style.height = 420 + 'px';
        asideManager.style.display = 'flex';
        asideLogo.style.paddingLeft = 135 + 'px';

    } else {
        asideBlock.style.height = 55 + 'px';
        asideManager.style.display = 'none';
    }
})