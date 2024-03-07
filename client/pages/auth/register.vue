<template>
  <UForm
    :schema="schema"
    :state="state"
    class="w-[40rem] grid grid-cols-2 gap-6"
    @submit="onSubmit"
  >
    <UFormGroup label="Username" name="username" class="col-span-2">
      <UInput v-model="state.username" />
    </UFormGroup>

    <UFormGroup label="First name" name="firstName">
      <UInput v-model="state.firstName" />
    </UFormGroup>

    <UFormGroup label="Last name" name="lastName">
      <UInput v-model="state.lastName" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UFormGroup label="Confirm password" name="confirmPassword">
      <UInput v-model="state.confirmPassword" type="password" />
    </UFormGroup>

    <div class="col-span-2">
      <UButton type="submit"> Submit </UButton>
    </div>
  </UForm>
</template>
<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
definePageMeta({
  layout: "auth",
});

const schema = object({
  email: string().email().required("Required"),
  password: string().required("Required"),
  username: string().required("Required"),
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  confirmPassword: string().required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
  username: undefined,
  firstName: undefined,
  lastName: undefined,
  confirmPassword: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>
