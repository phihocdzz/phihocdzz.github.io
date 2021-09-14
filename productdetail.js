const question = document.querySelector('.product-question')
const questionPopUp = document.querySelector('.product-question-popup')
const timesPopUpIcon = document.querySelector('.product-question-popup-times')
const overlay = document.querySelector('.overlay')
question.onclick = e => {
    questionPopUp.classList.add('active')
    overlay.classList.add('active')
}
timesPopUpIcon.onclick = e => {
    questionPopUp.classList.remove('active')
    overlay.classList.remove('active')
}

const subImages = document.querySelectorAll('.sub-image img')
const mainImages = document.querySelectorAll('.main-image img')
subImages.forEach((image,index) => {
    image.onclick = e => {
        document.querySelector('.main-image img.active').classList.remove('active')
        document.querySelector('.sub-image img.active').classList.remove('active')
        mainImages[index].classList.add('active')
        image.classList.add('active')
    }
})


const barMenu = document.querySelector('.navbar-mobile-menu i')
const sideBar = document.querySelector('.sidebar')
const cartIconMobile = document.querySelector('.navbar-mobile-cart i')
const cartIcon = document.querySelector('.navbar-cart');
const cardBox = document.querySelector('.heading-cart');
const times = document.querySelector('.times');
const timesIcon = document.querySelector('.sidebar-times')

barMenu.onclick = e => {
    sideBar.classList.add('active')
    overlay.classList.add('active')
}
timesIcon.onclick = e => {
    sideBar.classList.remove('active')
    overlay.classList.remove('active')
}
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