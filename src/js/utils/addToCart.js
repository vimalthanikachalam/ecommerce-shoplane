export const addToCrat = (data) => {
  let productDetails = [];
  let totalCount = 0;

  if (localStorage.getItem("cartProducts") == undefined) {
    data.quantity = 1;
    data.totalPrice = data.quantity * data.price;
    productDetails.push(JSON.parse(JSON.stringify(data)));
    localStorage.setItem("cartProducts", JSON.stringify(productDetails));
    totalCount = 1;
  } else {
    productDetails = JSON.parse(localStorage.getItem("cartProducts"));
    let foundAtPos = -1;

    for (let i = 0; i < productDetails.length; i++) {
      totalCount += Number(productDetails[i].quantity);
      if (productDetails[i].id === data.id) {
        foundAtPos = i;
      }
    }

    if (foundAtPos > -1) {
      productDetails[foundAtPos].quantity = (
        Number(productDetails[foundAtPos].quantity) + 1
      ).toString();
      productDetails[foundAtPos].totalPrice = (
        productDetails[foundAtPos].quantity * productDetails[foundAtPos].price
      ).toString();
      localStorage.setItem("cartProducts", JSON.stringify(productDetails));
      totalCount++;
    } else {
      data.quantity = 1;
      data.totalPrice = data.quantity * data.price;
      productDetails.push(JSON.parse(JSON.stringify(data)));
      localStorage.setItem("cartProducts", JSON.stringify(productDetails));
      totalCount++;
    }
  }
};

export const productCounter = () => {
  let totalCount = 0;
  if (localStorage.getItem("cartProducts") == undefined) {
    totalCount = 0;
  } else {
    let productList = JSON.parse(localStorage.getItem("cartProducts"));
    for (let i = 0; i < productList.length; i++) {
      totalCount += Number(productList[i].quantity);
    }
  }

  return totalCount;
};
