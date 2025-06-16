const btnCart = document.querySelector('.addcart');
cartSideBar = document.querySelector('.cart-sidebar');
const btnAddCart = document.querySelector('.btn-add-cart');
const products = document.querySelector('.products');
let cart = [];
// let cart = JSON.parse(localStorage.getItem('cart')) || [];


products.addEventListener('click', function(event){
    if (!event.target.matches('.btn-add-cart')) return;
    const valueItem = event.target.closest('.item');
    let {id, name, price, image} = valueItem.dataset;
    const product = {id, name, price, image};
    addToCart(product);
    
})

function addToCart(product)
{
    const existing = cart.find(item => item.id === product.id);
    if (existing)
        existing.quantity += 1;
    else
    {
        product.quantity = 1;
        cart.push(product);
    }
    //localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart()
{
    cartSideBar.innerHTML = '<h2 class="buy-cart">Carrinho de Compras</h2>';

    if (cart.lenght === 0)
    {
        cartSideBar.innerHTML += '<p>Carrinho vazio</p>'
        return ;
    }
    cart.forEach(item => {
        const itemHTML = `<div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image"/>
        <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p>Preço: ${item.price}</p>
            <p>Quantidade: ${item.quantity}</p>
        </div>
        </div>`;
        cartSideBar.innerHTML += itemHTML;
    })
    const total = calculateTotal().toFixed(2).replace('.', ',');
    cartSideBar.innerHTML += `
    <div class="cart-total">
        <h3>Total:<b> R$ ${total}</b></h3>
    </div>`;
}

function calculateTotal() {
    return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace(',', '.'));
        return total + price * item.quantity;
    }, 0);
}

btnCart.addEventListener('click', function(){
    console.log(btnCart);
    cartSideBar.classList.toggle('show');
    
})


