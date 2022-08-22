<template>
  <div>
    <div class="dialog_popup_container" v-if="dialogPopupVisible">
      <div class="dialog_popup_wrapper">
        <div class="dialog_popup_content">
          <img
            src="@/assets/icons/icon_close_grey.png"
            alt=""
            @click="onWriteUsPopupClose"
          />
          <h1>Ваш відгук надісланий успішно</h1>
          <button @click="onWriteUsPopupClose">Ок</button>
        </div>
      </div>
    </div>
    <div class="container" v-if="popupVisible">
      <div class="main_wrapper">
        <div class="popup_container">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onWriteUsPopupClose"
            />
          </div>
          <div class="popup_content_container">
            <div class="title">
              <h1>Напишіть нам</h1>
            </div>
            <form action="" class="write_us_form">
              <div class="name_input_container">
                <label for="">Ім'я*</label>
                <input
                  type="text"
                  placeholder="Ім'я"
                  required
                  v-model="userResponse.userName"
                />
              </div>
              <div class="mail_input_container">
                <label for="">E-Mail*</label>
                <input
                  type="text"
                  placeholder="E-Mail"
                  required
                  v-model="userResponse.mail"
                />
              </div>
              <div class="phone_input_container">
                <label for="">Телефон*</label>
                <input
                  type="text"
                  placeholder="Телефон"
                  required
                  v-model="userResponse.phoneNumber"
                />
              </div>
              <div class="message_input_container">
                <label for="">Повідомлення*</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Напищіть нам повідомлення, Ваше місто та іншу інформацію для продавця"
                  required
                  v-model="userResponse.message"
                ></textarea>
              </div>
              <div class="validation_container" v-if="validator">
                <p>Ви ввели не всі поля, будь ласка заповніть всі пусті поля</p>
              </div>
              <div class="buttons_container">
                <button @click="onSendBtnClick">Відправити</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "writeUsPopup",

  data() {
    return {
      userResponse: {},
      dialogPopupVisible: false,
      popupVisible: true,
      validator: false,
    };
  },

  methods: {
    ...mapActions("message", ["addMessage"]),
    onWriteUsPopupClose() {
      this.dialogPopupVisible = false;
      this.$emit("onWriteUsPopupClose");
    },

    onDialogPopupClose() {
      this.dialogPopupVisible = false;
    },

    async onSendBtnClick() {
      if (
        this.userResponse.userName &&
        this.userResponse.mail &&
        this.userResponse.phoneNumber &&
        this.userResponse.message
      ) {
        try {
          this.dialogPopupVisible = true;
          await this.addMessage(this.userResponse);
          this.popupVisible = false;
        } catch (err) {
          console.log(err);
        }
      } else {
        this.validator = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.dialog_popup_container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.85);

  .dialog_popup_wrapper {
    margin: 0 auto;
    background: #fff;
    box-shadow: #fff 0 0 0;
    width: 100%;
    max-width: 600px;
    height: 230px;
    margin-top: 350px;
    border-radius: 2px;

    .dialog_popup_content {
      text-align: center;

      img {
        float: right;
        width: 35px;
        cursor: pointer;
        margin: 4px;
      }
      h1 {
        padding-top: 55px;
        font-size: 24px;
        font-weight: bold;
      }
      button {
        margin-top: 70px;
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

.container {
  // position: fixed;
  // width: 100%;
  // height: 100%;
  max-width: 595;
  max-height: 745;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;

  display: flex;
  // align-items: center;
  .main_wrapper {
    margin-bottom: 50px;
    // top: 30%;

    margin: auto;
    width: 100%;
    max-width: 595px;
    max-height: 770px;
    overflow: auto;

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
        margin: 20px 10px 0px 0px;
        .title {
          font-size: 28px;
          text-align: center;
          margin-bottom: 30px;
          margin-left: 30px;
          h1 {
            font-weight: bold;
          }
        }
        .write_us_form {
          margin-left: 50px;
          font-size: 22px;

          div {
            margin-top: 30px;
          }

          input {
            width: 495px;
            height: 46px;
            border-radius: 3px;
            border: 1px solid #ddd;
            background-color: #fff;
            color: #333;
            padding: 8px 14px;
            font-size: 20px;
            &:focus {
              border: 1px solid rgba(221, 221, 221, 0.678);
            }
            & * {
              // padding: 8px 10px;
            }
          }
          label {
            font-size: 18px;
            color: #929292;
            display: block;
            margin-bottom: 10px;
          }
          input::placeholder {
            font-size: 22px;
            color: #929292;
            // padding-left: 10px;
          }
          .name_input_container {
          }

          .mail_input_container {
          }
          .phone_input_container {
          }
          .message_input_container {
            textarea {
              border: 2px solid #ddd;
              font-size: 20px;
              padding: 8px 14px;
              width: 495px;
              height: 170px;
              resize: none;
            }
          }

          .validation_container {
            margin-left: 8px;
            position: absolute;
            top: 692px;
            p {
              font-size: 18px;
              color: rgb(207, 24, 24);
            }
          }
          .buttons_container {
            margin-left: -40px;
            margin-top: 40px;
            margin-bottom: 25px;
            text-align: center;
            button {
              border-radius: 5px;
              font-size: 26px;
              // width: 100%;
              // height: 100%;
              width: 360px;
              height: 70px;
              background: #ed8414;
              color: #fff;
              transition: 0.15s ease-in-out;

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
</style>
