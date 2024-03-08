<template>
  <section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12950.205005594253!2d51.313581315329!3d35.761833035490014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1709922092984!5m2!1sen!2s"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-full h-96 shadow"
    />
  </section>
  <section class="py-12">
    <UContainer :ui="uiContainer">
      <div class="grid grid-cols-2 gap-4">
        <div class="">
          <div class="mb-6">
            <h3 class="text-2xl capitalize font-medium mb-2">tilte</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dicta?
            </p>
          </div>
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormGroup label="Email" name="email">
              <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
              <UInput v-model="state.password" type="password" />
            </UFormGroup>

            <UButton type="submit"> Submit </UButton>
          </UForm>
        </div>
        <div class="">
          <div class="mb-6">
            <h3 class="text-2xl capitalize font-medium mb-2">tilte</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dicta?
            </p>
          </div>
          <UAccordion :items="items" />
        </div>

        <UCard :ui="uiCard">
          <UIcon class="text-7xl text-primary-700" name="i-heroicons-home" />
          <div>
            <div class="text-2xl capitalize font-medium">title</div>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum cupiditate explicabo nam nesciunt!
            </p>
          </div>
        </UCard>

        <UCard :ui="uiCard">
          <UIcon class="text-7xl text-primary-700" name="i-heroicons-phone" />
          <div>
            <div class="text-2xl capitalize font-medium">title</div>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum cupiditate explicabo nam nesciunt!
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
import { uiContainer } from "~/utils";
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const uiCard = reactive({
  body: {
    base: "flex gap-4",
  },
});

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}

const items = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },

  {
    label: "Utilities",
    icon: "i-heroicons-wrench-screwdriver",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>
