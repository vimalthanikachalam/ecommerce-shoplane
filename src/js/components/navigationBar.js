//Navigation Menu
export const navigation = () => {
  return `
  <!-- Navigation Menu -->
  <nav class="container-fluid desktop_nav">
    <div class="row">
      <div class="offer_info">
        <ul class="offer_items">
          <li class="offer_item col-md-6">
            Call Us: <span class="offer_text">+91 000 000 00</span>
          </li>
          <li class="offer_item col-md-6">
            <span class="offer_text">50% off</span> on all new collection!
            <a class="offer_discover">Discover Now!</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row" style="width: 100%">
      <div class="nav_bar">
        <div class="col-4">
          <div>Lang</div>
        </div>

        <div class="brand_logo col-4">
          <img src="./assets/images/logo.jpg" all="logo" />
        </div>

        <div class="nav_utils col-4">
          <a href="#" class="util_icon">
            <ion-icon name="search-outline"></ion-icon>
          </a>
          <a href="#" class="util_icon">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <!-- <a href="#" class="util_icon">
      <ion-icon name="person-outline"></ion-icon>
    </a>-->
          <a href="./checkout.html" class="util_icon addtoCart">
            <span id="counter"></span>
            <ion-icon name="bag-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div class="secondary_nav">
        <div class="secondary_nav_items col-12">
          <a href="index.html" class="sec_nav_item nav_active">Home</a>
          <a href="./product.html" class="sec_nav_item">Shop</a>
          <a href="#" class="sec_nav_item">Men's</a>
          <a href="#" class="sec_nav_item">Women's</a>
        </div>
      </div>
    </div>
  </nav>
  <!-- END OF Navigation Menu -->

  <!-- Mobile Navigation Menu -->
  <div class="mobile_menu">
    <a href="index.html" class="active">
      <img class="brand_logo" src="./assets/images/logo.jpg" alt="logo" />
    </a>
    <div id="nav_link">
      <a class="mob_nav_links" href="index.html">Home</a>
      <a class="mob_nav_links" href="./product.html">Shop</a>
      <a class="mob_nav_links" href="./productdetail.html">Men's</a>
      <a
        class="mob_nav_links"
        href="./checkout.html"
        class="util_icon addtoCart"
        >Checkout
        <span id="counter"></span>
        <ion-icon name="bag-outline"></ion-icon>
      </a>
    </div>
    <a id="nav_toggle" class="icon">
      <ion-icon name="menu-outline"></ion-icon>
    </a>
  </div>
  <!-- END OF Mobile Menu -->
 
`;
};
// <!-- Navigation Menu -->
// <nav>
//   <div class="row">
//     <div class="offer_info">
//       <ul class="offer_items">
//         <li class="offer_item col-4">
//           Call Us: <span class="offer_text">+91 000 000 00</span>
//         </li>
//         <li class="offer_item col-4">
//           <span class="offer_text">50% off</span> on all new collection!
//           <a class="offer_discover">Discover Now!</a>
//         </li>
//         <li class="offer_item col-4">
//           <a class="offer_social_link" href="#">Facebook</a>
//           <a class="offer_social_link" href="#">Twitter</a>
//           <a class="offer_social_link" href="#">Instagram</a>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div class="row">
//     <div class="nav_bar">
//       <div class="col-4">
//         <div>Lang</div>
//       </div>

//       <div class="brand_logo col-4">
//         <img src="./assets/images/logo.jpg" all="logo" />
//       </div>

//       <div class="nav_utils col-4">
//         <a href="#" class="util_icon">
//           <ion-icon name="search-outline"></ion-icon>
//         </a>
//         <a href="#" class="util_icon">
//           <ion-icon name="heart-outline"></ion-icon>
//         </a>
//         <!-- <a href="#" class="util_icon">
//           <ion-icon name="person-outline"></ion-icon>
//         </a>-->
//         <a  href="./checkout.html" class="util_icon addtoCart">
//         <span id="counter"></span>
//           <ion-icon name="bag-outline"></ion-icon>
//         </a>
//       </div>
//     </div>
//     <div class="secondary_nav">
//       <div class="secondary_nav_items col-12">
//         <a href="index.html" class="sec_nav_item nav_active">Home</a>
//         <a href="./product.html" class="sec_nav_item">Shop</a>
//         <a href="./productdetail.html" class="sec_nav_item">Men's</a>
//         <a href="#" class="sec_nav_item">Women's</a>
//       </div>
//     </div>
//   </div>
// </nav>
// <!-- Navigation Menu -->
