<template>
  <div>
    <div
      class="popup_container"
      v-if="deletePopupVisible || successDeletePopupVisible"
    >
      <div class="delete_popup_container" v-if="deletePopupVisible">
        <div class="delete_popup_wrapper">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onCancelClick"
            />
          </div>
          <div class="delete_popup_content">
            <h1>Ви впевнені що хочете видалити товар?</h1>
            <div class="button_container">
              <button @click="onConfirmDeleteClick">Видалити</button>
              <button @click="onCancelClick">Назад</button>
            </div>
          </div>
        </div>
      </div>

      <div class="success_delete_popup" v-if="successDeletePopupVisible">
        <div class="success_delete_popup_container">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onHideSuccessPopup"
            />
          </div>
          <div class="success_delete_popup_content">
            <h1>Товар видалено успішно</h1>
            <button @click="onHideSuccessPopup">Ок</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="main_wrapper">
        <div class="product_container">
          <div
            class="hover_container"
            @click="onProductClick(productData.category, productData._id)"
          >
            <div class="product_img_container">
              <img :src="getImgSrc(productData.photo)" alt="" />
            </div>
            <div class="product_title">
              <h2>{{ productData.name }}</h2>
            </div>
            <div class="availability_container">
              <div class="availabile" v-if="available">
                <p>В наявності</p>
              </div>
              <div class="whaiting" v-if="whaiting">
                <p>Очікується</p>
              </div>
              <div class="out_of_stock" v-if="outOfStock">
                <p>Немає на складі</p>
              </div>
            </div>
            <div class="price_container">
              <p>{{ productData.price }}</p>
              <p>грн</p>
            </div>
          </div>
          <div class="button_container">
            <button v-if="!authorized" @click="onBuyClick">
              <img src="@/assets/icons/cart_icon-white.png" alt="" />
              <p>Купити</p>
            </button>
            <button class="btn_edit" @click="OnEditClick" v-if="authorized">
              <img src="@/assets/icons/icon_edit.png" alt="" />Редагувати
            </button>
            <button
              class="btn_delete"
              @click="OnDeleteClick(productData._id)"
              v-if="authorized"
            >
              <img src="@/assets/icons/icon_delete.png" alt="" />Видалити
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Buffer } from "buffer";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductItem",

  props: {
    productData: {
      type: Object,
      // default() {
      //   return;
      // },
      default: () => {},
    },
  },

  data() {
    return {
      // productDataToLocalStorage: {
      //   id: this.productData._id,
      //   name: this.productData.name,
      //   availability: this.productData.availability,
      //   price: this.productData.price,
      //   quantity: 1,
      // },
      available: false,
      whaiting: false,
      outOfStock: false,

      productDataToLocalStorage: {
        quantity: 1,
        ...this.productData,
      },

      deletePopupVisible: false,

      productIdToDelete: null,
      successDeletePopupVisible: false,
    };
  },

  computed: {
    ...mapGetters("auth", ["authorized"]),
  },

  methods: {
    ...mapActions("products", ["deleteProduct"]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    onProductClick(category, productId) {
      this.$emit("onProductClick", category, productId);
      // console.log(productId);
    },
    //     AddToLocalStorage(){

    // localStorage.setItem(
    //         "product",
    //         JSON.stringify(this.productDataToLocalStorage)
    //       );
    //     },

    onBuyClick() {
      this.$emit("onBuyClick", this.productDataToLocalStorage);
    },

    OnEditClick() {
      this.$router.push({
        name: "editPage",
        params: { id: this.productData._id },
      });
    },

    OnDeleteClick(productId) {
      this.deletePopupVisible = true;
      this.productIdToDelete = productId;
    },

    onConfirmDeleteClick() {
      this.deletePopupVisible = false;
      this.successDeletePopupVisible = true;
    },

    onCancelClick() {
      this.deletePopupVisible = false;
      this.productIdToDelete = null;
    },

    onHideSuccessPopup() {
      this.deleteProduct(this.productIdToDelete);
      this.successDeletePopupVisible = false;
    },
  },

  mounted() {
    // this.loadFromLocalStorage();
    if (this.productData.availability === "В наявності") {
      this.available = true;
    }
    if (this.productData.availability === "Очікується") {
      this.whaiting = true;
    }
    if (this.productData.availability === "Немає на складі") {
      this.outOfStock = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.popup_container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 25;
  background-color: rgba(0, 0, 0, 0.85);
  // position: absolute;
  .delete_popup_container {
    margin: 0 auto;
    background: #fff;
    box-shadow: #fff 0 0 0;
    width: 100%;
    max-width: 600px;
    height: 250px;
    margin-top: 300px;
    border-radius: 2px;
    .delete_popup_wrapper {
      .close_img_container {
        text-align: right;

        img {
          width: 35px;
          cursor: pointer;
          margin: 4px;
        }
      }

      .delete_popup_content {
        text-align: center;
        margin-top: 20px;
        h1 {
          font-size: 24px;
          font-weight: bold;
        }

        .button_container {
          margin-left: -30px;

          button {
            margin-left: 30px;

            margin-top: 70px;
            height: 50px;
            border-radius: 5px;
            width: 180px;
            background: #ed8414;
            color: #fff;
            font-size: 20px;
            &:hover {
              background: #c5630a;
            }

            &:first-child {
              background: rgba(209, 38, 38, 0.863);

              &:hover {
                background: rgb(197, 6, 6);
              }
            }
          }
        }
      }
    }
  }

  .success_delete_popup {
    .success_delete_popup_container {
      margin: 0 auto;
      background: #fff;
      box-shadow: #fff 0 0 0;
      width: 100%;
      max-width: 600px;
      height: 250px;
      margin-top: 300px;
      border-radius: 2px;
      .close_img_container {
        text-align: right;

        img {
          width: 35px;
          cursor: pointer;
          margin: 4px;
        }
      }

      .success_delete_popup_content {
        text-align: center;
        margin-top: 40px;
        h1 {
          font-size: 24px;
          font-weight: bold;
        }

        button {
          margin-left: 30px;
          margin-top: 70px;
          height: 50px;
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
}

.container {
  width: 100%;
  max-width: 293px;
  // border: 1px solid black;
  font-size: 16px;
  // margin:
  .main_wrapper {
    .product_container {
      padding: 8px 8px 20px 8px;

      &:hover {
        background: #f2f2f2;
      }

      .hover_container {
        cursor: pointer;
      }
      .product_img_container {
        width: 277px;
        border: 1px solid #d9d9d9;
        img {
          width: 275px;
          height: 275px;
        }

        &:hover {
          cursor: pointer;
        }
      }
      .product_title {
        margin-top: 20px;
        height: 66px;
        // width: ;
        h2 {
          color: #046423;
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;

          &:hover {
            color: #069534;
            cursor: pointer;
          }
        }
        &:hover {
          cursor: pointer;
        }
      }
      .availability_container {
        margin-top: 10px;
        .availabile {
          p {
            color: #42a852;
          }
        }

        .whaiting {
          p {
            color: #efd848;
          }
        }
        .out_of_stock {
          p {
            color: #e85c41;
          }
        }
      }
      .price_container {
        margin-top: 19px;
        display: flex;

        p {
          font-weight: bold;
          font-size: 18px;

          &:last-child {
            margin-left: 5px;
          }
        }
      }
      .button_container {
        z-index: 100;
        text-align: center;
        button {
          border-radius: 3px;
          background: #046423;
          margin-top: 15px;
          width: 260px;
          height: 40px;
          color: #ffff;
          font-size: 16px;
          display: flex;
          padding-top: 10px;
          justify-content: center;
          p {
            margin-left: 12px;
            font-weight: bold;
          }
          img {
            width: 30px;
            margin: -6px 0px 0px -26px;
            // padding-top: -10px;
            // position: absolute;
          }
          transition: all 225ms ease-in-out;
          &:hover {
            cursor: pointer;
            background: #023312;
          }
        }

        .btn_edit {
          justify-content: center;

          img {
            margin: -4px 6px 0px -10px;

            height: 24px;
            width: 24px;
          }
        }

        .btn_delete {
          justify-content: center;
          img {
            margin: -4px 4px 0px -22px;

            height: 22px;
            width: 28px;
          }
        }
      }
    }
  }
}
</style>
