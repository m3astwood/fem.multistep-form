<script setup>
  import { useFormStore } from '../stores/form.js';

  const formStore = useFormStore();
</script>

<template>
  <div class="flow">
    <h2>Personal info</h2>
    <p>Please provide your name, email address, and phone number.</p>
  </div>

  <label for="name">Name <span v-if="formStore.userInfo.name.errors" class="error">{{ formStore.userInfo.name.errors[0].message }}</span></label>
  <input type="text" name="name" placeholder="e.g. Stephen King" v-model="formStore.userInfo.name.value" :class="{ error: formStore.userInfo.name.errors }">

  <label for="email">Email Address<span v-if="formStore.userInfo.email.errors" class="error">{{ formStore.userInfo.email.errors[0].message }}</span></label>
  <input type="email" name="email" placeholder="e.g. stephenking@lorem.com" v-model="formStore.userInfo.email.value" :class="{ error: formStore.userInfo.email.errors }">

  <label for="phone">Phone Number <span v-if="formStore.userInfo.phone.errors" class="error">{{ formStore.userInfo.phone.errors[0].message }}</span></label>
  <input type="tel" name="phone" placeholder="e.g. +1 234 567 890" v-model="formStore.userInfo.phone.value" :class="{ error: formStore.userInfo.phone.errors }">
</template>

<style scoped>
label {
  display: flex;
}

label > span.error {
  margin-inline-start: auto;
  color: hsl(var(--straw-red));
}

input.error {
  outline: thin solid hsl(var(--straw-red));
}
</style>
