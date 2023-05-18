<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    name: String,
    inputValue: String,
    icon: String,
    type: String,
    modelValue: String
  });

  const checked = ref(false);
</script>

<template>
  <label>
    <!-- interacvtive element -->
    <input 
      :type="props.type" 
      :name="props.name" 

      :value="props.modelValue" 
      @input="$emit('update:modelValue', $event.target.value)"

      v-model="checked"
    >

    <div class="option">
      <!-- visual checkbox -->
      <input 
        v-if="props.type == 'checkbox'" 
        type="checkbox" 
        name="props.name" 

        :checked="checked" 

        v-model="checked"
      >

      <slot v-else name="icon">
      </slot>
      <div class="content">
        <slot name="content">
          <h3>{{ props.inputValue }}</h3>
        </slot>
      </div>
      <slot name="aside"></slot>
    </div>
  </label>
</template>

<style scoped>
label {
  --activeColor: black;
  --activeBg: lightgrey;
  --inactiveColor: grey;
  position: relative;
  display: block;
}

input:where([type="radio"],[type="checkbox"]):not(.option > input) {
  position: absolute;
  display: none;
}

.option > input {
  display: block;
  width: 1.6em;
  height: 3em;
}

.content {
  flex-grow: 1;
}

h3 {
  text-transform: capitalize;
}

.option {
  display: flex;
  gap: 1em;
  align-items: center;
  outline: var(--inactiveColor) thin solid;
  border-radius: 0.5em;
  padding: 1em;
  transition: 0.25s ease;
}

input:checked ~ .option {
  outline: var(--activeColor) thin solid;
  background: var(--activeBg);
}
</style>
