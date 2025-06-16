const btnCart = document.querySelector('.addcart');
cartSideBar = document.querySelector('.cart-sidebar');
const btnAddCart = document.querySelector('.btn-add-cart');
const products = document.querySelector('.products');
let cart = [];


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
    {
        existing.quantity += 1;
        console.log(existing);
    }
    else
    {
        product.quantity = 1;
        cart.push(product);
    }
    
}

btnCart.addEventListener('click', function(){
    console.log(btnCart);
    cartSideBar.classList.toggle('show');
    
})


