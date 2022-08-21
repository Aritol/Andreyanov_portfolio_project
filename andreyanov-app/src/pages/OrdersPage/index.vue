<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_conatiner">
          <side-menu />
        </div>
        <div class="main_container">
          <div class="title">
            <h1>Замовлення</h1>
          </div>
          <div class="orders_list_container">
            <order-item
              class="order_item"
              v-for="order in orderList"
              :key="order._id"
              :orderList="order"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from "@/pages/OrdersPage/OrderItem";
import SideMenu from "@/components/SideMenu";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrdersPage",

  components: {
    SideMenu,
    OrderItem,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters("orders", ["orders"]),

    orderList() {
      return this.orders;
    },
  },

  methods: {
    ...mapActions("orders", ["loadOrders"]),
  },

  async mounted() {
    await this.loadOrders();
    console.log(this.orders[0].status);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";
.container {
  font-size: 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  .main_wrapper {
    display: flex;
    margin-top: 15px;
    .side_menu_conatiner {
    }

    .main_container {
      margin-left: 15px;
      background: #fff;

      width: 100%;
      max-width: 1000px;
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

      .orders_list_container {
        margin: 20px 10px 30px 10px;
        .order_container {
          background-color: #f2f4f5;
          //   background-color: rgba(203, 209, 211, 0.527);

          border-radius: 10px;
          color: rgb(0, 47, 52);
          font-size: 19px;
          margin-top: 20px;
          //   display: flex;
          //   justify-content: space-between;

          .order_wrapper {
            display: flex;
            padding: 10px;
            .icon_container {
              img {
                width: 110px;
              }
            }
            .left_colum {
              margin-left: 35px;
              margin-top: 4px;
              h2 {
                font-weight: bold;
                font-size: 20px;
              }

              .status_container {
                margin-top: 30px;

                width: 150px;
                padding: 6px 8px;
                text-align: center;
                font-size: 16px;

                .status_processing_container {
                  background-color: rgb(255, 237, 178);
                  border-radius: 8px;
                }
                .status_arrived_container {
                  background-color: rgb(7, 103, 192);
                  border-radius: 8px;
                }
                .status_closed_container {
                  background-color: rgb(44, 228, 20);
                  border-radius: 8px;
                }
                .status_canceled_container {
                  background-color: rgb(233, 25, 25);
                  border-radius: 8px;
                }
              }
            }

            .right_colum {
              margin-left: 160px;
              // text-align: ;

              margin-top: 2px;
              width: 170px;
              text-align: right;
              .price_container {
                font-weight: bold;
                font-size: 18px;
              }

              .date_container {
                // display: flex;
                margin-top: 10px;
                font-size: 12px;
                font-weight: lighter;

                // div {
                //   display: block;
                // }
                // & p:last-child {
                //   // margin-left: 4px;
                // }

                .date_container_title {
                  // display: block;
                  // width: 60px;
                }

                .date_list {
                  display: flex;
                  margin-top: 2px;
                  margin-left: 100px;
                }
              }

              .button_container {
                margin-top: 10px;
                button {
                  font-size: 18px;
                  width: 155px;
                  height: 50px;

                  background-color: rgb(35, 229, 219);
                  border-radius: 6px;

                  &:hover {
                    background-color: rgb(35, 206, 197);
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
