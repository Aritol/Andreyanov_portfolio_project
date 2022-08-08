<template>
  <div>
    <div class="main_container">
      <div class="side_menu_container">
        <side-menu />
      </div>
      <div class="container">
        <div class="main_wrapper">
          <div class="title_container">
            <h1>Про нас</h1>
          </div>

          <div class="content_container">
            <div class="main_description_container">
              <p>
                Наша компанія пропонує тільки оригінальну продукцію високої
                якості європейського виробництва поставляється із заводу
                MOL-LUB, якому більше 110 років, за мінімальною ціною.
                Накопичений нами більш ніж 20 річний досвід роботи в підборі і
                реалізації мастильних матеріалів дає нам можливість підібрати
                оптимальний варіант для Вашої техніки. Ми проявляємо гнучкість і
                враховуємо всі побажання клієнтів різних категорій. Звертаючись
                до нас Ви отримаєте сервіс високого рівня. Гарантуємо швидку
                обробку, доставку і відсилання Ваших замовлень.
              </p>
            </div>

            <div class="schedule_container" id="schedule">
              <div class="schedule_wrapper">
                <div class="schedule_table_container">
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
            <div class="company_information_container">
              <h1><strong>Інформація про компанію</strong></h1>
              <div class="company_information">
                <div class="_titles">
                  <p>Назва:</p>
                  <p>Тип компанії:</p>
                  <p>Бренди:</p>
                </div>
                <div class="_compliance">
                  <p>Molmarket</p>
                  <p>Торгова компанія</p>
                  <p>MOL LUB</p>
                </div>
              </div>
            </div>
            <div class="organization_form_container">
              <h1><strong>Організаційно-правова форма та капітал</strong></h1>
              <div class="organization_form_information">
                <div class="title">
                  <p>Організаційно-правова форма:</p>
                </div>
                <div class="compliance">
                  <p>Суб'єкт підприємницької діяльності</p>
                </div>
              </div>
            </div>
            <div class="market_activity_container">
              <h1><strong>Ринкова діяльність</strong></h1>
              <div class="market_activity_information">
                <div class="title">
                  <p>Основні клієнти:</p>
                </div>
                <div class="compliance">
                  <p>
                    Кінцевий споживач, роздрібна торгівля, оптова торгівля,
                    логістичні компанії
                  </p>
                </div>
              </div>
            </div>
            <div class="production_information_container">
              <h1><strong>Інформація про виробництво</strong></h1>
              <div class="production_information">
                <div class="_titles">
                  <p>Місцезнаходження виробництва:</p>
                  <p>Контроль якості:</p>
                </div>
                <div class="_compliance">
                  <p>Венгрія</p>
                  <p>Зовнішній</p>
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
  name: "AboutPage",

  components: {
    SideMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

._titles {
  p {
    padding-bottom: 18px;
  }
}

._compliance {
  p {
    padding-bottom: 18px;
  }
}

.main_container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 15px;

  .container {
    background: #fff;
    margin-left: 20px;

    .main_wrapper {
      .title_container {
        background: #069534;
        width: 100%;
        max-width: 1000px;
        h1 {
          font-size: 20px;
          padding: 8px 0px 8px 29px;
          color: #fff;
        }
      }

      .content_container {
        margin: 20px 50px 0px 29px;
        .main_description_container {
          p {
          }
        }

        .schedule_container {
          // margin-top: 30px;
          margin: 30px 0px 0px 270px;

          .schedule_wrapper {
            .schedule_table_container {
              .scedule_table {
                border-collapse: collapse;
              }
              .schedule_header {
                padding: 5px 15px;
                background-color: #f2efe5;
                color: #000;
              }

              .schedule_cell {
                padding: 5px 15px;
                border: 1px solid #f2efe5;
                color: #757575;
              }
            }
          }
        }

        .company_information_container {
          margin-top: 30px;
          h1 {
            font-size: 22px;
          }
          .company_information {
            display: flex;
            justify-content: space-between;
            margin-top: 25px;

            margin-right: 400px;
            // ._titles {
            //   p {
            //     padding-bottom: 18px;
            //   }
            // }

            // ._compliance {
            //   p {
            //     padding-bottom: 18px;
            //   }
            // }
          }
        }

        .organization_form_container {
          margin-top: 30px;

          h1 {
            font-size: 22px;
          }

          .organization_form_information {
            margin: 25px 265px 0px 0px;
            display: flex;
            justify-content: space-between;
          }
        }

        .market_activity_container {
          margin-top: 30px;

          h1 {
            font-size: 22px;
          }

          .market_activity_information {
            display: flex;
            justify-content: space-between;
            margin: 25px 10px 0px 0px;

            .title {
              width: 100%;
              max-width: 134px;
            }

            .compliance {
              margin-left: 203px;
            }
          }
        }

        .production_information_container {
          margin-top: 30px;
          h1 {
            font-size: 22px;
          }

          .production_information {
            display: flex;
            justify-content: space-between;
            margin: 25px 453px 0px 0px;
          }
        }
      }
    }
  }
}
</style>
