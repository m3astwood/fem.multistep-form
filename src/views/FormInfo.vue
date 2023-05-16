<script setup>
  import { useFormStore } from '../stores/form.js'

  const formStore = useFormStore()
</script>

<template>
  <div class="flow">
    <h2>Personal info</h2>
    <p>Please provide your name, email address, and phone number.</p>
  </div>

  <label for="name">Name</label>
  <input type="text" name="name" placeholder="e.g. Stephen King" v-model="formStore.userInfo.name">

  <label for="email">Email Address</label>
  <input type="email" name="email" placeholder="e.g. stephenking@lorem.com" v-model="formStore.userInfo.email">

  <label for="phone">Phone Number</label>
  <input type="tel" name="phone" placeholder="e.g. +1 234 567 890" v-model="formStore.userInfo.phone">
</template>
