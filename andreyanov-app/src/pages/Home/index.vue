<template>
  <div>
    <div class="container">
      <div class="side_img_container">
        <img
          src="@/assets/images/side_image_reworked.png
        "
          alt=""
        />
      </div>
      <div class="categories_container">
        <categories-grid />
      </div>
    </div>
  </div>
</template>

<script>
// import SideMenu from "@/components/SideMenu";
import CategoriesGrid from "@/components/CategoriesGrid";
export default {
  name: "Home",

  components: {
    CategoriesGrid,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding-top: 15px;

  .categories_container {
    margin-left: 15px;
  }

  .side_img_container {
    img {
      width: 236px;
    }
  }
}
</style>
