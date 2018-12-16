<template>
  <div class="row">
    <div class="col-md-6 mx-auto mt-5">
      <div class="card">
        <div class="card-header dark bg-green text-center">
          <h4>Login</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Password"
            >
          </div>
          <button @click="login" class="btn btn-success btn-md mr-auto">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      let data = {
        client_id: 2,
        client_secret: "NLMeZ7jzCD2cuCESiExFD7cE1aDYqQ9YGJU9lMks",
        grant_type: "password",
        username: this.email,
        password: this.password
      };

      this.$http
        .post(`http://localhost:8000/oauth/token`, data)
        .then(res => {
          console.log(res.data);
          this.$auth.setToken(
            res.data.access_token,
            res.data.expires_in + Date.now()
          );
          // After Authentication success redirect to the Feed Component
          this.$router.push("/feed");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style>
.card {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
.bg-green {
  color: white;
  background-color: #239b56;
}
.card-header {
  border-radius: 0;
}
</style>
