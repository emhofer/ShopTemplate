import addToCart from "./addToCart.js";

let cartButtons = document.querySelectorAll(".cartButton");
cartButton.addEventListener("click", (e) => {
  e.stopPropagation();
  addToCart(product);
});
