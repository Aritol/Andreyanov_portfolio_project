<template>
  <div>
    <div class="container" ref="container">
      <div class="main_wrapper">
        <div class="close_img_container">
          <img
            src="@/assets/icons/icon_close_grey.png"
            alt=""
            @click="onClosePopup"
          />
        </div>
        <div class="main_container">
          <h1>Товар додано в корзину.</h1>
          <button @click="onClosePopup">Ок</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "successfulBuyingPopup",

  methods: {
    onClosePopup() {
      this.$emit("closePopup");
    },
  },

  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target == vm.$refs["container"]) {
        vm.onClosePopup();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;

  .main_wrapper {
    width: 100%;
    max-width: 470px;
    height: 300px;
    margin: 0 auto;
    margin-top: 300px;
    background: #fff;
    box-shadow: #fff 0 0 0;
    border-radius: 2px;
    text-align: center;

    .close_img_container {
      text-align: right;
      img {
        width: 35px;
        cursor: pointer;
        margin: 4px;
      }
    }

    .main_container {
      margin-top: 30px;
      h1 {
        font-size: 26px;
        font-weight: bold;
      }

      button {
        margin-top: 90px;
        height: 45px;
        border-radius: 5px;
        width: 200px;
        background: #ed8414;
        color: #fff;
        font-size: 20px;
        &:hover {
          background: #c5630a;
        }
      }
    }
  }
}
</style>
