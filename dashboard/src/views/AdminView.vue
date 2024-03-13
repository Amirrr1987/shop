<template>
  <div class="grid">
    <div class="card">
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
              <RouterLink to="/category/add" class="btn w-full"> Add </RouterLink>
              <RouterLink to="/category" class="btn w-full"> List </RouterLink>
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
    </div>
    <div class="p-4 bg-light"><RouterView /></div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.grid {
  height: 100%;
  display: grid;
  grid-template-columns: 14rem 1fr;
}
</style>
