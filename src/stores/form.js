import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', () => {
  const step = ref(1);
  const year = ref(true);

  const userInfo = reactive({
    name: '',
    email: '',
    phone: '',
  });

  // Array for validations per step?
  function nextStep() {
  }

  return { step, year, userInfo, nextStep };
});
