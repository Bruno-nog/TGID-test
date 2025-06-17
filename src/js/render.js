
function renderCart() {
    if (cart.length === 0) {
    cartSideBar.innerHTML = `
      <p class="empty-cart">Carrinho vazio</p>
    `;
    return;
  }
  cartSideBar.innerHTML = '<h2 class="buy-cart">Carrinho de Compras</h2>';

  if (cart.length === 0) {
    cartSideBar.innerHTML += '<p>Carrinho vazio</p>';
    return;
  }

  cart.forEach(item => {
    cartSideBar.innerHTML += `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image"/>
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>Preço: R$ ${item.price}</p>
          <div class="cart-item-quantity">Quant:
            <button class="decrease">−</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button class="increase">+</button>
          </div>
        </div>
      </div>
    `;
  });

  const total = calculateTotal().toFixed(2).replace('.', ',');
  cartSideBar.innerHTML += `
    <div class="cart-total">
      <h3>Total: <b> R$ ${total}</b></h3>
    </div>`;
}

function calculateTotal() {
  return cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(',', '.'));
    return total + price * item.quantity;
  }, 0);
}
