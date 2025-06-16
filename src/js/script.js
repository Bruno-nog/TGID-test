const btnCart = document.querySelector('.addcart');
cartSideBar = document.querySelector('.cart-sidebar');
const btnAddCart = document.querySelector('.btn-add-cart');
const products = document.querySelector('.products');


products.addEventListener('click', function(event){
    if (event.target.matches('.btn-add-cart'))
    {
        let closest = btnAddCart.closest('.products');
        console.log(closest);
        
    }
    
})

btnCart.addEventListener('click', function(){
    console.log(btnCart);
    cartSideBar.classList.toggle('show');
    
})