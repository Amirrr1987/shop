<template>
  <TheNavbar />

  <main>
    <section class="py-12">
      <UContainer :ui="uiContainer" class="">
        <div class="grid grid-cols-12 gap-8 h-full">
          <div class="col-span-2">
            <UCard>
              <UForm class="flex flex-col gap-y-4">
                <UFormGroup label="Email">
                  <UInput icon="i-heroicons-envelope" />
                </UFormGroup>
                <UFormGroup label="Email">
                  <UInputMenu
                    icon="i-heroicons-envelope"
                    v-model="selected"
                    :options="people"
                  />
                </UFormGroup>
                <UFormGroup label="Email">
                  <UInput icon="i-heroicons-envelope" />
                </UFormGroup>
                <UFormGroup label="Email">
                  <UInput icon="i-heroicons-envelope" />
                </UFormGroup>
                <UFormGroup label="Email">
                  <UInput icon="i-heroicons-envelope" />
                </UFormGroup>
              </UForm>
            </UCard>
          </div>
          <div class="col-span-10 grid grid-cols-4 gap-6">
            <UBreadcrumb class="col-span-full" :links="links" />

            <slot></slot>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
  <TheFooter />
</template>
<script setup lang="ts">
import { uiContainer, uiCard } from "~/utils";

const route = useRoute();

const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Products",
    icon: "i-heroicons-square-3-stack-3d",
    to: "/products",
  },
];
console.log(route.path);

const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];
const selected = ref(people[0]);
</script>
