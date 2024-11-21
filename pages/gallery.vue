<template>
    <div class="gallery-container">
      <div class="container mt-5">
        <header class="text-center mb-5">
          <h1 class="display-4 custom-heading">Gallery</h1>
          <p class="lead custom-p">
            A showcase of my work and creations. Explore and get inspired!
          </p>
        </header>
  
        <div class="row">
          <!-- Image Cards -->
          <div class="col-md-4 mb-4" v-for="image in images" :key="image.id">
            <div class="card shadow-sm">
              <img
                :src="image.src"
                alt="Gallery Image"
                class="card-img-top"
                style="height: 200px; object-fit: cover; border-radius: 8px;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: "GalleryPage", 
  data() {
    return {
      images: [
        { id: 1, src: "/mtm6407-static-site-harshpreet-kaur/images/portrait-photography.jpg" },
        { id: 2, src: "/mtm6407-static-site-harshpreet-kaur/images/landscape-photography.jpg" },
        { id: 3, src: "/mtm6407-static-site-harshpreet-kaur/images/product-photography.jpg" },
        { id: 4, src: "/mtm6407-static-site-harshpreet-kaur/images/street-photography.jpg" },
        { id: 5, src: "/mtm6407-static-site-harshpreet-kaur/images/black-and-white-photography.jpg" },
        { id: 6, src: "/mtm6407-static-site-harshpreet-kaur/images/nature-photography.jpg" },
      ],
    };
  },
};
</script>

  
  <style scoped>
  
  .gallery-container {
    background-image: url('/mtm6407-static-site-harshpreet-kaur/images/background.jpg'); /* Add your background image */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 60px 0;
    color: white;
  }
  
 
  .card {
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-img-top {
    border-radius: 8px;
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
  