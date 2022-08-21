<template>
  <!-- <meta name="viewport" content="width = device-width" /> -->
  <meta name="viewport" content="width = 1200" />
  <div class="main">
    <!-- <div class="container">
      <div class="main_wrapper">
        <div class="header_container">
          <div class="logo_container">
            <router-link to="/"
              ><img
                src="https://images.prom.ua/2858892249_w200_h100_molmarket.jpg"
                alt=""
              />
            </router-link>
            <h2>Molmarket</h2>
          </div>
          <div class="phone_number_container">
            <div class="phone_number_container_img_wrapper">
              <img src="@/assets/icons/call_icon.png" alt="" />
            </div>
            <h2>+380 (99) 432-08-32</h2>
          </div>
          <div class="cart_container">
            <router-link to="/cart" class="cart_container_link">
              <img src="@/assets/icons/cart_icon.png" alt="" />
            </router-link>
          </div>
        </div>

        <div class="main_container">
          <navigation-menu />
        </div>
      </div>
    </div>
    <div>

      <router-link to="/testAdd">testAdd </router-link> -->
    <!-- <router-view> </router-view>
    </div> -->
    <main-masterpage>
      <template #header>
        <navigation-menu />
      </template>
      <template #footer>
        <Footer />
      </template>
    </main-masterpage>
  </div>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    MainMasterpage,
    NavigationMenu,
    Footer,
  },
  methods: {
    ...mapActions("cart", ["loadFromLocalStorage"]),
  },

  async mounted() {
    await this.loadFromLocalStorage();
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/styles/null.scss";

html {
  body {
    margin-top: 0px;
    min-width: 1200px;
  }
}

.main {
  background-color: #fff0e5;
}
</style>
