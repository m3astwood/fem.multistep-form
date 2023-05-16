<script setup>
  import { defineProps, ref } from 'vue';

  const checked = ref(false);

  const props = defineProps({
    onVal: String,
    offVal: String,
    modelValue: Boolean,
  });

  defineEmits([ 'update:modelValue' ]);
</script>

<template>
  <div class="toggle">
    <span :class="{ active: !checked }">{{ props.offVal }}</span>
    
    <label>
      <input type="checkbox" v-model="checked" :value="modelValue" @input="$emit('update:modelValue', $event.target.checked)">
      <div class="switch"></div>
    </label>
    
    <span :class="{ active: checked }">{{ props.onVal }}</span>
  </div>
</template>

<style scoped>
  .toggle {
    --height: 1.65em;
    --width: 3em;
    --activeColor: black;
    --inactiveColor: grey;
    --bgColor: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background-color: var(--bgColor);
    border-radius: 0.5em;
    padding: 1em;
  }

  input[type="checkbox"] {
    position: absolute;
    display: none;
  }

  label {
    width: min-content;
  }

  span {
    text-transform: capitalize;
    color: var(--inactiveColor);
    font-weight: 600;
  }

  span.active {
    color: var(--activeColor);
  }

  .switch {
    --diameter: calc(var(--height) * 0.6);
    position: relative;
    height: var(--height);
    width: var(--width);
    border-radius: 1em;
    background: black;
  }

  .switch::before {
    position: absolute;
    display: block;
    z-index: 10;
    left: 0.35em;
    top: 0;
    content: '';
    height: var(--diameter);
    aspect-ratio: 1 / 1;
    background-color: white;
    border-radius: 100vmax;
    transform: translateX(0) translateY(33%);
    transition: transform 0.125s ease;
  }

  input:checked ~ .switch::before {
    transform: translateX(100%) translateY(33%);
  }
</style>
