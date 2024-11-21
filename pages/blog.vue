<template>
    <div class="container mt-5">
        <header class="text-center mb-5">
          <h1 class="display-4 custom-heading">Blog</h1>
        
        </header>
     
        <section class="row text-center mb-5">
         
          <div class="col-md-4 d-flex">
            <div class="card shadow-lg border-0 w-100">
              <img
                src="/mtm6407-static-site-harshpreet-kaur/images/photography-blog.jpg"
                alt="Photography Tips & Tricks"
                class="card-img-top custom-img"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title font-weight-bold text-primary">Photography Tips & Tricks</h5>
                <p class="card-text text-muted">
                  Explore essential photography tips that will help you capture stunning images with ease.
                </p>
                <nuxt-link to="/blog/tips" class="btn custom-btn mt-auto">Read Post</nuxt-link>
              </div>
            </div>
          </div>
  
         
          <div class="col-md-4 d-flex">
            <div class="card shadow-lg border-0 w-100">
              <img
                src="/mtm6407-static-site-harshpreet-kaur/images/photo-journey.jpg"
                alt="My Journey"
                class="card-img-top custom-img"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title font-weight-bold text-primary">My Photography Journey</h5>
                <p class="card-text text-muted">
                  Read about my personal journey in photography and how it connects with my development career.
                </p>
                <nuxt-link to="/blog/journey" class="btn custom-btn mt-auto">Read Post</nuxt-link>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 d-flex">
            <div class="card shadow-lg border-0 w-100">
              <img
                src="/mtm6407-static-site-harshpreet-kaur/images/coding1.jpg"
                alt="Photography and Coding"
                class="card-img-top custom-img"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title font-weight-bold text-primary">Photography Meets Coding</h5>
                <p class="card-text text-muted">
                  Explore how my passion for photography intersects with my love for coding and technology.
                </p>
                <nuxt-link to="/blog/coding" class="btn custom-btn mt-auto">Read Post</nuxt-link>
              </div>
            </div>
          </div>
        </section>
  
    </div>
  </template>
  
  <style scoped>
  .custom-img {
    width: 100%;
    height: 200px; 
    object-fit: cover; 
    border-radius: 10px 10px 0 0; 
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .card-text {
    font-size: 1rem;
    color: #555;
  }
  
  .custom-btn {
    background-color: #ff6347;
    color: white;
    border-radius: 50px; 
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    text-transform: uppercase; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    transition: background-color 0.3s, transform 0.3s; 
  }
  
  .custom-btn:hover {
    background-color: #ff4500; 
    transform: translateY(-5px); 
  }
  
  .custom-btn:active {
    background-color: #ff3300; 
    transform: translateY(1px); 
  }
  
  @media (max-width: 767px) {
    .card-body {
      padding: 1rem;
    }
  
    .custom-btn {
      padding: 0.5rem 1.2rem; 
    }
  }
  .custom-heading {
  font-size: 3.5rem;
  color: #6c757d; 
  font-family: 'Montserrat', sans-serif;
  font-weight: bold; 
  letter-spacing: 2px; 
  text-transform: uppercase; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1px; 
  transition: all 0.3s ease-in-out; 
}
.custom-p{
    color: #6c757d; 
}
.custom-heading:hover {
  color: #ff6347; 
  transform: scale(1.1); 
}
.container {
  background: linear-gradient(to right, #f0f8ff, #e6f7ff); 
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

  </style>
  