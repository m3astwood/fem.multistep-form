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
      <div>
        <h3>{{ formStore.selectedPlan.name }}</h3>
        <router-link to="plan">Change</router-link>
      </div>

      <aside class="cost">
        ${{ formStore.yearly ? formStore.selectedPlan.cost * 10 : formStore.selectedPlan.cost }}/{{ formStore.yearly ? 'yr' : 'mo' }}
      </aside>
    </div>

    <div class="addons" v-if="formStore.selectedAddons.length > 0">
      <ul>
        <li v-for="addon in formStore.selectedAddons" :key="addon.id">
          <span class="name">{{ addon.name }}</span>
          <span class="cost">+${{ addon.cost }}/{{ formStore.yearly ? 'yr' : 'mo'}}</span>
        </li>
      </ul>
    </div>
  </section>

  <div class="total">
    <span>Total (per {{ formStore.yearly ? 'year' : 'month'}})</span>
    <span class="cost">$120/{{ formStore.yearly ? 'yr' : 'mo'}}</span>
  </div>
</template>

<style scoped>
  a, span:not(.cost) {
    color: hsl(var(--cool-grey));
  }

  .total .cost {
    color: hsl(var(--purple-blue));
  }

  .total, .summary {
    font-size: 0.9em;
  }

  .summary {
    background-color: hsl(var(--magnolia));
    border-radius: 0.5em;
    padding: 1em;
  }

  .total {
    padding-block-start: 1.25em;
    padding-inline: 1em;
  }

  .total .cost {
    font-weight: 700;
    font-size: 1.125em;
  }

  .plan, .addon, .total {
    display: flex;
    align-items: center;
  }

  .plan {
    padding-block: 0.75em 1em;
  }

  .plan h3 {
    font-size: 1em;
    line-height: 0.8;
  }

  .plan :where(h3, .cost) {
    font-weight: 700;
  }

  .cost {
    margin-inline-start: auto;
  }

  .addons {
    border-top: thin solid hsl(var(--light-grey));
    padding-block-start: 1em;
  }

  .addons ul {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 0.5em;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .addons li {
    display: flex;
  }

</style>
