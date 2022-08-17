<template>
  <div>
    <div class="header_autoriztion">
      <div class="header_autoriztion_container">
        <div v-if="authorized" class="auth_user_container">
          <p>{{ authData.name }}</p>
        </div>
        <div class="buttons_container">
          <button
            class="btn_enter"
            v-if="!authorized"
            @click="showAuthorizationPopup()"
          >
            Увійти
          </button>
          <button v-if="authorized" @click="addProduct">Додати продукт</button>
          <button class="btn_signup" v-if="authorized" @click="signup">
            Додати адміністратора
          </button>
          <button class="btn_logout" v-if="authorized" @click="onLogout">
            Вийти
          </button>
        </div>
      </div>
    </div>
    <div class="autoriztion_popup_container" v-if="authorizationPopupVisible">
      <autorization-popup
        class="autorization-popup"
        @authorizationPopupClose="authorizationPopupClose"
      />
    </div>
  </div>
</template>

<script>
import AutorizationPopup from "@/components/AutorizationPopup";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AuthorizationHeader",

  components: {
    AutorizationPopup,
  },

  data() {
    return {
      authorizationPopupVisible: false,
    };
  },

  computed: {
    ...mapGetters("auth", ["authorized"]),
    ...mapGetters("auth", ["authData"]),
  },

  methods: {
    showAuthorizationPopup() {
      this.authorizationPopupVisible = true;
    },

    authorizationPopupClose() {
      this.authorizationPopupVisible = false;
    },
    ...mapActions("auth", ["logout", "resetError"]),
    onLogout() {
      this.resetError();
      this.logout();
      this.$router.push({ name: "home" });
    },

    signup() {
      this.$router.push({ name: "signup" });
    },

    addProduct() {
      this.$router.push({ name: "editPage" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.autoriztion_popup_container {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  // margin: 50px 0px 0px 640px;
  .autorization-popup {
    z-index: 10;
    // position: fixed;
  }
}

.header_autoriztion {
  width: 100%;
  height: 100%;
  max-height: 70px;
  background: black;

  .header_autoriztion_container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    // justify-content: right;
    text-align: right;
    .auth_user_container {
      display: inline-block;
      // margin-left: 1150px;
      // text-align: right;

      p {
        display: inline-block;
        color: #ffff;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .buttons_container {
      display: inline-block;

      // text-align: right;
      margin: 6px 0px 10px 0px;
      padding: 6px 0px 0px 0px;

      .btn_enter {
        // margin-left: 1454px;
      }

      button {
        background: #a51b0b;
        color: antiquewhite;
        border-radius: 6px;
        height: 35px;
        width: 110px;
        cursor: pointer;
        font-weight: bold;
        margin-left: 20px;

        &:nth-child(2) {
          margin-left: 20px;
          vertical-align: top;
        }

        &:hover {
          background: #ff0000;
        }
      }
    }
  }
}
</style>
