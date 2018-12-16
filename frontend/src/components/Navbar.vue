<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-my-color">
      <router-link class="navbar-brand" to="/feed">Furniture Store</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="!isAuth">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isAuth">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/feed">News Feed</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/products/create">Create</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuth: null
    };
  },
  created() {
    this.setAuthenticatedUser();
    this.isAuth = this.$auth.isAuthenticated();
  },
  methods: {
    setAuthenticatedUser() {
      this.$http
        .get(`api/user`)
        .then(res => {
          this.$auth.setAuthUser(res.data);
          // console.log(this.$auth.getAuthUser());
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
.bg-my-color {
  background-color: #707b7c;
}
/* Putting Active Links */
</style>
