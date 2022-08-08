<template>
  <div>
    <div class="container" ref="container">
      <div class="main_wrapper">
        <div class="popup_container">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onClosePopup"
            />
          </div>
          <div class="popup_content_container">
            <div class="table_container">
              <table class="scedule_table">
                <tbody>
                  <tr>
                    <th class="schedule_header">День</th>
                    <th class="schedule_header">
                      Години
                      <p>роботи</p>
                    </th>
                    <th class="schedule_header">Перерва</th>
                  </tr>
                  <tr>
                    <td class="schedule_cell">Понеділок</td>
                    <td class="schedule_cell">09:00 - 18:00</td>
                    <td class="schedule_cell"></td>
                  </tr>
                  <tr>
                    <td class="schedule_cell">Вівторок</td>
                    <td class="schedule_cell">09:00 - 18:00</td>
                    <td class="schedule_cell"></td>
                  </tr>
                  <tr>
                    <td class="schedule_cell">Середа</td>
                    <td class="schedule_cell">09:00 - 18:00</td>
                    <td class="schedule_cell"></td>
                  </tr>
                  <tr>
                    <td class="schedule_cell">Четверг</td>
                    <td class="schedule_cell">09:00 - 18:00</td>
                    <td class="schedule_cell"></td>
                  </tr>
                  <tr>
                    <td class="schedule_cell">П'ятниця</td>
                    <td class="schedule_cell">09:00 - 18:00</td>
                    <td class="schedule_cell"></td>
                  </tr>
                  <tr>
                    <td class="schedule_cell">Субота</td>
                    <td class="schedule_cell">10:00 - 17:00</td>
                    <td class="schedule_cell"></td>
                  </tr>
                  <tr>
                    <td class="schedule_cell">Неділя</td>
                    <td class="schedule_cell">Вихідний</td>
                    <td class="schedule_cell"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedulePopup",

  methods: {
    onClosePopup() {
      this.$emit("onSchedulePopupClose");
    },
  },

  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target == vm.$refs["container"]) {
        vm.onClosePopup();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;
  .main_wrapper {
    width: 100%;
    max-width: 470px;
    height: 420px;
    margin: 0 auto;
    margin-top: 300px;
    background: #fff;
    box-shadow: #fff 0 0 0;
    border-radius: 2px;
    .popup_container {
      .close_img_container {
        text-align: right;
        img {
          width: 35px;
          cursor: pointer;
          margin: 4px;
        }
      }

      .popup_content_container {
        margin: 20px 10px 0px 70px;
        // margin: 0 auto;

        .table_container {
          font-size: 16px;
          .scedule_table {
            border-collapse: collapse;
          }
          .schedule_header {
            padding: 5px 15px;
            background-color: #f2efe5;
            color: #000;
          }

          .schedule_cell {
            padding: 10px 15px;
            border: 1px solid #f2efe5;
            color: #757575;
          }
        }
      }
    }
  }
}
</style>
