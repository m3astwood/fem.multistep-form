import { createRouter, createWebHistory } from 'vue-router';
import FormView from '../views/FormView.vue';
import FormInfo from '../views/FormInfo.vue';
import FormPlan from '../views/FormPlan.vue';
import FormAdd from '../views/FormAdd.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FormView,
      children: [
        {
          path: 'info',
          component: FormInfo,
        },
        {
          path: 'plan',
          component: FormPlan,
        },
        {
          path: 'add',
          component: FormAdd,
        },
      ],
    },
  ],
});

export default router;
