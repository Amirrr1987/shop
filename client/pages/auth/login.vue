<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-6 bg-red-5s0 w-96"
    @submit="onSubmit"
    autocomplete="off"
  >
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
    <ULink to="/auth/register" class="block" @click="(e:any)=> e.preventDefault"
      >register</ULink
    >
  </UForm>
</template>
<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
definePageMeta({
  layout: "auth",
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
</script>
