<script setup lang="ts"></script>

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
            <p>Welcome you to Rozer Store!</p>
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
                    Setting <i class="ion-ios-arrow-down"></i>
                  </button>

                  <ul
                    class="dropdown-menu animation slideDownIn"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li><NuxtLink to="/my-account">My account</NuxtLink></li>
                    <li><NuxtLink to="/checkout">Checkout</NuxtLink></li>
                    <li><NuxtLink to="/login">Sign in</NuxtLink></li>
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
                    USD $ <i class="ion-ios-arrow-down"></i>
                  </button>

                  <ul
                    class="dropdown-menu animation slideDownIn"
                    aria-labelledby="dropdownMenuButton-2"
                  >
                    <li><NuxtLink to="/#">EUR €</NuxtLink></li>
                    <li><NuxtLink to="/#">USD $</NuxtLink></li>
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
                    <img src="assets/images/flag/1.jpg" alt="" /> English
                    <i class="ion-ios-arrow-down"></i>
                  </button>

                  <ul
                    class="dropdown-menu animation slideDownIn"
                    aria-labelledby="dropdownMenuButton-3"
                  >
                    <li>
                      <NuxtLink to="/"
                        ><img src="assets/images/flag/1.jpg" alt="" />
                        English</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/">
                        <img src="assets/images/flag/2.jpg" alt="" />
                        Français
                      </NuxtLink>
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
                  src="assets/images/logo/logo.png"
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
                      <option value="0">All categories</option>
                      <option value="12">Laptop</option>
                      <option value="13">- - Hot Categories</option>
                      <option value="19">- - - - Dresses</option>
                      <option value="20">- - - - Jackets &amp; Coats</option>
                      <option value="21">- - - - Sweaters</option>
                      <option value="22">- - - - Jeans</option>
                      <option value="23">- - - - Blouses &amp; Shirts</option>
                      <option value="14">- - Outerwear &amp; Jackets</option>
                      <option value="24">- - - - Basic Jackets</option>
                      <option value="25">- - - - Real Fur</option>
                      <option value="26">- - - - Down Coats</option>
                      <option value="27">- - - - Blazers</option>
                      <option value="28">- - - - Trench Coats</option>
                      <option value="15">- - Weddings &amp; Events</option>
                      <option value="29">- - - - Wedding Dresses</option>
                      <option value="30">- - - - Evening Dresses</option>
                      <option value="31">- - - - Prom Dresses</option>
                      <option value="32">- - - - Bridesmaid Dresses</option>
                      <option value="33">- - - - Wedding Accessories</option>
                      <option value="16">- - Bottoms</option>
                      <option value="34">- - - - Skirts</option>
                      <option value="35">- - - - Leggings</option>
                      <option value="36">- - - - Pants &amp; Capris</option>
                      <option value="37">- - - - Wide Leg Pants</option>
                      <option value="38">- - - - Shorts</option>
                      <option value="17">- - Tops &amp; Sets</option>
                      <option value="39">- - - - Tank Tops</option>
                      <option value="40">- - - - Suits &amp; Sets</option>
                      <option value="41">- - - - Jumpsuits</option>
                      <option value="42">- - - - Rompers</option>
                      <option value="43">- - - - Sleep &amp; Lounge</option>
                      <option value="18">- - Accessories</option>
                      <option value="44">
                        - - - - Eyewear &amp; Accessories
                      </option>
                      <option value="45">- - - - Hats &amp; Caps</option>
                      <option value="46">
                        - - - - Belts &amp; Cummerbunds
                      </option>
                      <option value="47">- - - - Scarves &amp; Wraps</option>
                      <option value="48">- - - - Gloves &amp; Mittens</option>
                      <option value="49">Computer</option>
                      <option value="50">- - Bottoms</option>
                      <option value="53">- - - - Skirts</option>
                      <option value="54">- - - - Leggings</option>
                      <option value="55">- - - - Jeans</option>
                      <option value="56">- - - - Pants &amp; Capris</option>
                      <option value="57">- - - - Shorts</option>
                      <option value="51">- - Outerwear &amp; Jackets</option>
                      <option value="58">- - - - Trench</option>
                      <option value="59">- - - - Genuine Leather</option>
                      <option value="60">- - - - Parkas</option>
                      <option value="61">- - - - Down Jackets</option>
                      <option value="62">- - - - Wool &amp; Blends</option>
                      <option value="52">- - Underwear &amp; Loungewear</option>
                      <option value="63">- - - - Boxers</option>
                      <option value="64">- - - - Briefs</option>
                      <option value="65">- - - - Long Johns</option>
                      <option value="66">
                        - - - - Men's Sleep &amp; Lounge
                      </option>
                      <option value="67">- - - - Pajama Sets</option>
                      <option value="68">Smartphone</option>
                      <option value="69">- - Accessories &amp; Parts</option>
                      <option value="75">- - - - Cables &amp; Adapters</option>
                      <option value="76">- - - - Batteries</option>
                      <option value="77">- - - - Chargers</option>
                      <option value="78">- - - - Bags &amp; Cases</option>
                      <option value="79">- - - - Electronic Cigarettes</option>
                      <option value="70">- - Audio &amp; Video</option>
                      <option value="80">- - - - Televisions</option>
                      <option value="81">- - - - TV Receivers</option>
                      <option value="82">- - - - Projectors</option>
                      <option value="83">- - - - Audio Amplifier Boards</option>
                      <option value="84">- - - - TV Sticks</option>
                      <option value="71">- - Camera &amp; Photo</option>
                      <option value="85">- - - - Digital Cameras</option>
                      <option value="86">- - - - Camcorders</option>
                      <option value="87">- - - - Camera Drones</option>
                      <option value="88">- - - - Action Cameras</option>
                      <option value="89">- - - - Photo Studio Supplies</option>
                      <option value="72">- - Portable Audio &amp; Video</option>
                      <option value="90">- - - - Headphones</option>
                      <option value="91">- - - - Speakers</option>
                      <option value="92">- - - - MP3 Players</option>
                      <option value="93">- - - - VR/AR Devices</option>
                      <option value="94">- - - - Microphones</option>
                      <option value="73">- - Smart Electronics</option>
                      <option value="95">- - - - Wearable Devices</option>
                      <option value="96">- - - - Smart Home Appliances</option>
                      <option value="97">- - - - Smart Remote Controls</option>
                      <option value="98">- - - - Smart Watches</option>
                      <option value="99">- - - - Smart Wristbands</option>
                      <option value="74">- - Video Games</option>
                      <option value="100">- - - - Handheld Game Players</option>
                      <option value="101">- - - - Game Controllers</option>
                      <option value="102">- - - - Joysticks</option>
                      <option value="103">- - - - Stickers</option>
                      <option value="104">Game Consoles</option>
                      <option value="105">Mp3 &amp; headphone</option>
                      <option value="106">Tv &amp; Video</option>
                      <option value="107">Watches</option>
                      <option value="108">Washing Machine</option>
                      <option value="109">Camera</option>
                      <option value="110">Audio &amp; Theater</option>
                      <option value="111">Accessories</option>
                      <option value="112">Games &amp; Consoles</option>
                    </select>
                  </div>
                  <input type="text" placeholder="Enter your search key ... " />
                  <button><i class="icon-magnifier"></i></button>
                </form>
              </div>
              <div class="contact-link">
                <div class="phone">
                  <p>Call us:</p>
                  <NuxtLink to="/tel:(+800)345678">(+800)345678</NuxtLink>
                </div>
              </div>
              <!--Cart info Start -->
              <div class="header-tools d-flex">
                <div class="cart-info d-flex align-self-center">
                  <NuxtLink to="/compare" class="shuffle" data-number="3"
                    ><i class="icon-shuffle"></i
                  ></NuxtLink>
                  <NuxtLink
                    to="/offcanvas-wishlist"
                    class="heart offcanvas-toggle"
                    data-number="3"
                    ><i class="icon-heart"></i
                  ></NuxtLink>
                  <NuxtLink
                    to="/offcanvas-cart"
                    class="bag offcanvas-toggle"
                    data-number="3"
                    ><i class="icon-bag"></i><span>$20.00</span></NuxtLink
                  >
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
              <h4 class="menu-title">All Cattegories</h4>
              <ul class="menu-content display-none">
                <li class="menu-item">
                  <NuxtLink to="/#"
                    >Electronics <i class="ion-ios-arrow-right"></i
                  ></NuxtLink>
                  <ul class="sub-menu flex-wrap">
                    <li>
                      <NuxtLink to="/#">
                        <span> <strong> Accessories & Parts</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink to="/#">Cables & Adapters</NuxtLink></li>
                        <li><NuxtLink to="/#">Batteries</NuxtLink></li>
                        <li><NuxtLink to="/#">Chargers</NuxtLink></li>
                        <li><NuxtLink to="/#">Bags & Cases</NuxtLink></li>
                        <li>
                          <NuxtLink to="/#">Electronic Cigarettes</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink to="/#">
                        <span><strong>Camera & Photo</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink to="/#">Digital Cameras</NuxtLink></li>
                        <li><NuxtLink to="/#">Camcorders</NuxtLink></li>
                        <li><NuxtLink to="/#">Camera Drones</NuxtLink></li>
                        <li><NuxtLink to="/#">Action Cameras</NuxtLink></li>
                        <li>
                          <NuxtLink to="/#">Photo Studio Supplie</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink to="/#">
                        <span><strong>Smart Electronics</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink to="/#">Wearable Devices</NuxtLink></li>
                        <li>
                          <NuxtLink to="/#">Smart Home Appliances</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/#">Smart Remote Controls</NuxtLink>
                        </li>
                        <li><NuxtLink to="/#">Smart Watches</NuxtLink></li>
                        <li><NuxtLink to="/#">Smart Wristbands</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink to="/#">
                        <span><strong>Audio & Video</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink to="/#">Televisions</NuxtLink></li>
                        <li><NuxtLink to="/#">TV Receivers</NuxtLink></li>
                        <li><NuxtLink to="/#">Projectors</NuxtLink></li>
                        <li>
                          <NuxtLink to="/#">Audio Amplifier Boards</NuxtLink>
                        </li>
                        <li><NuxtLink to="/#">TV Sticks</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink to="/#">
                        <span><strong>Portable Audio & Video</strong></span>
                      </NuxtLink>
                      <ul class="submenu-item">
                        <li><NuxtLink to="/#">Headphones</NuxtLink></li>
                        <li><NuxtLink to="/#">Speakers</NuxtLink></li>
                        <li><NuxtLink to="/#">MP3 Players</NuxtLink></li>
                        <li><NuxtLink to="/#">VR/AR Devices</NuxtLink></li>
                        <li><NuxtLink to="/#">Microphones</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <img
                        src="assets/images/menu-image/banner-mega1.jpg"
                        alt=""
                      />
                    </li>
                  </ul>
                  <!-- sub menu -->
                </li>
                <li class="menu-item">
                  <NuxtLink to="/#"
                    >Video Games <i class="ion-ios-arrow-right"></i
                  ></NuxtLink>
                  <ul class="sub-menu sub-menu-2">
                    <li>
                      <ul class="submenu-item">
                        <li>
                          <NuxtLink to="/#">Handheld Game Players</NuxtLink>
                        </li>
                        <li><NuxtLink to="/#">Game Controllers</NuxtLink></li>
                        <li><NuxtLink to="/#">Joysticks</NuxtLink></li>
                        <li><NuxtLink to="/#">Stickers</NuxtLink></li>
                      </ul>
                    </li>
                  </ul>
                  <!-- sub menu -->
                </li>
                <li class="menu-item">
                  <NuxtLink to="/#">Televisions</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink to="/#">Digital Cameras</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink to="/#">Headphones</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink to="/#"> Wearable Devices</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink to="/#"> Smart Watches</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink to="/#"> Game Controllers</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink to="/#"> Smart Home Appliances</NuxtLink>
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
                  <NuxtLink to="/#"
                    >Home <i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <ul class="main-sub-menu">
                    <li><NuxtLink to="/">Home 1</NuxtLink></li>
                    <li><NuxtLink to="/index-2">Home 2</NuxtLink></li>
                    <li><NuxtLink to="/index-3">Home 3</NuxtLink></li>
                    <li><NuxtLink to="/index-4">Home 4</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-dropdown">
                  <NuxtLink to="/#"
                    >Shop <i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <ul class="mega-menu-wrap">
                    <li>
                      <ul>
                        <li class="mega-menu-title">
                          <NuxtLink to="/#">Shop Grid</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/shop-3-column"
                            >Shop Grid 3 Column</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/shop-4-column"
                            >Shop Grid 4 Column</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/shop-left-sidebar"
                            >Shop Grid Left Sidebar</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/shop-right-sidebar"
                            >Shop Grid Right Sidebar</NuxtLink
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li class="mega-menu-title">
                          <NuxtLink to="/#">Shop List</NuxtLink>
                        </li>
                        <li><NuxtLink to="/shop-list">Shop List</NuxtLink></li>
                        <li>
                          <NuxtLink to="/shop-list-left-sidebar"
                            >Shop List Left Sidebar</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/shop-list-right-sidebar"
                            >Shop List Right Sidebar</NuxtLink
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li class="mega-menu-title">
                          <NuxtLink to="/#">Shop Single</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/single-product">Shop Single</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/single-product-variable"
                            >Shop Variable</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-affiliate"
                            >Shop Affiliate</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-group"
                            >Shop Group</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-tabstyle-2"
                            >Shop Tab 2</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-tabstyle-3"
                            >Shop Tab 3</NuxtLink
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li class="mega-menu-title">
                          <NuxtLink to="/#">Shop Single</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/single-product-slider"
                            >Shop Slider</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-gallery-left"
                            >Shop Gallery Left</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-gallery-right"
                            >Shop Gallery Right</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-sticky-left"
                            >Shop Sticky Left</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/single-product-sticky-right"
                            >Shop Sticky Right</NuxtLink
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="w-100">
                      <ul class="banner-megamenu-wrapper d-flex">
                        <li class="banner-wrapper mr-30px">
                          <NuxtLink to="/single-product"
                            ><img
                              src="assets/images/menu-image/banner-menu2.jpg"
                              alt=""
                          /></NuxtLink>
                        </li>
                        <li class="banner-wrapper">
                          <NuxtLink to="/single-product"
                            ><img
                              src="assets/images/menu-image/banner-menu3.jpg"
                              alt=""
                          /></NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="menu-dropdown">
                  <NuxtLink to="/#"
                    >Pages <i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <ul class="main-sub-menu">
                    <li><NuxtLink to="/about">About Page</NuxtLink></li>
                    <li><NuxtLink to="/cart">Cart Page</NuxtLink></li>
                    <li><NuxtLink to="/checkout">Checkout Page</NuxtLink></li>
                    <li><NuxtLink to="/compare">Compare Page</NuxtLink></li>
                    <li>
                      <NuxtLink to="/login">Login & Register Page</NuxtLink>
                    </li>
                    <li><NuxtLink to="/my-account">Account Page</NuxtLink></li>
                    <li><NuxtLink to="/wishlist">Wishlist Page</NuxtLink></li>
                    <li>
                      <NuxtLink to="/thank-you-page">Thank You Page</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-dropdown">
                  <NuxtLink to="/#"
                    >Blog <i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <ul class="main-sub-menu">
                    <li class="menu-dropdown position-static">
                      <NuxtLink to="/#"
                        >Blog Grid <i class="ion-ios-arrow-right"></i
                      ></NuxtLink>
                      <ul class="main-sub-menu main-sub-menu-2">
                        <li>
                          <NuxtLink to="/blog-grid-left-sidebar"
                            >Blog Grid Left Sidebar</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/blog-grid-right-sidebar"
                            >Blog Grid Right Sidebar</NuxtLink
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="menu-dropdown position-static">
                      <NuxtLink to="/#"
                        >Blog List <i class="ion-ios-arrow-right"></i
                      ></NuxtLink>
                      <ul class="main-sub-menu main-sub-menu-2">
                        <li>
                          <NuxtLink to="/blog-list-left-sidebar"
                            >Blog List Left Sidebar</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/blog-list-right-sidebar"
                            >Blog List Right Sidebar</NuxtLink
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="menu-dropdown position-static">
                      <NuxtLink to="/#"
                        >Blog Single <i class="ion-ios-arrow-right"></i
                      ></NuxtLink>
                      <ul class="main-sub-menu main-sub-menu-2">
                        <li>
                          <NuxtLink to="/blog-single-left-sidebar"
                            >Blog Single Left Sidebar</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/blog-single-right-sidebar"
                            >Blog Single Right Sidbar</NuxtLink
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><NuxtLink to="/contact">contact Us</NuxtLink></li>
              </ul>
            </div>
            <!-- header horizontal menu -->
            <div class="intro-text-shipping text-end">
              <div class="free-ship">Free Shipping on Orders $50+</div>
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
            <NuxtLink to="/index"
              ><img
                class="img-responsive"
                src="assets/images/logo/logo.png"
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
                to="/offcanvas-wishlist"
                class="heart offcanvas-toggle d-xs-none"
                data-number="3"
                ><i class="icon-heart"></i
              ></NuxtLink>
              <NuxtLink
                to="/offcanvas-cart"
                class="bag offcanvas-toggle"
                data-number="3"
                ><i class="icon-bag"></i><span>$20.00</span></NuxtLink
              >
            </div>
            <div class="mobile-menu-toggle">
              <NuxtLink to="/#offcanvas-mobile-menu" class="offcanvas-toggle">
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
                  <option value="0">All categories</option>
                  <option value="12">Laptop</option>
                  <option value="13">- - Hot Categories</option>
                  <option value="19">- - - - Dresses</option>
                  <option value="20">- - - - Jackets &amp; Coats</option>
                  <option value="21">- - - - Sweaters</option>
                  <option value="22">- - - - Jeans</option>
                  <option value="23">- - - - Blouses &amp; Shirts</option>
                  <option value="14">- - Outerwear &amp; Jackets</option>
                  <option value="24">- - - - Basic Jackets</option>
                  <option value="25">- - - - Real Fur</option>
                  <option value="26">- - - - Down Coats</option>
                  <option value="27">- - - - Blazers</option>
                  <option value="28">- - - - Trench Coats</option>
                  <option value="15">- - Weddings &amp; Events</option>
                  <option value="29">- - - - Wedding Dresses</option>
                  <option value="30">- - - - Evening Dresses</option>
                  <option value="31">- - - - Prom Dresses</option>
                  <option value="32">- - - - Bridesmaid Dresses</option>
                  <option value="33">- - - - Wedding Accessories</option>
                  <option value="16">- - Bottoms</option>
                  <option value="34">- - - - Skirts</option>
                  <option value="35">- - - - Leggings</option>
                  <option value="36">- - - - Pants &amp; Capris</option>
                  <option value="37">- - - - Wide Leg Pants</option>
                  <option value="38">- - - - Shorts</option>
                  <option value="17">- - Tops &amp; Sets</option>
                  <option value="39">- - - - Tank Tops</option>
                  <option value="40">- - - - Suits &amp; Sets</option>
                  <option value="41">- - - - Jumpsuits</option>
                  <option value="42">- - - - Rompers</option>
                  <option value="43">- - - - Sleep &amp; Lounge</option>
                  <option value="18">- - Accessories</option>
                  <option value="44">- - - - Eyewear &amp; Accessories</option>
                  <option value="45">- - - - Hats &amp; Caps</option>
                  <option value="46">- - - - Belts &amp; Cummerbunds</option>
                  <option value="47">- - - - Scarves &amp; Wraps</option>
                  <option value="48">- - - - Gloves &amp; Mittens</option>
                  <option value="49">Computer</option>
                  <option value="50">- - Bottoms</option>
                  <option value="53">- - - - Skirts</option>
                  <option value="54">- - - - Leggings</option>
                  <option value="55">- - - - Jeans</option>
                  <option value="56">- - - - Pants &amp; Capris</option>
                  <option value="57">- - - - Shorts</option>
                  <option value="51">- - Outerwear &amp; Jackets</option>
                  <option value="58">- - - - Trench</option>
                  <option value="59">- - - - Genuine Leather</option>
                  <option value="60">- - - - Parkas</option>
                  <option value="61">- - - - Down Jackets</option>
                  <option value="62">- - - - Wool &amp; Blends</option>
                  <option value="52">- - Underwear &amp; Loungewear</option>
                  <option value="63">- - - - Boxers</option>
                  <option value="64">- - - - Briefs</option>
                  <option value="65">- - - - Long Johns</option>
                  <option value="66">- - - - Men's Sleep &amp; Lounge</option>
                  <option value="67">- - - - Pajama Sets</option>
                  <option value="68">Smartphone</option>
                  <option value="69">- - Accessories &amp; Parts</option>
                  <option value="75">- - - - Cables &amp; Adapters</option>
                  <option value="76">- - - - Batteries</option>
                  <option value="77">- - - - Chargers</option>
                  <option value="78">- - - - Bags &amp; Cases</option>
                  <option value="79">- - - - Electronic Cigarettes</option>
                  <option value="70">- - Audio &amp; Video</option>
                  <option value="80">- - - - Televisions</option>
                  <option value="81">- - - - TV Receivers</option>
                  <option value="82">- - - - Projectors</option>
                  <option value="83">- - - - Audio Amplifier Boards</option>
                  <option value="84">- - - - TV Sticks</option>
                  <option value="71">- - Camera &amp; Photo</option>
                  <option value="85">- - - - Digital Cameras</option>
                  <option value="86">- - - - Camcorders</option>
                  <option value="87">- - - - Camera Drones</option>
                  <option value="88">- - - - Action Cameras</option>
                  <option value="89">- - - - Photo Studio Supplies</option>
                  <option value="72">- - Portable Audio &amp; Video</option>
                  <option value="90">- - - - Headphones</option>
                  <option value="91">- - - - Speakers</option>
                  <option value="92">- - - - MP3 Players</option>
                  <option value="93">- - - - VR/AR Devices</option>
                  <option value="94">- - - - Microphones</option>
                  <option value="73">- - Smart Electronics</option>
                  <option value="95">- - - - Wearable Devices</option>
                  <option value="96">- - - - Smart Home Appliances</option>
                  <option value="97">- - - - Smart Remote Controls</option>
                  <option value="98">- - - - Smart Watches</option>
                  <option value="99">- - - - Smart Wristbands</option>
                  <option value="74">- - Video Games</option>
                  <option value="100">- - - - Handheld Game Players</option>
                  <option value="101">- - - - Game Controllers</option>
                  <option value="102">- - - - Joysticks</option>
                  <option value="103">- - - - Stickers</option>
                  <option value="104">Game Consoles</option>
                  <option value="105">Mp3 &amp; headphone</option>
                  <option value="106">Tv &amp; Video</option>
                  <option value="107">Watches</option>
                  <option value="108">Washing Machine</option>
                  <option value="109">Camera</option>
                  <option value="110">Audio &amp; Theater</option>
                  <option value="111">Accessories</option>
                  <option value="112">Games &amp; Consoles</option>
                </select>
              </div>
              <input type="text" placeholder="Enter your search key ... " />
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
                <i class="fa fa-bars"></i> All Categories
              </button>
            </div>

            <!-- Category Menu -->
            <nav class="category-menu">
              <ul>
                <li class="menu-item-has-children menu-item-has-children-1">
                  <NuxtLink to="/#"
                    >Accessories & Parts<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-1">
                    <li><NuxtLink to="/#">Cables & Adapters</NuxtLink></li>
                    <li><NuxtLink to="/#">Batteries</NuxtLink></li>
                    <li><NuxtLink to="/#">Chargers</NuxtLink></li>
                    <li><NuxtLink to="/#">Bags & Cases</NuxtLink></li>
                    <li><NuxtLink to="/#">Electronic Cigarettes</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-2">
                  <NuxtLink to="/#"
                    >Camera & Photo<i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-2">
                    <li><NuxtLink to="/#">Digital Cameras</NuxtLink></li>
                    <li><NuxtLink to="/#">Camcorders</NuxtLink></li>
                    <li><NuxtLink to="/#">Camera Drones</NuxtLink></li>
                    <li><NuxtLink to="/#">Action Cameras</NuxtLink></li>
                    <li><NuxtLink to="/#">Photo Studio Supplies</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-3">
                  <NuxtLink to="/#"
                    >Smart Electronics <i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-3">
                    <li><NuxtLink to="/#">Wearable Devices</NuxtLink></li>
                    <li><NuxtLink to="/#">Smart Home Appliances</NuxtLink></li>
                    <li><NuxtLink to="/#">Smart Remote Controls</NuxtLink></li>
                    <li><NuxtLink to="/#">Smart Watches</NuxtLink></li>
                    <li><NuxtLink to="/#">Smart Wristbands</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-4">
                  <NuxtLink to="/#"
                    >Audio & Video <i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-4">
                    <li><NuxtLink to="/#">Televisions</NuxtLink></li>
                    <li><NuxtLink to="/#">TV Receivers</NuxtLink></li>
                    <li><NuxtLink to="/#">Projectors</NuxtLink></li>
                    <li><NuxtLink to="/#">Audio Amplifier Boards</NuxtLink></li>
                    <li><NuxtLink to="/#">TV Sticks</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-5">
                  <NuxtLink to="/#"
                    >Portable Audio & Video <i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-5">
                    <li><NuxtLink to="/#">Headphones</NuxtLink></li>
                    <li><NuxtLink to="/#">Speakers</NuxtLink></li>
                    <li><NuxtLink to="/#">MP3 Players</NuxtLink></li>
                    <li><NuxtLink to="/#">VR/AR Devices</NuxtLink></li>
                    <li><NuxtLink to="/#">Microphones</NuxtLink></li>
                  </ul>
                </li>
                <li class="menu-item-has-children menu-item-has-children-6">
                  <NuxtLink to="/#"
                    >Video Game <i class="ion-ios-arrow-down"></i
                  ></NuxtLink>
                  <!-- category submenu -->
                  <ul class="category-mega-menu category-mega-menu-6">
                    <li><NuxtLink to="/#">Handheld Game Players</NuxtLink></li>
                    <li><NuxtLink to="/#">Game Controllers</NuxtLink></li>
                    <li><NuxtLink to="/#">Joysticks</NuxtLink></li>
                    <li><NuxtLink to="/#">Stickers</NuxtLink></li>
                  </ul>
                </li>
                <li><NuxtLink to="/#">Televisions</NuxtLink></li>
                <li><NuxtLink to="/#">Digital Cameras</NuxtLink></li>
                <li><NuxtLink to="/#">Headphones</NuxtLink></li>
                <li><NuxtLink to="/#">Wearable Devices</NuxtLink></li>
                <li><NuxtLink to="/#">Smart Watches</NuxtLink></li>
                <li><NuxtLink to="/#">Game Controllers</NuxtLink></li>
                <li><NuxtLink to="/#"> Smart Home Appliances</NuxtLink></li>
                <li class="hidden"><NuxtLink to="/#">Projectors</NuxtLink></li>
                <li>
                  <NuxtLink to="/#" id="more-btn"
                    ><i class="ion-ios-plus-empty" aria-hidden="true"></i> More
                    Categories</NuxtLink
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
        <span class="title">Wishlist</span>
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
                >Walnut Cutting Board</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount">$100.00</span></span
              >
              <NuxtLink to="/#" class="remove">×</NuxtLink>
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
                >Lucky Wooden Elephant</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount">$35.00</span></span
              >
              <NuxtLink to="/#" class="remove">×</NuxtLink>
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
                >Fish Cut Out Set</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount">$9.00</span></span
              >
              <NuxtLink to="/#" class="remove">×</NuxtLink>
            </div>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="buttons">
          <NuxtLink
            to="/wishlist"
            class="btn btn-dark btn-hover-primary mt-30px"
            >view wishlist</NuxtLink
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
        <span class="title">Cart</span>
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
                >Walnut Cutting Board</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount">$100.00</span></span
              >
              <NuxtLink to="/#" class="remove">×</NuxtLink>
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
                >Lucky Wooden Elephant</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount">$35.00</span></span
              >
              <NuxtLink to="/#" class="remove">×</NuxtLink>
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
                >Fish Cut Out Set</NuxtLink
              >
              <span class="quantity-price"
                >1 x <span class="amount">$9.00</span></span
              >
              <NuxtLink to="/#" class="remove">×</NuxtLink>
            </div>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="sub-total">
          <strong>Subtotal :</strong>
          <span class="amount">$144.00</span>
        </div>
        <div class="buttons">
          <NuxtLink to="/cart" class="btn btn-dark btn-hover-primary mb-30px"
            >view cart</NuxtLink
          >
          <NuxtLink to="/checkout" class="btn btn-outline-dark current-btn"
            >checkout</NuxtLink
          >
        </div>
        <p class="minicart-message">Free Shipping on All Orders Over $100!</p>
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
          <input type="text" placeholder="Search..." />
          <button><i class="icon-magnifier"></i></button>
        </form>
      </div>
      <div class="offcanvas-menu">
        <ul>
          <li>
            <NuxtLink to="/#"><span class="menu-text">Home</span></NuxtLink>
            <ul class="sub-menu">
              <li>
                <NuxtLink to="/"
                  ><span class="menu-text">Home 1</span></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/index-2"
                  ><span class="menu-text">Home 2</span></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/index-3"
                  ><span class="menu-text">Home 3</span></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/index-4"
                  ><span class="menu-text">Home 4</span></NuxtLink
                >
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/#"><span class="menu-text">Shop</span></NuxtLink>
            <ul class="sub-menu">
              <li>
                <NuxtLink to="/#"
                  ><span class="menu-text">Shop Grid</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/shop-3-column">Shop Grid 3 Column</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-4-column">Shop Grid 4 Column</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-left-sidebar"
                      >Shop Grid Left Sidebar</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/shop-right-sidebar"
                      >Shop Grid Right Sidebar</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink to="/#"
                  ><span class="menu-text">Shop List</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li><NuxtLink to="/shop-list">Shop List</NuxtLink></li>
                  <li>
                    <NuxtLink to="/shop-list-left-sidebar"
                      >Shop List Left Sidebar</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/shop-list-right-sidebar"
                      >Shop List Right Sidebar</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink to="/#"
                  ><span class="menu-text">Shop Single</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li><NuxtLink to="/single-product">Shop Single</NuxtLink></li>
                  <li>
                    <NuxtLink to="/single-product-variable"
                      >Shop Variable</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-affiliate"
                      >Shop Affiliate</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-group">Shop Group</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/single-product-tabstyle-2"
                      >Shop Tab 2</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-tabstyle-3"
                      >Shop Tab 3</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink to="/#"
                  ><span class="menu-text">Shop Single</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/single-product-slider">Shop Slider</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/single-product-gallery-left"
                      >Shop Gallery Left</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-gallery-right"
                      >Shop Gallery Right</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-sticky-left"
                      >Shop Sticky Left</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/single-product-sticky-right"
                      >Shop Sticky Right</NuxtLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/#"><span class="menu-text">Pages</span></NuxtLink>
            <ul class="sub-menu">
              <li><NuxtLink to="/about">About Page</NuxtLink></li>
              <li><NuxtLink to="/cart">Cart Page</NuxtLink></li>
              <li><NuxtLink to="/checkout">Checkout Page</NuxtLink></li>
              <li><NuxtLink to="/compare">Compare Page</NuxtLink></li>
              <li><NuxtLink to="/login">Login & Register Page</NuxtLink></li>
              <li><NuxtLink to="/my-account">Account Page</NuxtLink></li>
              <li><NuxtLink to="/wishlist">Wishlist Page</NuxtLink></li>
              <li><NuxtLink to="/thank-you-page">Thank You Page</NuxtLink></li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/#"><span class="menu-text">Blog</span></NuxtLink>
            <ul class="sub-menu">
              <li>
                <NuxtLink to="/#"
                  ><span class="menu-text">Blog Grid</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/blog-grid-left-sidebar"
                      >Blog Grid Left Sidebar</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/blog-grid-right-sidebar"
                      >Blog Grid Right Sidebar</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink to="/#"
                  ><span class="menu-text">Blog List</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/blog-list-left-sidebar"
                      >Blog List Left Sidebar</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/blog-list-right-sidebar"
                      >Blog List Right Sidebar</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink to="/#"
                  ><span class="menu-text">Blog Single</span></NuxtLink
                >
                <ul class="sub-menu">
                  <li>
                    <NuxtLink to="/blog-single-left-sidebar"
                      >Blog Single Left Sidebar</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/blog-single-right-sidebar"
                      >Blog Single Right Sidbar</NuxtLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
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
            <NuxtLink to="/#"><i class="icon-social-facebook"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#"><i class="icon-social-twitter"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#"><i class="icon-social-instagram"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#"><i class="icon-social-google"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#"><i class="icon-social-instagram"></i></NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- OffCanvas Search End -->

  <div class="offcanvas-overlay"></div>
  <slot />

  <!-- Footer Area Start -->
  <div class="footer-area">
    <div class="footer-container">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-md-30px mb-lm-30px">
              <div class="single-wedge">
                <h4 class="footer-herading">ABOUT US</h4>
                <p class="text-infor">
                  We are a team of designers and developers that create high
                  quality HTML template
                </p>
                <div class="need-help">
                  <p class="phone-info">
                    NEED HELP?
                    <span>
                      0123456789 <br />
                      0123456789
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mb-md-30px mb-lm-30px">
              <div class="single-wedge">
                <h4 class="footer-herading">Information</h4>
                <div class="footer-links">
                  <ul>
                    <li><NuxtLink to="/#">Delivery</NuxtLink></li>
                    <li><NuxtLink to="/about">About Us</NuxtLink></li>
                    <li><NuxtLink to="/#">Secure Payment</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                    <li><NuxtLink to="/#">Sitemap</NuxtLink></li>
                    <li><NuxtLink to="/#">Stores</NuxtLink></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mb-sm-30px mb-lm-30px">
              <div class="single-wedge">
                <h4 class="footer-herading">CUSTOM LINKS</h4>
                <div class="footer-links">
                  <ul>
                    <li><NuxtLink to="/#">Legal Notice</NuxtLink></li>
                    <li><NuxtLink to="/#">Prices Drop</NuxtLink></li>
                    <li><NuxtLink to="/#">New Products</NuxtLink></li>
                    <li><NuxtLink to="/#">Best Sales</NuxtLink></li>
                    <li><NuxtLink to="/login">Login</NuxtLink></li>
                    <li><NuxtLink to="/my-account">My Account</NuxtLink></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-wedge">
                <h4 class="footer-herading">NEWSLETTER</h4>
                <div class="subscrib-text">
                  <p>
                    You may unsubscribe at any moment. For that purpose, please
                    find our contact info in the legal notice.
                  </p>
                </div>
                <div id="mc_embed_signup" class="subscribe-form">
                  <form
                    id="mc-embedded-subscribe-form"
                    class="validate"
                    novalidate
                    target="_blank"
                    name="mc-embedded-subscribe-form"
                    method="post"
                    action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                  >
                    <div id="mc_embed_signup_scroll" class="mc-form">
                      <input
                        class="email"
                        type="email"
                        required
                        placeholder="Enter your email here.."
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
                          value="Sign Up"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="social-info">
                  <ul>
                    <li>
                      <NuxtLink to="/#"
                        ><i class="icon-social-facebook"></i
                      ></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/#"
                        ><i class="icon-social-twitter"></i
                      ></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/#"
                        ><i class="icon-social-instagram"></i
                      ></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/#"
                        ><i class="icon-social-google"></i
                      ></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/#"
                        ><i class="icon-social-instagram"></i
                      ></NuxtLink>
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
              <p class="copy-text">
                © 2021 <strong>Rozer</strong> Made With
                <i
                  class="fa fa-heart"
                  style="color: red"
                  aria-hidden="true"
                ></i>
                By
                <a class="company-name" href="https://hasthemes.com/">
                  <strong> HasThemes</strong></a
                >.
              </p>
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
  <!-- Footer Area End -->
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">x</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-5 col-sm-12 col-xs-12 mb-lm-100px mb-sm-30px">
              <!-- Swiper -->
              <div class="swiper-container gallery-top">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      class="img-responsive m-auto"
                      src="assets/images/product-image/11.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="img-responsive m-auto"
                      src="assets/images/product-image/12.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="img-responsive m-auto"
                      src="assets/images/product-image/13.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="img-responsive m-auto"
                      src="assets/images/product-image/14.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      class="img-responsive m-auto"
                      src="assets/images/product-image/11.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="img-responsive m-auto"
                      src="assets/images/product-image/12.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="img-responsive m-auto"
                      src="assets/images/product-image/13.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="img-responsive m-auto"
                      src="assets/images/product-image/14.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-sm-12 col-xs-12">
              <div class="product-details-content quickview-content">
                <h2>Originals Kaval Windbr</h2>
                <p class="reference">Reference:<span> demo_17</span></p>
                <div class="pro-details-rating-wrap">
                  <div class="rating-product">
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                  </div>
                  <span class="read-review"
                    ><NuxtLink class="reviews" to="/"
                      >Read reviews (1)</NuxtLink
                    ></span
                  >
                </div>
                <div class="pricing-meta">
                  <ul>
                    <li class="old-price not-cut">€18.90</li>
                  </ul>
                </div>
                <p class="quickview-para">
                  Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm
                  tempor incidid ut labore et dolore magna aliqua. Ut enim ad
                  minim venialo quis nostrud exercitation ullamco
                </p>
                <div class="pro-details-size-color">
                  <div class="pro-details-color-wrap">
                    <span>Color</span>
                    <div class="pro-details-color-content">
                      <ul>
                        <li class="blue"></li>
                        <li class="maroon active"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="pro-details-quality">
                  <div class="cart-plus-minus">
                    <input
                      class="cart-plus-minus-box"
                      type="text"
                      name="qtybutton"
                      value="1"
                    />
                  </div>
                  <div class="pro-details-cart btn-hover">
                    <NuxtLink to="/#"> + Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="pro-details-wish-com">
                  <div class="pro-details-wishlist">
                    <NuxtLink to="/wishlist"
                      ><i class="ion-android-favorite-outline"></i>Add to
                      wishlist</NuxtLink
                    >
                  </div>
                  <div class="pro-details-compare">
                    <NuxtLink to="/compare"
                      ><i class="ion-ios-shuffle-strong"></i>Add to
                      compare</NuxtLink
                    >
                  </div>
                </div>
                <div class="pro-details-social-info">
                  <span>Share</span>
                  <div class="social-info">
                    <ul>
                      <li>
                        <NuxtLink to="/#"
                          ><i class="ion-social-facebook"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/#"
                          ><i class="ion-social-twitter"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/#"
                          ><i class="ion-social-google"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/#"
                          ><i class="ion-social-instagram"></i
                        ></NuxtLink>
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
  <!-- Modal end -->
</template>
