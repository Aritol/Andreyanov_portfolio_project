<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="categories_grid_container">
          <categories-grid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import CategoriesGrid from "@/components/CategoriesGrid";
export default {
  name: "Product",

  components: {
    SideMenu,
    CategoriesGrid,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .main_wrapper {
    display: flex;
    margin-top: 15px;

    .categories_grid_container {
      padding-left: 15px;
    }
  }
}
</style>
