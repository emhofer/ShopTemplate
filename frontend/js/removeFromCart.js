const removeFromCart = (id) => {
  let currentCart = JSON.parse(localStorage.getItem("cart"));
  console.log("test");

  const newCart = currentCart.filter((item) => {
    console.log(item, id);
    return item.id !== id;
  });
  // TODO: only reload cart
  location.reload();
  localStorage.setItem("cart", JSON.stringify(newCart));
  return;
};

export default removeFromCart;
