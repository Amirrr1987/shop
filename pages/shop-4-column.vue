<template>
  <!-- Breadcrumb Area Start -->
  <div class="breadcrumb-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="breadcrumb-content">
            <ul class="nav">
              <li><NuxtLink to="/">صفحه اصلی</NuxtLink></li>
              <li>فروشگاه</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Area End-->
  <!-- Shop Category Area End -->
  <div class="shop-category-area mt-30px">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <!-- Shop Top Area Start -->
          <div class="shop-top-bar d-flex">
            <!-- Left Side start -->
            <div class="shop-tab nav d-flex">
              <a class="active" href="#shop-1" data-bs-toggle="tab">
                <i class="fa fa-th"></i>
              </a>
              <a href="#shop-2" data-bs-toggle="tab">
                <i class="fa fa-list"></i>
              </a>
              <p>17 محصول وجود دارد.</p>
            </div>
            <!-- Left Side End -->
            <!-- Right Side Start -->
            <div class="select-shoing-wrap d-flex">
              <div class="shot-product">
                <p>مرتب سازی :</p>
              </div>
              <div class="shop-select">
                <select>
                  <option value="">جدید ترین</option>
                  <option value="">قدیمی ترین</option>
                  <option value="">محبوب ترین</option>
                  <option value="">پرفروش ترین</option>
                </select>
              </div>
            </div>
            <!-- Right Side End -->
          </div>
          <!-- Shop Top Area End -->

          <!-- Shop Bottom Area Start -->
          <div class="shop-bottom-area mt-35">
            <!-- Shop Tab Content Start -->
            <div class="tab-content jump">
              <!-- Tab One Start -->
              <div id="shop-1" class="tab-pane active">
                <div class="row responsive-md-class">
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            src="assets/images/product-image/6.jpg"
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
                            <i class="ion-ios-search-strong"></i>
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
                    <article class="list-product">
                      <div class="img-block">
                        <a href="single-product.html" class="thumbnail">
                          <img
                            class="first-img"
                            src="assets/images/product-image/19.jpg"
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div class="col-xl-3 col-md-4 col-sm-6">
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
                            <i class="ion-ios-search-strong"></i>
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
                            >جزئیات مربوط به محصول فروشگا...</a
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
                            <a href="wishlist.html"
                              ><i class="icon-heart"></i
                            ></a>
                          </li>
                          <li>
                            <a href="compare.html"
                              ><i class="icon-shuffle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <!-- Tab One End -->
              <!-- Tab Two Start -->
              <div id="shop-2" class="tab-pane">
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
                            <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                <img
                                  class="first-img"
                                  src="assets/images/product-image/13.jpg"
                                  alt=""
                                />
                                <img
                                  class="second-img"
                                  src="assets/images/product-image/14.jpg"
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
                            <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                <img
                                  class="first-img"
                                  src="assets/images/product-image/19.jpg"
                                  alt=""
                                />
                                <img
                                  class="second-img"
                                  src="assets/images/product-image/20.jpg"
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
                            <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                <img
                                  class="first-img"
                                  src="assets/images/product-image/29.jpg"
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap mb-30px scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
                            <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                <img
                                  class="first-img"
                                  src="assets/images/product-image/13.jpg"
                                  alt=""
                                />
                                <img
                                  class="second-img"
                                  src="assets/images/product-image/14.jpg"
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-list-wrap scroll-zoom">
                  <div class="row list-product m-0px">
                    <div class="col-md-12 padding-0px">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                          <div class="left-img">
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
                                  <i class="ion-ios-search-strong"></i>
                                </a>
                              </div>
                            </div>
                            <ul class="product-flag">
                              <li class="new">جدید</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                          <div class="product-desc-wrap">
                            <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"
                                ><span>عنوان محصول</span></a
                              >
                              <h2>
                                <a
                                  href="single-product.html"
                                  class="product-link"
                                  >جزئیات مربوط به محصول فروشگاه</a
                                >
                              </h2>
                              <div class="rating-product">
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                                <i class="ion-android-star"></i>
                              </div>
                              <div class="product-intro-info">
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی از صنعت
                                  است.
                                </p>
                                <p>
                                  چاپگرها و متون بلکه روزنامه و مجله در ستون که
                                  لازم است.
                                </p>
                                <p>
                                  برای شرایط فعلی مورد نیاز و بهبود ابزارهای
                                  کاربردی می باشد.
                                </p>
                                <p>
                                  محصولات زیادی در شصت و سه درصد گذشته حال و
                                  آینده است.
                                </p>
                              </div>
                            </div>
                            <div class="box-inner">
                              <div class="in-stock">
                                وضعیت : <span>موجود در انبار</span>
                              </div>
                              <div class="pricing-meta">
                                <ul>
                                  <li class="old-price not-cut">
                                    50.000 تومان
                                  </li>
                                </ul>
                              </div>
                              <div class="add-to-link">
                                <ul>
                                  <li class="cart">
                                    <a
                                      title="افزودن به سبد خرید"
                                      class="cart-btn"
                                      href="#"
                                      >افزودن به سبد خرید
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="wishlist.html"
                                      title="افزودن به لیست علاقه مندی ها"
                                      ><i class="icon-heart"></i> افزودن به لیست
                                      علاقه مندی ها</a
                                    >
                                  </li>
                                  <li>
                                    <a href="compare.html" title="مقایسه محصول"
                                      ><i class="icon-shuffle"></i> مقایسه
                                      محصول</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Tab Two End -->
            </div>
            <!-- Shop Tab Content End -->
            <!--  Pagination Area Start -->
            <div class="pro-pagination-style text-center mb-60px mt-30px">
              <ul>
                <li>
                  <a class="prev" href="#"
                    ><i class="ion-ios-arrow-right"></i
                  ></a>
                </li>
                <li><a class="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li>
                  <a class="next" href="#"
                    ><i class="ion-ios-arrow-left"></i
                  ></a>
                </li>
              </ul>
            </div>
            <!--  Pagination Area End -->
          </div>
          <!-- Shop Bottom Area End -->
        </div>
      </div>
    </div>
  </div>
  <!-- Shop Category Area End -->
</template>
