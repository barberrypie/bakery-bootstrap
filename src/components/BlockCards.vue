<template>
  <div class="home row">
    <div style="border-bottom:2px solid #F5F5F5">
      <h2 v-if="this.items[0].ru_parent_name" class = " mx-3 mb-3" style="color: rgba(0,0,0,.7)">{{this.items[0].ru_parent_name}}</h2>
      <h2 v-else class = " mx-3 mb-3" style="color: rgba(0,0,0,.7)">Каталог товаров</h2>
    </div>
    <!-- LG CATALOG d-none d-lg-block-->
    <div class="cards mt-3 col-md-4" v-for="item in this.items">
      <Card :item="item" :url = "url"></Card>
    </div>
  </div>
</template>


<script>
import Card from "../components/Card";
export default {
  name: "Home",
  components: {Card},
  props: ['items', 'url']
}
</script>