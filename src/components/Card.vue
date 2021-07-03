<template>
  <div>
    <router-link class='a-card' :to="{name: url, params: {id: item.eng_name}}">
      <div class="card p-3 mb-5 bg-body rounded m-auto" style="width: 18rem;">
        <img :src="item.image" class="card-img-top shadow-sm rounded" alt="ООО ФОРМА - литые и сварные формы, кондитерские формы, противни, тележки" width="250" height="250">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center">{{item.name}}</h5>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "Card",
  props: ['item', 'url'],
  created() {
    if (this.item.thereIsSubcategory == 1) {
      this.url = 'Category'
    }
    else {
      this.url = 'Products'
    }
    console.log(this.url)
  }
}
</script>
