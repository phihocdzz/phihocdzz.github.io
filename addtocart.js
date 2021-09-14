const addBtn = document.querySelector('.add a')
const addtocartPopUp = document.querySelector('.popup-addtocart')
const quantityNoti = document.querySelector('.popup-addtocart-heading span')
const addtocartImage = document.querySelector('.popup-addtocart-content-info img')
const addtocartImageName = document.querySelector('#imagename')
const addtocartQuantity = document.querySelector('#quantity')
const addtocartPrice = document.querySelector('.popup-addtocart-content-price span')
const addtocartTimes = document.querySelector('.popup-addtocart-times')

const cartData =  JSON.parse(localStorage.getItem('cart-data')) || [];
const cartDescItem = document.querySelector('.cart-desc-item');
const cartEmpty = document.querySelector('.cart-desc-empty');



let imgProduct;
let nameProduct;
let priceProduct;
let quantityProduct;
let activeWeight;
let activeIngredient;
let totalQuantity = 0;
addBtn.onclick = e => {
    e.preventDefault();
    imgProduct = e.path[4].querySelector('.popup-product-image > img').src;
    nameProduct = e.path[3].querySelector('.popup-product-content-title h4').innerText;
    priceProduct = e.path[2].querySelector('.subtotal span').innerText;
    quantityProduct = e.path[2].querySelector('.quantity-item input').value;
    activeWeight = document.querySelector('.weight-item span.active').innerText;
    activeIngredient = document.querySelector('.ingredient-item p.active').innerText;
     
     

    addtocartPopUp.classList.add('active');
    popupContainer.classList.remove('active');
    addtocartImage.src = imgProduct;
    addtocartImageName.innerHTML = nameProduct;
    addtocartQuantity.innerHTML = `Qty: ${quantityProduct}`;
    addtocartPrice.innerHTML = priceProduct;

    const result = 
    {
        nameProduct,
        imgProduct,
        priceProduct,
        activeWeight,
        activeIngredient,
        quantityProduct,
    }
    const originalPrice = parseInt(result.priceProduct.split('.').reverse().join(''))
    let isFound = false;
    for (let i = 0; i < cartData.length; i++){
        if (cartData[i].nameProduct === result.nameProduct){
            isFound = true;
            cartData[i].quantityProduct = parseInt(cartData[i].quantityProduct) + parseInt(result.quantityProduct)
            cartData[i].priceProduct = `RS.${originalPrice * cartData[i].quantityProduct}.00`
            console.log(cartData[i].priceProduct)
            cartContentContainer.innerHTML = '';
            renderCartData()
            break;
        }
    }


    if (cartData.length < 3 && !isFound){
        cartData.push(result)
        renderClick()
    }


    localStorage.setItem('cart-data', JSON.stringify(cartData));
    cartDescItem.classList.add('active')
    cartEmpty.classList.remove('active')
    deleteProduct()
    renderTotalPrice()
    totalQuantity = cartData.reduce((initialValue, product) => {
        return initialValue + parseInt(product.quantityProduct)
    }, 0)

    quantityNoti.innerHTML = `There are ${totalQuantity} item(s) in your cart`

}

const cartContentContainer = document.querySelector('.cart-desc-item-product-container');
let total = 0;

function renderCartData(){
    total = 0;
    cartData.forEach((data,index) => {
        const cartContent = document.createElement('div')
        cartContent.classList.add('cart-desc-item-content')
        cartContent.innerHTML = `
        <div class="cart-desc-item-content-image">
        <img src="${data.imgProduct}" alt="">
        </div>
        <div class="cart-desc-item-content-text">
        <h6>${data.nameProduct}</h6>
        <p>${data.activeWeight} / ${data.activeIngredient}</p>
        <span>${data.quantityProduct} X ${data.priceProduct}</span>
        </div>
        <div class="cart-desc-item-content-times">
        <i class="fas fa-times" data-times = '${index}'></i>
        </div>
        `
        cartContentContainer.appendChild(cartContent)
        const productPrice = parseInt(data.priceProduct.split('.').reverse().slice(1).join(''))
        total += productPrice
    })
}

const renderClick = () => {
    let dataTimes = cartData.length - 1
    const cartDataAdded = cartData.slice(cartData.length - 1, cartData.length)
    const cartContent = document.createElement('div')
        cartContent.classList.add('cart-desc-item-content')
        cartContent.innerHTML = `
        <div class="cart-desc-item-content-image">
        <img src="${cartDataAdded[0].imgProduct}" alt="">
        </div>
        <div class="cart-desc-item-content-text">
        <h6>${cartDataAdded[0].nameProduct}</h6>
        <p>${cartDataAdded[0].activeWeight} / ${cartDataAdded[0].activeIngredient}</p>
        <span>${cartDataAdded[0].quantityProduct} X ${cartDataAdded[0].priceProduct}</span>
        </div>
        <div class="cart-desc-item-content-times">
        <i class="fas fa-times" data-times = '${dataTimes}'></i>
        </div>
        `
        cartContentContainer.appendChild(cartContent)
        const productPrice = parseInt(cartDataAdded[0].priceProduct.split('.').reverse().slice(1).join(''))
        total += productPrice
}

const totalPrice = document.querySelector('.cart-desc-item-total span')
const renderTotalPrice = () => {
    totalPrice.innerHTML = `Rs. ${total}.00`;
}

renderCartData()
renderTotalPrice()

if (cartData.length === 0){
    cartEmpty.classList.add('active')
    cartDescItem.classList.remove('active')
}




function deleteProduct(){
    const cartTimes = document.querySelectorAll('.cart-desc-item-content-times i')
    cartTimes.forEach((icon,index) => {
        const cartDataClone = [...cartData]
        icon.onclick = e => {
            const activeProductTotalPrice = parseInt(cartDataClone[e.target.dataset.times].priceProduct.split('.').reverse().slice(1).join(''));
            total -= activeProductTotalPrice
            totalPrice.innerHTML = `Rs. ${total}.00`;
            cartData.splice(cartData.indexOf(cartData[index]),1)
            localStorage.setItem('cart-data', JSON.stringify(cartData))
            const cartContent = e.path[2]
            cartContent.classList.add('fall')
            setTimeout(() => {
                cartContentContainer.removeChild(cartContent)
                if (cartData.length === 0){
                    cartEmpty.classList.add('active')
                    cartDescItem.classList.remove('active')
                }
            },500)
        }
    })
}
deleteProduct()

addtocartTimes.onclick = e => {
    e.target.parentElement.parentElement.classList.remove('active')
    overlay.classList.remove('active')
}