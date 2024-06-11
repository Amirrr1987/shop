<template>
  <!-- OffCanvas Wishlist Start -->
  <div id="offcanvas-wishlist" class="offcanvas offcanvas-wishlist">
    <div class="inner">
      <div class="head">
        <span class="title">علاقه مندی ها</span>
        <button class="offcanvas-close">×</button>
      </div>
      <div class="body customScroll">
        <ul class="minicart-product-list">
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="assets/images/product-image/7.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <a href="#" class="remove">×</a>
            </div>
          </li>
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="assets/images/product-image/9.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <a href="#" class="remove">×</a>
            </div>
          </li>
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="assets/images/product-image/8.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <a href="#" class="remove">×</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="buttons">
          <NuxtLink
            to="/wishlist"
            class="btn btn-dark btn-hover-primary mt-30px"
            >مشاهده لیست علاقه مندی ها</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
  <!-- OffCanvas Wishlist End -->

  <!-- OffCanvas Cart Start -->
  <div id="offcanvas-cart" class="offcanvas offcanvas-cart">
    <div class="inner">
      <div class="head">
        <span class="title">سبد خرید</span>
        <button class="offcanvas-close">×</button>
      </div>
      <div class="body customScroll">
        <ul class="minicart-product-list">
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="assets/images/product-image/1.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <a href="#" class="remove">×</a>
            </div>
          </li>
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="assets/images/product-image/2.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <a href="#" class="remove">×</a>
            </div>
          </li>
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="assets/images/product-image/3.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <a href="#" class="remove">×</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="sub-total">
          <strong>جمع :</strong>
          <span class="amount">200.000 تومان</span>
        </div>
        <div class="buttons">
          <NuxtLink to="/cart" class="btn btn-dark btn-hover-primary mb-30px"
            >مشاهده سبد خرید</NuxtLink
          >
          <NuxtLink to="/checkout" class="btn btn-outline-dark current-btn"
            >تسویه حساب</NuxtLink
          >
        </div>
        <p class="minicart-message">
          ارسال رایگان برای سفارشات بالای 500.000 تومان!
        </p>
      </div>
    </div>
  </div>
  <!-- OffCanvas Cart End -->

  <!-- OffCanvas Search Start -->
  <div id="offcanvas-mobile-menu" class="offcanvas offcanvas-mobile-menu">
    <div class="inner customScroll">
      <div class="head">
        <span class="title">&nbsp;</span>
        <button class="offcanvas-close">×</button>
      </div>
      <div class="offcanvas-menu-search-form">
        <form action="#">
          <input type="text" placeholder="جستجو..." />
          <button><i class="icon-magnifier"></i></button>
        </form>
      </div>
      <div class="offcanvas-menu">
        <ul>
          <li>
            <a href="#"><span class="menu-text">صفحه اصلی</span></a>
            <ul class="sub-menu">
              <li>
                <NuxtLink to="/"
                  ><span class="menu-text">صفحه اصلی 1</span></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/index-2"
                  ><span class="menu-text">صفحه اصلی 2</span></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/index-3"
                  ><span class="menu-text">صفحه اصلی 3</span></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/index-4"
                  ><span class="menu-text">صفحه اصلی 4</span></NuxtLink
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="#"><span class="menu-text">خرید</span></a>
            <ul class="sub-menu">
              <li>
                <a href="#"
                  ><span class="menu-text">صفحات فروشگاه - شبکه ای</span></a
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/shop-3-column">فروشگاه (سه ستونه)</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-4-column"
                      >فروشگاه (چهار ستونه)</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/shop-left-sidebar"
                      >فروشگاه (با نوار کناری چپ)</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/shop-right-sidebar"
                      >فروشگاه (با نوار کناری راست)</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"
                  ><span class="menu-text">صفحات فروشگاه - لیست</span></a
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/shop-list">فروشگاه (لیست)</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-list-left-sidebar"
                      >فروشگاه (لیست با نوار کناری چپ)</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/shop-list-right-sidebar"
                      >فروشگاه (لیست با نوار کناری راست)</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"
                  ><span class="menu-text">صفحات محصول - دسته 1</span></a
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/single-product">ساده</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/single-product-variable">با متغییر</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/single-product-affiliate">وابسته</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/single-product-group">گروه</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/single-product-tabstyle-2"
                      >برگه خرید 2</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-tabstyle-3"
                      >برگه خرید 3</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"
                  ><span class="menu-text">صفحات محصول - دسته 2</span></a
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/single-product-slider">اسلایدر</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/single-product-gallery-left"
                      >گالری سمت چپ</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-gallery-right"
                      >گالری سمت راست</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-sticky-left"
                      >گالری ستونی چپ</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-sticky-right"
                      >گالری ستونی راست</NuxtLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"><span class="menu-text">سایر صفحات</span></a>
            <ul class="sub-menu">
              <li>
                <NuxtLink to="/about">درباره ما</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cart">سبد خرید</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/checkout">تسویه حساب</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/compare">مقایسه محصولات</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/login">ورود و ثبت نام</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/my-account">حساب من</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/wishlist">علاقه مندی ها</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/thank-you-page">ثبت سفارش موفق</NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"><span class="menu-text">وبلاگ</span></a>
            <ul class="sub-menu">
              <li>
                <a href="#"><span class="menu-text">وبلاگ (شبکه ای)</span></a>
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/blog-grid-left-sidebar"
                      >شبکه ای - نوار کناری چپ</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/blog-grid-right-sidebar"
                      >شبکه ای - نوار کناری راست</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"><span class="menu-text">وبلاگ (لیست)</span></a>
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/blog-list-left-sidebar"
                      >لیست - نوار کناری چپ</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/blog-list-right-sidebar"
                      >لیست - نوار کناری راست</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"><span class="menu-text">تک پست</span></a>
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/blog-single-left-sidebar"
                      >تک پست (نوار کناری چپ)</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/blog-single-right-sidebar"
                      >تک پست (نوار کناری راست)</NuxtLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/contact">ارتباط با ما</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="offcanvas-buttons mt-30px">
        <div class="header-tools d-flex">
          <div class="cart-info d-flex align-self-center">
            <NuxtLink to="/my-account" class="user"
              ><i class="icon-user"></i
            ></NuxtLink>
            <NuxtLink to="/wishlist" data-number="3"
              ><i class="icon-heart"></i
            ></NuxtLink>
            <NuxtLink to="/cart" data-number="3"
              ><i class="icon-bag"></i
            ></NuxtLink>
          </div>
        </div>
      </div>
      <div class="offcanvas-social mt-30px">
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
  <!-- OffCanvas Search End -->

  <div class="offcanvas-overlay"></div>
  <!-- Breadcrumb Area Start -->
  <div class="breadcrumb-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="breadcrumb-content">
            <ul class="nav">
              <li><NuxtLink to="/">صفحه اصلی</NuxtLink></li>
              <li>علاقه مندی ها</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Area End-->
  <!-- Wishlist area start -->
  <div class="cart-main-area mtb-60px">
    <div class="container">
      <h3 class="cart-page-title">لیست علاقه مندی ها</h3>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <form action="#">
            <div class="table-content table-responsive cart-table-content">
              <table>
                <thead>
                  <tr>
                    <th>تصویر</th>
                    <th>نام محصول</th>
                    <th>قیمت</th>
                    <th>تعداد</th>
                    <th>جمع</th>
                    <th>افزودن به سبد خرید</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="product-thumbnail">
                      <a href="#"
                        ><img
                          class="img-responsive"
                          src="assets/images/product-image/2-1.jpg"
                          alt=""
                      /></a>
                    </td>
                    <td class="product-name"><a href="#">عنوان محصول</a></td>
                    <td class="product-price-cart">
                      <span class="amount">50.000 تومان</span>
                    </td>
                    <td class="product-quantity">
                      <div class="cart-plus-minus">
                        <input
                          class="cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                        />
                      </div>
                    </td>
                    <td class="product-subtotal">50.000 تومان</td>
                    <td class="product-wishlist-cart">
                      <a href="#">افزودن به سبد خرید</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-thumbnail">
                      <a href="#"
                        ><img
                          class="img-responsive"
                          src="assets/images/product-image/2-2.jpg"
                          alt=""
                      /></a>
                    </td>
                    <td class="product-name"><a href="#">عنوان محصول</a></td>
                    <td class="product-price-cart">
                      <span class="amount">50.000 تومان</span>
                    </td>
                    <td class="product-quantity">
                      <div class="cart-plus-minus">
                        <input
                          class="cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                        />
                      </div>
                    </td>
                    <td class="product-subtotal">50.000 تومان</td>
                    <td class="product-wishlist-cart">
                      <a href="#">افزودن به سبد خرید</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-thumbnail">
                      <a href="#"
                        ><img
                          class="img-responsive"
                          src="assets/images/product-image/2-3.jpg"
                          alt=""
                      /></a>
                    </td>
                    <td class="product-name"><a href="#">عنوان محصول</a></td>
                    <td class="product-price-cart">
                      <span class="amount">50.000 تومان</span>
                    </td>
                    <td class="product-quantity">
                      <div class="cart-plus-minus">
                        <input
                          class="cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                        />
                      </div>
                    </td>
                    <td class="product-subtotal">50.000 تومان</td>
                    <td class="product-wishlist-cart">
                      <a href="#">افزودن به سبد خرید</a>
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
  <!-- Wishlist area end -->
</template>
