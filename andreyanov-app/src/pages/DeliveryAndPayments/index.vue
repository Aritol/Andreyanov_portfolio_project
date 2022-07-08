<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_container">
          <side-menu />
        </div>
        <div class="main_container">
          <div class="main_container_wrapper">
            <div class="title">
              <h2>Умови доставки та оплати</h2>
            </div>
            <div class="content">asdasd</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "DeliveryAndPayment",

  components: {
    SideMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  background: #fff0e5;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .main_wrapper {
    margin-top: 15px;
    display: flex;

    .main_container {
      background: #fff;
      margin-left: 20px;
    }
  }
}
</style>
