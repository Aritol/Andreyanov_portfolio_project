<template>
  <div>
    <div class="popup_container" v-if="successfulBuyingPopupVisible">
      <successful-buying-popup
        @closePopup="successfulBuyingPopupVisible = false"
      />
    </div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="product_list_container">
          <div class="title_container">
            <!-- <h1>Моторні масла для легкових автомобілів</h1> -->
            <h1>{{ setTitle }}</h1>
          </div>
          <!-- v-bind:productData="product" -->
          <div class="products_list">
            <product-item
              v-for="product in products"
              class="product_item"
              :key="product._id"
              :productData="product"
              @onProductClick="onProductClick"
              @onBuyClick="onBuyClick"
            />
            <!-- <div
              @click="onProductClick(product.category, product._id)"
              class="product_item"
              v-for="product in products"
              :key="product.__id"
            >
              <img :src="getImgSrc(product.photo)" alt="" />
            </div> -->
            <!-- <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Buffer } from "buffer";
import ProductItem from "./ProductItem.vue";
import SideMenu from "@/components/SideMenu";
import successfulBuyingPopup from "@/components/popups/successfulBuyingPopup.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductsList",
  components: {
    ProductItem,
    SideMenu,
    successfulBuyingPopup,
  },

  data() {
    return {
      title: null,
      cart: [],
      successfulBuyingPopupVisible: false,
    };
  },

  computed: {
    ...mapGetters("auth", ["authorize"]),
    ...mapGetters("cart", ["getCartList"]),

    ...mapGetters("products", ["products"]),
    setTitle() {
      if (this.$route.params.category === "legkovi") {
        return "Моторні масла для легкових автомобілів";
      }
      if (this.$route.params.category === "commerce") {
        return "Моторні масла для коммерйційних автомобілів";
      }
      if (this.$route.params.category === "hydraulics") {
        return "Гідравлічне масло";
      }
      if (this.$route.params.category === "transmisson") {
        return "Трансмісійне масло";
      }
      if (this.$route.params.category === "cold") {
        return "Охолоджуючі рідини";
      }
      if (this.$route.params.category === "motoGroup") {
        return "Масло для мото групи";
      }
      if (this.$route.params.category === "garden") {
        return "Масло для садового обладнання";
      }
      if (this.$route.params.category === "lubricants") {
        return "Змажчувальні матеріали";
      }
      return "Автохімія";
    },
  },

  methods: {
    ...mapActions("products", ["loadProducts"]),
    ...mapActions("cart", ["loadFromLocalStorage", "AddProductToCart"]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    onProductClick(category, id) {
      this.$router.push({
        name: "productInfoPage",
        params: { category, id },
      });
    },

    saveToLocalStorage() {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    onBuyClick(product) {
      this.AddProductToCart(product);
      this.successfulBuyingPopupVisible = true;
      // if (this.cart.length) {
      //   let isProductExist = false;
      //   this.cart.map(function (item) {
      //     if (item.name === productToLocalStorage.name) {
      //       isProductExist = true;
      //       item.quantity++;
      //     }
      //   });
      //   if (!isProductExist) {
      //     this.cart.push(productToLocalStorage);
      //     this.saveToLocalStorage();
      //   } else {
      //     this.saveToLocalStorage();
      //   }
      // } else {
      //   console.log(productToLocalStorage);
      //   this.cart.push(productToLocalStorage);
      //   this.saveToLocalStorage();
      // }
    },

    OnEditClick() {
      this.$router.push({ path: "/products/lolololo" });
    },
  },

  async mounted() {
    // this.loadProducts("legkovi");
    await this.loadProducts(this.$route.params.category);
    // await this.loadFromLocalStorage();

    // console.log(this.cart);
  },

  watch: {
    $route: {
      deep: true,
      handler() {
        // if (
        //   this.$route.params.category == "legkovi" ||
        //   this.$route.params.category == "commerce" ||
        //   this.$route.params.category == "hydraulics" ||
        //   this.$route.params.category == "transmisson" ||
        //   this.$route.params.category == "cold" ||
        //   this.$route.params.category == "motoGroup" ||
        //   this.$route.params.category == "garden" ||
        //   this.$route.params.category == "autohim"
        // ) {
        //   // location.reload();
        // }
        this.loadProducts(this.$route.params.category);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.popup_container {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .main_wrapper {
    display: flex;
    margin-top: 15px;

    .product_list_container {
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

      .products_list {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0px 20px 0px;
        .product_item {
          margin: 0px 0px 25px 17.5px;
        }
      }
    }
  }
}
</style>
