<template>
  <div>
    <div class="popup_container" v-if="infoPopupVisible">
      <info-Popup
        @infoPopupClose="onInfoPopupClose"
        v-if="infoPopupVisible"
        class="popup"
        :productData="product"
        :title="popupTitle"
        :dataError="savingDataError"
      />
    </div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="edit_page_container">
          <div class="title_container">
            <h1>Редагування продукту</h1>
          </div>
          <div class="edit_area_container">
            <div class="edit_area_wrapper">
              <form action="">
                <div class="img_container">
                  <label>
                    Фото продукту<span>*</span>
                    <p>(в розширенні 500x500)</p>
                    <input type="file" @input="createLogoImage" />
                  </label>
                  <img id="img" :src="photoSrc" alt="" v-if="product.photo" />
                </div>
                <div class="input_title_container">
                  <label for="">Назва продукту<span>*</span>:</label>
                  <input type="text" required v-model="product.name" />
                </div>
                <div class="availability_container">
                  <label for="">Наявність<span>*</span>: </label>
                  <select name="" id="select_group">
                    <option
                      id="option_item1"
                      class="opt_item"
                      value="В наявності"
                    >
                      В наявності
                    </option>
                    <option
                      id="option_item2"
                      class="opt_item"
                      value="Очікується"
                    >
                      Очікується
                    </option>
                    <option
                      id="option_item3"
                      class="opt_item"
                      value="Немає на складі"
                    >
                      Немає на складі
                    </option>
                  </select>
                </div>
                <div class="input_price_container">
                  <label for="">Ціна<span>*</span>:</label>
                  <input type="number" required v-model="product.price" />
                </div>
                <div class="input_desc_first_paragraph_container">
                  <label for="">Опис, перший параграф<span>*</span>:</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    required
                    v-model="product.descriptionFirstParagraph"
                  ></textarea>
                </div>
                <div class="input_desc_second_paragraph_container">
                  <label for="">Опис, другий параграф<span>*</span>:</label>

                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    required
                    v-model="product.descriptionSecondParagraph"
                  ></textarea>
                </div>
                <div class="input_category_container">
                  <label for="">Категорія<span>*</span>:</label>

                  <select name="" id="select_category">
                    <option id="option_item_category" class="opt_item">
                      Масло для легкових автомобілів
                    </option>
                    <option id="option_item_category" class="opt_item">
                      Масло для комерційних автомобілів
                    </option>
                    <option id="option_item_category" class="opt_item">
                      Гідравлічне масло
                    </option>
                    <option id="option_item_category" class="opt_item">
                      Трансміссійне масло
                    </option>
                    <option id="option_item_category" class="opt_item">
                      Охолоджуючі рідини
                    </option>
                    <option id="option_item_category" class="opt_item">
                      Масло для мото гурупи
                    </option>
                    <option id="option_item_category" class="opt_item">
                      Масло для садового обладнання
                    </option>
                    <option id="option_item_category" class="opt_item">
                      Змажчувальні матеріали
                    </option>
                    <option id="option_item_category" class="opt_item">
                      Автохімія
                    </option>
                  </select>
                </div>
                <div class="input_characteristic_container">
                  <label for="">Характеристики<span>*</span>:</label>
                  <input
                    type="text"
                    required
                    v-model="product.characteristics"
                  />
                </div>

                <div class="license_container">
                  <label for="">Введіть допуски через кому<span>*</span></label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    required
                    v-model="product.license"
                  ></textarea>
                </div>

                <div class="buttons_container">
                  <button @click="onBtnClick">
                    {{ recivedId }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import infoPopup from "@/components/infoPopup";
import { Buffer } from "buffer";
import { mapActions } from "vuex";
export default {
  name: "EditPage",
  components: {
    SideMenu,
    infoPopup,
  },

  data() {
    return {
      productData: {},

      rawPhotoData: null,

      product: {},
      licenseArray: [],
      infoPopupVisible: false,
      popupTitle: "",
      savingDataError: null,
    };
  },

  computed: {
    recivedId() {
      if (this.$route.params.id) {
        return "Редагувати";
      }
      return "Додати";
    },

    photoSrc() {
      return (
        this.rawPhotoData ||
        (this.product.photo && this.getImgSrc(this.product.photo))
      );
    },
  },

  methods: {
    ...mapActions("products", [
      "getProductById",
      "addProduct",
      "updateProduct",
    ]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    createLogoImage(event) {
      const file = event.target.files[0];
      console.log("file");
      console.log(file);
      let reader = new FileReader();
      const self = this;
      reader.onload = (e) => {
        self.rawPhotoData = e.target.result;
        self.product.photo = file;
      };
      reader.readAsDataURL(file);
    },

    async onBtnClick() {
      const select = document.querySelector("#select_group");
      if (select.selectedIndex == 0) {
        this.product.availability = "В наявності";
      }
      if (select.selectedIndex == 1) {
        this.product.availability = "Очікується";
      }
      if (select.selectedIndex == 2) {
        this.product.availability = "Немає на складі";
      }
      const selectCategory = document.querySelector("#select_category");

      switch (selectCategory.selectedIndex) {
        case 0:
          this.product.category = "legkovi";
          break;
        case 1:
          this.product.category = "commerce";
          break;
        case 2:
          this.product.category = "hydraulics";
          break;
        case 3:
          this.product.category = "transmisson";
          break;
        case 4:
          this.product.category = "cold";
          break;
        case 5:
          this.product.category = "motoGroup";
          break;
        case 6:
          this.product.category = "garden";
          break;
        case 7:
          this.product.category = "lubricants";
          break;
        case 8:
          this.product.category = "autohim";
          break;

        default:
          break;
      }
      if (
        this.product.photo &&
        this.product.name &&
        this.product.category &&
        this.product.price &&
        this.product.descriptionFirstParagraph &&
        this.product.descriptionSecondParagraph &&
        this.product.availability &&
        this.product.characteristics &&
        this.product.license
      ) {
        this.savingDataError = false;
        try {
          if (!this.$route.params.id) {
            await this.addProduct(this.product);
            this.infoPopupVisible = true;
          } else {
            await this.updateProduct(this.product);
            this.infoPopupVisible = true;
          }

          if (this.$route.params.id) {
            this.popupTitle = "Дані товара оновлені успішно";
          } else {
            this.popupTitle = "Товар додано успішно";
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        this.savingDataError = true;
        this.infoPopupVisible = true;
      }

      // this.infoPopupVisible = true;
    },

    onInfoPopupClose() {
      this.infoPopupVisible = false;
    },
  },

  async mounted() {
    // location.reload();
    let searchData = {
      category: this.$route.params.category,
      id: this.$route.params.id,
    };
    console.log(this.$route.params.id);
    if (this.$route.params.id) {
      try {
        this.product = await this.getProductById(searchData);

        const availabilitySelect = document.querySelector("#select_group");
        const categorySelect = document.querySelector("#select_category");

        if (this.product.availability === "В наявності")
          availabilitySelect.selectedIndex = 0;

        if (this.product.availability === "Очікується")
          availabilitySelect.selectedIndex = 1;

        if (this.product.availability === "Немає на складі")
          availabilitySelect.selectedIndex = 2;

        if (this.product.category === "legkovi")
          categorySelect.selectedIndex = 0;
        if (this.product.category === "commerce")
          categorySelect.selectedIndex = 1;
        if (this.product.category === "hydraulics")
          categorySelect.selectedIndex = 2;
        if (this.product.category === "transmisson")
          categorySelect.selectedIndex = 3;
        if (this.product.category === "cold") categorySelect.selectedIndex = 4;
        if (this.product.category === "motoGroup")
          categorySelect.selectedIndex = 5;
        if (this.product.category === "garden")
          categorySelect.selectedIndex = 6;
        if (this.product.category === "lubricants")
          categorySelect.selectedIndex = 7;
        if (this.product.category === "autohim")
          categorySelect.selectedIndex = 8;
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.popup_container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;
  .popup {
    height: 100%;
    width: 100%;
  }
}
.container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .main_wrapper {
    display: flex;
    margin-top: 15px;

    .edit_page_container {
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

      .edit_area_container {
        margin: 30px;
        .edit_area_wrapper {
          color: #444443;

          span {
            font-size: 22px;
            color: #d8093a;
          }

          .img_container {
            font-size: 22px;
            p {
              display: inline-block;
              font-size: 14px;
              text-decoration: underline;
              padding-right: 5px;
            }
            img {
              margin-top: 15px;
              display: block;
              width: 350px;
              border: 2px dashed #bcc0c4;
            }
          }
          .input_title_container {
            font-size: 22px;

            input {
              // background: #f0f0f0;
              margin-left: 15px;
              margin-top: 15px;
              width: 650px;
              height: 30px;
              border: 2px solid #bcc0c4;
              border-radius: 5px;
              font-size: 18px;

              &:focus {
                border: 2px solid #2691d9;
              }
            }
          }
          .availability_container {
            margin-top: 20px;
            label {
              font-size: 22px;
            }

            select {
              margin-top: 10px;
              margin-left: 10px;
              font-size: 16px;
              border: solid 1px #c7ccd1;
              cursor: pointer;
              border-radius: 5px;
              width: 200px;
              height: 30px;

              &:hover {
                border-color: #d8093a;
              }
            }
            input {
              margin-left: 15px;
              display: block;
              margin-top: 15px;
              width: 250px;
              height: 30px;
              border: 2px solid #bcc0c4;
              border-radius: 5px;
              font-size: 18px;
              text-align: center;
            }
          }
          .input_price_container {
            margin-top: 20px;
            font-size: 22px;

            input {
              margin-left: 15px;
              margin-top: 15px;
              width: 250px;
              height: 30px;
              border: 2px solid #bcc0c4;
              border-radius: 5px;
              font-size: 18px;
              text-align: center;

              &:focus {
                border: 2px solid #2691d9;
              }
            }
          }
          .input_desc_first_paragraph_container {
            margin-top: 20px;
            font-size: 22px;

            textarea {
              display: block;

              resize: none;
              margin-left: 15px;
              margin-top: 15px;
              width: 500px;
              height: 130px;
              border: 2px solid #bcc0c4;
              border-radius: 5px;
              font-size: 18px;

              &:focus {
                border: 2px solid #2691d9;
              }
            }
          }
          .input_desc_second_paragraph_container {
            margin-top: 20px;
            font-size: 22px;

            textarea {
              display: block;
              resize: none;
              margin-left: 15px;
              margin-top: 15px;
              width: 500px;
              height: 130px;
              border: 2px solid #bcc0c4;
              border-radius: 5px;
              font-size: 18px;

              &:focus {
                border: 2px solid #2691d9;
              }
            }
          }

          .input_category_container {
            margin-top: 20px;
            label {
              font-size: 22px;
            }

            select {
              margin-top: 10px;
              margin-left: 10px;
              font-size: 16px;
              border: solid 1px #c7ccd1;
              cursor: pointer;
              border-radius: 5px;
              width: 300px;
              height: 30px;

              &:hover {
                border-color: #d8093a;
              }
            }
          }
          .input_characteristic_container {
            margin-top: 20px;
            font-size: 22px;

            input {
              margin-left: 15px;
              margin-top: 15px;
              width: 250px;
              height: 30px;
              border: 2px solid #bcc0c4;
              border-radius: 5px;
              font-size: 18px;
              text-align: center;

              &:focus {
                border: 2px solid #2691d9;
              }
            }
          }
          .license_container {
            margin-top: 20px;
            font-size: 22px;

            textarea {
              margin-top: 15px;
              display: block;
              // width: 250px;
              // height: 50px;
              border: 2px solid #bcc0c4;
              // border-radius: 18px;
              font-size: 16px;
              // text-align: center;

              &:focus {
                border: 2px solid #2691d9;
              }
            }
          }
          .buttons_container {
            margin-top: 15px;
            button {
              width: 262px;
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
}
</style>
