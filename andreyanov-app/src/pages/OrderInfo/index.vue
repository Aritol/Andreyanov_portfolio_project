<template>
  <div>
    <div class="popup_container" v-if="popupConfirmVisible">
      <div class="popup_wrapper">
        <div class="close_img_container">
          <img
            src="@/assets/icons/icon_close_grey.png"
            alt=""
            @click="onClosePopup"
          />
        </div>
        <div class="popup_content">
          <h1>Статус замовлення змінено успішно</h1>
          <button @click="onClosePopup">Ок</button>
        </div>
      </div>
    </div>

    <div class="delete_popup_container" v-if="deletePopupVisible">
      <div class="delete_popup_wrapper">
        <div class="close_img_container">
          <img
            src="@/assets/icons/icon_close_grey.png"
            alt=""
            @click="onDeleteCancel"
          />
        </div>
        <div class="popup_content">
          <h1>Ви дійсно хочете видалити замовлення</h1>
          <p>(ЦЮ ДІЮ НЕМОЖЛИВО ВІДМІНИТИ)</p>
          <div class="buttons_container">
            <button @click="onDeleteYes">Так</button>
            <button @click="onDeleteCancel">Відміна</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="order_information_container">
          <div class="title">
            <h1>Замовлення</h1>
          </div>
          <div class="order_products_container">
            <div class="ordered_products">
              <div class="ordered_products_wrapper">
                <div
                  class="product_container"
                  v-for="item in orderList"
                  :key="item._id"
                >
                  <div class="product_wrapper">
                    <div class="product_image_container">
                      <!-- <img src="@/assets/images/test_gold.jpg" alt="" /> -->
                      <img :src="getImgSrc(item.product.photo)" alt="" />
                    </div>
                    <div class="product_name_container">
                      <!-- <h1>
                        Напівсинтетичне моторне масло MOL Dynamic Max 10W-40 -
                        4л
                      </h1> -->
                      <h1>
                        {{ item.product.name }}
                      </h1>
                    </div>
                    <div class="product_price_container">
                      <h2>Вартість одиниці товару:</h2>
                      <!-- <p>600 грн.</p> -->
                      <p>{{ item.product.price }}</p>
                    </div>
                    <div class="product_quantity_container">
                      <h2>Кількість:</h2>
                      <!-- <p>3 шт.</p> -->
                      <p>{{ item.quantity }} шт.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="final_const_container">
              <h2>Сумарна вартість замовлення:</h2>
              <p>{{ order.totalPrice }} грн.</p>
            </div>
            <div class="status_container">
              <h2>Статус замовлення</h2>
              <select name="" id="select_status" @click="changingStatus">
                <option value="">В обробці</option>
                <option value="">Відправлено</option>
                <option value="">Закритий</option>
                <option value="">Відмінений</option>
              </select>
            </div>
          </div>

          <div class="person_information_container">
            <div class="person_information_wrapper">
              <div class="person_information_title">
                <h1>Інформція про відправлення:</h1>
              </div>
              <div class="person_name">
                <h2>Замовник:</h2>
                <p>{{ order.userName }}{{ order.userSurname }}</p>
              </div>
              <div class="person_phone_number">
                <h2>Номер телефону:</h2>
                <p>{{ order.userPhoneNumber }}</p>
              </div>
              <div class="person_mail">
                <h2>E-mail:</h2>
                <p>{{ order.userMail }}</p>
              </div>
              <div class="person_message" v-if="order.message">
                <h2>Коментар до замовлення:</h2>
                <p>{{ order.message }}</p>
              </div>
              <div class="person_address">
                <h2>Адреса відправлення:</h2>
                <p>{{ order.address }}</p>
              </div>
            </div>
          </div>

          <div class="buttons_container">
            <button v-if="changedStatus" @click="onChangeStatusClick">
              Змінити статус
            </button>
            <button @click="onDeleteClick(order._id)">Видалити</button>
            <button @click="onBackClick">Назад</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Buffer } from "buffer";
import SideMenu from "@/components/SideMenu";
import { mapActions } from "vuex";
export default {
  name: "OrderInfo",

  components: {
    SideMenu,
  },

  data() {
    return {
      order: {},
      rawPhotoData: null,

      orderList: [],
      orderStatus: null,
      changedStatus: false,

      popupConfirmVisible: false,
      deletePopupVisible: false,

      idToDelete: null,
    };
  },

  methods: {
    ...mapActions("orders", [
      "getOrderById",
      "updateOrder",
      "deleteOrder",
      "loadOrders",
    ]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    changingStatus() {
      this.changedStatus = true;
    },

    onBackClick() {
      this.$router.push({ name: "ordersPage" });
    },

    showPopup() {
      this.popupConfirmVisible = true;
    },

    async onChangeStatusClick() {
      const selectStatus = document.querySelector("#select_status");

      if (selectStatus.selectedIndex == 0) this.orderStatus = "В обробці";
      if (selectStatus.selectedIndex == 1) this.orderStatus = "Відправлено";
      if (selectStatus.selectedIndex == 2) this.orderStatus = "Закритий";
      if (selectStatus.selectedIndex == 3) this.orderStatus = "Відмінений";
      this.order.status = this.orderStatus;
      let objToUpdate = {
        id: this.order._id,
        status: this.orderStatus,
      };
      console.log(objToUpdate);
      await this.updateOrder(objToUpdate);
      await this.loadOrders();
      // this.popupConfirmVisible = true;
      // setTimeout("alert("asd")", 1000);
      this.popupConfirmVisible = true;
    },

    onDeleteClick(id) {
      // this.deleteOrder(id);
      this.idToDelete = id;
      this.deletePopupVisible = true;
      // this.$router.push({ name: "ordersPage" });
    },

    async onDeleteYes() {
      await this.deleteOrder(this.idToDelete);

      // window.setTimeout( 2000);
      // await this.loadOrders();
      this.$router.push({ name: "ordersPage" });
    },

    onDeleteCancel() {
      this.deletePopupVisible = false;
    },

    onClosePopup() {
      this.$router.push({ name: "ordersPage" });
    },
  },

  async mounted() {
    this.order = await this.getOrderById(this.$route.params.id);
    this.orderList = this.order.orderList;

    const selectStatus = document.querySelector("#select_status");

    if (this.order.status === "В обробці") selectStatus.selectedIndex = 0;
    if (this.order.status === "Відправлено") selectStatus.selectedIndex = 1;
    if (this.order.status === "Закритий") selectStatus.selectedIndex = 2;
    if (this.order.status === "Відмінений") selectStatus.selectedIndex = 3;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.delete_popup_container {
  color: #333;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.85);

  .delete_popup_wrapper {
    margin: 0 auto;
    background: #fff;
    box-shadow: #fff 0 0 0;
    width: 100%;
    max-width: 700px;
    height: 300px;
    margin-top: 250px;
    border-radius: 2px;

    .close_img_container {
      text-align: right;
      img {
        width: 35px;
        cursor: pointer;
        margin: 4px;
      }
    }

    .popup_content {
      margin-top: 30px;
      text-align: center;
      h1 {
        font-size: 22px;
        font-weight: bold;
      }
      p {
        margin-top: 10px;
        font-size: 18px;
        color: #8a8585;
      }
      .buttons_container {
        margin-left: -25px;

        button {
          display: inline-block;
          margin-left: 25px;
          margin-top: 85px;
          width: 200px;
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

.popup_container {
  color: #333;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.85);
  .popup_wrapper {
    margin: 0 auto;
    background: #fff;
    box-shadow: #fff 0 0 0;
    width: 100%;
    max-width: 550px;
    height: 300px;
    margin-top: 250px;
    border-radius: 2px;
    .close_img_container {
      text-align: right;
      img {
        width: 35px;
        cursor: pointer;
        margin: 4px;
      }
    }

    .popup_content {
      text-align: center;

      h1 {
        margin-top: 30px;
        color: #333;
        font-size: 24px;
        font-weight: bold;
      }
      button {
        margin-top: 100px;
        width: 300px;
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

.container {
  color: #333;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .main_wrapper {
    display: flex;
    margin-top: 15px;

    .order_information_container {
      margin-left: 15px;
      background: #fff;

      width: 100%;
      max-width: 1000px;
      .title {
        background: #069534;
        width: 100%;
        max-width: 1000px;
        h1 {
          font-size: 20px;
          padding: 8px 0px 8px 29px;
          color: #fff;
        }
      }

      .order_products_container {
        margin-top: 20px;
        .ordered_products {
          .ordered_products_wrapper {
            .product_container {
              border-bottom: 3px solid #d9d9d9;
              margin-bottom: 20px;
              .product_wrapper {
                margin: 10px 10px 10px 0px;
                display: flex;
                font-size: 18px;
                .product_image_container {
                  img {
                    width: 110px;
                  }
                }

                .product_name_container {
                  margin-top: 10px;
                  margin-left: 10px;
                  h1 {
                    font-size: 22px;
                  }
                  width: 350px;
                }

                .product_price_container {
                  margin-top: 10px;
                  margin-left: 100px;
                  h2 {
                    font-size: 15px;

                    color: #989898;
                  }
                  p {
                    padding-left: 105px;
                    margin-top: 10px;
                  }
                }
                .product_quantity_container {
                  margin-top: 10px;
                  margin-left: 110px;

                  h2 {
                    font-size: 15px;
                    color: #989898;
                  }

                  p {
                    font-weight: bold;
                    font-size: 20px;
                    padding-left: 14px;
                    margin-top: 10px;
                  }
                }
              }
            }
          }
        }

        .final_const_container {
          font-size: 24px;
          margin-top: 50px;
          text-align: right;
          margin-right: 40px;
          h2 {
          }
          p {
            font-weight: bold;
            margin-top: 20px;
          }
        }

        .status_container {
          margin-top: 60px;
          margin-right: 40px;

          text-align: right;
          h2 {
            font-size: 24px;
          }
          select {
            margin-top: 20px;
            font-size: 19px;
            background: #ececec;
            border-radius: 5px;
            width: 200px;
            height: 35px;
            color: #414141;
            text-align: center;
            cursor: pointer;
          }
        }

        // .buttons_container {
        //   margin-top: 110px;
        //   text-align: right;
        //   //   margin-left: -60px;
        //   margin-right: 40px;
        //   button {
        //     margin-left: 30px;
        //     width: 200px;
        //     height: 55px;
        //     background: #ed8414;
        //     color: #fff;
        //     font-size: 22px;
        //     font-weight: bold;
        //     border-radius: 5px;
        //     transition: background 0.1s, border-color 0.1s, color 0.1s;
        //     &:hover {
        //       background: #c5630a;
        //     }
        //   }
        // }
      }
      .person_information_container {
        margin-top: 80px;

        .person_information_wrapper {
          font-size: 20px;
          .person_information_title {
            background: #069534;
            width: 100%;
            max-width: 1000px;
            text-align: center;
            height: 40px;
            color: #fff;
            h1 {
              padding-top: 5px;
              font-size: 26px;
            }
          }
          h2 {
            font-size: 22px;
            margin-top: 20px;
            margin-left: 30px;
          }
          p {
            color: #989898;
            font-size: 18px;
            margin-top: 10px;
            margin-left: 45px;
            margin-bottom: 5px;
            font-weight: bold;
          }

          div {
            border-bottom: 2px solid #d9d9d9;
          }
          .person_name {
            margin-top: 20px;
          }
          .person_phone_number {
          }
          .person_mail {
          }
          .person_message {
          }
          .person_address {
          }
        }
      }

      .buttons_container {
        margin-top: 110px;
        margin-bottom: 50px;
        text-align: center;
        //   margin-left: -60px;
        margin-right: 40px;
        button {
          margin-left: 50px;
          width: 200px;
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
</style>
