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
    },
		{
			path: '/gallery',
			name: 'Gallery',
			component: () => import('../views/GalleryHub.vue'),
    },
    {
      path: '/gallery/:galleryName',
      name: 'GalleryPage',
      component: () => import('../views/GalleryPage.vue'),
      props: true, // route param passed as prop if needed
      meta: { title: 'Gallery' }
    },
    {
      path: '/gallery/:catchAll(.*)',
      redirect: '/gallery'
    }
	],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
});

export default router;
