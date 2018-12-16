<template>
  <div class="card mb-3 col-md-6">
    <img
      src="https://payload.cargocollective.com/1/4/150344/2194646/f21.jpg"
      class="thumbnail img-fluid image"
    >
    <div class="caption">
      <h3>{{ product.name }}</h3>
      <p class="lead">
        <strong>${{ product.price }}</strong>
      </p>
      <hr>
      <p>
        <a href="#" class="btn btn-outline-primary">Wish List</a>
        <a href="#" class="btn btn-outline-success">Buy</a>
        <button
          @click="$emit('delete-product')"
          v-if="product.user_id == authenticatedUser.id"
          role="button"
          class="btn btn-outline-danger"
        >Delete</button>
        <router-link
          class="btn btn-outline-info"
          v-if="product.user_id == authenticatedUser.id"
          :to="'products/'+product.id+'/edit'"
        >Edit</router-link>
      </p>
    </div>
  </div>
</template>

<style>
.card {
  border-radius: 0;
}

.image {
  margin-top: 15px;
}
</style>


<script>
export default {
  props: ["product", "authenticatedUser"]
};
</script>

