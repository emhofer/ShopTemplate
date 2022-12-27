import removeFromCart from "./removeFromCart.js";

const cart = JSON.parse(localStorage.getItem("cart"));

let tableBody = document.querySelector("tbody");

for (let i = 0; i < cart.length; i++) {
  const { quantity, id } = cart[i];
  const { title, price } = cart[i];
  let cartRow = document.createElement("tr");
  let rowTitle = document.createElement("td");
  let rowPrice = document.createElement("td");
  let rowQuantity = document.createElement("td");
  let rowSubtotal = document.createElement("td");
  let removeButtonContainer = document.createElement("td");
  rowSubtotal.classList.add("subtotal");

  rowTitle.innerHTML = title;
  rowPrice.innerHTML = price;
  rowQuantity.innerHTML = quantity;
  rowSubtotal.innerHTML = `${quantity * price}€`;
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    removeFromCart(id);
  });
  removeButtonContainer.append(removeButton);

  cartRow.append(rowTitle);
  cartRow.append(rowPrice);
  cartRow.append(rowQuantity);
  cartRow.append(rowSubtotal);
  cartRow.append(removeButtonContainer);
  tableBody.append(cartRow);
}
let subtotalElements = document.querySelectorAll(".subtotal");
let total = 0;
for (let i = 0; i < subtotalElements.length; i++) {
  total += parseInt(subtotalElements[i].innerHTML);
}
document.querySelector("#cartTotal").innerHTML = `Total: ${total}€`;
