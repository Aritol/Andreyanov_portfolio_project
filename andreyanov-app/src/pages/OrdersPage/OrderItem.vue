<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="order_container">
          <div class="img_container">
            <img src="@/assets/icons/icon_order.png" alt="" />
          </div>
          <div class="left_colum">
            <h2>Замовлення №{{ orderList._id }}</h2>
            <div class="status_container">
              <div class="status_processing_container" v-if="statusProcessing">
                <p>В обробці</p>
              </div>
              <div class="status_arrived_container" v-if="statusArrived">
                <p>Відправлено</p>
              </div>
              <div class="status_closed_container" v-if="statusClosed">
                <p>Закрите</p>
              </div>
              <div class="status_canceled_container" v-if="statusCanceled">
                <p>Відмінений</p>
              </div>
            </div>
          </div>
          <div class="right_colum">
            <div class="price_container">
              <!-- <p>200 грн.</p> -->
              <p>{{ orderList.price }}</p>
            </div>
            <div class="date_container">
              <div class="date_container_title">
                <p>Дата замовлення:</p>
              </div>
              <!-- <p>13.05.2001</p> -->
              <div class="date_list">
                <p v-for="date of orderList.date[0]" :key="date.id">
                  {{ date }}.
                </p>
              </div>
            </div>
            <div class="button_container">
              <button @click="onShowOrder(orderList._id)">
                Відкрити замовлення
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItem",

  props: {
    orderList: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      statusArrived: false,
      statusProcessing: false,
      statusClosed: false,
      statusCanceled: false,
    };
  },

  methods: {
    onShowOrder(orderId) {
      console.log(orderId);
      this.$router.push({ name: "orderInfo", params: { id: orderId } });
    },
  },

  async mounted() {
    console.log(this.orderList.status);
    if (this.orderList.status === "В обробці") {
      this.statusProcessing = true;
    }
    if (this.orderList.status === "Відправлено") {
      this.statusArrived = true;
    }
    if (this.orderList.status === "Закритий") {
      this.statusClosed = true;
    }
    if (this.orderList.status === "Відмінений") {
      this.statusCanceled = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";
.container {
  margin: 20px 10px 30px 10px;

  .main_wrapper {
    background-color: #f2f4f5;

    border-radius: 10px;
    color: rgb(0, 47, 52);
    font-size: 19px;
    margin-top: 20px;

    .order_container {
      display: flex;
      padding: 10px;

      .img_container {
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
          margin-top: 40px;

          //   width: 150px;

          text-align: center;
          font-size: 16px;

          .status_processing_container {
            width: 150px;
            padding: 6px 8px;
            background-color: rgb(255, 237, 178);
            border-radius: 8px;
          }
          .status_arrived_container {
            width: 150px;
            padding: 6px 8px;
            background-color: rgb(7, 103, 192);
            border-radius: 8px;
            color: #fff;
          }
          .status_closed_container {
            color: #333;

            width: 150px;
            padding: 6px 8px;
            background-color: rgb(52, 197, 32);
            border-radius: 8px;
          }
          .status_canceled_container {
            width: 150px;
            padding: 6px 8px;
            background-color: rgb(233, 25, 25);
            border-radius: 8px;
            color: #fff;
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
          margin-top: 10px;
          margin-right: 4px;
          font-size: 12px;
          font-weight: lighter;

          .date_container_title {
            // display: block;
            // width: 60px;
          }

          .date_list {
            display: flex;
            margin-top: 2px;
            margin-left: 110px;
          }
        }

        .button_container {
          margin-top: 15px;
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
</style>
