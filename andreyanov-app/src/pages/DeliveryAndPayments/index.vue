<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_container">
          <side-menu />
        </div>
        <div class="main_container">
          <div class="main_container_wrapper">
            <div class="title">
              <h2>Умови доставки та оплати</h2>
            </div>
            <div class="content_container">
              <div class="delivery_container">
                <div class="delivery_info">
                  <h1>Доставка:</h1>
                  <div class="delivery_info_paragraphs">
                    <p>
                      Ми доставимо товар до вас любим зручним для вас способом
                    </p>
                    <p>
                      Доставка по <strong>Ужгороду </strong> та по всій
                      <strong>Закарпатській області </strong> безкоштовно
                      (терміни узгоджувються з менеджером)
                    </p>
                    <p>
                      Також можлива доставка в інші області України поштовими
                      компаніями.
                    </p>
                  </div>
                </div>
                <div class="delivery_container_list">
                  <h2>Способи доставки:</h2>
                  <ul class="delivery_list">
                    <li>
                      <img
                        src="@/assets/icons/circle_icon.png"
                        alt=""
                      />Самовивіз
                    </li>
                    <li>
                      <img src="@/assets/icons/circle_icon.png" alt="" />Нова
                      Пошта
                    </li>
                    <li>
                      <img
                        src="@/assets/icons/circle_icon.png"
                        alt=""
                      />Delivery
                    </li>
                    <li>
                      <img src="@/assets/icons/circle_icon.png" alt="" />Justin
                    </li>
                    <li>
                      <img
                        src="@/assets/icons/circle_icon.png"
                        alt=""
                      />Укрпошта
                    </li>
                  </ul>
                </div>
                <div class="delivery_list_images_container">
                  <div class="delivery_list_image_np">
                    <img src="@/assets/images/nova_poshta_logo.jpg" alt="" />
                  </div>
                  <div class="delivery_list_image_delivery">
                    <img src="@/assets/images/delivery_logo_4.jpg" alt="" />
                  </div>
                  <div class="delivery_list_image_justin">
                    <img src="@/assets/images/justin_logo_2.png" alt="" />
                  </div>
                  <div class="delivery_list_image_ukrposhta">
                    <img src="@/assets/images/ukrposhta_logo.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="payment_container">
                <div class="payment_info">
                  <h1>Оплата</h1>
                </div>
                <div class="payment_paragraphs">
                  <p>
                    Співпрацюючи з нами ви можете оплатити товар любим зручним
                    ля вас способом. Ми віправляємо без обовя'язкової
                    передоплати, але при потребі є можливість сплатити продукцію
                    в повному обсязі до відправки (економія 2% при користуванні
                    послугами Нової Пошти). Також ми відкриті для співпраці
                    системобю "Дропшиппінг".
                  </p>
                </div>
                <div class="payment_container_list">
                  <h2>Способи доставки:</h2>
                  <ul class="payment_list">
                    <li>
                      <img src="@/assets/icons/circle_icon.png" alt="" />Готівка
                    </li>
                    <li>
                      <img
                        src="@/assets/icons/circle_icon.png"
                        alt=""
                      />Безготівковий розрахунок
                    </li>
                    <li>
                      <img
                        src="@/assets/icons/circle_icon.png"
                        alt=""
                      />Передоплата на крату
                    </li>
                    <li>
                      <img
                        src="@/assets/icons/circle_icon.png"
                        alt=""
                      />Післяплата "Наложений платіж" (Нова Пошта)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "DeliveryAndPayment",

  components: {
    SideMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  background: #fff0e5;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .main_wrapper {
    margin-top: 15px;
    display: flex;

    .main_container {
      background: #fff;
      margin-left: 20px;
      .main_container_wrapper {
        .title {
          background: #069534;
          width: 100%;
          max-width: 1000px;
          h2 {
            font-size: 20px;
            padding: 8px 0px 8px 29px;
            color: #fff;
          }
        }

        .content_container {
          margin: 15px 25px 0px 29px;

          .delivery_container {
            .delivery_info {
              h1 {
                font-size: 18px;
              }

              .delivery_info_paragraphs {
                margin-top: 6px;
                p {
                  padding-bottom: 3px;
                }
              }
            }

            .delivery_container_list {
              padding-top: 8px;
              h2 {
                font-size: 18px;
                padding-bottom: 6px;
              }
              .delivery_list {
                li {
                  padding-bottom: 4px;
                }

                li img {
                  width: 8px;
                  padding-top: 4px;
                  margin-right: 4px;
                }
              }
            }

            .delivery_list_images_container {
              display: flex;
              justify-content: space-between;

              margin: 25px 25px 0px 0px;
              .delivery_list_image_np img {
                width: 150px;
              }
              .delivery_list_image_delivery img {
                // width: 242px;
                height: 150px;
                width: 155px;
              }
              .delivery_list_image_justin img {
                width: 150px;
              }

              .delivery_list_image_ukrposhta img {
                width: 150px;
              }
            }
          }

          .payment_container {
            margin: 25px 25px 0px 0px;

            .payment_info {
              h1 {
                font-size: 18px;
              }
            }

            .payment_paragraphs {
              margin-top: 10px;
              p {
              }
            }

            .payment_container_list {
              margin-top: 10px;

              h2 {
                font-size: 18px;
              }
              .payment_list {
                margin-top: 8px;

                li {
                  padding-bottom: 4px;
                  img {
                    width: 8px;
                    padding-top: 4px;
                    margin-right: 4px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
