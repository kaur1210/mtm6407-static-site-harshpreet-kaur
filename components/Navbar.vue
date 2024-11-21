<template>
    <nav class="navbar">
      <div class="container">
        <h1 class="text-white">Hobby Blog</h1>
  
        
        <ul class="nav-links">
          <li><router-link to="/" @click="navigateTo('/')">Home</router-link></li>
          <li><router-link to="/tutorials" @click="navigateTo('/tutorials')">Tutorials</router-link></li>
          <li><router-link to="/gallery" @click="navigateTo('/gallery')">Gallery</router-link></li>
          <li><router-link to="/blog" @click="navigateTo('/blog')">Blog</router-link></li>
          <li><router-link to="/contact" @click="navigateTo('/contact')">Contact</router-link></li>
        </ul>
  
        
        <div class="menu-icon" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
  
     
      <div v-if="isNavOpen" class="overlay" @click="toggleMenu">
        <div class="overlay-content" >
          <div class="close-btn" @click="toggleMenu">X</div>
          <ul class="overlay-links">
            <li><router-link to="/"  @click="toggleMenu">Home</router-link></li>
            <li><router-link to="/tutorials" @click="toggleMenu">Tutorials</router-link></li>
            <li><router-link to="/gallery" @click="toggleMenu">Gallery</router-link></li>
            <li><router-link to="/blog" @click="toggleMenu">blog</router-link></li>
            <li><router-link to="/contact" @click="toggleMenu">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
export default {
  data() {
    return {
      isNavOpen: false,  
    };
  },
  methods: {
   
    toggleMenu() {
      this.isNavOpen = !this.isNavOpen;
      const body = document.body;
      if (this.isNavOpen) {
        body.classList.add('blurred');  
      } else {
        body.classList.remove('blurred');
      }
    },

 
    navigateTo(route) {
    
      const baseRoute = process.env.BASE_URL || '';  
      this.$router.push(`${baseRoute}${route}`);
      this.toggleMenu();  
    }
  }
};
</script>

  
  <style scoped>
  .navbar {
    background-color: #dbe4e1;
    padding: 10px 20px;
    color: rgb(0, 0, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 1.1rem;
    transition: transform 0.3s ease; 
  }
  
  .nav-links a:hover {
    transform: scale(1.1); 
  }
  
  .menu-icon {
    display: none; 
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
  }
  
  .bar {
    width: 30px;
    height: 3px;
    background-color: white;
  }
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); 
    backdrop-filter: blur(10px); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .overlay-content {
    background-color: #c7d6d1;
    padding: 40px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    width: 80%;
    max-width: 400px;
  }
  
  .close-btn {
    font-size: 24px;
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  
  .overlay-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    margin: 0;
  }
  
  .overlay-links a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none; 
    }
  
    .menu-icon {
      display: flex; 
    }
  }
  
  .blurred {
    filter: blur(5px);
  }
  </style>
  