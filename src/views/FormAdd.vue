<script setup>
  import { useFormStore } from '@/stores/form.js'
  import OptionIcon from '@/components/OptionIcon.vue'

  const formStore = useFormStore()
</script>

<template>
  <div class="flow">
    <h2>Pick add-ons</h2>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>

  <div class="options">
    <template v-for="addon in formStore.addons" :key="addon.id">
      <OptionIcon type="checkbox" name="addon" :inputValue="formStore.name" style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))">
        <template v-slot:content>
          <h3>{{ addon.name }}</h3>
          <p>{{ addon.description }}</p>
        </template>
        <template v-slot:aside>
          <span class="price">+${{ addon.cost }}/{{ formStore.year ? 'yr' : 'mo'}}</span>
        </template>
      </OptionIcon>
    </template>
  </div>
</template>

<style scoped>
  .options {
    display: grid;
    grid-auto-flow: row;
    gap: 1em;
  }
</style>
