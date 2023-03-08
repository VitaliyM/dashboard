let mobileMenuBtn = document.querySelector('.aside-logo__mobile-btn');
let asideBlock = document.querySelector('.aside-block');
let asideLogo = document.querySelector('.aside-block__logo');
let asideManager = document.querySelector('.aside-block__manager');


let showMenu = () => {
    console.log(asideBlock.getBoundingClientRect().height);
    if (asideBlock.getBoundingClientRect().height === 55) {
        asideBlock.style.height = 420 + 'px';
        asideLogo.style.paddingLeft = 135 + 'px';
        asideManager.style.left = 10 + 'px';
        asideManager.style.display = 'flex';
    } else {
        asideBlock.style.height = 55 + 'px';
        asideLogo.style.paddingLeft = 30 + 'px';
        asideManager.style.display = 'none';
    }
}

mobileMenuBtn.onclick = showMenu;