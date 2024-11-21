import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.vue';        // Home page (index.vue)
import Tutorials from '../pages/tutorials.vue'; // Tutorials page
import Gallery from '../pages/gallery.vue';    // Gallery page
import Blog from '../pages/blog.vue';          // Blog page
import Contact from '../pages/contact.vue';    // Contact page

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,  // Home page (index.vue)
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    component: Tutorials,  // Tutorials page (tutorials.vue)
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,  // Gallery page (gallery.vue)
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,  // Blog page (blog.vue)
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,  // Contact page (contact.vue)
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
