const openBlackCoffeBox = document.querySelector('.black-coffe-title i')
const openInstantCoffeBox = document.querySelector('.instant-coffe-title i')
const blackCoffeList = document.querySelector('.black-coffe-list ul')
const instantCoffeList = document.querySelector('.instant-coffe-list ul')
const openCategories = document.querySelectorAll('.category-title i')

const categoryRightArrows = document.querySelectorAll('.right-arrow img')
const categoryLeftArrows = document.querySelectorAll('.left-arrow img')
const allSlides = document.querySelectorAll('.bestseller-content-item')
const slideContainer = document.querySelector('.bestseller-content')
let indexCurrentSlide = 0;
const viewModes = document.querySelectorAll('.viewmode span')
const productContainer = document.querySelector('.product-item')
const priceList = document.querySelector('.show-quantity select')
const featuredList = document.querySelector('.show-featured select')

const overlay = document.querySelector('.overlay');
const barMenu = document.querySelector('.navbar-mobile-menu i')
const sideBar = document.querySelector('.sidebar')
const cartIconMobile = document.querySelector('.navbar-mobile-cart i')
const cartIcon = document.querySelector('.navbar-cart');
const cardBox = document.querySelector('.heading-cart');
const times = document.querySelector('.times');
const timesIcon = document.querySelector('.sidebar-times')

let wishlistIcon = document.querySelectorAll('.heart')





const data = [
    {
        id: 0,
        name: 'Decaffeinated Coffee',
        description: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullam..',
        price: 238,
        img: './image/banner11.jpg',
        imgWishlist: './image/banner12.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 1,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 2,
        name: 'Roasted Coffee',
        description: 'Tem tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullam...',
        price: 278,
        img: './image/banner21.jpg',
        imgWishlist: './image/banner17.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 3,
        name: 'Gold Filter Coffee',
        description: 'Leaf tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 278,
        img: './image/banner16.jpg',
        imgWishlist: './image/banner17.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 4,
        name: 'Xtra Roasted Coffee',
        description: 'Drink tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 298,
        img: './image/banner17.jpg',
        imgWishlist: './image/banner19.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 5,
        name: 'Roasted Coffee',
        description: 'Tem tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 278,
        img: './image/banner21.jpg',
        imgWishlist: './image/banner17.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 6,
        name: 'Rich Aroma Coffee',
        description: 'Tem tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 278,
        img: './image/banner18.jpg',
        imgWishlist: './image/banner19.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 7,
        name: 'Special Strong Coffee',
        description: 'Stro tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 268,
        img: './image/banner12.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 8,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 9,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 10,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 11,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 12,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 13,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 14,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 15,
        name: 'Dried Pure Instant Coffee',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg',
        isWishList: false,
        isCart: false,
    },
]


var productQuantity = 8;

featuredList.onchange = e => {
    productContainer.innerHTML = '';
    switch (e.target.value) {
        case 'price-low-high':
            data.sort((a,b) => a.price > b.price ? 1 : -1)
            break;
        case 'price-high-low':
            data.sort((a,b) => a.price < b.price ? 1 : -1)
            break;
        case 'name-a-z':
            data.sort((a,b) => a.name > b.name ? 1 : -1)
            break;
        case 'name-z-a':
            data.sort((a,b) => a.name < b.name ? 1 : -1)
            break;
    }
    renderProduct(productQuantity)
}



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



priceList.onchange = e => {
    productQuantity = parseInt(e.target.value);
    productContainer.innerHTML = '';
    renderProduct(productQuantity)
}


const renderProduct = productQuantity => {
    for (let i = 0; i < productQuantity ; i++){
        var product = document.createElement('div')
        product.classList.add('product')
        product.innerHTML = `
        <div class="product-image">
        <img src="${data[i].img}" alt="">
        <div class="wishlist">
            <div class="image-wishlist">
                <img src="${data[i].imgWishlist}" alt="">
            </div>
            <a href="#" class="option">Select options</a>
            <div class="wishlist-tool">
                <div class="heart" data-id = ${i}>
                    <a href="#"><i class="fas fa-heart"></i></a>
                </div>
                <div class="quickview">
                    <a href="#"><i class="fas fa-eye"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="product-content">
        <span class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </span>
        <h6>${data[i].name}</h6>
        <p>${data[i].description}</p>
        <p id="price">RS. ${data[i].price}.00</p>
    </div>
        `
    productContainer.appendChild(product)
    }
}

openBlackCoffeBox.onclick = e => {
    blackCoffeList.classList.toggle('active')
    openBlackCoffeBox.classList.toggle('active')
}
openInstantCoffeBox.onclick = e => {
    instantCoffeList.classList.toggle('active')
    openInstantCoffeBox.classList.toggle('active')
}

openCategories.forEach(openCategory => {
    openCategory.onclick = e => {
        openCategory.classList.toggle('active')
        openCategory.parentElement.parentElement.querySelector('.list').classList.toggle('active')
        console.log(e.target)
    }
})

const next = e => {
    indexCurrentSlide = (indexCurrentSlide + 1) % allSlides.length
    slideContainer.style.transform = `translateX(${-indexCurrentSlide * 280}px)`
}
const prev = e => {
    indexCurrentSlide = (indexCurrentSlide - 1 + allSlides.length) % allSlides.length
    slideContainer.style.transform = `translateX(${-indexCurrentSlide * 280}px)`
}

categoryRightArrows.forEach(arrow => arrow.onclick = next)
categoryLeftArrows.forEach(arrow => arrow.onclick = prev)


viewModes.forEach(mode => {
    mode.onclick = e => {
        document.querySelector('.viewmode span.active').classList.remove('active')
        mode.classList.add('active')
        switch (e.target.dataset.mode){
            case '1':
                if (productContainer.classList.contains('product-3-items')){
                    productContainer.classList.remove('product-3-items')
                }
                if (productContainer.classList.contains('product-4-items')){
                    productContainer.classList.remove('product-4-items')
                }
                if (productContainer.classList.contains('product-5-items')) {
                    productContainer.classList.remove('product-5-items')
                }
                productContainer.classList.add('product-2-items')
                break;
            case '2':
                if (productContainer.classList.contains('product-2-items')){
                    productContainer.classList.remove('product-2-items')
                }
                if (productContainer.classList.contains('product-4-items')){
                    productContainer.classList.remove('product-4-items')
                }
                if (productContainer.classList.contains('product-5-items')) {
                    productContainer.classList.remove('product-5-items')
                }
                productContainer.classList.add('product-3-items')
                break;
            case '3':
                if (productContainer.classList.contains('product-3-items')){
                    productContainer.classList.remove('product-3-items')
                }
                if (productContainer.classList.contains('product-5-items')){
                    productContainer.classList.remove('product-5-items')
                }
                if (productContainer.classList.contains('product-2-items')) {
                    productContainer.classList.remove('product-2-items')
                }
                productContainer.classList.add('product-4-items')
                break;
            case '4':
                if (productContainer.classList.contains('product-4-items')){
                    productContainer.classList.remove('product-4-items')
                }
                if (productContainer.classList.contains('product-3-items')){
                    productContainer.classList.remove('product-3-items')
                }
                if (productContainer.classList.contains('product-2-items')) {
                    productContainer.classList.remove('product-2-items')
                }
                productContainer.classList.add('product-5-items')
                break;
            default:
                if (productContainer.classList.contains('product-2-items')){
                    productContainer.classList.remove('product-2-items')
                }
                if (productContainer.classList.contains('product-3-items')){
                    productContainer.classList.remove('product-3-items')
                }
                if (productContainer.classList.contains('product-4-items')) {
                    productContainer.classList.remove('product-4-items')
                }
                if (productContainer.classList.contains('product-5-items')) {
                    productContainer.classList.remove('product-5-items')
                }
                break;
        }
    }
})

const popupTimes = document.querySelector('.popup-product-times')
const subImages = document.querySelectorAll('.popup-product-subimage img')
const popupContainer = document.querySelector('.popup-product-container')
const quickView = document.querySelectorAll('.quickview')
let quantity = 1;

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

const toastContainer = document.querySelector('.toast')

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

wishlistIcon.forEach(icon => {
    icon.onclick = e => {
        const newData = JSON.parse(localStorage.getItem('data')) || []
        data[e.target.parentElement.dataset.id].isWishList = true
        const result = data.filter(data => data.id == e.target.parentElement.dataset.id)
        newData.push(...result)
        localStorage.setItem('data',JSON.stringify(newData))
        
        const toastMessage = document.createElement('div')
        toastMessage.classList.add('toast-message')
        toastMessage.innerHTML = `
        <div class="toast-message-times">
        <i class="fas fa-times"></i>
        </div>
        <div class="toast-message-content">
            <div class="toast-message-content-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="toast-message-content-text">
                <p>Success!</p>
                <p>Bạn đã thêm vào Wishlist thành công!!!</p>
            </div>
        </div>
        `
        toastContainer.appendChild(toastMessage)
        toastMessage.style.animation = 'fadeLeft .5s linear forwards, fadeRight .5s linear 4s forwards'
        const autoRemove = setTimeout(() => {
            toastContainer.removeChild(toastMessage)
        }, 5000)
        
        const toastTimes = document.querySelectorAll('.toast-message-times')
        
        toastMessage.onclick = e => {
            if (e.target.closest('.toast-message-times')){
                toastContainer.removeChild(toastMessage)
            }
        }


    }
})


const selectOptions = document.querySelectorAll('.option')

selectOptions.forEach(option => {
    option.onclick = e => {
        option.href = './productdetail.html'
    }
})


