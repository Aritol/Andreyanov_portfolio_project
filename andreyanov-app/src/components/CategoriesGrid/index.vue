<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="title_container">
          <h1>Групи товарів та послуг</h1>
        </div>
        <div class="category_blocks_container">
          <ul class="category_blocks">
            <li>
              <div class="block_content" @click="ToLegkovi">
                <img
                  src="@/assets/category_img/legkovi_automobili_cat.jpg"
                  alt=""
                />
                <p>Моторні масла для легкових автомобилів</p>
              </div>
            </li>
            <li>
              <div class="block_content" @click="ToCommerce">
                <img
                  src="@/assets/category_img/commerce_automobili_cat.jpg"
                  alt=""
                />
                <p>Моторні масла для комерційних автомобілів</p>
              </div>
            </li>
            <li>
              <div class="block_content" @click="ToHydraulics">
                <img src="@/assets/category_img/gidravlica_cat.jpg" alt="" />
                <p>Гідравлічна масла</p>
              </div>
            </li>
            <li>
              <div class="block_content" @click="ToTransmisson">
                <img
                  src="@/assets/category_img/transmissionnoe-maslo_cat.jpg"
                  alt=""
                />
                <p>Трансмісійне масло</p>
              </div>
            </li>
            <li>
              <div class="block_content" @click="ToCold">
                <img src="@/assets/category_img/antifriz_cat.jpg" alt="" />
                <p>Охолоджуючі рідини</p>
              </div>
            </li>
            <li>
              <div class="block_content" @click="ToMotoGroup">
                <img src="@/assets/category_img/moto_cat.jpg" alt="" />
                <p>Масла для мото групи</p>
              </div>
            </li>
            <li>
              <div class="block_content" @click="ToGarden">
                <img
                  src="@/assets/category_img/sadove_obladnannya_cat.jpg"
                  alt=""
                />
                <p>Масла для садового обладнання</p>
              </div>
            </li>
            <li>
              <div class="block_content" @click="ToLubricants">
                <img
                  src="@/assets/category_img/smazochnye_materialy_cat.jpg"
                  alt=""
                />
                <p>Мастильні матеріали</p>
              </div>
            </li>
            <li>
              <div class="block_content" @click="ToAutohim">
                <img src="@/assets/category_img/autohimiya_cat.jpg" alt="" />
                <p>Автохімія</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesGrid",

  methods: {
    ToLegkovi() {
      this.$router.push({
        name: "productsList",
        params: { category: "legkovi" },
      });
    },

    ToCommerce() {
      this.$router.push({
        name: "productsList",
        params: { category: "commerce" },
      });
    },
    ToHydraulics() {
      this.$router.push({
        name: "productsList",
        params: { category: "hydraulics" },
      });
    },
    ToTransmisson() {
      this.$router.push({
        name: "productsList",
        params: { category: "transmisson" },
      });
    },
    ToCold() {
      this.$router.push({
        name: "productsList",
        params: { category: "cold" },
      });
    },
    ToMotoGroup() {
      this.$router.push({
        name: "productsList",
        params: { category: "motoGroup" },
      });
    },
    ToGarden() {
      this.$router.push({
        name: "productsList",
        params: { category: "garden" },
      });
    },
    ToLubricants() {
      this.$router.push({
        name: "productsList",
        params: { category: "lubricants" },
      });
    },
    ToAutohim() {
      this.$router.push({
        name: "productsList",
        params: { category: "autohim" },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  padding-bottom: 60px;
  .main_wrapper {
    .title_container {
      background: #069534;
      width: 100%;
      max-width: 1000px;
      h1 {
        color: #fff;
        font-size: 20px;
        padding: 8px 0px 8px 29px;
      }
    }

    .category_blocks_container {
      padding-bottom: 20px;

      background: #fff;
      .category_blocks {
        display: flex;
        flex-wrap: wrap;
        li {
          margin: 0 auto;
          padding: 20px 10px 5px 0px;
        }
        .block_content {
          // margin: 10px 4px 20px 30px;
          width: 100%;
          max-width: 250px;
          img {
            width: 260px;
            cursor: pointer;
          }
          p {
            color: #046423;
            padding-top: 12px;
            font-weight: bold;

            &:hover {
              color: #069534;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
