//Navigation Menu
export const footerItem = () => {
  return `
<footer>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="newsletter_container">
          <div class="newsletter_title">Subscribe to Our Newsletter!</div>
          <form>
            <div class="form_group">
              <input
                class="form_element form_email"
                type="email"
                autocomplete="off"
                autocapitalize="off"
                spellcheck="off"
                placeholder="Enter your e-mail"
              />
              <input
                type="submit"
                class="form_element form_submit"
                placeholder="Subscribe"
              />
            </div>
          </form>
          <div class="terms">
            <p>
              By entering your email, you agree to our
              <a href="#terms">Terms of Service and Privacy Policy.</a>
            </p>
          </div>
          <div class="newsletter_social_link">
            <div class="follow_us_text">Follow Us:</div>
            <div class="social_icons">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </div>
          </div>

          <div class="footer_copyright">
            <div class="footer_text">
              © 2021 Vimal Thanikachalam Ecommerce Store. All Rights Reserved.
              Ecommerce Store.
              <a href="#">Project Source Code.</a>
            </div>
            <div class="footer_payment col-12">
              <a href="#">
                <img src="./assets/images/paypal_2_x21.jpg" alt="paypal" />
              </a>
              <a href="#">
                <img src="./assets/images/Vector_x21.jpg" alt="visa" />
              </a>
              <a href="#">
                <img
                  class="footer_mastercard"
                  src="./assets/images/mastercard_x21.jpg"
                  alt="mastercard"
                />
              </a>
              <a href="#">
                <img src="./assets/images/discover_x21.jpg" alt="discover" />
              </a>
              <a href="#">
                <img
                  src="./assets/images/american-express_x21.jpg"
                  alt="american-express"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>`;
};
