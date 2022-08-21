<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="main_container">
          <div class="title_container">
            <h1>Детальніше про лист</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "LetterInfoPage.vue",
  components: {
    SideMenu,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .main_wrapper {
    display: flex;
    margin-top: 15px;
    .main_container {
      margin-left: 15px;
      background: #fff;

      width: 100%;
      max-width: 1000px;

      .title_container {
        background: #069534;
        width: 100%;
        max-width: 1000px;
        h1 {
          font-size: 20px;
          padding: 8px 0px 8px 29px;
          color: #fff;
        }
      }
    }
  }
}
</style>
