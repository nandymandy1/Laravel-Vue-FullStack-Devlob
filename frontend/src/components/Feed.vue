<template>
  <div>
    <h1>Feed</h1>
    <my-products></my-products>
  </div>
</template>

<script>
import Products from "./Products/Products.vue";

export default {
  components: {
    "my-products": Products
  }
};
</script>
