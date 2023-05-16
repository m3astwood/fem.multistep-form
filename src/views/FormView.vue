<script setup>
  import { useFormStore } from '../stores/form.js';
  import StepTracker from '../components/StepTracker.vue'

  const formStore = useFormStore()

  function nextStep() {
    console.log(formStore.userInfo)
  }
</script>

<template>
  <div class="multi-form">
    <aside>
      <StepTracker :step="formStore.step" style="--activeBg: hsl(var(--light-blue)); --activeColor: hsl(var(--marine-blue))"></StepTracker>
    </aside>
    
    <main>
      <section class="form">
        <router-view></router-view>
      </section>

      <footer>
        <button @click="nextStep">Next Step</button>
      </footer>
    </main>
  </div>
</template>

<style scoped>
aside {
  position: relative;
  background-size: cover;
  padding-block: 2em;
}

aside:before {
  content: url('../assets/images/bg-sidebar-mobile.svg');
  position: absolute;
  inset: 0;
  background: blue;
  z-index: -10;
}

section.form, footer {
  background-color: hsl(var(--white));
  padding: 1.5em;
}

section.form {
  margin-inline: 1em;
  border-radius: 0.5em;
  filter: drop-shadow(0px 4px 20px hsl(255 100% 0% / 0.125));
}

footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-block: 1em;
}

footer > button {
  margin-inline-start: auto;
}
</style>
