<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// Components Import
import Navbar from "./components/Navbar.vue";
import Login from "./components/Authentication/Login.vue";
import Register from "./components/Authentication/Register.vue";
import Create from "./components/Products/Create.vue";

export default {
  // Defining the components
  components: {
    navbar: Navbar,
    login: Login,
    register: Register,
    create: Create
  }
};
</script>

<style>
.btn {
  border-radius: 0;
}
</style>
