<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="main_container">
          <div class="title_container">
            <h1>Детальніше про лист</h1>
          </div>
          <div class="content_container">
            <div class="header_row">
              <div class="img_container">
                <img src="@/assets/icons/person_icon.png" alt="" />
              </div>
              <div class="title_info_container">
                <h2>{{ letterData.userName }}</h2>
                <p>
                  {{ letterData.day }}.0{{ letterData.month }}.{{
                    letterData.year
                  }}
                </p>
              </div>
            </div>
            <div class="letter_body_row">
              <div class="letter_text_container">
                <p>
                  {{ letterData.message }}
                </p>
              </div>
            </div>
            <div class="buttons_container">
              <button @click="onDeleteClick">Видалити</button>
              <button @click="onBackClick">Назад</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { mapActions } from "vuex";
export default {
  name: "LetterInfoPage.vue",
  components: {
    SideMenu,
  },

  data() {
    return {
      letterData: {
        type: Number,
        default: () => {},
        required: true,
      },
    };
  },

  methods: {
    ...mapActions("message", ["getMessageById", "deleteMessage"]),
    onBackClick() {
      this.$router.push({ name: "lettersPage" });
    },

    onDeleteClick() {
      this.deleteMessage(this.$route.params.id);
    },
  },

  async mounted() {
    this.letterData = await this.getMessageById(this.$route.params.id);
    console.table(this.letterData);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .main_wrapper {
    display: flex;
    margin-top: 15px;
    .main_container {
      margin-left: 15px;
      background: #fff;

      width: 100%;
      max-width: 1000px;

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
        color: #333;
        margin: 15px 30px;
        .header_row {
          display: flex;
          .img_container {
            img {
            }
          }
          .title_info_container {
            margin-top: 20px;
            margin-left: 15px;
            h2 {
              font-size: 22px;
            }

            p {
              font-size: 12px;
              margin-top: 10px;
            }
          }
        }

        .letter_body_row {
          margin-top: 20px;
          font-size: 20px;

          line-height: 1.15em;
          .letter_text_container {
          }
        }

        .buttons_container {
          margin-top: 50px;
          text-align: center;
          margin-left: -40px;

          button {
            margin-left: 40px;
            font-size: 26px;
            font-weight: bold;
            border-radius: 3px;
            transition: 0.2s ease-in-out;
            color: #ffffff;
            width: 180px;
            border: 1px solid #f67c0d;
            height: 50px;
            background-color: #f67c0d;

            &:hover {
              background: #c5630a;
            }
          }
        }
      }
    }
  }
}
</style>
