<template>
  <div class="container-fluid bg-light">
    <div class="row">
      <div class="col-2 p-4">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <RouterLink to="/dashboard">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                >
                  Dashboard
                </button>
              </RouterLink>
            </h2>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Category
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body d-grid">
                <RouterLink to="/category/add" class="btn w-full"> add </RouterLink>
                <RouterLink to="/category/list" class="btn w-full"> List </RouterLink>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <nav class="nav flex-column">
          <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
          <RouterLink to="/category" class="nav-link">Category</RouterLink>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </nav>
      </div>
      <div class="col-10 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
