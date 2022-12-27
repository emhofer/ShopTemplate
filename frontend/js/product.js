import addToCart from "./addToCart.js";

const id = document.getElementById("productID").innerText;
const title = document.getElementById("productTitle").innerText;
const price = document
  .getElementById("productPrice")
  .innerText.replace("€", "");

const product = { id, title, price };
console.log(product);

let cartButtons = document.querySelectorAll(".cartButton");
for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(product);
  });
}
