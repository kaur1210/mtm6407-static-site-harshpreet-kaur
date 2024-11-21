<template>
    <div class="container mt-5">
    
      <header class="text-center mb-5">
        <h1 class="display-4 custom-heading">Welcome to My Photography Journey</h1>
  
        <p class="lead">
          Explore my passion for photography and discover how it intertwines with my journey as a developer.
        </p>
      </header>
  
   
      <section class="row text-center mb-5">
        <!-- Tutorials -->
        <div class="col-md-4 d-flex">
          <div class="card shadow-sm w-100">
            <img
              src="/mtm6407-static-site-harshpreet-kaur/images/photography-tutorials.jpg"
              alt="Photography Tutorials"
              class="card-img-top custom-img"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Photography Tutorials</h5>
              <p class="card-text">
                Dive into detailed tutorials covering everything from basic photography techniques to advanced photo editing.
              </p>
              <nuxt-link to="/tutorials" class="btn custom-btn mt-auto">Explore Tutorials</nuxt-link>
            </div>
          </div>
        </div>
  
        <!-- Gallery -->
        <div class="col-md-4 d-flex">
          <div class="card shadow-sm w-100">
            <img
              src="/mtm6407-static-site-harshpreet-kaur/images/photography-gallery.jpg"
              alt="Gallery"
              class="card-img-top custom-img"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Gallery</h5>
              <p class="card-text">
                A curated collection of my favorite photographs, showcasing my work and creative experiments.
              </p>
              <nuxt-link to="/gallery" class="btn custom-btn mt-auto">View Gallery</nuxt-link>
            </div>
          </div>
        </div>
  
        <!-- Blog -->
        <div class="col-md-4 d-flex">
          <div class="card shadow-sm w-100">
            <img
              src="/mtm6407-static-site-harshpreet-kaur/images/photography-blog.jpg"
              alt="Blog"
              class="card-img-top custom-img"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Blog</h5>
              <p class="card-text">
                Read about my photography journey, tips, creative processes, and the intersection of photography and coding.
              </p>
              <nuxt-link to="/blog" class="btn custom-btn mt-auto">Read Blog</nuxt-link>
            </div>
          </div>
        </div>
      </section>
  
      <!-- About Section -->
      <section class="about mb-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="/mtm6407-static-site-harshpreet-kaur/images/about-me-photographer.jpg" alt="About Me" class="img-fluid rounded shadow custom-img">
          </div>
          <div class="col-md-6">
            <h2>About Me</h2>
            <p>
              Hi, I'm harshpreet kaur! A passionate photographer and a developer. On this blog, I share my experiences and photography tips.
            </p>
            <nuxt-link to="/contact" class="btn btn-outline-primary">Get in Touch</nuxt-link>
          </div>
        </div>
      </section>
  
    
      <section class="featured-tutorials text-center mb-5">
        <h2 class="mb-4">Featured Tutorials</h2>
        <div class="row">
          <div class="col-md-4 d-flex">
            <div class="card shadow-sm w-100">
              <img src="/mtm6407-static-site-harshpreet-kaur/images/portrait-photography.jpg" alt="Tutorial 1" class="card-img-top custom-img">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Mastering Portrait Photography</h5>
                <p class="card-text">Learn the art of capturing stunning portraits with your camera.</p>
                <nuxt-link to="/tutorials" class="btn custom-btn-outline mt-auto">Read More</nuxt-link>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 d-flex">
            <div class="card shadow-sm w-100">
              <img src="/mtm6407-static-site-harshpreet-kaur/images/photo-editing-tips.jpg" alt="Tutorial 2" class="card-img-top custom-img">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Editing Photos Like a Pro</h5>
                <p class="card-text">Step-by-step guide on how to edit your photos using advanced techniques.</p>
                <nuxt-link to="/tutorials" class="btn custom-btn-outline mt-auto">Read More</nuxt-link>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 d-flex">
            <div class="card shadow-sm w-100">
              <img src="/mtm6407-static-site-harshpreet-kaur/images/composition-lighting-tutorial.jpg" alt="Tutorial 3" class="card-img-top custom-img">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Composition and Lighting</h5>
                <p class="card-text">Learn perfect shot by understanding composition and lighting. </p>
                <nuxt-link to="/tutorials" class="btn custom-btn-outline mt-auto">Read More</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
  
     
      <section class="contact text-center">
        <h2>Contact Me</h2>
        <p>
          Have questions or want to collaborate? Don’t hesitate to get in touch with me!
        </p>
        <nuxt-link to="/contact" class="btn btn-outline-primary">Contact Me</nuxt-link>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: translateY(-10px);
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
  }
  
  .custom-img {
    width: 100%;
    height: 200px; 
    object-fit: cover; 
  }
  
  .about img {
    max-height: 400px;
    object-fit: cover;
  }
  .custom-heading {
  font-size: 2.5rem; 
  color: #6c757d; 
  font-family: 'Montserrat', sans-serif; 
  font-weight: bold;
  letter-spacing: 2px; 
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); 
  margin-top: 50px; 
 }



.container {
  background: linear-gradient(to right, #f0f8ff, #e6f7ff);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
}


.custom-btn {
  background-color: #ff6347; 
  color: white;
  border-radius: 50px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.custom-btn:hover {
  background-color: #ff4500;
  transform: translateY(-5px);
}

.custom-btn:active {
  background-color: #ff3300; 
  transform: translateY(1px); 
}

/* Custom Outline Button */
.custom-btn-outline {
  border: 2px solid #ff6347; 
  color: #ff6347;
  background-color: transparent;
  border-radius: 50px;
}

.custom-btn-outline:hover {
  background-color: #ff6347;
  color: white; 
}

.custom-btn-outline:active {
  background-color: #ff3300;
  border-color: #ff3300;
  color: white;
}

/* Custom Rounded Button */
.custom-btn-rounded {
  background-color: #4caf50; 
  color: white;
  border-radius: 30px; 
  padding: 10px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.custom-btn-rounded:hover {
  background-color: #45a049; 
  transform: translateY(-5px); 
}

.custom-btn-rounded:active {
  background-color: #388e3c; 
  transform: translateY(1px); 
}
  </style>
  