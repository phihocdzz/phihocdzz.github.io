const leftArrow = document.querySelector('.left-arrow img');
const rightArrow = document.querySelector('.right-arrow img');
const slides = document.querySelectorAll('.banner-item');
const cartIcon = document.querySelector('.navbar-cart');
const cardBox = document.querySelector('.heading-cart');
const overlay = document.querySelector('.overlay');
const times = document.querySelector('.times');
const scrollToTop = document.querySelector('.scroll');
const barMenu = document.querySelector('.navbar-mobile-menu i')
const sideBar = document.querySelector('.sidebar')
const timesIcon = document.querySelector('.sidebar-times')
const cartIconMobile = document.querySelector('.navbar-mobile-cart i')
const subImages = document.querySelectorAll('.popup-product-subimage img')
const popupTimes = document.querySelector('.popup-product-times')
const popupContainer = document.querySelector('.popup-product-container')
const quickView = document.querySelectorAll('.quickview')

barMenu.onclick = e => {
    sideBar.classList.add('active')
    overlay.classList.add('active')
}
timesIcon.onclick = e => {
    sideBar.classList.remove('active')
    overlay.classList.remove('active')
}

let index = 0;


cartIcon.onclick = e => {
    cardBox.classList.add('active')
    overlay.classList.add('active')
}
cartIconMobile.onclick = e => {
    cardBox.classList.add('active')
    overlay.classList.add('active')
}
times.onclick = e => {
    cardBox.classList.remove('active')
    overlay.classList.remove('active')
}
overlay.onclick = e => {
    if (sideBar.classList.contains('active') ) {
        sideBar.classList.remove('active')
    } else if (cardBox.classList.contains('active')) {
        cardBox.classList.remove('active')
    }
    overlay.classList.remove('active')
}

const nextSlide = () => {
    slides[index].querySelector('h1.animation').classList.remove('animation')
    slides[index].querySelector('a.animation').classList.remove('animation')
    
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

    if (index > 0){
        slides[index].querySelector('h1').classList.add('animation')
        slides[index].querySelector('a').classList.add('animation')
    } else {
        slides[index].querySelector('h1').classList.add('animation')
        slides[index].querySelector('a').classList.add('animation')
    }
}
const prevSlide = () => {
    slides[index].querySelector('h1.animation').classList.remove('animation')
    slides[index].querySelector('a.animation').classList.remove('animation')

    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    if (index > 0){
        slides[index].querySelector('h1').classList.add('animation')
        slides[index].querySelector('a').classList.add('animation')
    } else {
        slides[index].querySelector('h1').classList.add('animation')
        slides[index].querySelector('a').classList.add('animation')
    }
}


leftArrow.onclick = prevSlide;
rightArrow.onclick = nextSlide;


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.classList.add('active')
  } else {
    scrollToTop.classList.remove('active')
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
scrollToTop.onclick = topFunction


subImages.forEach(img => {
    img.onclick = e => {
        document.querySelector('.popup-product-subimage img.active').classList.remove('active')
        img.classList.add('active')
        img.parentElement.parentElement.querySelector('img').src = img.src
    }
})

popupTimes.onclick = e => {
    popupContainer.classList.remove('active')
    overlay.classList.remove('active')
}


let quantity = 1;

const decButton = document.querySelector('.quantity-item button:nth-of-type(1)')
const incButton = document.querySelector('.quantity-item button:nth-of-type(2)')
quickView.forEach(quickView => {
    quickView.onclick = e => {
        document.querySelector('.popup-product-subimage img.active').classList.remove('active')
        document.querySelector('.popup-product-subimage img').classList.add('active')
        overlay.classList.add('active')
        popupContainer.classList.add('active')
        const allImages = popupContainer.querySelectorAll('.popup-product-image img')

        allImages[0].src = e.path[4].querySelector('img:nth-of-type(1)').src
        allImages[1].src = e.path[4].querySelector('img:nth-of-type(1)').src
        allImages[2].src = e.path[3].querySelector('img').src


        popupContainer.querySelector('.popup-product-content-title h4').innerHTML = e.path[5].querySelector('.product-content h6').innerText
        popupContainer.querySelector('.popup-product-content-title p').innerHTML = e.path[5].querySelector('.product-content p').innerText
        popupContainer.querySelector('.price span').innerHTML = e.path[5].querySelector('.product-content p:nth-of-type(2)').innerText
        
        
        
        popupContainer.querySelector('.subtotal span').innerHTML = `RS.${parseInt(e.path[5].querySelector('.product-content p:nth-of-type(2)').innerText.split('.').reverse().slice(1).join(''))}.00`
        
        quantity = 1;
        let initialPrice = parseInt(e.path[5].querySelector('.product-content p:nth-of-type(2)').innerText.split('.').reverse().slice(1).join(''))
        
        popupContainer.querySelector('.quantity-item input').value = quantity

        decButton.onclick = () => {
            decQuantity(initialPrice)
        };
        incButton.onclick = () => {
            incQuantity(initialPrice)
        };
    }
})

const incQuantity = price => {
    quantity++

    popupContainer.querySelector('.quantity-item input').value = quantity
    popupContainer.querySelector('.subtotal span').innerHTML = `RS.${price * quantity}.00`

    quantity === 1 ? decButton.disabled = false : '';
}

const decQuantity = price => {
    quantity--
    popupContainer.querySelector('.quantity-item input').value = quantity
    popupContainer.querySelector('.subtotal span').innerHTML = `RS.${price * quantity}.00`
    quantity === 0 ? decButton.disabled = true : '';
}


const selectOptions = document.querySelectorAll('.option')

selectOptions.forEach(option => {
    option.onclick = e => {
        option.href = './productdetail.html'
    }
})

const weightItems = document.querySelectorAll('.weight-item span')
const ingredientItems = document.querySelectorAll('.ingredient-item p')
weightItems.forEach(item => item.onclick = e => {
    document.querySelector('.weight-item span.active').classList.remove('active')
    item.classList.add('active')
})
ingredientItems.forEach(item => item.onclick = e => {
    document.querySelector('.ingredient-item p.active').classList.remove('active')
    item.classList.add('active')
})
// document.addEventListener('contextmenu', event => event.preventDefault());
// document.onkeydown = function(e) {
//     if (e.ctrlKey && 
//         (e.keyCode === 67 || 
//          e.keyCode === 86 || 
//          e.keyCode === 85 || 
//          e.keyCode === 117)) {
//         return false;
//     } else {
//         return true;
//     }
// };