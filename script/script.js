let mobileMenuBtn = document.querySelector('.aside-logo__mobile-btn');
let asideBlock = document.querySelector('.aside-block');
let asideLogo = document.querySelector('.aside-block__logo');
let asideManager = document.querySelector('.aside-block__manager');


let showMenu = () => {
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


let cusromerDataMobileSize = document.querySelectorAll('.cusromer-block__mob-size');
let customerDataLine = document.querySelectorAll('.customer-block');


for (let i = 0; i < cusromerDataMobileSize.length; i++) {
    
    cusromerDataMobileSize[i].addEventListener('click', () => {
        if (customerDataLine[i].getBoundingClientRect().height === 69) {
            customerDataLine[i].classList.add('customer-block-active');
            cusromerDataMobileSize[i].classList.add('cusromer-block__mob-size-active');
        } else {
            customerDataLine[i].classList.remove('customer-block-active');
            cusromerDataMobileSize[i].classList.remove('cusromer-block__mob-size-active');
        }
    })
    
}

