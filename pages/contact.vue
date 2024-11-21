<template>
    <div class="container mt-5">
      <header class="text-center mb-5">
        <h1 class="display-4 text-gradient">Get in Touch</h1>
        <p class="lead">I'm always open to collaborations, inquiries, or just chatting about Your Hobby.</p>
      </header>
  
     
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-12">
          <div class="contact-card">
            <form @submit.prevent="handleSubmit">
           
              <div class="mb-4">
                <label for="name" class="form-label custom-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  class="form-control custom-input"
                  v-model="form.name"
                  required
                />
              </div>
  
             
              <div class="mb-4">
                <label for="email" class="form-label custom-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control custom-input"
                  v-model="form.email"
                  required
                />
              </div>
  
             
              <div class="mb-4">
                <label for="message" class="form-label custom-label">Your Message</label>
                <textarea
                  id="message"
                  class="form-control custom-input"
                  v-model="form.message"
                  rows="5"
                  required
                ></textarea>
              </div>
  
             
              <button type="submit" class="btn custom-btn w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit() {
        
        console.log("Form Submitted:", this.form);
  
  
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
  
      
        alert("Your message has been sent! Thank you for reaching out.");
      },
    },
  };
  </script>
  
  <style scoped>
  .text-gradient {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    color: transparent;
  }
  

  .contact-card {
    background-color: #f5f5f5;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  
  .contact-card:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  

  .custom-input {
    border-radius: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  .custom-input:focus {
    border-color: #ff7e5f;
    outline: none;
  }
  
 
  .custom-label {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
  }
  
  
  .custom-btn {
    background-color: #ff7e5f;
    border-color: #ff7e5f;
    border-radius: 10px;
    padding: 15px;
    font-weight: bold;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
  }
  
  .custom-btn:hover {
    background-color: #feb47b;
    border-color: #feb47b;
  }
  

  @media (max-width: 768px) {
    .contact-card {
      padding: 20px;
    }
    .custom-input {
      font-size: 0.95rem;
    }
  }
  </style>
  