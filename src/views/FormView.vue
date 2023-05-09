<script setup>
  import StepTracker from '../components/StepTracker.vue'
</script>

<template>
  <div class="multi-form">
    <aside>
      <StepTracker></StepTracker>
    </aside>
    
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.multi-form {
  display: block;
  max-width: 500px;
  outline: thin solid lime;
}

aside {
  background-image: url('../assets/images/bg-sidebar-mobile.svg');
  background-size: cover;
  min-height: 25vh;
}

main {
  background-color: hsl(var(--white));
}
</style>
