<template>
  <div>
    <div class="confirm_order_popup_container" v-if="confirmOrderPopupVisible">
      <div class="confirm_order_popup_wrapper">
        <div class="popup_content">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onConfirmOrderClose"
            />
          </div>
          <div class="popup_form_container">
            <form action="" class="user_data_form" @submit.prevent="submit">
              <div class="input_container">
                <label for="">Ім'я<span>*</span></label>
                <input
                  type="text"
                  placeholder="Ім'я"
                  required
                  v-model="userData.userName"
                />
              </div>
              <div class="input_container">
                <label for="">Фамілія<span>*</span></label>
                <input
                  type="text"
                  placeholder="Фамілія"
                  required
                  v-model="userData.userSurname"
                />
              </div>
              <div class="input_container">
                <label for="">Номер телефону<span>*</span></label>
                <input
                  type="text"
                  placeholder="Номер телефону"
                  required
                  v-model="userData.userPhoneNumber"
                />
              </div>
              <div class="input_container">
                <label for="">Пошта<span>*</span></label>
                <input
                  type="text"
                  placeholder="Пошта"
                  required
                  v-model="userData.userMail"
                />
              </div>
              <div class="input_container">
                <label for=""
                  >Адресса (місто, відділення НП, номер відділення)<span
                    >*</span
                  ></label
                >
                <input
                  type="text"
                  placeholder="Наприклад: Ужгород, відділення НП 1"
                  required
                  v-model="userData.address"
                />
              </div>
              <div class="input_container">
                <label for="">Коментар</label>
                <input
                  type="text"
                  placeholder="Уточненя до замовлення (не обов'язково)"
                  v-model="userData.message"
                />
              </div>
              <div class="error_container" v-if="userDataFieldError">
                <p>Ви не ввели якесь із полів,</p>
                <p>будь ласка заповніть всі поля позначені *</p>
              </div>
              <div class="button_container">
                <button @click="onConfirmOrder">Підтвердити замовлення</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="popup_container" v-if="popupOkVisible">
      <div class="popup">
        <div class="popup_wrapper">
          <div class="popup_content">
            <div class="close_img_container">
              <img
                src="@/assets/icons/icon_close_grey.png"
                alt=""
                @click="onPopupOk"
              />
            </div>
            <div class="popup_text">
              <h1>Ваше замовлення прийняте</h1>
              <button @click="onPopupOk">Ок</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="cart_container">
          <div class="cart_title">
            <h1>Корзина</h1>
          </div>
          <div v-if="getCartList.length === 0" class="cart_empty_container">
            <!-- <div class="cart_empty_container"> -->
            <h1>Корзина пуста</h1>
            <p>У вас гарний смак. А у нас багато цікавих та потрібних речей.</p>
            <button @click="onStartBuyingClick">Почати покупки</button>
          </div>
          <!-- <div v-if="!isEmpty" class="cart_products"> -->
          <div class="cart_products" v-if="getCartList.length > 0">
            <!-- <div
              v-for="cartItem in cartList"
              :key="cartItem._id"
              class="cart_product_container"
            > -->
            <div
              class="cart_product_container"
              v-for="(cartItem, index) in getCartList"
              :key="cartItem._id"
            >
              <div class="cart_product_container_wrapper">
                <div class="product_img">
                  <!-- <img src="@/assets/images/test_gold.jpg" alt="" /> -->
                  <img :src="getImgSrc(cartItem.photo)" alt="" />
                </div>
                <div class="product_information_container">
                  <div class="product_title">
                    <!-- <h2>
                      Напівсинтетичне моторне масло MOL Dynamic Max 10W-40 - 1 л
                    </h2> -->
                    <h2>
                      {{ cartItem.name }}
                    </h2>
                  </div>
                  <div class="product_availability">
                    <p>{{ cartItem.availability }}</p>
                  </div>
                  <div class="product_price">
                    <p>{{ cartItem.price }}</p>
                  </div>
                </div>
                <div class="product_count_container">
                  <div class="product_count_title">
                    <h1>Кількість шт.</h1>
                  </div>
                  <div class="product_counter">
                    <button class="btn_minus" @click="decrement(index)">
                      <p>-</p>
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="300"
                      :value="cartItem.quantity"
                    />
                    <button class="btn_plus" @click="increment(index)">
                      +
                    </button>
                  </div>
                </div>
                <div class="product_sum_container">
                  <div class="product_sum_title">
                    <h1>Сума</h1>
                  </div>
                  <div class="product_sum">
                    <p>{{ cartItem.price }} грн</p>
                  </div>
                </div>
                <div class="button_remove_container">
                  <div class="button_remove_container_wrapper">
                    <button @click="onRemoveClick(index)">
                      <img src="@/assets/icons/icon_cancel.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="final_sum_container" v-if="getCartList.length > 0">
              <div class="final_sum_title">
                <p>До оплати без доставки:</p>
              </div>
              <div class="final_sum__sum">
                <span>{{ cartTotalCost }}</span>
                <p>грн</p>
              </div>
            </div>

            <div class="buttons_container" v-if="getCartList.length > 0">
              <button @click="continueBuying">Продовжити покупки</button>
              <button @click="order">Оформити замовлення</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { mapGetters, mapActions } from "vuex";
import { Buffer } from "buffer";

export default {
  name: "CartPage",

  components: {
    SideMenu,
  },
  data() {
    return {
      cartList: [],
      userData: {
        // order: [...this.cartList],
      },
      confirmOrderPopupVisible: false,
      popupOkVisible: null,

      userDataFieldError: false,
    };
  },

  computed: {
    ...mapGetters("cart", ["getCartList"]),

    cartTotalCost() {
      let result = [];
      for (let item of this.getCartList) {
        result.push(item.price * item.quantity);
      }
      result = result.reduce(function (sum, el) {
        return sum + el;
      });

      return result;
    },
  },

  methods: {
    ...mapActions("cart", [
      "loadFromLocalStorage",
      "incrementQuantity",
      "decrementQuantity",
      "DeleteProductFromCart",
      "clearCart",
      "AddOrderToDB",
    ]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    increment(index) {
      // console.log(index);
      this.incrementQuantity(index);
    },

    decrement(index) {
      this.decrementQuantity(index);
    },
    onRemoveClick(index) {
      this.DeleteProductFromCart(index);
    },

    continueBuying() {
      console.log(this.cartList);
      this.$router.push({ name: "productsPage" });
    },

    onStartBuyingClick() {
      this.$router.push({ name: "productsPage" });
    },

    order() {
      this.confirmOrderPopupVisible = true;
    },

    onPopupOk() {
      this.popupOkVisible = false;
      this.$router.push({ name: "home" });
      this.clearCart();
    },
    onConfirmOrderClose() {
      this.userDataFieldError = false;
      this.confirmOrderPopupVisible = false;
    },

    async onConfirmOrder() {
      this.userData.totalPrice = this.cartTotalCost;
      // console.log(this.cartList);
      // productsList.push({
      //   id: this.cartList[i]._id,
      //   quantity: this.cartList[i].quantity,
      // });

      let productsList = [];
      for (let i = 0; i < this.cartList.length; i++) {
        productsList.push({
          product: this.cartList[i]._id,
          quantity: this.cartList[i].quantity,
        });
      }
      let date = new Date();

      let dateObj = {
        day: date.getDate(),
        mouth: date.getMonth(),
        year: date.getFullYear(),
      };

      this.userData.productList = productsList;
      this.userData.date = dateObj;

      if (
        this.userData.userName &&
        this.userData.userSurname &&
        this.userData.userPhoneNumber &&
        this.userData.userMail &&
        this.userData.address
      ) {
        await this.AddOrderToDB(this.userData);
        console.log("popup");
        this.popupOkVisible = true;
      } else {
        this.userDataFieldError = true;
      }
    },
  },

  mounted() {
    this.cartList = this.getCartList;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.confirm_order_popup_container {
  color: #333;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.85);
  // position: absolute;
  .confirm_order_popup_wrapper {
    margin: 0 auto;
    background: #fff;
    box-shadow: #fff 0 0 0;
    width: 100%;
    max-width: 700px;
    height: 820px;
    margin-top: 60px;
    border-radius: 2px;
    .popup_content {
      .close_img_container {
        text-align: right;
        img {
          width: 35px;
          cursor: pointer;
          margin: 4px;
        }
      }

      .popup_form_container {
        margin: 20px 30px;
        font-size: 22px;
        .user_data_form {
          .input_container {
            margin-top: 30px;

            label {
              span {
                color: rgb(214, 20, 20);
              }
            }
            input {
              margin-top: 10px;
              display: block;
              border: 1px solid #dfe1f0;
              width: 640px;
              height: 45px;
              font-size: 18px;
              padding: 10px 15px;
              border-radius: 3px;

              &:focus {
                border: 1px solid #f5c002;
              }
            }
          }

          .error_container {
            position: absolute;
            text-align: center;
            margin-left: 110px;
            margin-top: 5px;
            color: rgb(204, 37, 37);
          }
          .button_container {
            text-align: center;
            margin-top: 60px;
            button {
              width: 350px;
              height: 55px;
              background: #ed8414;
              color: #fff;
              font-size: 22px;
              font-weight: bold;
              border-radius: 5px;
              transition: background 0.1s, border-color 0.1s, color 0.1s;
              &:hover {
                background: #c5630a;
              }
            }
          }
        }
      }
    }
  }
}

.popup_container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 25;
  background-color: rgba(0, 0, 0, 0.85);
  // position: absolute;
  .popup {
    margin: 0 auto;
    background: #fff;
    box-shadow: #fff 0 0 0;
    width: 100%;
    max-width: 600px;
    height: 230px;
    margin-top: 350px;
    border-radius: 2px;
    .popup_wrapper {
      margin: 0 auto;

      .popup_content {
        .close_img_container {
          text-align: right;

          img {
            width: 35px;
            cursor: pointer;
            margin: 4px;
          }
        }
        .popup_text {
          text-align: center;
          margin: 15px 0px 0px 0px;
          font-size: 26px;
          font-weight: bold;
          h1 {
          }
          button {
            margin-top: 70px;
            height: 50px;
            border-radius: 5px;
            width: 220px;
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
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .main_wrapper {
    display: flex;
    margin-top: 15px;

    .cart_container {
      margin-left: 15px;
      background: #fff;

      width: 100%;
      max-width: 1000px;

      .cart_title {
        background: #069534;
        width: 100%;
        max-width: 1000px;
        h1 {
          font-size: 20px;
          padding: 8px 0px 8px 29px;
          color: #fff;
        }
      }

      .cart_empty_container {
        margin: 25px 0px 10px 30px;
        text-align: center;

        h1 {
          font-size: 26px;
          // text-align: center;
        }
        p {
          font-size: 18px;
          // text-align: center;
          padding-top: 20px;
        }
        button {
          background-color: #f67c0d;
          color: #ffffff;
          border-radius: 3px;
          width: 330px;
          height: 60px;
          font-size: 16px;
          margin-top: 20px;
        }
      }

      .cart_products {
        padding-bottom: 50px;
        .cart_product_container {
          margin: 20px 0px 0px 0px;

          border-bottom: 2px solid #d9d9d9;

          .cart_product_container_wrapper {
            // & div:last-child {
            //   text-align: right;
            // }
            display: flex;
            .product_img {
              img {
                width: 140px;
              }
            }
            .product_information_container {
              .product_title {
                display: flex;

                // margin: 20px 0px 0px 10px;
                margin-top: 20px;
                width: 100%;
                max-width: 300px;
                h2 {
                  font-weight: bold;
                }
              }

              .product_availability {
                margin-top: 10px;
              }

              .product_price {
                margin-top: 10px;
                color: #989898;
              }
            }

            .product_count_container {
              margin: 20px 0px 0px 65px;
              .product_count_title {
                // margin: 10px 0px 0px 10px;
                padding-left: 10px;
                color: #989898;
              }
              .product_counter {
                margin: 10px 0px 0px 0px;
                border: 1px solid #dfe1f0;
                border-radius: 2px;

                button {
                  width: 40px;
                  height: 50px;
                  // background: none;
                  background: #f6f8fd;
                  font-weight: bold;
                  font-size: 22px;
                  p {
                    // padding-bottom: 10px;
                    padding-top: -20px;
                  }
                }

                input {
                  text-align: center;
                  font-weight: bold;
                  font-size: 20px;
                  background: #ffffff;
                  width: 30px;
                  // max-width: 30px;
                  height: 30px;
                  // max-height: 30px;
                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                  /* display: none; <- Crashes Chrome on hover */
                  -webkit-appearance: none;
                  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
                }
              }
            }

            .product_sum_container {
              margin: 20px 0px 0px 100px;
              width: 100px;

              .product_sum_title {
                color: #989898;

                h1 {
                }
              }
              .product_sum {
                margin-top: 20px;
                p {
                  font-weight: bold;
                  font-size: 20px;
                }
              }
            }
            .button_remove_container {
              // float: right;
              margin: 25px 0px 0px 60px;
              .button_remove_container_wrapper {
                // text-align: right;

                button {
                  background: none;
                }
              }
            }
          }
        }

        .final_sum_container {
          text-align: right;
          margin: 30px 50px 30px 0px;
          .final_sum_title {
            color: #333333;
            font-size: 18px;
          }

          .final_sum__sum {
            display: flex;
            margin: 15px 20px 0px 694px;
            p {
              font-weight: bold;
              margin-top: 11px;
              margin-left: 4px;
            }
            span {
              font-size: 30px;
              font-weight: bold;
            }
          }
        }

        .buttons_container {
          text-align: right;

          margin-right: 30px;

          button {
            width: 260px;
            height: 50px;
            border-radius: 3px;
            color: #ffffff;
            font-size: 20px;
            font-weight: bold;

            transition: 0.2s ease-in-out;
            border: 1px solid #f67c0d;
            background: #f67c0d;

            &:hover {
              background: #c5630a;
            }

            &:first-child {
              font-weight: normal;

              margin-right: 25px;
              font-size: 16px;

              color: #f67c0d;
              background: #ffffff;
              border: 1px solid #f67c0d;
            }
            &:first-child:hover {
              background: #f67c0d;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
