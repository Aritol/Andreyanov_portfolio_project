<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu-for-contact-page />
        </div>
        <div class="contact_container">
          <div class="contact_title">
            <h1>Контакти</h1>
          </div>
          <div class="contact_information">
            <div class="contact_titles_container">
              <p>Назва:</p>
              <p>Контактна особа:</p>
              <p>Сайт компанії:</p>
              <p>Адреса:</p>
              <p>Телефон:</p>
              <p>Viber:</p>
              <p>WhatsApp:</p>
            </div>
            <div class="contact_description_container">
              <p>Molmarket</p>
              <p>Андреянов Максим</p>
              <p>molmarket1.com</p>
              <p>Ужгород, Україна</p>
              <p>+380 (99) 432-08-32</p>
              <p>+380994320832</p>
              <p>+380994320832</p>
            </div>
            <!-- <div class="contact_description">
            </div>
            <div class="contact">
            </div>
            <div class="contact_description">
            </div>
            <div class="contact">
            </div>
            <div class="contact_description">
            </div>
            <div class="contact">
            </div>
            <div class="contact_description">
            </div>
            <div class="contact">
            </div>
            <div class="contact_description">
            </div>
            <div class="contact">
            </div>
            <div class="contact_description">
            </div>
            <div class="contact">
            </div>
            <div class="contact_description"> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenuForContactPage from "@/components/SideMenuForContactPage";
export default {
  name: "ContactPage",
  components: {
    SideMenuForContactPage,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

// body {
//   margin: 0;
// }

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .main_wrapper {
    display: flex;

    margin-top: 15px;

    .contact_container {
      width: 100%;
      max-width: 1000px;
      background: #fff;
      margin: 0px 0px 250px 15px;
      .contact_title {
        background: #069534;
        width: 100%;
        max-width: 1000px;

        h1 {
          font-size: 20px;
          padding: 8px 0px 8px 29px;
          color: #fff;
        }
      }

      .contact_information {
        margin: 0px 29px 20px 29px;
        display: flex;

        .contact_titles_container {
          margin-top: 15px;
          p {
            padding-bottom: 8px;
            padding-top: 8px;
            border-bottom: 2px solid #d9d9d9;

            width: 300px;
          }
        }

        .contact_description_container {
          margin-top: 15px;
          width: 100%;
          max-width: 600px;
          p {
            padding-bottom: 8px;
            padding-top: 8px;
            border-bottom: 2px solid #d9d9d9;
          }
        }
      }
    }
  }
}
</style>
