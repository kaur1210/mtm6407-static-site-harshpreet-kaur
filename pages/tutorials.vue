<template>
    <div class="container mt-5">
      <header class="text-center mb-5">
        <h1 class=" custom-heading">Tutorials</h1>
        <p class="lead custom-p">
            Unlock your full potential with our comprehensive, step-by-step guides. Learn new techniques, sharpen your skills, and take your passion to the next level! Whether you're a beginner or looking to refine your expertise, these tutorials will help you grow and succeed.
        </p>
      </header>
  
      
      <div class="row">
    
        <div class="col-md-4 mb-4" v-for="tutorial in tutorials" :key="tutorial.id">
          <div class="card shadow-sm">
            <img
              :src="tutorial.image"
              alt="Tutorial Image"
              class="card-img-top"
              style="height: 200px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title">{{ tutorial.title }}</h5>
              <p class="card-text">{{ tutorial.excerpt }}</p>
              <nuxt-link :to="'/tutorials/' + tutorial.id" class="btn btn-primary">
                Read Full Tutorial
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TutorialsPage",
    data() {
      return {
        tutorials: [
          {
            id: 1,
            title: "Mastering Portrait Photography",
            excerpt: "Learn the art of capturing stunning portraits with your camera. Perfect for beginners and advanced photographers alike.",
            image: "/mtm6407-static-site-harshpreet-kaur/images/portrait-photography.jpg", 
          },
          {
            id: 2,
            title: "The Basics of Landscape Photography",
            excerpt: "A comprehensive guide to capturing breathtaking landscapes, from composition to lighting.",
            image: "/mtm6407-static-site-harshpreet-kaur/images/landscape-photography.jpg", 
          },
          {
            id: 3,
            title: "Editing Your Photos Like a Pro",
            excerpt: "Step-by-step guide on how to edit your photos using advanced techniques and editing software.",
            image: "/mtm6407-static-site-harshpreet-kaur/images/photo-editing.jpg", 
          },
        ],
      };
    },
  };
  </script>
  
  
  
  <style scoped>
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    border-radius: 8px;
  }
  
  .btn-primary {
    background-color: #6c63ff;
    border-color: #6c63ff;
  }
  </style>
<template>
  <div class="container mt-5">
    <header class="text-center mb-5">
      <h1 class="display-4">Tutorials</h1>
      <p class="lead">
        Step-by-step guides to master Your Hobby and enhance your skills.
      </p>
    </header>

 
    <div class="row">
   
      <div class="col-md-4 mb-4" v-for="tutorial in tutorials" :key="tutorial.id">
        <div class="card shadow-sm">
          <img
            :src="tutorial.image"
            alt="Tutorial Image"
            class="card-img-top"
            style="height: 200px; object-fit: cover;"
          />
          <div class="card-body">
            <h5 class="card-title">{{ tutorial.title }}</h5>
            <p class="card-text">{{ tutorial.excerpt }}</p>
            <nuxt-link :to="'/tutorials/' + tutorial.id" class="btn btn-primary">
              Read Full Tutorial
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorialsPage",
  data() {
    return {
      tutorials: [
        {
          id: 1,
          title: "Mastering Portrait Photography",
          excerpt: "Learn the art of capturing stunning portraits with your camera. Perfect for beginners and advanced photographers.",
          image: "/mtm6407-static-site-harshpreet-kaur/images/portrait-photography.jpg", 
        },
        {
          id: 2,
          title: "Basics Landscape Photography",
          excerpt: "A comprehensive guide to capturing breathtaking landscapes, from composition to lighting.",
          image: "/mtm6407-static-site-harshpreet-kaur/images/landscape-photography.jpg", 
        },
        {
          id: 3,
          title: "Editing Your Photos Like a Pro",
          excerpt: "Step-by-step guide on how to edit your photos using advanced techniques and editing software.",
          image: "/mtm6407-static-site-harshpreet-kaur/images/photo-editing.jpg", 
        },
      ],
    };
  },
};
</script>


<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  border-radius: 8px;
}

.btn-primary {
  background-color: #6c63ff;
  border-color: #6c63ff;
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
  