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
        <div class="contact_container">
          <div class="title_block">
            <h2>Контакти</h2>
          </div>
          <div class="info_block">
            <p><strong>Компанія: </strong>Molmarket</p>
            <div class="info_block_phone">
              <strong><p>Телефони:</p> </strong>
              <p>+380 (99) 432-08-32</p>
              <p>+380 (99) 432-08-32</p>
            </div>
            <p>
              <strong>Контактна особа: </strong>Андреянов Максим Олександрович
            </p>
            <p><strong>Адреса: </strong>Ужгород, Україна</p>
            <p><strong>Viber: </strong>+380994320832</p>
            <p><strong>WhatsApp: </strong>+380994320832</p>
          </div>
        </div>
        <div class="button_container">
          <button
            @mouseover="writeUsBtnHover = true"
            @mouseleave="writeUsBtnHover = false"
          >
            <img
              v-if="writeUsBtnHover"
              src="@/assets/icons/email_icon_green.png"
              alt=""
            />
            <img v-else src="@/assets/icons/email_icon_white.png" alt="" />
            <p>Написати нам</p>
          </button>
          <button
            @mouseover="cartBtnHover = true"
            @mouseleave="cartBtnHover = false"
          >
            <img
              v-if="cartBtnHover"
              src="@/assets/icons/cart_icon_green.png"
              alt=""
            /><img
              v-if="!cartBtnHover"
              src="@/assets/icons/cart_icon-white.png"
              alt=""
            />
            <p>Корзина</p>
          </button>
          <button
            @mouseover="clockBtnHover = true"
            @mouseleave="clockBtnHover = false"
          >
            <img
              v-if="clockBtnHover"
              src="@/assets/icons/clock_icon_white.png"
              alt=""
            />
            <img v-else src="@/assets/icons/clock_icon_green.png" alt="" />
            <p>Графік роботи</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
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
  width: 280px;
  min-width: 280px;

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

    .contact_container {
      margin-top: 25px;

      h2 {
        font-size: 22px;
        font-weight: bold;
      }

      .info_block {
        margin-top: 20px;

        p {
          font-size: 16px;
        }

        .info_block_phone {
          * {
            display: block;
          }
          &:first-child p {
            padding-top: 18px;
          }
        }
        p {
          padding-bottom: 18px;
        }
      }
    }

    .button_container {
      button {
        font-size: 16px;
        height: 40px;
        width: 200px;
        display: block;
        display: flex;

        margin-bottom: 18px;
        background: #046423;
        color: white;
        border: 1px solid #046423;
        border-radius: 3px;

        &:hover {
          color: #046423;
          background: #fff;
        }

        img {
          width: 28px;

          margin: 4px 0px 0px 6px;
        }

        p {
          margin: 0px 0px 0px 24px;
          padding-top: 9px;
        }

        // & * {
        //   display: inline-block;
        // }
      }
    }
  }
}
</style>
