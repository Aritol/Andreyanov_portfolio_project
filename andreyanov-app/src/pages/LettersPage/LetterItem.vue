<template>
  <div>
    <div
      class="popups_container"
      v-if="confirmDeletePopupVisible || deletePopupStatusVisible"
    >
      <div class="delete_popup_container">
        <div class="confirm_delete_popup" v-if="confirmDeletePopupVisible">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onConfirmDeleteClose"
            />
          </div>
          <h2>Ви впевнені що хочете видалити цей лист</h2>
          <p>(цю дію неможливо відмінити)</p>
          <button @click="onDeleteYes">Видалити</button>
          <button class="cancel_button" @click="onConfirmDeleteClose">
            Відміна
          </button>
        </div>
        <div class="delete_popup_status" v-if="deletePopupStatusVisible">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onDeleteStatusPopupClose"
            />
          </div>
          <h2>Лист успішно видалений</h2>
          <button @click="onDeleteStatusPopupClose">Ок</button>
        </div>
      </div>
    </div>
    <div class="container" @click="onLetterClick">
      <div class="main_wrapper">
        <div class="letter_container">
          <div class="letter_wrapper">
            <div class="header_row">
              <div class="img_container">
                <img src="@/assets/icons/letter_icon.png" alt="" />
              </div>
              <div class="letter_information">
                <h2>{{ userData.userName }}</h2>
                <p>{{ userData.day }} {{ stringMonth }} {{ userData.year }}</p>
              </div>
              <!-- <div class="delete_button_container">
                <button @click="onDelete">
                  <p>Видалити</p>
                  <span></span>
                  <img src="@/assets/icons/remove_letter_icon.png" alt="" />
                </button>
              </div> -->
            </div>
            <div class="text_container">
              <p>{{ userData.message }}</p>
            </div>
            <div class="button_open_container">
              <button>Читати весь лист</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="delete_button_container">
      <button @click="onDelete">
        <p>Видалити</p>
        <span></span>
        <img src="@/assets/icons/remove_letter_icon.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LetterItem",

  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      stringMonth: "",
      confirmDeletePopupVisible: false,
      deletePopupStatusVisible: null,
    };
  },

  methods: {
    ...mapActions("message", ["deleteMessage"]),

    onDelete() {
      this.confirmDeletePopupVisible = true;
    },

    onConfirmDeleteClose() {
      this.confirmDeletePopupVisible = false;
    },

    async onDeleteYes() {
      await this.deleteMessage(this.userData._id);
      this.confirmDeletePopupVisible = false;
      this.deletePopupStatusVisible = true;
    },

    onDeleteStatusPopupClose() {
      this.deletePopupStatusVisible = false;
    },

    onLetterClick() {
      this.$emit("onLetterClick", this.userData._id);
      this.$router.push({
        name: "letterInfoPage",
        params: { id: this.userData._id },
      });
    },
  },

  mounted() {
    switch (this.userData.month) {
      case "1":
        this.stringMonth = "Січеня";
        break;
      case "2":
        this.stringMonth = "Лютого";
        break;
      case "3":
        this.stringMonth = "Березня";
        break;
      case "4":
        this.stringMonth = "Квітня";
        break;
      case "5":
        this.stringMonth = "Травня";
        break;
      case "6":
        this.stringMonth = "Червня";
        break;
      case "7":
        this.stringMonth = "Липня";
        break;
      case "8":
        this.stringMonth = "Серпня";
        break;
      case "9":
        this.stringMonth = "Вересня";
        break;
      case "10":
        this.stringMonth = "Жовтня";
        break;
      case "11":
        this.stringMonth = "Листопада";
        break;
      case "12":
        this.stringMonth = "Грудня";
        break;
      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
.popups_container {
  color: #333;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.85);
  .delete_popup_container {
    .confirm_delete_popup {
      margin: 0 auto;
      background: #fff;
      box-shadow: #fff 0 0 0;
      width: 100%;
      max-width: 650px;
      height: 400px;
      margin-top: 280px;
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

      h2 {
        padding: 15px;
        font-size: 30px;
        font-weight: bold;
      }
      p {
        font-size: 18px;
      }

      button {
        margin-top: 170px;
        width: 150px;
        height: 50px;
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
      .cancel_button {
        margin-left: 25px;
        background: rgb(202, 3, 3);
        transition: background 0.1s, border-color 0.1s, color 0.1s;

        &:hover {
          background: rgb(172, 27, 27);
        }
      }
    }

    .delete_popup_status {
      margin: 0 auto;
      background: #fff;
      box-shadow: #fff 0 0 0;
      width: 100%;
      max-width: 450px;
      height: 300px;
      margin-top: 280px;
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

      h2 {
        padding: 15px;
        font-size: 30px;
        font-weight: bold;
      }
      button {
        margin-top: 100px;
        width: 150px;
        height: 50px;
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
  margin: 20px;
  border: 3px solid #7ebaaf;
  border-radius: 8px;
  font-size: 20px;
  color: #333;

  &:hover {
    border: 3px solid #4dd8be;
  }
  .main_wrapper {
    margin: 20px;
    .letter_container {
      .letter_wrapper {
        .header_row {
          display: flex;

          .img_container {
            img {
              width: 70px;
            }
          }
          .letter_information {
            font-size: 25px;
            margin-left: 20px;
            h2 {
            }
            p {
              margin-top: 10px;
              font-size: 16px;
              color: #939296;
              width: 300px;
            }
          }
          // .delete_button_container {
          //   margin-left: 355px;
          //   button {
          //     display: flex;
          //     width: 115px;
          //     height: 40px;
          //     background-color: #c0392b;
          //     color: #fff;
          //     border-radius: 5px;
          //     font-size: 16px;
          //     p {
          //       font-size: 14px;
          //       margin-left: 12px;
          //       margin-top: 12px;
          //       height: 20px;
          //     }
          //     span {
          //       margin-top: 5px;
          //       border-right: 2px solid #a53125;
          //       height: 30px;
          //       margin-left: 4px;
          //     }
          //     img {
          //       margin-top: 7px;
          //       margin-left: 2px;
          //       width: 25px;
          //     }
          //     &:hover {
          //       background-color: #912f24;
          //     }
          //   }
          // }
        }

        .text_container {
          margin-top: 10px;
        }
        .button_open_container {
          text-align: right;
          button {
            width: 170px;
            height: 45px;
            border-radius: 6px;
            font-size: 16px;
            background-color: #23e5db;
            color: #333;

            &:hover {
              background-color: rgb(35, 206, 197);
            }
          }
        }
      }
    }
  }
}

.delete_button_container {
  position: relative;
  top: -190px;
  left: 83%;
  // margin-left: 355px;
  button {
    display: flex;
    width: 115px;
    height: 40px;
    background-color: #c0392b;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    p {
      font-size: 14px;
      margin-left: 12px;
      margin-top: 12px;
      height: 20px;
    }
    span {
      margin-top: 5px;
      border-right: 2px solid #a53125;
      height: 30px;
      margin-left: 4px;
    }
    img {
      margin-top: 7px;
      margin-left: 2px;
      width: 25px;
    }
    &:hover {
      background-color: #912f24;
    }
  }
}
</style>
