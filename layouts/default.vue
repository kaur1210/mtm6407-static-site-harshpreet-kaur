<template>
  <div class="layout-container">

    <Navbar />

 
    <div class="main-content">
      <nuxt />
    </div>

  
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>

.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #c7d6d1;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
