<template>
  <div>
    <div class="container" ref="container">
      <div class="main_wrapper">
        <div class="popup_block">
          <img src="@/assets/icons/close_icon.png" alt="" @click="onOkClick" />
          <div class="popup_content">
            <h1>
              {{ title }}
            </h1>
            <div class="buttons_container">
              <button @click="onOkClick">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoPopup",

  props: {
    title: null,
    btnLabel: null,
    productData: {},
  },

  methods: {
    onCloseClick() {
      this.$emit("infoPopupClose");
    },
    onOkClick() {
      console.log(this.productData);
      //   if (this.$route.params.id) {
      //     let categoryParameter = "";
      //     this.$router.push({
      //       name: "productsList",
      //       params: { categoryParameter },
      //     });

      this.$router.push({
        name: "productsList",
        params: { category: this.productData.category },
      });
      //   }
    },

    mounted() {
      let vm = this;
      document.addEventListener("click", function (item) {
        if (item.target == vm.$refs["container"]) {
          vm.onOkClick();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;

  .main_wrapper {
    width: 100%;
    max-width: 900px;
    // height: 500px;
    margin: 0 auto;
    .popup_block {
      height: 400px;

      img {
        margin-left: 850px;
        cursor: pointer;
      }
      border-radius: 15px;
      margin-top: 300px;
      background: white;
      .popup_content {
        text-align: center;
        font-size: 22px;
        h1 {
          margin-top: 40px;
          font-size: 40px;
        }

        .buttons_container {
          margin-top: 160px;
          button {
            font-size: 26px;
            font-weight: bold;
            border-radius: 3px;
            transition: 0.2s ease-in-out;
            color: #ffffff;
            width: 300px;
            border: 1px solid #f67c0d;
            height: 60px;
            background-color: #f67c0d;
            &:hover {
              background: #c5630a;
            }
          }
        }
      }
    }
  }
}
</style>
