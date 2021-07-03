<template>
  <div>
    <div style="border-bottom:2px solid #F5F5F5">
      <h2 class = " mx-3 mb-3" style="color: rgba(0,0,0,.7)">{{this.items[0].ru_parent_name}}</h2>
    </div>
    <div class="container" v-for="item in this.items">
      <Product :item="item"></Product>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product";
import axios from "axios";
export default {
  name: "Products",
  components: {Product},
  data() {
    return {
      items: [],
      url: 'Products'
    }
  },
  created() {
    axios('https://ck26904.tmweb.ru/api/Prod/' + this.$route.params.id, {method: 'GET'})
        .then((response) => this.items = response.data)
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        axios('https://ck26904.tmweb.ru/api/Prod/' + this.$route.params.id, {method: 'GET'})
            .then((response) => this.items = response.data)
      },
    },
  }
}
</script>