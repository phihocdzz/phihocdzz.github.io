const coffeTable = document.querySelector('.wishlist-product-table')
let data;

const render = () => {
    data = JSON.parse(localStorage.getItem('data')) || []
    const newData = data.filter(data => data.isWishList === true)
    newData.forEach(coffeProduct => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <tr>
            <td>
                <img src="${coffeProduct.img}" alt="">
            </td>
            <td>${coffeProduct.name}</td>
            <td>$${coffeProduct.price}.00</td>
            <td>
                <a href="#">Select Options</a>
            </td>
            <td>
                <i class="fas fa-times" data-id = '${coffeProduct.id}'></i>
            </td>
        </tr>
        `
        coffeTable.appendChild(tr)
    
    
    })
}
render()

const times = document.querySelectorAll('td i')
const allProducts = document.querySelectorAll('tr')
times.forEach((icon,index) => {
    icon.onclick = e => {

        const product = e.target.parentElement.parentElement

        product.classList.add('fall')
        product.addEventListener('transitionend', () => {
            product.remove()
        })
        console.log(e.target.dataset.id)
        data = data.filter(data => data.id != e.target.dataset.id)
        localStorage.setItem('data', JSON.stringify(data))
    }
})



