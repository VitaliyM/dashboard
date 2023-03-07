let mobileMenu = document.querySelector('.aside-logo__mobile-btn');
let asideBlock = document.querySelector('.aside-block');
let asideManager = document.querySelector('.aside-block__manager');

mobileMenu.addEventListener('click', function() {
    if (asideBlock.style.height !== 410 + 'px') {
        asideBlock.style.height = 410 + 'px';
        asideManager.style.display = 'flex';        
    } else {
        asideBlock.style.height = 55 + 'px';
        asideManager.style.display = 'none';
    }
})