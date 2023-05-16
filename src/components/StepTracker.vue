<script setup>
  const props = defineProps({
    step: Number
  });

  console.log(props.step);
</script>

<template>
  <div class="steps">
    <div class="step" :class="{ active: props.step == '0' }"><span>1</span></div>
    <div class="step" :class="{ active: props.step == '1' }"><span>2</span></div>
    <div class="step" :class="{ active: props.step == '2' }"><span>3</span></div>
    <div class="step" :class="{ active: props.step == '3' }"><span>4</span></div>
  </div>
</template>

<style scoped>
  .steps {
    --activeColor: black;
    --activeBg: white;
    --inactiveColor: var(--activeBg);
    display: flex;
    justify-content: center;
    margin-inline: auto;
    gap: 1em;
  }

  .step {
    display:flex;
    padding: 0.5em;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    color: white;
    width: 2em;
    padding: 0.5em;
    line-height: 1;
    outline: thin solid var(--inactiveColor);
  }

  .step > span {
    display: block;
    margin: auto;
  }

  .step.active {
    background: var(--activeBg);
    color: var(--activeColor);
    font-weight: 600;
  }
</style>
