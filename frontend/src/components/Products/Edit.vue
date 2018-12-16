<template>
  <div class="row mb-5">
    <div class="col-md-8 mx-auto mt-5">
      <div class="card">
        <div class="card-header dark bg-blue text-center">
          <h4 class="text-white">Edit Product</h4>
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
            class="btn btn-info btn-md mr-auto"
            @click="updateProduct"
            v-show="product.name && product.price && product.description"
          >Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    updateProduct() {
      this.$http
        .put(`api/products/${this.product.id}`, this.product)
        .then(res => {
          swal("Updated!", "Your Product is updated!", "success");
          this.$router.push("/feed");
        })
        .catch(err => console.log(err));
    },
    getProduct() {
      this.$http
        .get(`api/products/${this.$route.params.product}`)
        .then(res => {
          this.product = res.data;
        })
        .catch(res => {
          console.log(res);
          swal(`${res.status}`, res.data, "error");
          this.$router.push("/feed");
        });
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
