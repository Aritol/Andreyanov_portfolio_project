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
        <div class="content">
          <div class="row">
            <strong>Телефон: </strong>
            <p>+380 (99) 432-08-32</p>
          </div>
          <div class="row">
            <strong>Контактна особа:</strong>
            <p>Андреянов Максим</p>
          </div>
          <div class="row">
            <strong>Адреса: </strong>
            <p>Ужгород, Україна</p>
          </div>
          <div class="row">
            <strong>Viber: </strong>
            <p>+380994320832</p>
          </div>
          <div class="row">
            <strong>WhatsApp</strong>
            <p>+380994320832</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactPopup",

  methods: {
    onClosePopup() {
      this.$emit("onContactPopupClose");
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
    max-width: 560px;
    height: 355px;
    margin: 0 auto;
    margin-top: 250px;
    background: #fff;
    box-shadow: #fff 0 0 0;
    border-radius: 2px;
    .close_img_container {
      text-align: right;

      img {
        width: 35px;
        cursor: pointer;
        margin: 4px;
      }
    }
    .content {
      margin: 30px 0px 0px 45px;
      font-size: 20px;
      .row {
        display: flex;
        margin-top: 30px;

        p {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
