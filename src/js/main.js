const btnCart      = document.querySelector('.addcart');
const cartSideBar  = document.querySelector('.cart-sidebar');
const products     = document.querySelector('.products');
let cart           = [];

products.addEventListener('click', function(event) {
  if (!event.target.matches('.btn-add-cart')) return;
  const valueItem = event.target.closest('.item');
  const { id, name, price, image } = valueItem.dataset;
  addToCart({ id, name, price, image });
});

btnCart.addEventListener('click', function(){
  cartSideBar.classList.toggle('show');
});

function increaseQuant(id) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity++;
  renderCart();
}

function decreaseQuant(id) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity--;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  renderCart();
}

cartSideBar.addEventListener('click', function(event) {
  const plus  = event.target.matches('.increase');
  const minus = event.target.matches('.decrease');
  if (!plus && !minus) return;

  const id = event.target.closest('.cart-item').dataset.id;
  if (plus)  increaseQuant(id);
  else       decreaseQuant(id);
});
