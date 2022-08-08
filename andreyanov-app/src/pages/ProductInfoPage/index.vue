<template>
  <div>
    <div
      class="popups_container"
      v-if="
        conditionPopupVisible ||
        contactPopupVisible ||
        schedulePopupVisible ||
        returnPopupVisible
      "
    >
      <div class="condition_popup">
        <conditions-popup
          @onClosePopup="onClosePopup"
          v-if="conditionPopupVisible"
        />
      </div>
      <div class="contact_popup">
        <contact-popup
          v-if="contactPopupVisible"
          @onContactPopupClose="onContactPopupClose"
        />
      </div>
      <div class="schedule_popup">
        <schedule-popup
          v-if="schedulePopupVisible"
          @onSchedulePopupClose="onSchedulePopupClose"
        />
      </div>
      <div class="return_popup">
        <return-detail-popup
          v-if="returnPopupVisible"
          @onReturnDetailPopupClose="onReturnDetailPopupClose"
        />
      </div>
    </div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="product_information_container">
          <div class="product_information_container_wrapper">
            <div class="title">
              <h1>Огляд продукту</h1>
            </div>
            <div class="product_informarion">
              <div class="product_title">
                <h2>{{ productData.name }}</h2>
              </div>
              <div class="wrapper">
                <div class="img_container">
                  <img :src="photoSrc" alt="" />
                </div>
                <div class="info_container">
                  <div class="availability_container">
                    <!-- <div class="available" v-if="isAvailable"> -->
                    <div class="available" v-if="available">
                      <p>В наявності</p>
                    </div>
                    <div class="waiting" v-if="waiting">
                      <p>Очікується</p>
                    </div>
                    <div class="out_of_stock" v-if="OutOfStock">
                      <p>Немає в наявності</p>
                    </div>
                  </div>
                  <div class="price_container">
                    <!-- <p>155 грн</p> -->
                    <p>{{ productData.price }} грн</p>
                  </div>
                  <div class="button_buy_container">
                    <button @click="log">
                      <img src="@/assets/icons/cart_icon-white.png" alt="" />
                      <p>Купити</p>
                    </button>
                  </div>
                  <div class="call_back_container">
                    <h2>Виникли питання?</h2>
                    <h2>Телефонуй менеджеру</h2>
                    <p>+380 (99) 432-08-32</p>
                  </div>
                  <div class="buttons_popups_container">
                    <div class="delivery_popup_container">
                      <img src="@/assets/icons/icon_info.png" alt="" />
                      <p @click="showConditionPopup">
                        Умови оплати та доставки
                      </p>
                    </div>
                    <div class="work_hours_popup_container">
                      <img src="@/assets/icons/clock_icon_white.png" alt="" />
                      <p @click="showSchedulePopup">Графік роботи</p>
                    </div>
                    <div class="adress_contact_popup_container">
                      <img src="@/assets/icons/icon_placeholder.png" alt="" />
                      <p @click="ShowContactPopup">Адреса та контакти</p>
                    </div>
                  </div>
                  <div class="return_rules_container">
                    <p>Умови повернення:</p>
                    <p>Повернення товару протягом 14 днів за домовленістю</p>
                    <p @click="showReturnDetailPopup">Детальніше</p>
                  </div>
                </div>
              </div>
              <div class="description_container">
                <div class="title">
                  <h1>Опис</h1>
                </div>
                <div class="description">
                  <p>
                    {{ productData.descriptionFirstParagraph }}
                  </p>
                  <p>
                    {{ productData.descriptionSecondParagraph }}
                  </p>
                </div>
                <div class="characteristics_container">
                  <h2>Характеристики:</h2>
                  <ul class="characteristics_list">
                    <li>{{ productData.characteristics }}</li>
                  </ul>
                </div>
                <div class="license_container">
                  <h2>Допуски:</h2>
                  <ul
                    class="license_list"
                    v-for="item in productData.license"
                    :key="item"
                  >
                    <li>{{ item }}</li>
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
import { Buffer } from "buffer";
import SideMenu from "@/components/SideMenu";
import conditionsPopup from "@/components/popups/conditionsPopup.vue";
import contactPopup from "@/components/popups/contactPopup.vue";
import schedulePopup from "@/components/popups/schedulePopup.vue";
import returnDetailPopup from "@/components/popups/returnDetailPopup.vue";

import { mapActions } from "vuex";
export default {
  name: "ProductInfoPage",

  components: {
    SideMenu,
    conditionsPopup,
    contactPopup,
    schedulePopup,
    returnDetailPopup,
  },

  data() {
    return {
      productData: {},
      rawPhotoData: null,

      conditionPopupVisible: false,
      contactPopupVisible: false,
      schedulePopupVisible: false,
      returnPopupVisible: false,

      available: false,
      waiting: false,
      outOfStock: false,
    };
  },

  computed: {
    photoSrc() {
      return (
        this.rawPhotoData ||
        (this.productData.photo && this.getImgSrc(this.productData.photo))
      );
    },
  },

  methods: {
    ...mapActions("products", ["getProductById"]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    showConditionPopup() {
      this.conditionPopupVisible = true;
    },

    showReturnDetailPopup() {
      this.returnPopupVisible = true;
    },
    onClosePopup() {
      this.conditionPopupVisible = false;
    },

    ShowContactPopup() {
      this.contactPopupVisible = true;
    },

    showSchedulePopup() {
      this.schedulePopupVisible = true;
    },

    onContactPopupClose() {
      this.contactPopupVisible = false;
    },

    onReturnDetailPopupClose() {
      this.returnPopupVisible = false;
    },

    onSchedulePopupClose() {
      this.schedulePopupVisible = false;
    },
  },

  async mounted() {
    let searchData = {
      category: this.$route.params.category,
      id: this.$route.params.id,
    };
    try {
      this.productData = await this.getProductById(searchData);
    } catch (err) {
      console.log(err);
    }

    if (this.productData.availability === "В наявності") {
      this.available = true;
    }
    if (this.productData.availability === "Очікується") {
      this.waiting = true;
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

.popups_container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  .condition_popup {
  }
}
.container {
  font-size: 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  .main_wrapper {
    display: flex;
    margin-top: 15px;

    .product_information_container {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
      margin-left: 15px;
      padding-bottom: 30px;
      background: #fff;

      width: 100%;
      max-width: 1000px;
      .product_information_container_wrapper {
        .title {
          background: #069534;
          width: 100%;
          max-width: 1000px;
          h1 {
            font-size: 20px;
            padding: 8px 0px 8px 29px;
            color: #fff;
          }
        }

        .product_informarion {
          position: relative;
          margin: 20px 20px 10px 30px;

          .product_title {
            h2 {
              font-size: 22px;
              font-weight: bold;
            }
          }

          .wrapper {
            margin-top: 25px;
            margin-bottom: 25px;
            display: flex;
            .img_container {
              border: 1px solid #d9d9d9;
              height: 100%;
              max-height: 302px;
              img {
                width: 300px;
              }
            }
            .info_container {
              margin-left: 20px;
              .availability_container {
                margin-top: 2px;

                p {
                  font-size: 17px;
                  color: #42a852;
                }
                .available {
                  p {
                    color: #42a852;
                  }
                }
                .waiting {
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
                margin-top: 25px;
                p {
                  font-size: 35px;
                }
              }
              .button_buy_container {
                button {
                  background-color: #046423;
                  display: flex;
                  justify-content: center;
                  border-radius: 4px;
                  transition: all 225ms ease-in-out;
                  width: 100%;
                  max-width: 230px;
                  margin-top: 40px;
                  &:hover {
                    cursor: pointer;
                    background: #023312;
                  }

                  img {
                    margin: 5px 10px;
                    width: 30px;
                  }
                  p {
                    margin-top: 10px;
                    margin-right: 21px;
                    color: #fff;
                    font-size: 18px;
                    font-weight: bold;
                  }
                }
              }
              .call_back_container {
                margin-top: 25px;
                h2 {
                  font-weight: normal;
                  font-size: 18px;
                  margin-top: 10px;
                }
                p {
                  margin-top: 15px;
                }
              }
              .buttons_popups_container {
                margin-top: 30px;
                color: #046423;
                border-top: 1px solid #d9d9d9;

                min-width: 560px;
                p {
                  transition: all 230ms ease-in-out;
                  margin-top: 15px;
                  &:hover {
                    color: #069534;
                    cursor: pointer;
                  }
                }
                .delivery_popup_container {
                  display: flex;
                  img {
                    margin-top: 11px;
                    margin-right: 6px;
                    width: 22px;
                    height: 22px;
                  }
                }
                .work_hours_popup_container {
                  display: flex;
                  img {
                    margin-right: 6px;
                    margin-top: 11px;

                    width: 22px;
                    height: 22px;
                  }
                }
                .adress_contact_popup_container {
                  display: flex;
                  img {
                    margin-right: 6px;
                    margin-top: 11px;

                    width: 22px;
                    height: 22px;
                  }
                }
              }
              .return_rules_container {
                margin-top: 20px;
                p {
                  margin-top: 8px;
                  font-size: 14px;
                  &:last-child {
                    font-size: 16px;
                    text-decoration: underline;
                    color: #046423;
                    transition: all 225ms ease-in-out;

                    &:hover {
                      color: #069534;
                      cursor: pointer;
                    }
                  }
                }
              }
            }
          }
        }

        .description_container {
          .title {
            position: absolute;
            top: 570px;
            margin-left: -30px;
            width: 949px;
            h1 {
            }
          }
          .description {
            margin-top: 120px;
            p {
              font-size: 15px;
              //   line-height: 23px;
              line-height: 1.4em;
              margin: 15px 20px 0px 0px;
            }
          }
          .characteristics_container {
            margin-top: 20px;
            h2 {
              font-weight: bold;
            }

            .characteristics_list {
              margin: 12px 0px 0px 30px;
              li {
                list-style: inside;
              }
            }
          }
          .license_container {
            list-style: square outside;
            margin-top: 20px;

            h2 {
              font-weight: bold;
            }
            .license_list {
              margin: 12px 0px 0px 30px;
              li {
                list-style: inside;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
