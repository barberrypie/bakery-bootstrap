<template>
  <div>
    <div style="border-bottom:2px solid #F5F5F5">
      <h2 class = " mx-3 mb-3" style="color: rgba(0,0,0,.7)">Кондитерские формы</h2>
    </div>
    <div class="container">
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>

    </div>



  </div>
</template>
<script>
import Product from "../components/Product";
export default {
  components: {Product}
}
</script>