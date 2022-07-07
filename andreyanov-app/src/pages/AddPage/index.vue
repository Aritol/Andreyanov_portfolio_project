<template>
  <div>
    <div>
      <label>
        Name
        <input type="text" v-model="product.name" />
      </label>
    </div>
    <div>
      <label>
        Availability
        <input type="text" v-model="product.availability" />
      </label>
    </div>
    <div>
      <label>
        Price
        <!-- <input type="number" v-model="product.price" /> -->
        <input type="number" v-model="product.price" />
      </label>
    </div>
    <div>
      <label>
        Description
        <input type="text" v-model="product.description" />
      </label>
    </div>
    <div>
      <label>
        Photo
        <input type="file" @input="createLogoImage" />
      </label>
      <img id="img" :src="photoSrc" alt="" />
    </div>
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "testAdd",
  data() {
    return {
      product: [],
      rawPhotoData: null,
    };
  },

  computed: {
    photoSrc() {
      return (
        this.rawPhotoData ||
        (this.product.photo && this.getImgSrc(this.product.photo))
      );
    },
  },

  methods: {
    ...mapActions(["getProductById", "addProduct", "updateProduct"]),
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

    async onSave() {
      try {
        await this.addProduct(this.product);
        this.$router.push({ name: "mainPage" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
