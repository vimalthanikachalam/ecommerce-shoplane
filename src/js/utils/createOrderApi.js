const orderApiEndpoint = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const orderdProduct = () => {
  const order = document.getElementById("placeOrder");
  let orderdProduct = [];
  const url = "https://604721529e5ab30017394272.mockapi.io/order/placeorder";
  const localdata = JSON.parse(localStorage.getItem("cartProducts"));
  const loader = document.getElementById("loader");

  order.addEventListener("click", () => {
    for (let i = 0; i < localdata.length; i++) {
      const product = {
        productID: localdata[i].id,
        productName: localdata[i].name,
        productQuantity: localdata[i].quantity,
      };
      orderdProduct.push(product);
    }

    const orderdata = {
      products: orderdProduct,
    };

    loader.style.display = "block";
    //Send data to server
    orderApiEndpoint(url, orderdata)
      .then((data) => {
        loader.style.display = "none";
        localStorage.setItem("cartProducts", JSON.stringify([]));
        window.location.assign("/thankyou.html");
      })
      .catch((err) => console.log(err));
  });
};
