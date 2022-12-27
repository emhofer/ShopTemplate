import addToCart from "./addToCart.js";

let cartButtons = document.querySelectorAll(".cartButton");
for (let i = 0; i < cartButtons.length; i++) {
  const id = document
    .getElementById(i + 1)
    .querySelector(".productID").innerText;
  const title = document
    .getElementById(i + 1)
    .querySelector(".productTitle").innerText;
  const price = document
    .getElementById(i + 1)
    .querySelector(".productPrice")
    .innerText.replace("€", "");
  const product = { id, title, price };
  cartButtons[i].addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(product);
  });
}
