import { computed, reactive, ref } from 'vue';
import { defineStore } from 'pinia';

import arcadeIcon from '@/assets/images/icon-arcade.svg';
import advancedIcon from '@/assets/images/icon-advanced.svg';
import proIcon from '@/assets/images/icon-pro.svg';

export const useFormStore = defineStore('form', () => {
  const step = ref(1);
  const year = ref(false);

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
    name: '',
    email: '',
    phone: '',
  });

  const selectedPlan = ref(null);
  const selectedAddons = ref([]);

  const totalCost = computed(() => 0);

  return {
    step,
    year,
    plans,
    addons,
    userInfo,
    selectedPlan,
    selectedAddons,
    totalCost,
  };
});
