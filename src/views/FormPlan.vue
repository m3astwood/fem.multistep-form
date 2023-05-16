<script setup>
  import Toggle from '../components/Toggle.vue'
  import OptionIcon from '../components/OptionIcon.vue'
</script>

<template>
  <div class="flow">
    <h2>Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
  </div>

  <div class="options">
    <OptionIcon type="radio" name="plan" inputValue="arcade" style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))">
      <template v-slot:icon>
        <img src="../assets/images/icon-arcade.svg" alt="">
      </template>
      <template v-slot:content>
        <h3>Arcade</h3>
        <p>$9/mo</p>
      </template>
    </OptionIcon>

    <OptionIcon type="radio" name="plan" inputValue="advanced" style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))">
      <template v-slot:icon>
        <img src="../assets/images/icon-advanced.svg" alt="">
      </template>
      <template v-slot:content>
        <h3>Advanced</h3>
        <p>$10/mo</p>
      </template>
    </OptionIcon>

    <OptionIcon type="radio" name="plan" inputValue="pro" style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))">
      <template v-slot:icon>
        <img src="../assets/images/icon-pro.svg" alt="">
      </template>
      <template v-slot:content>
        <h3>Advanced</h3>
        <p>$12/mo</p>
      </template>
    </OptionIcon>

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
