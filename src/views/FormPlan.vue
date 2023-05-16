<script setup>
  import { useFormStore } from '@/stores/form.js'
  import Toggle from '@/components/Toggle.vue'
  import OptionIcon from '@/components/OptionIcon.vue'

  const formStore = useFormStore()
</script>

<template>
  <div class="flow">
    <h2>Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
  </div>

  <div class="options">
    <template v-for="plan in formStore.plans" :key="plan.id">
      <OptionIcon type="radio" name="plan" :inputValue="plan.name" style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))">
        <template v-slot:icon>
          <img :src="plan.icon" :alt="plan.name + ' icon'">
        </template>
        <template v-slot:content>
          <h3>{{ plan.name }}</h3>
          <p>${{ plan.cost }}/{{ formStore.year ? 'yr' : 'mo' }}</p>
        </template>
      </OptionIcon>
    </template>

    <Toggle onVal="yearly" offVal="monthly" style="--activeColor: hsl(var(--marine-blue)); --inactiveColor: hsl(var(--light-grey)); --bgColor: hsl(var(--alabaster));"/>
  </div>
</template>

<style scoped>
  .options {
    display: grid;
    grid-auto-flow: row;
    gap: 1em;
  }
</style>
