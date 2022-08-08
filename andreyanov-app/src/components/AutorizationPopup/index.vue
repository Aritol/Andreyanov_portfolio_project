<template>
  <div>
    <div class="background" ref="background">
      <div class="container">
        <div class="close_btn_container">
          <img
            @click="authorizationPopupClose"
            src="@/assets/icons/close_icon.png"
            alt=""
          />
        </div>
        <div class="main_wrapper">
          <div class="login_container">
            <div class="title_container">
              <h1>Авторизація</h1>
            </div>
            <div class="login_form_container">
              <form @submit.prevent="submit">
                <div class="txt_field">
                  <input type="text" required v-model="email" />
                  <span></span>
                  <label for="">Логін</label>
                </div>
                <div class="txt_field">
                  <input type="password" required v-model="password" />
                  <span></span>
                  <label for="">Пароль</label>
                </div>
                <div class="message_container" v-if="getError">
                  <p>Неправильний логін або пароль</p>
                </div>
                <button>Уввійти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AutorizationPopup",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    ...mapGetters("auth", ["getError"]),
  },

  methods: {
    ...mapActions("auth", ["login", "setErrorFalse"]),

    authorizationPopupClose() {
      this.setErrorFalse();
      this.$emit("authorizationPopupClose");
    },

    async submit() {
      console.log("sub");
      try {
        const user = { email: this.email, password: this.password };
        const result = await this.login(user);

        if (result === true) {
          this.message = "";
          console.log("logged succes");
          this.$router.push({ path: "/" });
          this.authorizationPopupClose();
        } else {
          this.message = "Login error!";
        }
      } catch (err) {
        this.message = err.response.data.error;
      }
    },
  },

  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target == vm.$refs["background"]) {
        vm.authorizationPopupClose();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/null.scss";

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

// body {
//   font-family: "Montserrat", sans-serif;
// }

.background {
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  // right: 0;
  top: 0;
  bottom: 0;
  // left: 0;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    position: fixed;
    // margin: 0 auto;
    font-family: "Montserrat", sans-serif;

    background: linear-gradient(120deg, #2980b9, #8e44ad);
    // background: #3c9b37;
    width: 600px;
    height: 600px;
    border-radius: 10px;

    .close_btn_container {
      text-align: right;
      img {
        cursor: pointer;
      }
    }

    .main_wrapper {
      background: white;
      width: 400px;
      height: 400px;
      margin: 0 auto;
      margin-top: 70px;
      border-radius: 10px;

      .login_container {
        .title_container {
          h1 {
            text-align: center;
            padding: 14px 0px 20px 0px;
            font-size: 26px;
            font-weight: bold;
            border-bottom: 2px solid silver;
          }
        }
      }

      .login_form_container {
        form {
          padding: 0 40px;
          box-sizing: border-box;
          .txt_field {
            position: relative;
            border-bottom: 2px solid #adadad;
            margin: 30px 0;

            input {
              width: 100%;
              padding: 0 5px;
              height: 40px;
              font-size: 16px;
              border: none;
              background: none;
              outline: none;

              &:focus ~ label,
              &:valid ~ label {
                top: -5px;
                color: #2691d9;
              }

              &:focus ~ span::before,
              &:valid ~ span::before {
                width: 100%;
              }
            }

            label {
              position: absolute;
              top: 50%;
              left: 5px;
              transform: translateY(-50%);
              color: #adadad;
              font-size: 18px;
              transition: 0.3s;
              pointer-events: none;
            }

            span::before {
              content: "";
              position: absolute;
              top: 40px;
              left: 0;
              width: 0%;
              height: 2px;
              background-color: #2691d9;
              transition: 0.5s;
            }
          }

          button {
            margin-top: 20px;
            width: 100%;
            height: 50px;
            border: 1px solid;
            background: #2691d9;
            border-radius: 25px;
            font-size: 18px;
            color: #e9f5fb;
            font-weight: 700;
            cursor: pointer;
            outline: none;
            transition: all 250ms ease-in-out;
            &:hover {
              background: #1e5d86;
            }
          }

          .message_container {
            p {
              font-size: 22px;
              color: rgb(199, 39, 39);
            }
          }
        }
      }
    }
  }
}
</style>
