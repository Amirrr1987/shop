<template>
  <!-- Breadcrumb Area Start -->
  <div class="breadcrumb-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="breadcrumb-content">
            <ul class="nav">
              <li><NuxtLink to="/">صفحه اصلی</NuxtLink></li>
              <li>مقایسه محصولات</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Area End-->
  <!-- Compare area start -->
  <div class="compare-area mtb-60px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="#">
            <!-- Compare Table -->
            <div class="compare-table table-responsive">
              <table class="table mb-0">
                <tbody>
                  <tr>
                    <td class="first-column">محصول</td>
                    <td class="product-image-title">
                      <a href="#" class="image"
                        ><img
                          class="img-responsive"
                          src="assets/images/product-image/19.jpg"
                          alt="Compare Product"
                      /></a>
                      <a href="#" class="category">دسته محصول</a>
                      <a href="#" class="title">عنوان محصول یک</a>
                    </td>
                    <td class="product-image-title">
                      <a href="#" class="image"
                        ><img
                          class="img-responsive"
                          src="assets/images/product-image/24.jpg"
                          alt="Compare Product"
                      /></a>
                      <a href="#" class="category">دسته محصول</a>
                      <a href="#" class="title">عنوان محصول دو</a>
                    </td>
                    <td class="product-image-title">
                      <a href="#" class="image"
                        ><img
                          class="img-responsive"
                          src="assets/images/product-image/10.jpg"
                          alt="Compare Product"
                      /></a>
                      <a href="#" class="category">دسته محصول</a>
                      <a href="#" class="title">عنوان محصول سه</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="first-column">جزئیات</td>
                    <td class="pro-desc">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله که لازم است.
                      </p>
                    </td>
                    <td class="pro-desc">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله که لازم است.
                      </p>
                    </td>
                    <td class="pro-desc">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله که لازم است.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="first-column">قیمت</td>
                    <td class="pro-price">500.000 تومان</td>
                    <td class="pro-price">449.000 تومان</td>
                    <td class="pro-price">399.000 تومان</td>
                  </tr>
                  <tr>
                    <td class="first-column">رنگ</td>
                    <td class="pro-color">سفید</td>
                    <td class="pro-color">سفید</td>
                    <td class="pro-color">سفید</td>
                  </tr>
                  <tr>
                    <td class="first-column">موجودی</td>
                    <td class="pro-stock">موجود در انبار</td>
                    <td class="pro-stock">موجود در انبار</td>
                    <td class="pro-stock">موجود در انبار</td>
                  </tr>
                  <tr>
                    <td class="first-column">افزودن به سبد خرید</td>
                    <td class="pro-addtocart">
                      <a href="#" class="add-to-cart" tabindex="0"
                        ><span>افزودن به سبد خرید</span></a
                      >
                    </td>
                    <td class="pro-addtocart">
                      <a href="#" class="add-to-cart" tabindex="0"
                        ><span>افزودن به سبد خرید</span></a
                      >
                    </td>
                    <td class="pro-addtocart">
                      <a href="#" class="add-to-cart" tabindex="0"
                        ><span>افزودن به سبد خرید</span></a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="first-column">حذف</td>
                    <td class="pro-remove">
                      <button><i class="ion-trash-b"></i></button>
                    </td>
                    <td class="pro-remove">
                      <button><i class="ion-trash-b"></i></button>
                    </td>
                    <td class="pro-remove">
                      <button><i class="ion-trash-b"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td class="first-column">امتیاز</td>
                    <td class="pro-ratting">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </td>
                    <td class="pro-ratting">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star-outline"></i>
                    </td>
                    <td class="pro-ratting">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star-half"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Compare area end -->
  <!-- Footer Area Start -->
  <div class="footer-area">
    <div class="footer-container">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-md-30px mb-lm-30px">
              <div class="single-wedge">
                <h4 class="footer-herading">درباره ما</h4>
                <p class="text-infor">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
                <div class="need-help">
                  <p class="phone-info">
                    تماس با ما :
                    <span class="tm-ltr">
                      021 0000 0000 <br />
                      021 0000 0000
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mb-md-30px mb-lm-30px">
              <div class="single-wedge">
                <h4 class="footer-herading">اطلاعات</h4>
                <div class="footer-links">
                  <ul>
                    <li><a href="#">تحویل</a></li>
                    <li><NuxtLink to="/about">درباره ما</NuxtLink></li>
                    <li><a href="#">پرداخت امن</a></li>
                    <li><NuxtLink to="/contact">ارتباط با ما</NuxtLink></li>
                    <li><a href="#">نشانی ما</a></li>
                    <li><a href="#">فروشگاه ها</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mb-sm-30px mb-lm-30px">
              <div class="single-wedge">
                <h4 class="footer-herading">دسترسی سریع</h4>
                <div class="footer-links">
                  <ul>
                    <li><a href="#">مشاهده قوانین</a></li>
                    <li><a href="#">تخفیفات</a></li>
                    <li><a href="#">محصولات جدید</a></li>
                    <li><a href="#">پرفروش ترین ها</a></li>
                    <li><NuxtLink to="/login">ورود</NuxtLink></li>
                    <li><NuxtLink to="/my-account">حساب من</NuxtLink></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-wedge">
                <h4 class="footer-herading">دریافت خبرنامه</h4>
                <div class="subscrib-text">
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
                <div id="mc_embed_signup" class="subscribe-form">
                  <form
                    id="mc-embedded-subscribe-form"
                    class="validate"
                    novalidate=""
                    target="_blank"
                    name="mc-embedded-subscribe-form"
                    method="post"
                    action=""
                  >
                    <div id="mc_embed_signup_scroll" class="mc-form">
                      <input
                        class="email"
                        type="email"
                        required=""
                        placeholder="ایمیل خود را وارد نمایید..."
                        name="EMAIL"
                        value=""
                      />
                      <div
                        class="mc-news"
                        aria-hidden="true"
                        style="position: absolute; left: -5000px"
                      >
                        <input
                          type="text"
                          value=""
                          tabindex="-1"
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                        />
                      </div>
                      <div class="clear">
                        <input
                          id="mc-embedded-subscribe"
                          class="button"
                          type="submit"
                          name="subscribe"
                          value="ثبت"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="social-info">
                  <ul>
                    <li>
                      <a href="#"><i class="icon-social-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-social-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-social-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-social-google"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-social-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="copy-text">فارسی و <b>راست چین</b> شده</p>
            </div>
            <div class="col-md-6 text-end">
              <img
                class="payment-img"
                src="assets/images/icons/payment.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
