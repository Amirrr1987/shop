<script lang="ts" setup></script>

<template>
  <!-- Header Section Start From Here -->
  <header class="header-wrapper">
    <!-- Header Nav Start -->
    <div class="header-nav">
      <div class="container">
        <div
          class="header-nav-wrapper d-md-flex d-sm-flex d-xl-flex d-lg-flex justify-content-between"
        >
          <div class="header-static-nav">
            <p>به فروشگاه روزر خوش آمدید!</p>
          </div>
          <div class="header-menu-nav">
            <ul class="menu-nav">
              <li>
                <div class="dropdown">
                  <button
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    تنظیمات <i class="ion-ios-arrow-down"></i>
                  </button>

                  <ul
                    class="dropdown-menu animation slideDownIn"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li><NuxtLink to="/my-account">حساب من</NuxtLink></li>
                    <li><NuxtLink to="/checkout">ثبت نهایی</NuxtLink></li>
                    <li><NuxtLink to="/login">ورود</NuxtLink></li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <button
                    type="button"
                    id="dropdownMenuButton-2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    تومان <i class="ion-ios-arrow-down"></i>
                  </button>

                  <ul
                    class="dropdown-menu animation slideDownIn"
                    aria-labelledby="dropdownMenuButton-2"
                  >
                    <li><NuxtLink to="#">تومان</NuxtLink></li>
                    <li><NuxtLink to="#">دلار</NuxtLink></li>
                  </ul>
                </div>
              </li>
              <li class="pr-0">
                <div class="dropdown">
                  <button
                    type="button"
                    id="dropdownMenuButton-3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src="~/assets/images/flag/1.jpg" alt="" /> فارسی
                    <i class="ion-ios-arrow-down"></i>
                  </button>

                  <ul
                    class="dropdown-menu animation slideDownIn"
                    aria-labelledby="dropdownMenuButton-3"
                  >
                    <li>
                      <NuxtLink to="#"
                        ><img src="~/assets/images/flag/1.jpg" alt="" />
                        فارسی</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="#"
                        ><img src="~/assets/images/flag/2.jpg" alt="" />
                        انگلیسی</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Nav End -->
    <div class="header-top bg-white ptb-30px d-xl-block d-none">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <div class="logo">
              <NuxtLink to="/"
                ><img
                  class="img-responsive"
                  src="~/assets/images/logo/logo.png"
                  alt="logo.jpg"
              /></NuxtLink>
            </div>
          </div>
          <div class="col-md-10 align-self-center">
            <div class="header-right-element d-flex">
              <div class="search-element media-body">
                <form class="d-flex" action="#">
                  <div class="search-category">
                    <select>
                      <option value="0">دسته بندی ها</option>
                      <option value="12">لپ تاپ</option>
                      <option value="13">- - عنوان شماره یک</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="14">- - عنوان شماره دو</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="15">- - عنوان شماره سه</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره چهار</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره پنج</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره شش</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="49">کامپیوتر</option>
                      <option value="13">- - عنوان شماره یک</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره دو</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره سه</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="68">تلفن همراه</option>
                      <option value="13">- - عنوان شماره یک</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره دو</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره سه</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره چهار</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره پنج</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="13">- - عنوان شماره شش</option>
                      <option value="19">- - - - زیر عنوان 1</option>
                      <option value="20">- - - - زیر عنوان 2</option>
                      <option value="21">- - - - زیر عنوان 3</option>
                      <option value="22">- - - - زیر عنوان 4</option>
                      <option value="23">- - - - زیر عنوان 5</option>
                      <option value="104">کنسول بازی</option>
                      <option value="105">پخش کننده موسیقی</option>
                      <option value="106">تلویزیون</option>
                      <option value="107">ساعت</option>
                      <option value="108">لوازم جانبی</option>
                      <option value="109">دوربین</option>
                      <option value="110">لوازم خانه</option>
                    </select>
                  </div>
                  <input type="text" placeholder="جستجو ... " />
                  <button><i class="icon-magnifier"></i></button>
                </form>
              </div>
              <div class="contact-link">
                <div class="phone tm-ltr">
                  <p class="tm-rtl">تلفن ما :</p>
                  <NuxtLink class="tm-ltr" to="tel:02100000000"
                    >021 0000 0000</NuxtLink
                  >
                </div>
              </div>
              <!--Cart info Start -->
              <div class="header-tools d-flex">
                <div class="cart-info d-flex align-self-center">
                  <NuxtLink to="/compare" class="shuffle" data-number="3"
                    ><i class="icon-shuffle"></i
                  ></NuxtLink>
                  <NuxtLink
                    to="#offcanvas-wishlist"
                    class="heart offcanvas-toggle"
                    data-number="3"
                    ><i class="icon-heart"></i
                  ></NuxtLink>
                  <NuxtLink
                    href="#offcanvas-cart"
                    class="bag offcanvas-toggle"
                    data-number="3"
                    ><span>200.000 تومان</span
                    ><i
                      class="icon-bag"
                      style="float: right; margin-top: 5px"
                    ></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
            <!--Cart info End -->
          </div>
        </div>
      </div>
    </div>
    <!-- Header Nav End -->
    <div class="header-menu bg-blue sticky-nav d-xl-block d-none padding-0px">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 custom-col-2">
            <div class="header-menu-vertical">
              <h4 class="menu-title">دسته بندی ها</h4>
              <ul class="menu-content display-none">
                <li class="menu-item">
                  <NuxtLink href="#"
                    >لوازم الکترونیکی <i class="ion-ios-arrow-left"></i
                  ></NuxtLink>
                  <ul class="sub-menu flex-wrap">
                    <li>
                      <NuxtLink href="#">
                        <span> <strong>عنوان شماره یک</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink href="#">
                        <span><strong>عنوان شماره دو</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink href="#">
                        <span><strong>عنوان شماره سه</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink href="#">
                        <span><strong>عنوان شماره چهار</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink href="#">
                        <span><strong>عنوان شماره پنج</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <img
                        src="~/assets/images/menu-image/banner-mega1.jpg"
                        alt=""
                      />
                    </li>
                  </ul>
                  <!-- sub menu -->
                </li>
                <li class="menu-item">
                  <NuxtLink href="#"
                    >بازی <i class="ion-ios-arrow-left"></i
                  ></NuxtLink>
                  <ul class="sub-menu sub-menu-2">
                    <li>
                      <ul class="submenu-item">
                        <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                        <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                      </ul>
                    </li>
                  </ul>
                  <!-- sub menu -->
                </li>
                <li class="menu-item">
                  <NuxtLink href="#">تلویزیون</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink href="#">دوربین دیجیتال</NuxtLink>
                </li>
                <li class="menu-item"><NuxtLink href="#">هدفون</NuxtLink></li>
                <li class="menu-item">
                  <NuxtLink href="#">لوازم جانبی</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink href="#">ساعت هوشمند</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink href="#">کنسول بازی</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink href="#">لوازم خانگی</NuxtLink>
                </li>
              </ul>
              <!-- menu content -->
            </div>
            <!-- header menu vertical -->
          </div>
          <div class="col-lg-9 custom-col-2">
            <div class="header-horizontal-menu">
              <ul class="menu-content">
                <li class="active menu-dropdown">
                  <NuxtLink href="#"
                    >صفحه اصلی<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <ul class="main-sub-menu">
                    <li><NuxtLink to="/">صفحه اصلی 1</NuxtLink></li>
                    <li><NuxtLink to="/index-2">صفحه اصلی 2</NuxtLink></li>
                    <li><NuxtLink to="/index-3">صفحه اصلی 3</NuxtLink></li>
                    <li><NuxtLink to="/index-4">صفحه اصلی 4</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-dropdown">
                  <NuxtLink href="#"
                    >خرید<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <ul class="mega-menu-wrap">
                    <li>
                      <ul>
                        <li class="mega-menu-title">
                          <NuxtLink href="#">صفحات فروشگاه</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/shop-3-column"
                            >فروشگاه (سه ستونه)</NuxtLink
                          >
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
                      <ul>
                        <li class="mega-menu-title">
                          <NuxtLink href="#">صفحات فروشگاه</NuxtLink>
                        </li>
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
                      <ul>
                        <li class="mega-menu-title">
                          <NuxtLink to="#">صفحات محصول</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/single-product">ساده</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/single-product-variable"
                            >با متغییر</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-affiliate"
                            >وابسته</NuxtLink
                          >
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
                      <ul>
                        <li class="mega-menu-title">
                          <NuxtLink to="#">صفحات محصول</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/single-product-slider"
                            >اسلایدر</NuxtLink
                          >
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
                    <li class="w-100">
                      <ul class="banner-megamenu-wrapper d-flex">
                        <li class="banner-wrapper mr-30px">
                          <NuxtLink to="/single-product"
                            ><img
                              src="~/assets/images/menu-image/banner-menu2.jpg"
                              alt=""
                          /></NuxtLink>
                        </li>
                        <li class="banner-wrapper">
                          <NuxtLink to="/single-product"
                            ><img
                              src="~/assets/images/menu-image/banner-menu3.jpg"
                              alt=""
                          /></NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="menu-dropdown">
                  <NuxtLink href="#"
                    >سایر صفحات<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <ul class="main-sub-menu">
                    <li><NuxtLink to="/about">درباره ما</NuxtLink></li>
                    <li><NuxtLink to="/cart">سبد خرید</NuxtLink></li>
                    <li>
                      <NuxtLink to="/checkout">تسویه حساب</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/compare">مقایسه محصولات</NuxtLink>
                    </li>
                    <li><NuxtLink to="login">ورود و ثبت نام</NuxtLink></li>
                    <li><NuxtLink to="/my-account">حساب من</NuxtLink></li>
                    <li>
                      <NuxtLink to="/wishlist">علاقه مندی ها</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/thank-you-page">ثبت سفارش موفق</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-dropdown">
                  <NuxtLink to="#"
                    >وبلاگ<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <ul class="main-sub-menu">
                    <li class="menu-dropdown position-static">
                      <NuxtLink to="#"
                        >وبلاگ (شبکه ای) <i class="ion-ios-arrow-left"></i
                      ></NuxtLink>
                      <ul class="main-sub-menu main-sub-menu-2">
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
                    <li class="menu-dropdown position-static">
                      <NuxtLink href="#"
                        >وبلاگ (لیست) <i class="ion-ios-arrow-left"></i
                      ></NuxtLink>
                      <ul class="main-sub-menu main-sub-menu-2">
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
                    <li class="menu-dropdown position-static">
                      <NuxtLink to="#"
                        >تک پست <i class="ion-ios-arrow-left"></i
                      ></NuxtLink>
                      <ul class="main-sub-menu main-sub-menu-2">
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
                <li><NuxtLink to="/contact">ارتباط با ما</NuxtLink></li>
              </ul>
            </div>
            <!-- header horizontal menu -->
            <div class="intro-text-shipping text-end">
              <div class="free-ship">
                ارسال رایگان برای خرید های بالای 500.000 تومان
              </div>
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- header menu -->
  </header>
  <!-- Header Section End Here -->

  <!-- Mobile Header Section Start -->
  <div class="mobile-header d-xl-none sticky-nav bg-white ptb-10px">
    <div class="container">
      <div class="row align-items-center">
        <!-- Header Logo Start -->
        <div class="col">
          <div class="header-logo">
            <NuxtLink to="/"
              ><img
                class="img-responsive"
                src="~/assets/images/logo/logo.png"
                alt="logo.jpg"
            /></NuxtLink>
          </div>
        </div>
        <!-- Header Logo End -->

        <!-- Header Tools Start -->
        <div class="col-auto">
          <div class="header-tools justify-content-end">
            <div class="cart-info d-flex align-self-center">
              <NuxtLink to="/compare" class="shuffle d-xs-none" data-number="3"
                ><i class="icon-shuffle"></i
              ></NuxtLink>
              <NuxtLink
                to="#offcanvas-wishlist"
                class="heart offcanvas-toggle d-xs-none"
                data-number="3"
                ><i class="icon-heart"></i
              ></NuxtLink>
              <NuxtLink
                to="#offcanvas-cart"
                class="bag offcanvas-toggle"
                data-number="3"
                ><span>200.000 تومان</span
                ><i class="icon-bag" style="float: right; margin-top: 8px"></i
              ></NuxtLink>
            </div>
            <div class="mobile-menu-toggle">
              <NuxtLink href="#offcanvas-mobile-menu" class="offcanvas-toggle">
                <svg viewBox="0 0 800 600">
                  <path
                    d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                    id="top"
                  ></path>
                  <path d="M300,320 L540,320" id="middle"></path>
                  <path
                    d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                    id="bottom"
                    transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Header Tools End -->
      </div>
    </div>
  </div>

  <!-- Search Category Start -->
  <div class="mobile-search-area d-xl-none mb-15px">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="search-element media-body">
            <form class="d-flex" action="#">
              <div class="search-category">
                <select>
                  <option value="0">دسته بندی ها</option>
                  <option value="12">لپ تاپ</option>
                  <option value="13">- - عنوان شماره یک</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="14">- - عنوان شماره دو</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="15">- - عنوان شماره سه</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره چهار</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره پنج</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره شش</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="49">کامپیوتر</option>
                  <option value="13">- - عنوان شماره یک</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره دو</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره سه</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="68">تلفن همراه</option>
                  <option value="13">- - عنوان شماره یک</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره دو</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره سه</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره چهار</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره پنج</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="13">- - عنوان شماره شش</option>
                  <option value="19">- - - - زیر عنوان 1</option>
                  <option value="20">- - - - زیر عنوان 2</option>
                  <option value="21">- - - - زیر عنوان 3</option>
                  <option value="22">- - - - زیر عنوان 4</option>
                  <option value="23">- - - - زیر عنوان 5</option>
                  <option value="104">کنسول بازی</option>
                  <option value="105">پخش کننده موسیقی</option>
                  <option value="106">تلویزیون</option>
                  <option value="107">ساعت</option>
                  <option value="108">لوازم جانبی</option>
                  <option value="109">دوربین</option>
                  <option value="110">لوازم خانه</option>
                </select>
              </div>
              <input type="text" placeholder="جستجو ... " />
              <button><i class="icon-magnifier"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Search Category End -->
  <div class="mobile-category-nav d-xl-none mb-15px">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!--=======  category menu  =======-->
          <div class="hero-side-category">
            <!-- Category Toggle Wrap -->
            <div class="category-toggle-wrap">
              <!-- Category Toggle -->
              <button class="category-toggle">
                <i class="fa fa-bars"></i> دسته بندی ها
              </button>
            </div>

            <!-- Category Menu -->
            <nav class="category-menu">
              <ul>
                <li class="menu-item-has-children menu-item-has-children-1">
                  <NuxtLink href="#"
                    >لوازم جانبی<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-1">
                    <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-2">
                  <NuxtLink href="#"
                    >دوربین<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-2">
                    <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-3">
                  <NuxtLink href="#"
                    >لوازم الکترونیکی<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-3">
                    <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-4">
                  <NuxtLink href="#"
                    >پخش کننده فیلم<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-4">
                    <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-5">
                  <NuxtLink href="#"
                    >هدفون<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-5">
                    <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 5</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-6">
                  <NuxtLink href="#"
                    >بازی<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-6">
                    <li><NuxtLink href="#">زیر عنوان 1</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 2</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 3</NuxtLink></li>
                    <li><NuxtLink href="#">زیر عنوان 4</NuxtLink></li>
                  </ul>
                </li>
                <li><NuxtLink href="#">تلویزیون</NuxtLink></li>
                <li><NuxtLink href="#">دوربین دیجیتال</NuxtLink></li>
                <li><NuxtLink href="#">ساعت هوشمند</NuxtLink></li>
                <li><NuxtLink href="#">لوازم جانبی موبایل</NuxtLink></li>
                <li><NuxtLink href="#">لپ تاپ</NuxtLink></li>
                <li><NuxtLink href="#">کنسول بازی</NuxtLink></li>
                <li><NuxtLink href="#">دسته بازی</NuxtLink></li>
                <li class="hidden">
                  <NuxtLink href="#">ماوس و کیبورد</NuxtLink>
                </li>
                <li>
                  <NuxtLink href="#" id="more-btn"
                    ><i class="ion-ios-plus-empty" aria-hidden="true"></i>
                    بیشتر</NuxtLink
                  >
                </li>
              </ul>
            </nav>
          </div>

          <!--=======  End of category menu =======-->
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile Header Section End -->
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
                src="~/assets/images/product-image/1.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <NuxtLink to="#" class="remove">×</NuxtLink>
            </div>
          </li>
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="~/assets/images/product-image/2.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <NuxtLink to="#" class="remove">×</NuxtLink>
            </div>
          </li>
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="~/assets/images/product-image/3.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <NuxtLink href="#" class="remove">×</NuxtLink>
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
                src="~/assets/images/product-image/1.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <NuxtLink to="#" class="remove">×</NuxtLink>
            </div>
          </li>
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="~/assets/images/product-image/2.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <NuxtLink to="#" class="remove">×</NuxtLink>
            </div>
          </li>
          <li>
            <NuxtLink to="/single-product" class="image"
              ><img
                src="~/assets/images/product-image/3.jpg"
                alt="Cart product Image"
            /></NuxtLink>
            <div class="content">
              <NuxtLink to="/single-product" class="title"
                >عنوان محصول</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount tm1">50.000 تومان</span></span
              >
              <NuxtLink to="#" class="remove">×</NuxtLink>
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
          <NuxtLink
            to="/cart"
            class="btn btn-dark btn-hover-primary mb-30px"
            >مشاهده سبد خرید</NuxtLink
          >
          <NuxtLink
            to="/checkout"
            class="btn btn-outline-dark current-btn"
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
            <NuxtLink href="#"
              ><span class="menu-text">صفحه اصلی</span></NuxtLink
            >
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
            <NuxtLink href="#"><span class="menu-text">خرید</span></NuxtLink>
            <ul class="sub-menu">
              <li>
                <NuxtLink href="#"
                  ><span class="menu-text"
                    >صفحات فروشگاه - شبکه ای</span
                  ></NuxtLink
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/shop-3-column"
                      >فروشگاه (سه ستونه)</NuxtLink
                    >
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
                <NuxtLink href="#"
                  ><span class="menu-text">صفحات فروشگاه - لیست</span></NuxtLink
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
                <NuxtLink to="#"
                  ><span class="menu-text">صفحات محصول - دسته 1</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/single-product">ساده</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/single-product-variable"
                      >با متغییر</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-affiliate"
                      >وابسته</NuxtLink
                    >
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
                <NuxtLink to="#"
                  ><span class="menu-text">صفحات محصول - دسته 2</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/single-product-slider"
                      >اسلایدر</NuxtLink
                    >
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
            <NuxtLink href="#"
              ><span class="menu-text">سایر صفحات</span></NuxtLink
            >
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
            <NuxtLink href="#"><span class="menu-text">وبلاگ</span></NuxtLink>
            <ul class="sub-menu">
              <li>
                <NuxtLink href="#"
                  ><span class="menu-text">وبلاگ (شبکه ای)</span></NuxtLink
                >
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
                <NuxtLink href="#"
                  ><span class="menu-text">وبلاگ (لیست)</span></NuxtLink
                >
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
                <NuxtLink href="#"
                  ><span class="menu-text">تک پست</span></NuxtLink
                >
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
            <NuxtLink href="#"><i class="icon-social-facebook"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink href="#"><i class="icon-social-twitter"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink href="#"><i class="icon-social-instagram"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink href="#"><i class="icon-social-google"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink href="#"><i class="icon-social-instagram"></i></NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- OffCanvas Search End -->

  <div class="offcanvas-overlay"></div>
</template>

<style scoped></style>
