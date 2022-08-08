<template>
  <div class="container">
    <div class="main_wrapper">
      <div class="side_menu_container">
        <side-menu />
      </div>
      <div class="signup_container">
        <div class="title_container">
          <h1>Додати адміністратора</h1>
        </div>
        <form @submit.prevent="submit">
          <div>
            Ім'я :
            <input
              type="text"
              v-model="userMame"
              name="name"
              placeholder="Ім'я"
            />
          </div>
          <div>
            Пошта :
            <input
              type="text"
              v-model="email"
              name="email"
              placeholder="Пошта"
            />
          </div>
          <div class="form-group">
            Пароль :
            <input
              type="password"
              v-model="password"
              name="password"
              placeholder="Пароль"
            />
          </div>
          <div v-if="message">{{ message }}</div>
          <div>
            <button type="submit">Додати</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { mapActions } from "vuex";
export default {
  name: "Signup",
  components: {
    SideMenu,
  },

  data() {
    return {
      userMame: "",
      email: "",
      password: "",
      message: "",
    };
  },

  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    async submit() {
      try {
        const user = {
          name: this.userMame,
          email: this.email,
          password: this.password,
        };
        const result = await this.signup(user);
        if (result === true) {
          this.message = "";
          this.$router.push({
            path: "/",
            query: { signedup: "true" },
          });
        } else {
          this.message = result; //'SignUp error!';
        }
      } catch (err) {
        this.message = err.message;
      }
    },
  },

  // created() {
  //   this.logout();
  // },
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

    .signup_container {
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

      form {
        margin: 20px;
        font-size: 20px;
        color: #333;

        div {
          margin-top: 20px;
          input {
            display: block;
            margin-top: 10px;
            font-size: 18px;
            padding: 4px 6px;
            border: 2px solid #bcc0c4;
            border-radius: 5px;

            width: 250px;
            height: 30px;

            &:focus {
              border: 2px solid #2691d9;
            }
          }

          button {
            width: 150px;
            margin-left: 98px;
            height: 35px;
            border-radius: 5px;
            background: #046423;
            font-size: 18px;
            color: #fff;
            transition: all 300ms ease-in-out;
            &:hover {
              background: #069534;
            }
          }
        }
      }
    }
  }
}
</style>
