import "../css/main.scss";
import { navigation } from "./components/navigationBar";
import { navbar_toogle } from "./utils/toggle_nav";
import { footerItem } from "./components/footer";
import * as _sliders_ from "./utils/sliderControls";
import { getApiRequest } from "./utils/homepage";
import { getProductRequest } from "./utils/productsList_page";
import { addToCrat, productCounter } from "./utils/addToCart";
import { checkout } from "./utils/checkoutPage";
import { productDetails } from "./utils/productDetailPage";
import { toastUI } from "./components/toast_ui";
import { orderdProduct } from "./utils/createOrderApi";

const img = require.context(
  "../assets/images",
  false,
  /\.(png|svg|jpg|jpeg|gif)$/
);

//DOM elements
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");

//function excecution
if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  //sliders
  _sliders_.changeSlide();
  _sliders_.timerInterval();
  //
  getApiRequest();
} else if (window.location.pathname === "/product.html") {
  getProductRequest();
} else if (window.location.pathname === "/checkout.html") {
  checkout();
  orderdProduct();
} else if (window.location.pathname === "/productdetail.html") {
  productDetails();
}

nav.innerHTML = navigation();
footer.innerHTML = footerItem();

//checkout counter
const chekoutCounter = document.getElementById("counter");
document.body.addEventListener("click", function (e) {
  if (e.target.id == "addToCart") {
    let data = e.target.dataset;
    addToCrat(data);
    toastUI();
    chekoutCounter.innerHTML = productCounter();
  }
});
chekoutCounter.innerHTML = productCounter();

//nav_toggle_event
const navToggle = document.getElementById("nav_toggle");
nav_toggle.addEventListener("click", (e) => {
  navbar_toogle();
});
