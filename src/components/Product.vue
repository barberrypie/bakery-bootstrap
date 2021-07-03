<template>
  <div class="row shadow mt-3 rounded">
    <h3 class = "mb-4 mt-3 " style="color: rgba(0,0,0,.7)">{{item.name}}</h3>
    <div class="col-md-4 ">
      <img :src="item.image" class="shadow-sm rounded mb-3" alt="ООО ФОРМА - литые и сварные формы, кондитерские формы, противни, тележки" width="100%" height="auto">
    </div>
    <div class="col-md-7 p-0 text-center">
      <dl class="p-0 mb-4" style="list-style: none; color: rgba(0,0,0,.7); font-size: larger">
        <dt v-if="item.size">Размер одной формы:</dt>
        <dd v-if="item.size">{{item.size}}</dd>
        <dt v-if="item.height">Высота:</dt>
        <dd v-if="item.height">{{item.height}}</dd>
        <dt v-if="item.product_weight">Масса готового изделия:</dt>
        <dd v-if="item.product_weight">{{item.product_weight}}</dd>
        <dt v-if="item.material">Материал:</dt>
        <dd v-if="item.material">{{item.material}}</dd>
        <dt v-if="item.dimension">Размер:</dt>
        <dd v-if="item.dimension">{{item.dimension}}</dd>
        <dt v-if="item.st_dimens">Стандартные размеры:</dt>
        <dd v-if="item.st_dimens">{{item.st_dimens}}</dd>
        <dt v-if="item.comments_"></dt>
        <dd v-if="item.comments_">{{item.comments_}}</dd>
        <dt v-if="item.docs">Заполните анкету</dt>
        <dd v-if="item.docs"><a href="/docs/тележки.xlsx"><img src ="/img/docs.png" style="width: 25px; height: 25px" alt="Документ"/></a></dd>
        <dt v-if="item.thickness">Толщина материала:</dt>
        <dd v-if="item.thickness">{{item.thickness}}</dd>
        <dt v-if="item.bundle_length">Длина связки:</dt>
        <dd v-if="item.bundle_length">{{item.bundle_length}}</dd>
        <dt v-if="item.form_weight">Масса формы:</dt>
        <dd v-if="item.form_weight">{{item.form_weight}}</dd>
      </dl>
    </div>

  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['item']
}
</script>