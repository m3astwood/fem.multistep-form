<script setup>
  import { ref } from 'vue';
  import { useFormStore } from '@/stores/form.js';
  import { costFormat } from '@/lib/utils.js';
  import OptionIcon from '@/components/OptionIcon.vue';

  const addonList = ref([]);

  const formStore = useFormStore();
</script>

<template>
  <div class="flow">
    <h2>Pick add-ons</h2>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>

  <div class="options">
    <OptionIcon 
      v-for="addon in formStore.addons" 
      :key="addon.id"

      type="checkbox" 
      name="addon" 
      :value="addon" 

      v-model="formStore.selectedAddons"

      style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))"
    >

      <template v-slot:content>
        <h3>{{ addon.name }}</h3>
        <p>{{ addon.description }}</p>
      </template>
      <template v-slot:aside>
        <span class="price">+${{ costFormat(addon.cost) }}/{{ formStore.yearly ? 'yr' : 'mo'}}</span>
      </template>
    </OptionIcon>
  </div>
</template>

<style scoped>
  .options {
    display: grid;
    grid-auto-flow: row;
    gap: 1em;
  }
</style>
