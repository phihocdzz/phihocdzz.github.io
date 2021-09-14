const productContainer = document.querySelector('.product-container');


const  data = [
    {
        id: 0,
        name: 'Gold Filter Coffee',
        description: 'Leaf tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 278,
        img: './image/banner16.jpg',
        imgWishlist: './image/banner17.jpg',
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
        name: 'Decaffeinated Coffee',
        description: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullam...',
        price: 238,
        img: './image/banner11.jpg',
        imgWishlist: './image/banner12.jpg',
        isWishList: false,
        isCart: false,
    },
    {
        id: 3,
        name: 'Rich Aroma Coffee',
        description: 'Powder tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ul',
        price: 258,
        img: './image/banner18.jpg',
        imgWishlist: './image/banner19.jpg',
        isWishList: false,
        isCart: false,
    },
]





data.forEach((data,index) => {
    var product = document.createElement('div')
        product.classList.add('product')
        product.setAttribute('data-cart', index)
        product.innerHTML = `
        <div class="product-image">
        <img src="${data.img}" alt="">
        <div class="wishlist">
            <div class="image-wishlist">
                <img src="${data.imgWishlist}" alt="">
            </div>
            <a href="#" class="option">Select options</a>
            <div class="wishlist-tool">
                <div class="heart" data-id = ${index}>
                    <a href="#"><i class="fas fa-heart"></i></a>
                </div>
                <div class="quickview">
                    <i class="fas fa-eye"></i>
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
        <h6>${data.name}</h6>
        <p>${data.description}</p>
        <p id="price">RS. ${data.price}.00</p>
    </div>
        `
    productContainer.appendChild(product)
})




