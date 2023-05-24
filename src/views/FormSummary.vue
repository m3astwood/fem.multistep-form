<script setup>
  import { RouterLink } from 'vue-router';
  import { useFormStore } from '../stores/form.js';

  const formStore = useFormStore();

  console.log(formStore.selectedPlan);
</script>

<template>
  <div class="flow">
    <h2>Finishing Up</h2>
    <p>Double-check everything looks OK before confirming.</p>
  </div>

  <section class="summary">
    <div class="plan">
      <h3>{{ formStore.selectedPlan.name }}</h3>
      <router-link to="plan">Change</router-link>

      <aside class="cost">
        ${{ formStore.yearly ? formStore.selectedPlan.cost * 10 : formStore.selectedPlan.cost }}/{{ formStore.yearly ? 'yr' : 'mo' }}
      </aside>
    </div>

    <div class="addons" v-if="formStore.selectedAddons.length > 0">
      <ul>
        <li v-for="addon in formStore.selectedAddons" :key="addon.id">{{ addon.name }}</li>
      </ul>
    </div>
  </section>

  <div class="total">
    <span class="cost">$120/yr</span>
  </div>
</template>

<style scoped>
  .summary {
    background-color: grey;
  }

  .addons {
    border-top: thin solid darkgrey;
  }
</style>
