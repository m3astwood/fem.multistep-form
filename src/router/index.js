import { createRouter, createWebHistory } from 'vue-router';
import FormView from '../views/FormView.vue';
import FormInfo from '../views/FormInfo.vue';
import FormPlan from '../views/FormPlan.vue';
import FormAdd from '../views/FormAdd.vue';
import FormSummary from '../views/FormSummary.vue';
import { useFormStore } from '../stores/form.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FormView,
      redirect: 'info',
      children: [
        {
          path: 'info',
          name: 'info',
          component: FormInfo,
          beforeEnter: () => {
            const formStore = useFormStore();
            formStore.step = 0;
          },
        },
        {
          path: 'plan',
          name: 'plan',
          component: FormPlan,
          beforeEnter: () => {
            const formStore = useFormStore();
            formStore.step = 1;
          },
        },
        {
          path: 'addons',
          name: 'addons',
          component: FormAdd,
          beforeEnter: () => {
            const formStore = useFormStore();
            formStore.step = 2;
          },
        },
        {
          path: 'summary',
          name: 'summary',
          component: FormSummary,
          beforeEnter: () => {
            const formStore = useFormStore();
            formStore.step = 3;
          },
        },
      ],
    },
  ],
});

export default router;
