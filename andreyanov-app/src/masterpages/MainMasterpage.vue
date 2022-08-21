s<template>
  <div>
    <authorization-header />
    <!-- <div class="loading_container" v-if="isLoading"><p>Завантаження...</p></div> -->

    <!-- <div class="loading_container" v-if="isLoading"> -->
    <div class="lds-ring" v-if="isLoading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div v-if="isError">Error!!!!</div>

    <div v-show="!isLoading && !isError">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <slot> </slot>
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AuthorizationHeader from "@/components/AuthorizationHeader";
export default {
  name: "MainMasterpage",

  components: {
    AuthorizationHeader,
  },

  data() {
    return {
      isAuthorizationPopupVisible: false,
    };
  },

  computed: {
    ...mapGetters("products", ["isLoading", "isError"]),
  },

  methods: {
    showAuthorizationPopup() {
      this.authorizationPopupShow = true;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.lds-ring {
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  // background-color: rgba(0, 0, 0, 0.363);
}
.lds-ring div {
  left: 850px;
  top: 380px;
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(226, 223, 6) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// .loading_container {
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 20;
//   background-color: rgba(0, 0, 0, 0.322);

//   p {
//     margin-top: 500px;
//     text-align: center;
//     color: #fff;
//     font-size: 40px;
//   }
// }
.header_autoriztion {
  width: 100%;
  height: 100%;
  max-height: 50px;
  background: black;

  .header_autoriztion_container {
    .buttons_container {
      margin: 5px 0px 10px 1445px;
      padding: 6px 0px 6px 0px;
      button {
        background: #a51b0b;
        color: antiquewhite;
        border-radius: 6px;
        height: 35px;
        width: 100px;
        cursor: pointer;
        font-weight: bold;
        // margin-left: 20px;

        &:nth-child(2) {
          margin-left: 20px;
        }

        &:hover {
          background: #ff0000;
        }
      }
    }
  }
}
</style>
