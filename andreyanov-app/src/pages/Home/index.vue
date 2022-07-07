<template>
  <div>
    <div class="container">
      <!-- <side-menu /> -->
      <div class="side_img_container">
        <img
          src="@/assets/images/side_img.png
        "
          alt=""
        />
      </div>
      <categories-grid />
    </div>
  </div>
</template>

<script>
// import SideMenu from "@/components/SideMenu";
import CategoriesGrid from "@/components/CategoriesGrid";
export default {
  name: "Home",

  components: {
    // SideMenu,
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
}
</style>
