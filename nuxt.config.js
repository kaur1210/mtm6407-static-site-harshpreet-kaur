export default {
  // Target: Static site generation (https://go.nuxtjs.dev/config-target)
  target: 'static',
  
  generate: {
    fallback: true, // Generates 404.html for GitHub Pages
    subFolders: false, // Generates flat .html files (e.g., about.html)
  },
  

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mtm6407-static-site-harshpreet-kaur', // Website title
    htmlAttrs: {
      lang: 'en' // Language of the document
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } // Favicon link
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // Include Bootstrap Vue CSS
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~/assets/css/main.css', // Include the global CSS file
    'font-awesome/css/font-awesome.css' // Include Font Awesome CSS globally
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Add bootstrap-vue module
    'bootstrap-vue/nuxt',
  ],

  // Router Configuration for GitHub Pages deployment
  router: {
    base: '/mtm6407-static-site-harshpreet-kaur/'  // Path should match where the app is hosted
  },
  
}
