export const checkout = () => {
  const data = JSON.parse(localStorage.getItem("cartProducts"));

  if (data != undefined && data.length > 0) {
    renderCheckout(data);
    totalPrice(data);
  } else {
    totalPrice(data);
    const chekoutEle = document.getElementById("checkout");
    chekoutEle.innerHTML = `<h1>Cart is Empty!</h1>`;
  }
};

const renderCheckout = (data) => {
  const chekoutEle = document.getElementById("checkout");
  chekoutEle.innerHTML = "";
  //render data
  for (let i = 0; i < data.length; i++) {
    chekoutEle.innerHTML += `

    <div class="checkout_product_card">
    <div class="checkout_product">
      <img src="${data[i].image}" />
    </div>

    <div class="checkout_prod_details">
      <div class="checkout_prod_title">
        Product : ${data[i].name}
      </div>
      <div class="checkout_prod_brand">Brand : ${data[i].brand}</div>
      <div class="checkout_prod_qty">Quantity : ${data[i].quantity}</div>
      <div class="details_container">
      <div class="checkout_prod_price">Price : ${data[i].totalPrice}</div>
      <button class="delete" data-id="${data[i].id}" >Delete</button>
      </div>
    </div>
   
  </div>
    `;
  }
  deleteCartItem(data);
};

let price = 0;

const totalPrice = (data) => {
  const totalAmountGST = document.getElementById("totalAmountGST");
  const totalAmount = document.getElementById("totalAmount");
  const vatAmount = document.getElementById("vatAmount");
  const order = document.getElementById("placeOrder");

  if (data != undefined && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      price = price + parseInt(data[i].totalPrice);
    }
  }

  let vatamount = (4 / 100) * price;
  let totalPriceGST = price + vatamount;

  if (data == undefined || data.length == 0) {
    price = 0;
    totalPriceGST = 0;
    vatamount = 0;
    order.style.backgroundColor = "#dbdbdb";
    order.style.color = "#b5b5b5";
    order.style.border = "1px solid #ececec";
    order.style.pointerEvents = "none";
  }

  totalAmount.textContent = price;
  vatAmount.textContent = vatamount;
  totalAmountGST.textContent = totalPriceGST;
};

const deleteCartItem = (data) => {
  const deleteDiv = document.getElementsByClassName("delete");
  let index;

  for (let i of deleteDiv) {
    i.addEventListener("click", (e) => {
      index = data.findIndex((element) => element.id === e.target.dataset.id);
      if (index > -1) {
        data.splice(index, 1);
        localStorage.setItem("cartProducts", JSON.stringify(data));
        checkout();
      }
    });
  }
};
