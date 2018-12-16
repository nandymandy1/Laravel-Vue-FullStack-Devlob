<template>
  <div class="row">
    <my-product
      :authenticatedUser="authenticatedUser"
      :product="product"
      v-for="product in products"
      :key="product.id"
      @delete-product="deleteProduct(product)"
    ></my-product>
  </div>
</template>

<script>
import Product from "./Product.vue";
import swal from "sweetalert";
export default {
  components: {
    "my-product": Product
  },
  data() {
    return {
      products: []
    };
  },
  computed: {
    authenticatedUser() {
      return this.$auth.getAuthUser();
    }
  },
  methods: {
    deleteProduct(product) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this product",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        this.$http.delete(`api/products/${product.id}`).then(res => {
          console.log(res);
          if (res.data.success == true) {
            swal(`Your product is deleted successfully.`, {
              icon: "success"
            });
            // Trigger and event
            let index = this.products.indexOf(product);
            this.products.splice(index, 1);
          } else {
            swal(`Unable to delete your product.`);
          }
        });
      });
    }
  },
  created() {
    this.$http
      .get(`api/products`)
      .then(res => {
        // console.log(res.data);
        this.products = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>