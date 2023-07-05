<template>
  <div class="q-pa-md">
    <div class="row justify-center items-center">
      <div class="col-12 col-md-6">
        <q-form @submit="submitForm">
          <q-input
            v-model="login.mobile"
            label="Username"
            type="text"
            :rules="[(val) => !!val || 'Please enter your username']"
          />
          <q-input
            v-model="login.password"
            label="Password"
            type="password"
            :rules="[(val) => !!val || 'Please enter your password']"
          />
          <q-btn type="submit" label="Log In" color="primary" />
        </q-form>
        {{ errors }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { api } from '../boot/axios';

const login = ref({
  mobile: '',
  password: '',
});
const errors = ref('');
const submitForm = async () => {
  try {
    const { data } = await api.post('/auth/login', login.value);
    console.log(data.data);
  } catch (error: any) {
    errors.value = error.response.data.message;
  }
};
</script>
