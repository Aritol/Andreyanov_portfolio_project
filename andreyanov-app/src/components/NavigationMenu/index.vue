<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="header_container">
          <div class="logo_container">
            <router-link to="/"
              ><img
                src="https://images.prom.ua/2858892249_w200_h100_molmarket.jpg"
                alt=""
              />
            </router-link>
            <h2>Molmarket</h2>
          </div>
          <div class="phone_number_container">
            <div class="phone_number_container_img_wrapper">
              <img src="@/assets/icons/call_icon.png" alt="" />
            </div>
            <h2>+380 (99) 432-08-32</h2>
          </div>
          <!-- <div class="cart_container">
            <router-link to="/cart" class="cart_container_link">
              <img src="@/assets/icons/cart_icon.png" alt="" />
            </router-link>
          </div> -->
        </div>

        <div class="main_container">
          <!-- <navigation-menu /> -->
          <div class="container">
            <div class="nav_menu_wrapper">
              <div class="nav_menu">
                <ul>
                  <router-link to="/"><li>Головна</li></router-link>
                  <router-link to="/products"
                    ><li class="menu_item_for_dropdown">
                      Продукти
                      <ul class="nav_sub_menu">
                        <router-link to="/category/legkovi"
                          ><li>
                            Моторні масла для легкових автомобілів
                          </li></router-link
                        >
                        <router-link to=""
                          ><li>
                            Моторні масла для коммерційних автомобілів
                          </li></router-link
                        >
                        <router-link to=""
                          ><li>Гідравлічне масло</li></router-link
                        >
                        <router-link to=""
                          ><li>Трансмісійне масло</li></router-link
                        >
                        <router-link to=""
                          ><li>Охолоджуючі рідини</li></router-link
                        >
                        <router-link to=""
                          ><li>Масло для мото групи</li></router-link
                        >
                        <router-link to=""
                          ><li>Масло для садового обладнання</li></router-link
                        >
                        <router-link to=""
                          ><li>Змажчувальні матеріали</li></router-link
                        >
                        <router-link to=""><li>Автохімія</li></router-link>
                      </ul>
                    </li></router-link
                  >
                  <router-link to="/review"
                    ><li>Доставка та оплата</li></router-link
                  >

                  <a
                    href="https://mol-ukraine.com.ua/ua/mastyl-ni-materialy-ta-avtoximiya/poradnik-z-viboru-motornih-masel-ta-mastil-nih-materialiv/"
                    target="blank"
                  >
                    <li>Програма підбору масел</li></a
                  >

                  <router-link to="/about"><li>Про нас</li></router-link>
                  <router-link to="/contact"><li>Контакти</li></router-link>
                  <router-link to="/cart"><li>Корзина</li></router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  background-color: #fff0e5;

  .main_wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .header_container {
      display: flex;
      justify-content: space-between;
      .logo_container {
        display: flex;
        img {
          padding: 10px 5px 10px 0px;
          width: 160px;
        }
        h2 {
          padding-top: 40px;
          font-size: 26px;
          font-weight: 500;
        }
      }
      .phone_number_container {
        display: flex;
        .phone_number_container_img_wrapper {
          height: 100%;
          width: 100%;
          max-height: 50px;
          max-width: 50px;
        }
        img {
          margin-top: 26px;
          height: 50px;
        }
        h2 {
          padding-top: 40px;
          padding-left: 6px;
          font-size: 20px;
        }
      }
      .cart_container {
        padding-top: 20px;
      }
    }
  }
}

.container {
  .nav_menu_wrapper {
    background-color: #046423;
    .nav_menu {
      ul {
        display: flex;
        padding-left: -20px;
        & li {
          padding: 20px 20px 20px 20px;
          font-size: 18px;
          color: white;
          // font-family: ;

          &:hover {
            background-color: #069534;
            cursor: pointer;
          }

          .nav_sub_menu {
            position: absolute;
            margin: 20.2px 0 0 -20.5px;
            // display: block;
            display: none;
            background-color: #046423;
            transition-duration: 500ms;
            & li {
              font-size: 16px;
            }
          }
        }
      }
      .menu_item_for_dropdown:hover .nav_sub_menu {
        display: block;

        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
