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
              <div class="block_content">
                <router-link to=""
                  ><img
                    src="@/assets/category_img/legkovi_automobili_cat.jpg"
                    alt=""
                /></router-link>
                <router-link to=""
                  ><p>Моторні масла для легкових автомобилів</p></router-link
                >
              </div>
            </li>
            <li>
              <div class="block_content">
                <router-link to=""
                  ><img
                    src="@/assets/category_img/commerce_automobili_cat.jpg"
                    alt=""
                /></router-link>
                <router-link to=""
                  ><p>Моторні масла для комерційних автомобілів</p></router-link
                >
              </div>
            </li>
            <li>
              <div class="block_content">
                <router-link to=""
                  ><img src="@/assets/category_img/gidravlica_cat.jpg" alt=""
                /></router-link>
                <router-link to=""><p>Гідравлічна масла</p></router-link>
              </div>
            </li>
            <li>
              <div class="block_content">
                <router-link to=""
                  ><img
                    src="@/assets/category_img/transmissionnoe-maslo_cat.jpg"
                    alt=""
                /></router-link>
                <router-link to=""><p>Трансмісійне масло</p></router-link>
              </div>
            </li>
            <li>
              <div class="block_content">
                <router-link to=""
                  ><img src="@/assets/category_img/antifriz_cat.jpg" alt=""
                /></router-link>
                <router-link to=""><p>Охолоджуючі рідини</p></router-link>
              </div>
            </li>
            <li>
              <div class="block_content">
                <router-link to=""
                  ><img src="@/assets/category_img/moto_cat.jpg" alt=""
                /></router-link>
                <router-link to=""><p>Масла для мото групи</p></router-link>
              </div>
            </li>
            <li>
              <div class="block_content">
                <router-link to=""
                  ><img
                    src="@/assets/category_img/sadove_obladnannya_cat.jpg"
                    alt=""
                /></router-link>
                <router-link to=""
                  ><p>Масла для садового обладнання</p></router-link
                >
              </div>
            </li>
            <li>
              <div class="block_content">
                <router-link to=""
                  ><img
                    src="@/assets/category_img/smazochnye_materialy_cat.jpg"
                    alt=""
                /></router-link>
                <router-link to=""><p>Мастильні матеріали</p></router-link>
              </div>
            </li>
            <li>
              <div class="block_content">
                <router-link to=""
                  ><img src="@/assets/category_img/autohimiya_cat.jpg" alt=""
                /></router-link>
                <router-link to=""><p>Автохімія</p></router-link>
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/null.scss";

.container {
  .main_wrapper {
    margin-top: 15px;
    .title_container {
      background: #069534;
      width: 100%;
      max-width: 600px;
      h1 {
        color: #fff;
        font-size: 20px;
        padding: 8px 0px 8px 30px;
      }
    }

    .category_blocks_container {
      background: #fff;
      .category_blocks {
        li {
          display: inline-block;
        }
        .block_content {
          margin: 10px 4px 20px 30px;
          width: 100%;
          max-width: 300px;
          img {
            width: 250px;
          }
          p {
            color: #046423;
            padding-top: 14px;
            font-weight: bold;

            &:hover {
              color: #069534;
            }
          }
        }
      }
    }
  }
}
</style>
