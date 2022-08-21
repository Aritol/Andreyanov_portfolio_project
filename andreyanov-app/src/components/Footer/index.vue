<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="rights">
          <h1>Всі права захищені ©</h1>
        </div>
        <div class="owner">
          <p>Сайт створив:</p>
          <p>Андреянов Максим</p>
        </div>
        <div class="year">
          <p>2022</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  width: 100%;
  height: 100%;
  max-height: 400px;
  background-color: #323232;
  .main_wrapper {
    .rights {
      h1 {
        font-size: 18px;
        padding-top: 10px;
        color: whitesmoke;
        text-align: center;
      }
    }

    .year {
      margin-top: 10px;
      padding-bottom: 10px;

      color: whitesmoke;
      text-align: center;
    }
    .owner {
      margin-top: 10px;

      text-align: center;
      color: whitesmoke;

      p {
        margin-top: 10px;
      }
    }
  }
}
</style>
