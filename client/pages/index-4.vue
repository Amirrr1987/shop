<template>
  <!-- Slider Start -->
  <div class="slider-area slider-height-4">
    <div class="hero-slider swiper-container">
      <div class="swiper-wrapper">
        <!-- Single Slider  -->
        <div
          class="swiper-slide bg-img d-flex"
          style="background-image: url(assets/images/slider-image/sample-7.jpg)"
        >
          <div class="container align-self-center">
            <div class="slider-content-1 slider-animated-1 text-start pl-60px">
              <span class="animated color-gray">محصول جدید</span>
              <h1 class="animated color-black">
                عنوان محصول فروشگاه <br />
                <strong>جزئیات محصول</strong>
              </h1>
              <a href="shop-4-column.html" class="shop-btn animated"
                >اکنون خرید کنید</a
              >
            </div>
          </div>
        </div>
        <!-- Single Slider  -->
        <div
          class="swiper-slide bg-img d-flex"
          style="background-image: url(assets/images/slider-image/sample-8.jpg)"
        >
          <div class="container align-self-center">
            <div class="slider-content-1 slider-animated-1 text-start pl-60px">
              <span class="animated color-gray">محصول جدید</span>
              <h1 class="animated color-black">
                عنوان محصول فروشگاه <br />
                <strong>جزئیات محصول</strong>
              </h1>
              <a href="shop-4-column.html" class="shop-btn animated"
                >اکنون خرید کنید</a
              >
            </div>
          </div>
        </div>
        <!-- Single Slider  -->
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
  </div>
  <!-- Slider End -->
  <!-- Feature Tab Area Start-->
  <div class="feature-tab-area mt-60px">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title-underline">
            <ul class="nav-tabs nav">
              <li>
                <a class="active" data-bs-toggle="tab" href="#newarrival"
                  >جدید ترین ها</a
                >
              </li>
              <li>
                <a data-bs-toggle="tab" href="#bestseller">پرفروش ترین ها</a>
              </li>
              <li><a data-bs-toggle="tab" href="#featured">ویژه ها</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tab-content">
        <div id="newarrival" class="tab-pane active">
          <div class="feature-slider slider-nav-style-1">
            <div class="feature-slider-wrapper swiper-wrapper">
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/6.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/8.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price">90.000 تومان</li>
                        <li class="current-price">81.000 تومان</li>
                        <li class="discount-price">-10%</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/9.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/10.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/12.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/13.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/14.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/15.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/16.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/17.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/18.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/19.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/20.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/21.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/22.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/23.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/24.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/25.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/26.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/27.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/28.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/29.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/6.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/8.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/9.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/10.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/11.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/12.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/13.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/14.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/15.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-buttons">
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div id="bestseller" class="tab-pane fade">
          <div class="feature-slider slider-nav-style-1">
            <div class="feature-slider-wrapper swiper-wrapper">
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/6.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/8.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price">90.000 تومان</li>
                        <li class="current-price">81.000 تومان</li>
                        <li class="discount-price">-10%</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/9.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/10.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/12.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/13.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/14.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/15.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/16.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/17.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/18.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/19.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/20.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/21.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/22.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/23.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/24.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/25.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/26.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/27.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/28.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/29.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/6.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/8.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/9.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/10.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/11.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/12.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/13.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/14.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/15.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-buttons">
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div id="featured" class="tab-pane fade">
          <div class="feature-slider slider-nav-style-1">
            <div class="feature-slider-wrapper swiper-wrapper">
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/6.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/8.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price">90.000 تومان</li>
                        <li class="current-price">81.000 تومان</li>
                        <li class="discount-price">-10%</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/9.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/10.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/12.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/13.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/14.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/15.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/16.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/17.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/18.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/19.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/20.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/21.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/22.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/23.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/24.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/25.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/26.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/27.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/28.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/29.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/6.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/7.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/8.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/9.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/10.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/11.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/12.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/13.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <!-- Single Item -->
              <div class="feature-slider-item swiper-slide">
                <article class="list-product">
                  <div class="img-block">
                    <a href="single-product.html" class="thumbnail">
                      <img
                        class="first-img"
                        src="assets/images/product-image/14.jpg"
                        alt=""
                      />
                      <img
                        class="second-img"
                        src="assets/images/product-image/15.jpg"
                        alt=""
                      />
                    </a>
                    <div class="quick-view">
                      <a
                        class="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="مشاهده سریع"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="icon-magnifier icons"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="product-flag">
                    <li class="new">جدید</li>
                  </ul>
                  <div class="product-decs">
                    <a class="inner-link" href="shop-4-column.html"
                      ><span>عنوان محصول</span></a
                    >
                    <h2>
                      <a href="single-product.html" class="product-link"
                        >توضیحات مربوط به محصول</a
                      >
                    </h2>
                    <div class="rating-product">
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                      <i class="ion-android-star"></i>
                    </div>
                    <div class="pricing-meta">
                      <ul>
                        <li class="old-price not-cut">50.000 تومان</li>
                      </ul>
                    </div>
                  </div>
                  <div class="add-to-link">
                    <ul>
                      <li class="cart">
                        <a class="cart-btn" href="#">خرید</a>
                      </li>
                      <li>
                        <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-buttons">
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Feature Tab Area End-->
  <!-- Banner area start -->
  <div class="banner-area mt-30px">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="banner-wrapper">
            <a href="shop-4-column.html"
              ><img src="assets/images/banner-image/4.jpg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Banner area End -->
  <!-- Category Tab Area Start -->
  <section class="category-tab-area mt-30px mb-40px">
    <div class="container">
      <div class="section-title d-flex">
        <h2>عنوان دسته</h2>
        <!-- Nav tabs -->
        <ul
          class="nav nav-tabs sub-category d-flex justify-content-end flex-grow-1"
        >
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#tab-1"
              >زیر دسته یک</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-2"
              >زیر دسته دو</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-3"
              >زیر دسته سه</a
            >
          </li>
        </ul>
      </div>

      <!-- Tab panes -->
      <div class="tab-content">
        <!-- 1st tab start -->
        <div id="tab-1" class="tab-pane active">
          <div class="row">
            <div
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-lm-55px"
            >
              <div
                class="feature-slider-two slider-nav-style-1 single-product-responsive"
              >
                <div class="feature-slider-wrapper swiper-wrapper">
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price">90.000 تومان</li>
                            <li class="current-price">81.000 تومان</li>
                            <li class="discount-price">-10%</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/16.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/17.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/18.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/19.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/20.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/21.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/22.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/23.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/24.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/25.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/26.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/27.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/28.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/29.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/11.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-buttons">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 1st tab end -->
        <!-- 2nd tab start -->
        <div id="tab-2" class="tab-pane fade">
          <div class="row">
            <div
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-lm-55px"
            >
              <div class="feature-slider-two slider-nav-style-1">
                <div class="feature-slider-wrapper swiper-wrapper">
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price">90.000 تومان</li>
                            <li class="current-price">81.000 تومان</li>
                            <li class="discount-price">-10%</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/16.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/17.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/18.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/19.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/20.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/21.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/22.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/23.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/24.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/25.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/26.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/27.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/28.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/29.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/11.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-buttons">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 2nd tab end -->
        <!-- 3rd tab start -->
        <div id="tab-3" class="tab-pane fade">
          <div class="row">
            <div
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-lm-55px"
            >
              <div class="feature-slider-two slider-nav-style-1">
                <div class="feature-slider-wrapper swiper-wrapper">
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price">90.000 تومان</li>
                            <li class="current-price">81.000 تومان</li>
                            <li class="discount-price">-10%</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/16.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/17.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/18.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/19.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/20.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/21.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/22.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/23.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/24.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/25.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/26.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/27.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/28.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/29.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/11.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-buttons">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 3rd tab end -->
      </div>
    </div>
  </section>
  <!-- Category Tab Area end -->
  <!-- Category Tab Area Start -->
  <section class="category-tab-area mb-40px">
    <div class="container">
      <div class="section-title d-flex">
        <h2>عنوان دسته</h2>
        <!-- Nav tabs -->
        <ul
          class="nav nav-tabs sub-category d-flex justify-content-end flex-grow-1"
        >
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#tab-4"
              >زیر دسته یک</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-5"
              >زیر دسته دو</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-6"
              >زیر دسته سه</a
            >
          </li>
        </ul>
      </div>

      <!-- Tab panes -->
      <div class="tab-content banner-area">
        <!-- 1st tab start -->
        <div id="tab-4" class="tab-pane active">
          <div class="row">
            <div
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-lm-55px"
            >
              <div class="feature-slider-two slider-nav-style-1">
                <div class="feature-slider-wrapper swiper-wrapper">
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price">90.000 تومان</li>
                            <li class="current-price">81.000 تومان</li>
                            <li class="discount-price">-10%</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/16.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/17.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/18.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/19.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/20.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/21.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/22.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/23.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/24.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/25.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/26.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/27.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/28.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/29.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/11.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-buttons">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 1st tab end -->
        <!-- 2nd tab start -->
        <div id="tab-5" class="tab-pane fade">
          <div class="row">
            <div
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-lm-55px"
            >
              <div class="feature-slider-two slider-nav-style-1">
                <div class="feature-slider-wrapper swiper-wrapper">
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price">90.000 تومان</li>
                            <li class="current-price">81.000 تومان</li>
                            <li class="discount-price">-10%</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/16.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/17.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/18.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/19.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/20.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/21.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/22.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/23.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/24.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/25.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/26.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/27.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/28.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/29.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/11.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-buttons">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 2nd tab end -->
        <!-- 3rd tab start -->
        <div id="tab-6" class="tab-pane fade">
          <div class="row">
            <div
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-lm-55px"
            >
              <div class="feature-slider-two slider-nav-style-1">
                <div class="feature-slider-wrapper swiper-wrapper">
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price">90.000 تومان</li>
                            <li class="current-price">81.000 تومان</li>
                            <li class="discount-price">-10%</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/16.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/17.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/18.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/19.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/20.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/21.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/22.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/23.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/24.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/25.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/26.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/27.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/28.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/29.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/6.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/7.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/8.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/9.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/10.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/11.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/12.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/13.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <!-- Single Item -->
                  <div class="feature-slider-item swiper-slide">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/14.jpg"
                            alt=""
                          />
                          <img
                            class="second-img"
                            src="assets/images/product-image/15.jpg"
                            alt=""
                          />
                        </a>
                        <div class="quick-view">
                          <a
                            class="quick_view"
                            href="#"
                            data-link-action="quickview"
                            title="مشاهده سریع"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="icon-magnifier icons"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="product-flag">
                        <li class="new">جدید</li>
                      </ul>
                      <div class="product-decs">
                        <a class="inner-link" href="shop-4-column.html"
                          ><span>عنوان محصول</span></a
                        >
                        <h2>
                          <a href="single-product.html" class="product-link"
                            >توضیحات مربوط به محصول</a
                          >
                        </h2>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                        <div class="pricing-meta">
                          <ul>
                            <li class="old-price not-cut">50.000 تومان</li>
                          </ul>
                        </div>
                      </div>
                      <div class="add-to-link">
                        <ul>
                          <li class="cart">
                            <a title="افزودن به سبد خرید" href="#"
                              ><i class="icon-bag"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              title="افزودن به لیست علاقه مندی ها"
                              href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a title="مقایسه محصول" href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-buttons">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 3rd tab end -->
      </div>
    </div>
  </section>
  <!-- Category Tab Area end -->
  <!-- Banner Area Start -->
  <div class="banner-area mb-30px">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="banner-wrapper">
            <a href="shop-4-column.html"
              ><img src="assets/images/banner-image/7.jpg" alt=""
            /></a>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="banner-wrapper">
            <a href="shop-4-column.html"
              ><img src="assets/images/banner-image/8.jpg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Banner Area End -->
  <!-- Recently Add area start -->
  <div class="recent-add-area mb-30px mt-30px">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h2 class="section-heading">محصولات جدید</h2>
          </div>
        </div>
      </div>
      <div class="recent-slider slider-nav-style-1 multi-row-2">
        <div class="recent-slider-wrapper swiper-wrapper">
          <div class="recent-slider-item swiper-slide">
            <article class="list-product mb-30px">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/28.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/29.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
            <article class="list-product">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/8.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/10.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price">90.000 تومان</li>
                    <li class="current-price">81.000 تومان</li>
                    <li class="discount-price">-10%</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div class="recent-slider-item swiper-slide">
            <article class="list-product mb-30px">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/15.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/16.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
            <article class="list-product">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/17.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/18.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div class="recent-slider-item swiper-slide">
            <article class="list-product mb-30px">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/21.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/22.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price">90.000 تومان</li>
                    <li class="current-price">81.000 تومان</li>
                    <li class="discount-price">-10%</li>
                  </ul>
                </div>
              </div>
            </article>
            <article class="list-product">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/23.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/24.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div class="recent-slider-item swiper-slide">
            <article class="list-product mb-30px">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/25.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/26.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
            <article class="list-product">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/27.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/28.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div class="recent-slider-item swiper-slide">
            <article class="list-product mb-30px">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/29.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/29.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
            <article class="list-product">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/20.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/21.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div class="recent-slider-item swiper-slide">
            <article class="list-product mb-30px">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/8.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/10.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
            <article class="list-product">
              <div class="img-block">
                <a href="single-product.html" class="thumbnail">
                  <img
                    class="first-img"
                    src="assets/images/product-image/11.jpg"
                    alt=""
                  />
                  <img
                    class="second-img"
                    src="assets/images/product-image/12.jpg"
                    alt=""
                  />
                </a>
                <div class="quick-view">
                  <a
                    class="quick_view"
                    href="#"
                    data-link-action="quickview"
                    title="مشاهده سریع"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="icon-magnifier icons"></i>
                  </a>
                </div>
              </div>
              <div class="product-decs">
                <a class="inner-link" href="shop-4-column.html"
                  ><span>عنوان محصول</span></a
                >
                <h2>
                  <a href="single-product.html" class="product-link"
                    >توضیحات مربوط به محصول</a
                  >
                </h2>
                <div class="rating-product">
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                  <i class="ion-android-star"></i>
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">50.000 تومان</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-buttons">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Recently Add area end -->
  <!-- category Area Start -->
  <div class="popular-categories-area mt-30px">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h2 class="section-heading">دسته بندی های محبوب</h2>
          </div>
        </div>
      </div>
      <div class="category-slider slider-nav-style-1">
        <div class="category-slider-wrapper swiper-wrapper">
          <div class="category-slider-item swiper-slide">
            <div class="thumb-category">
              <a href="single-product.html">
                <img
                  src="assets/images/product-image/1.jpg"
                  alt="product-image.jpg"
                />
              </a>
            </div>
            <div class="category-discript">
              <h4>عنوان دسته</h4>
              <ul>
                <li><a href="#">زیر دسته یک</a></li>
                <li><a href="#">زیر دسته دو</a></li>
                <li><a href="#">زیر دسته سه</a></li>
                <li><a href="#">زیر دسته چهار</a></li>
              </ul>
              <NuxtLink to="/shop-4-column" class="view-all-btn">مشاهده همه</NuxtLink>
            </div>
          </div>
          <div class="category-slider-item swiper-slide">
            <div class="thumb-category">
              <a href="single-product.html">
                <img
                  src="assets/images/product-image/2.jpg"
                  alt="product-image.jpg"
                />
              </a>
            </div>
            <div class="category-discript">
              <h4>عنوان دسته</h4>
              <ul>
                <li><a href="#">زیر دسته یک</a></li>
                <li><a href="#">زیر دسته دو</a></li>
                <li><a href="#">زیر دسته سه</a></li>
                <li><a href="#">زیر دسته چهار</a></li>
              </ul>
              <NuxtLink to="/shop-4-column" class="view-all-btn">مشاهده همه</NuxtLink>
            </div>
          </div>
          <div class="category-slider-item swiper-slide">
            <div class="thumb-category">
              <a href="single-product.html">
                <img
                  src="assets/images/product-image/3.jpg"
                  alt="product-image.jpg"
                />
              </a>
            </div>
            <div class="category-discript">
              <h4>عنوان دسته</h4>
              <ul>
                <li><a href="#">زیر دسته یک</a></li>
                <li><a href="#">زیر دسته دو</a></li>
                <li><a href="#">زیر دسته سه</a></li>
                <li><a href="#">زیر دسته چهار</a></li>
              </ul>
              <NuxtLink to="/shop-4-column" class="view-all-btn">مشاهده همه</NuxtLink>
            </div>
          </div>
          <div class="category-slider-item swiper-slide">
            <div class="thumb-category">
              <a href="single-product.html">
                <img
                  src="assets/images/product-image/4.jpg"
                  alt="product-image.jpg"
                />
              </a>
            </div>
            <div class="category-discript">
              <h4>عنوان دسته</h4>
              <ul>
                <li><a href="#">زیر دسته یک</a></li>
                <li><a href="#">زیر دسته دو</a></li>
                <li><a href="#">زیر دسته سه</a></li>
                <li><a href="#">زیر دسته چهار</a></li>
              </ul>
              <NuxtLink to="/shop-4-column" class="view-all-btn">مشاهده همه</NuxtLink>
            </div>
          </div>
          <div class="category-slider-item swiper-slide">
            <div class="thumb-category">
              <a href="single-product.html">
                <img
                  src="assets/images/product-image/5.jpg"
                  alt="product-image.jpg"
                />
              </a>
            </div>
            <div class="category-discript">
              <h4>عنوان دسته</h4>
              <ul>
                <li><a href="#">زیر دسته یک</a></li>
                <li><a href="#">زیر دسته دو</a></li>
                <li><a href="#">زیر دسته سه</a></li>
                <li><a href="#">زیر دسته چهار</a></li>
              </ul>
              <NuxtLink to="/shop-4-column" class="view-all-btn">مشاهده همه</NuxtLink>
            </div>
          </div>
          <div class="category-slider-item swiper-slide">
            <div class="thumb-category">
              <a href="single-product.html">
                <img
                  src="assets/images/product-image/1.jpg"
                  alt="product-image.jpg"
                />
              </a>
            </div>
            <div class="category-discript">
              <h4>عنوان دسته</h4>
              <ul>
                <li><a href="#">زیر دسته یک</a></li>
                <li><a href="#">زیر دسته دو</a></li>
                <li><a href="#">زیر دسته سه</a></li>
                <li><a href="#">زیر دسته چهار</a></li>
              </ul>
              <NuxtLink to="/shop-4-column" class="view-all-btn">مشاهده همه</NuxtLink>
            </div>
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-buttons">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- category Area End -->
  <!-- Brand area start -->
  <div class="brand-area mb-60px mt-60px">
    <div class="container">
      <div class="brand-slider slider-nav-style-1 slider-nav-style-2">
        <div class="brand-slider-wrapper swiper-wrapper">
          <div class="brand-slider-item swiper-slide">
            <a href="#"><img src="assets/images/brand-logo/1.jpg" alt="" /></a>
          </div>
          <div class="brand-slider-item swiper-slide">
            <a href="#"><img src="assets/images/brand-logo/2.jpg" alt="" /></a>
          </div>
          <div class="brand-slider-item swiper-slide">
            <a href="#"><img src="assets/images/brand-logo/3.jpg" alt="" /></a>
          </div>
          <div class="brand-slider-item swiper-slide">
            <a href="#"><img src="assets/images/brand-logo/4.jpg" alt="" /></a>
          </div>
          <div class="brand-slider-item swiper-slide">
            <a href="#"><img src="assets/images/brand-logo/5.jpg" alt="" /></a>
          </div>
          <div class="brand-slider-item swiper-slide">
            <a href="#"><img src="assets/images/brand-logo/1.jpg" alt="" /></a>
          </div>
          <div class="brand-slider-item swiper-slide">
            <a href="#"><img src="assets/images/brand-logo/2.jpg" alt="" /></a>
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-buttons">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Brand area end -->
</template>
