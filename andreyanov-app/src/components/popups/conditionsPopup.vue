<template>
  <div>
    <div class="container" ref="container">
      <div class="main_wrapper">
        <div class="popup_content">
          <div class="close_btn">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onClosePopup"
            />
          </div>
          <div class="popup_text">
            <div class="title_container">
              <h1>Умови оплати та доставки</h1>
            </div>
            <div class="desc_container">
              <p>Способи доставки:</p>
              <ul class="delivery_list">
                <li>Delivery</li>
                <li>Доставка "Самовивіз"</li>
                <li>Доставка "Нова Пошта"</li>
              </ul>
              <p>Способи оплати:</p>
              <ul class="payment_list">
                <li>Післяплата "Нова Пошта"</li>
                <li>Оплата за реквізитами</li>
                <li>Готівкою</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "conditionsPopup",

  methods: {
    onClosePopup() {
      this.$emit("onClosePopup");
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
    height: 390px;
    margin: 0 auto;
    background: #fff;
    // padding: 31px;
    .popup_content {
      margin-top: 250px;
      padding: 31px;

      .close_btn {
        margin-top: -25px;
        margin-bottom: 30px;
        margin-left: 485px;

        img {
          width: 35px;
          cursor: pointer;
        }
      }
    }

    .popup_text {
      margin-left: 30px;
      list-style: square outside;
      font-size: 18px;
      font-weight: bold;
      .title_container {
        h1 {
          font-size: 28px;
          font-weight: bold;
        }
      }

      .desc_container {
        // margin-top: 20px;
        p {
          font-weight: normal;
          margin: 20px 0px 10px 0px;
        }
        ul {
          li {
            margin-bottom: 8px;
            list-style: inside;
          }
        }
      }
    }
  }
}
</style>
