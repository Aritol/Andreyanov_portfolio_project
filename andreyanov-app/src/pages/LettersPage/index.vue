<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="main_container">
          <div class="title_container">
            <h1>Листи</h1>
          </div>
          <div class="letters_list_container">
            <div class="list_item_container">
              <letter-item
                class="list_item"
                v-for="letter in messageList"
                :key="letter._id"
                :userData="letter"
              />
            </div>
            <div class="list_empty_container" v-if="messageListEmpty">
              <p>На даний момент листів немає</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import LetterItem from "./LetterItem";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LettersPage",

  components: {
    SideMenu,
    LetterItem,
  },

  data() {
    return {
      messageListEmpty: true,
    };
  },

  computed: {
    ...mapGetters("message", ["messageList"]),
  },

  methods: {
    ...mapActions("message", ["loadMessages"]),
  },

  async mounted() {
    await this.loadMessages();
    if (this.messageList.length) {
      this.messageListEmpty = false;
    }
  },
};
</script>

<style lang="scss" scoped>
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
      .letters_list_container {
        .list_item_container {
          margin-top: -10px;
          .list_item {
            margin-top: 30px;
          }
        }
        .list_empty_container {
          padding-top: 30px;
          text-align: center;
          p {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
