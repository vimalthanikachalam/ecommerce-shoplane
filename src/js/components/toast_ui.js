export const toastUI = () => {
  const toast = document.getElementById("toast");
  toast.innerHTML = `
<div id="toastUi" class="toastRoot">
<div  class="toast toast--green">
  <div>
    <ion-icon class="toast__icon" name="checkmark-outline"></ion-icon>
  </div>
  <div class="toast__content">
    <p class="toast__type">Added to Cart!</p>
    <p class="toast__message">Product Sucessfully Added to Cart</p>
  </div>
  <div>
    <ion-icon class="toast__close" name="close-outline"></ion-icon>
  </div>
</div>
</div>`;
  toastApperance();
};

function toastApperance() {
  const toastId = document.getElementById("toast");
  toastId.classList.add("toast_visible");

  setTimeout(() => {
    toastId.classList.remove("toast_visible");
  }, 1000);
}
