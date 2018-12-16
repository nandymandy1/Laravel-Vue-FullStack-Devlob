<template>
  <div class="row mb-5">
    <div class="col-md-8 mx-auto mt-5">
      <div class="card">
        <div class="card-header dark bg-blue text-center">
          <h4 class="text-white">Create Product</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="product.name"
              type="text"
              id="name"
              class="form-control"
              placeholder="Name"
            >
          </div>

          <div class="form-group">
            <label for="price">Price</label>
            <input
              v-model="product.price"
              type="number"
              id="price"
              class="form-control"
              placeholder="Price"
            >
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              placeholder="Description"
              id="description"
              cols="30"
              rows="10"
              v-model="product.description"
            ></textarea>
          </div>
          <button
            class="btn btn-primary btn-md mr-auto"
            @click="createProduct"
            v-show="product.name && product.price && product.description"
          >Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        price: 0,
        description: ""
      }
    };
  },
  methods: {
    createProduct() {
      this.$http
        .post(`api/products`, this.product)
        .then(res => {
          // console.log(res.data);
          this.$router.push("/feed");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
.bg-blue {
  background: #5dade2;
}
.form-control {
  border-radius: 0;
}
.card {
  padding: 20px;
  border-radius: 0;
}
.card-header {
  border-radius: 0;
}
</style>
