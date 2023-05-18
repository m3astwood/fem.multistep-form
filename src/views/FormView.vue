<script setup>
  import { useRouter } from 'vue-router';
  import { useFormStore } from '../stores/form.js';
  import StepTracker from '../components/StepTracker.vue';

  const router = useRouter();
  const formStore = useFormStore();

  function nextStep() {
    if (formStore.validateStep()) {
      let destination = null;
      switch (formStore.step) {
        case 0:
          destination = 'plan';
          break;
        case 1:
          destination = 'addons';
          break;
        case 2:
          destination = 'summary';
          break;
      }
      router.push(destination);
    }
  }
</script>

<template>
  <div class="multi-form">
    <aside>
      <img 
        class="background" 
        srcset="../assets/images/bg-sidebar-desktop.svg 800w, ../assets/images/bg-sidebar-mobile.svg 500w"
        sizes="(max-width: 500px) 375, 800"
      >
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
  padding-block: 2em;
}

aside .background {
  display: block;
  position: absolute;
  inset: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

/* aside:before {
  content: url('../assets/images/bg-sidebar-mobile.svg');
  position: absolute;
  inset: 0;
  background: blue;
  z-index: -10;
  width: 100vw;
  height: 5em;
  outline: thin solid lime;
} */

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
