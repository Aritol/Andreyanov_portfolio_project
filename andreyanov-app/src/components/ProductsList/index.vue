<template>
  <div>
    <div class="products_container">
      <product-item />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductsList",
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped></style>
