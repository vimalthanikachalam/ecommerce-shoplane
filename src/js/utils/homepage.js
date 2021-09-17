const getloaclStorage = JSON.parse(localStorage.getItem("products"));

export function getApiRequest() {
  if (getloaclStorage == undefined) {
    //fetch api
    const fetchAPI = (url) => {
      const response = fetch(url);
      response
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLocalStorage(data);
        })
        .catch((err) => {
          console.log(`Error fetching api : ${err}`);
        });
    };

    fetchAPI("https://5d76bf96515d1a0014085cf9.mockapi.io/product");
    console.log("api is fetching!!!");
  } else {
    setLocalStorage(null);
  }
}

function products(data) {
  //DOM element
  const productDiv = document.getElementById("products");

  for (let i = 0; i < 4; i++) {
    productDiv.innerHTML += `
        <!---------------------- Product Card -------------------------------->
            <div class="col-md-3 col-6">
              <div class="product_card_container">
                <a href="./productdetail.html?id=${data[i].id}">
                  <div class="product_image">
                    <img src="${data[i].preview}" />
                    <!-- Product META -->
                    <div class="product_meta_info">
                      <div class="product_wishlist">
                        <ion-icon name="heart-outline"></ion-icon>
                      </div>
                      <div class="product_add_to">
                      <a id="addToCart" class="product_id"
                        data-id="${data[i].id}"
                        data-image="${data[i].preview}"
                        data-brand="${data[i].brand}"
                        data-name="${data[i].name}"
                        data-price="${data[i].price}"
                        ><ion-icon name="bag-outline"></ion-icon> Add to Cart</a>
                      </div>
                    </div>
                    <!-- END OF Product META -->
                  </div>
                  <!-- Product Desc -->
                  <a href="./productdetail.html?id=${data[i].id}">
                  <div class="product_description">
                    <div class="product_title">${data[i].name}</div>
                    <div class="product_details">${data[i].brand}</div>
                    <div class="product_price_container">
                      <p class="product_price">Rs.${data[i].price}</p>
                    
                    </div>
                    <p class="product_offer">Rs.(45% OFF)</p>
                  </div>
                  </a>
                  <!--END OF Product Desc -->
                </a>
              </div>
            </div>
            <!---------------------- END OF Product Card ------------------------->
            `;
  }
}

function setLocalStorage(data) {
  if (getloaclStorage == undefined) {
    localStorage.setItem("products", JSON.stringify(data));
    products(data);
  } else {
    products(getloaclStorage);
  }
}
