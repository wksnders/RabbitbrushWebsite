import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about-me',
			name: 'About Me',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/class-descriptions',
			name: 'Class Descriptions',
			component: () => import('../views/ClassDescriptions.vue'),
		},
		{
			path: '/testimonials',
			name: 'Testimonials',
			component: () => import('../views/Testimonials.vue'),
    }
	],
});

export default router;
