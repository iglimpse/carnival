<template>
   <div id="app">
    <div class="content-wrapper" >
      <Header ></Header>
      <img src="bosch_header.svg" alt="Bosch Logo" style="position: absolute; top: -10px; left: 80px;" height="150" width="135"  />
      <router-view />
    </div>
<!--    <Footer></Footer>-->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'; 
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex-grow: 1;
}
body {
  //background-color: #77a6ba; /* Light blue background color */
  margin: 0; /* Remove default body margin */
  padding: 0; /* Remove default body padding */
  //font-family: Arial, sans-serif; /* Specify a font for the entire page */
}
</style>


