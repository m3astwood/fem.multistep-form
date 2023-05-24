import { useFormStore } from '@/stores/form.js';

export function costFormat(cost) {
  const { yearly } = useFormStore();
  if (yearly) {
    return cost * 10;
  } else {
    return cost;
  }
}
