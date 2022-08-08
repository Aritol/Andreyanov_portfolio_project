<template>
  <div>
    <div class="container" ref="container">
      <div class="main_wrapper">
        <div class="popup_container">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onClosePopup"
            />
          </div>
          <div class="popup_content_container">
            <div class="return_container">
              <h1>Умови повернення та обміну</h1>
              <p>
                Компанія здійснює повернення та обмін цього товару відповідно до
                вимог законодавства.
              </p>
            </div>
            <div class="terms_container">
              <h1>Терміни повернення</h1>
              <p>
                Повернення можливе протягом 14 днів після отримання (для товарів
                належної якості).
              </p>
              <p>Зворотня доставка товарів здійснюєтьсяза домовленістю.</p>
              <p>
                Згідно з чинним законодавством ви можете повернути товар
                належної якості або обміняти його, у разі:
              </p>
              <ul class="return_rules_list">
                <li>
                  товар не був у вживанні і не має слідів використання
                  споживачем: подряпин, сколів, потертостей, плям і т.п.;
                </li>
                <li>
                  товар повністю укомплектований і збережена фабрична упаковка;
                </li>
                <li>збережені всі ярлики і заводське маркування;</li>
                <li>
                  товар зберігає товарний вигляд і свої споживчі властивості.
                </li>
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
  name: "returnDetailPopup",
  methods: {
    onClosePopup() {
      this.$emit("onReturnDetailPopupClose");
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
    max-width: 650px;
    height: 570px;
    margin: 0 auto;
    margin-top: 200px;
    background: #fff;
    box-shadow: #fff 0 0 0;
    border-radius: 2px;
    .popup_container {
      .close_img_container {
        text-align: right;
        img {
          width: 35px;
          cursor: pointer;
          margin: 4px;
        }
      }

      .popup_content_container {
        margin: 15px 10px 0px 40px;
        font-size: 18px;
        .return_container {
          h1 {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          p {
            line-height: 1.3em;
          }
        }
        .terms_container {
          margin-top: 20px;
          h1 {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          p {
            line-height: 1.3em;
            margin-top: 15px;
          }
        }
        .return_rules_list {
          li {
            margin-top: 15px;
            list-style: inside;
            line-height: 1.25em;
          }
        }
      }
    }
  }
}
</style>
