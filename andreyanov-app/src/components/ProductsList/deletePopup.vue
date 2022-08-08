<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="close_img_container">
          <img
            src="@/assets/icons/icon_close_grey.png"
            alt=""
            @click="onCancelClick"
          />
        </div>
        <div class="popup_content">
          <h1>Ви впевнені що хочете видалити товар</h1>
          <div class="button_container">
            <button @click="onDeleteClick">Видалити</button>
            <button @click="onCancelClick">Назад</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deletePopup",
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;

  .main_wrapper {
    width: 100%;
    max-width: 300px;
    height: 300px;
    margin: 0 auto;
    margin-top: 200px;
    background: #fff;
    box-shadow: #fff 0 0 0;
    border-radius: 2px;
    .close_img_container {
      img {
        width: 35px;
        cursor: pointer;
        margin: 4px;
      }
    }
  }
}
</style>
