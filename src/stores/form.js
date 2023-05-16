import { computed, reactive, ref } from 'vue';
import { defineStore } from 'pinia';

import { validate } from 'validate.js';

import arcadeIcon from '@/assets/images/icon-arcade.svg';
import advancedIcon from '@/assets/images/icon-advanced.svg';
import proIcon from '@/assets/images/icon-pro.svg';

export const useFormStore = defineStore('form', () => {
  const step = ref(0);
  const yearly = ref(false);

  const plans = [
    { name: 'arcade', cost: 9, icon: arcadeIcon },
    { name: 'advanced', cost: 12, icon: advancedIcon },
    { name: 'pro', cost: 15, icon: proIcon },
  ];

  const addons = [
    {
      name: 'online service',
      cost: 1,
      description: 'Access to multiplayer games',
    },
    { name: 'larger storage', cost: 2, description: 'Extra 1TB of cloud save' },
    {
      name: 'customizable profile',
      cost: 2,
      description: 'Custom theme on your profile',
    },
  ];

  const userInfo = reactive({
    name: {
      value: '',
      errors: null,
    },
    email: {
      value: '',
      errors: '',
    },
    phone: {
      values: '',
      errors: null,
    },
  });

  const selectedPlan = ref(null);
  const selectedAddons = ref([]);

  const totalCost = computed(() => 0);

  validate.formatters.custom = function(errors) {
    let obj = {};
    errors.forEach((err) => {
      let key = err.attribute.replace(/\.value/, '');

      if (!obj[key]) {
        obj[key] = [];
      }

      let { validator, error, value } = err;

      obj[key].push({ validator, message: error, value });
    });

    return obj;
  };

  function validateStep() {
    if (step.value == 0) {
      const constraints = {
        'name.value': {
          presence: { allowEmpty: false },
          length: { minimum: 2 },
        },
        'email.value': {
          presence: { allowEmpty: false },
          email: true,
        },
        'phone.value': {
          presence: { allowEmpty: false },
          length: { minimum: 5 },
        },
      };

      const v = validate({ ...userInfo }, constraints, { format: 'custom' });

      if (v) {
        Object.keys(v).forEach((k) => {
          userInfo[k].errors = v[k];
        });
      } else {
        Object.keys(userInfo).forEach((k) => {
          userInfo[k].errors = [];
        });
      }
    }
  }

  return {
    step,
    yearly,
    plans,
    addons,
    userInfo,
    selectedPlan,
    selectedAddons,
    totalCost,
    validateStep,
  };
});
