<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    name: String,
    type: String,
    checked: Boolean,
    value: Object,
    modelValue: Object,
  });

  const emit = defineEmits([ 'update:modelValue' ]);

  const isChecked = computed(() => {
    if (props.modelValue instanceof Array) {
      return props.modelValue.includes(props.value);
    } else if (props.type === 'checkbox') {
      return props.modelValue === true;
    } else {
      return props.checked;
    }

  });

  function updateInput(event) {
    let isChecked = event.target.checked;

    if (props.modelValue instanceof Array) {
      let newValue = [ ...props.modelValue ];

      if (isChecked) {
        newValue.push(props.value);
      } else {
        newValue.splice(newValue.indexOf(props.value), 1);
      }

      emit('update:modelValue', newValue);
    } else {
      if (props.type === 'checkbox' && !props.value) {
        emit('update:modelValue', !!isChecked);
      } else {
        emit('update:modelValue', props.value);
      }
    }

  }
</script>

<template>
  <label>
    <!-- interacvtive element -->
    <input 
      :type="props.type" 
      :name="props.name" 

      :value="props.value" 
      @change="updateInput"

      :checked="isChecked"
    >

    <div class="option">
      <!-- visual checkbox -->
      <input 
        v-if="props.type == 'checkbox'" 
        type="checkbox" 
        name="props.name" 

        :checked="isChecked" 
      >

      <slot name="icon">
      </slot>
      <div class="content">
        <slot name="content">
          <h3>{{ props.modelValue }}</h3>
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
