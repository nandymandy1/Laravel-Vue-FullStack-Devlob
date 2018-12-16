<template>
  <div class="row">
    <div class="col-md-6 mx-auto mt-5">
      <div class="card">
        <div class="card-header dark bg-green text-center">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="name" placeholder="Name">
          </div>
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
          <button class="btn btn-success btn-md mr-auto">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
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
