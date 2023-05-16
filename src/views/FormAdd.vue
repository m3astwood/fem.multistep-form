<script setup>
  import OptionIcon from '../components/OptionIcon.vue'
</script>

<template>
  <div class="flow">
    <h2>Pick add-ons</h2>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>

  <div class="options">
    <OptionIcon type="checkbox" name="plan" inputValue="arcade" style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))">
      <template v-slot:content>
        <h3>Online service</h3>
        <p>Access to multiplayer games</p>
      </template>
      <template v-slot:aside>
        <span class="price">+$1/mo</span>
      </template>
    </OptionIcon>

    <OptionIcon type="checkbox" name="plan" inputValue="advanced" style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))">
      <template v-slot:content>
        <h3>Larger storage</h3>
        <p>Extra 1TB of cloud save</p>
      </template>
      <template v-slot:aside>
        <span class="price">+$2/mo</span>
      </template>
    </OptionIcon>

    <OptionIcon type="checkbox" name="plan" inputValue="pro" style="--activeColor: hsl(var(--marine-blue)); --activeBg: hsl(var(--magnolia)); --inactiveColor: hsl(var(--light-grey))">
      <template v-slot:content>
        <h3>Customizable profile</h3>
        <p>Custom theme on your profile</p>
      </template>
      <template v-slot:aside>
        <span class="price">+$2/mo</span>
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
