function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity++;
  else {
    product.quantity = 1;
    cart.push(product);
  }
  renderCart();
}