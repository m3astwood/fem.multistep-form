<script setup>
  import { useFormStore } from '@/stores/form.js';
  import { costFormat } from '@/lib/utils.js';
  import ToggleSwitch from '@/components/ToggleSwitch.vue';
  import OptionIcon from '@/components/OptionIcon.vue';

  const formStore = useFormStore();
</script>

<template>
  <div class="flow">
    <h2>Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
  </div>

  <div class="options">
    <OptionIcon  
      v-for="plan in formStore.plans" 
      :key="plan.id"

      type="radio" 
      name="plan" 
      :modelValue="plan.name"
      v-model="formStore.selectedPlan"

      style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))"
    >

      <template v-slot:icon>
        <img :src="plan.icon" :alt="plan.name + ' icon'">
      </template>

      <template v-slot:content>
        <h3>{{ plan.name }}</h3>
        <p>${{ costFormat(plan.cost) }}/{{ formStore.yearly ? 'yr' : 'mo' }}</p>
      </template>

    </OptionIcon>

    <ToggleSwitch 
      onVal="yearly" 
      offVal="monthly" 
      v-model="formStore.yearly" 
      style="--activeColor: hsl(var(--marine-blue)); --inactiveColor: hsl(var(--light-grey)); --bgColor: hsl(var(--alabaster));"
    />
  </div>
</template>

<style scoped>
  .options {
    display: grid;
    grid-auto-flow: row;
    gap: 1em;
  }
</style>
