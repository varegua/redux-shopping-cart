export default (state, id) => {
  const products = state.products.list;
  const cartProducts = state.cart.products;

  const alreadySelectedQty = cartProducts[id];
  if (alreadySelectedQty >= products.find(p => p.id === id).initialStock) {
    return true;
  }
  return false;
}
