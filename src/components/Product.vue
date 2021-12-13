<template>
  <div class="row shadow mt-3 rounded">
    <h3 class = "mb-4 mt-3 " style="color: rgba(0,0,0,.7)">{{item.name}}</h3>
    <div class="col-md-4 ">
      <img :src="item.image" class="shadow-sm rounded mb-3" alt="ООО ФОРМА - литые и сварные формы, кондитерские формы, противни, тележки" width="100%" height="auto">
    </div>
    <div class="col-md-7 p-0 text-center">
      <dl class="p-0 mb-1" style="list-style: none; color: rgba(0,0,0,.7); font-size: larger;">
        <div class="container">
          <div class="row marg">
            <div class="col-md-6 p-0 m-0">
              <dt v-if="item.size" >Размер одной формы:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.size" class="parameters ">{{item.size}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.height" >Высота:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.height" class="parameters ">{{item.height}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.product_weight" >Масса готового изделия:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.product_weight" class="parameters">{{item.product_weight}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0 m-0" >
              <dt v-if="item.material" >Материал:</dt>
            </div>
            <div class="col-md-6 p-0 m-0">
              <dd v-if="item.material" class="parameters">{{item.material}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0" >
              <dt v-if="item.dimension">Размер:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.dimension" class="parameters">{{item.dimension}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.st_dimens" >Стандартные размеры:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.st_dimens" class="parameters">{{item.st_dimens}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div v-if="item.comments_" class="col-md parameters p-0 mb-3" style = "text-align: left">
              {{item.comments_}}
            </div>

          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.docs" >Заполните техническое задание</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.docs"><a href="/docs/тележки.xlsx"><img src ="/img/docs.png" style="width: 25px; height: 25px" alt="Документ"/></a></dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.thickness" >Толщина материала:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.thickness" class="parameters">{{item.thickness}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.bundle_length" class="parameters">Длина связки:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.bundle_length " >{{item.bundle_length}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.mix_weight" class="parameters max-height">Масса:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.mix_weight" class="parameters max-height">{{item.mix_weight}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.mix_power_consumption" class="parameters max-height">Потребляемая мощность:</dt>
            </div>
            <div class="col-md-6 p-0 ">
              <dd v-if="item.mix_power_consumption" class="parameters max-height">{{item.mix_power_consumption}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.mix_productivity" class="parameters max-height">Производительность:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.mix_productivity" class="parameters max-height">{{item.mix_productivity}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.mix_size" class="parameters max-height">Габаритные размеры:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.mix_size" class="parameters max-height">{{item.mix_size}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.mix_loading_capacity" class="parameters max-height">Минимальная норма загрузки ингредиентов:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.mix_loading_capacity" class="parameters max-height">{{item.mix_loading_capacity}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0" >
              <dt v-if="item.mix_time" class="parameters max-height">Среднее время замеса одной порции теста:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.mix_time" class="parameters max-height">{{item.mix_time}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.mix_rotation" class="parameters max-height">Частота оборотов:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.mix_rotation" class="parameters max-height">{{item.mix_rotation}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.mix_bowl_size" class="parameters max-height">Объем дежи:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.mix_bowl_size" class="parameters max-height">{{item.mix_bowl_size}}</dd>
            </div>
          </div>
          <div class="row marg">
            <div class="col-md-6 p-0">
              <dt v-if="item.mix_bowl_height" class="parameters max-height">Установочные номинальные размеры под дежу:</dt>
            </div>
            <div class="col-md-6 p-0">
              <dd v-if="item.mix_bowl_height" class="parameters max-height">{{item.mix_bowl_height}}</dd>
            </div>
          </div>
        </div>
      </dl>
    </div>
    <div class="row mb-4 mt-1" v-if="item.mix_description">
      <h4 class = "mb-2 mt-2 px-3" style="color: rgba(0,0,0,.7)">Описание</h4>
      <div class="col-md mb-3" style = "text-align: left">
        <h5 style="color:rgba(0,0,0,0.7); text-align: justify" class="px-2">{{item.mix_description}}</h5>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['item']
}
</script>