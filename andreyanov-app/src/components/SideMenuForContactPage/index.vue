<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="menu_container">
          <h2>Меню</h2>
          <ul>
            <router-link to=""
              ><li>Моторні масла для легкових автомобілів</li></router-link
            >
            <router-link to=""
              ><li>Моторні масла для комерційних автомобілів</li></router-link
            >
            <router-link to=""><li>Масло гідравлічне</li></router-link>
            <router-link to=""><li>Трансмісійне масло</li></router-link>
            <router-link to=""><li>Охолоджуючі рідини</li></router-link>
            <router-link to=""><li>Масло для мото групи</li></router-link>
            <router-link to=""
              ><li>Масло для садового обладнання</li></router-link
            >
            <router-link to=""><li>Мастильні матеріали</li></router-link>
            <router-link to=""><li>Автохімія</li></router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenuForContactPage",
  data() {
    return {
      writeUsBtnHover: false,
      cartBtnHover: false,
      clockBtnHover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/null.scss";
@import "@/assets/styles/fonts.scss";

.container {
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 270px;

  min-width: 236px;

  .main_wrapper {
    padding: 15px 10px;
    .menu_container {
      h2 {
        font-size: 22px;
        font-weight: bold;
      }

      ul {
        margin-top: 20px;

        li {
          padding-bottom: 18px;
          color: rgb(51, 51, 51);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          &:hover {
            color: #069534;
          }
        }
      }
    }
  }
}
</style>
