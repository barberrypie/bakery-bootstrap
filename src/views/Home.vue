<template>
  <div class="home">
    <div style="border-bottom:2px solid #F5F5F5">
      <h2 class = " mx-3 mb-3" style="color: rgba(0,0,0,.7)">Каталог товаров</h2>
    </div>
    <!-- LG CATALOG d-none d-lg-block-->
    <div class="cards row mt-3">
      <Category></Category>
      <div class="col-md-4">
        <a class='a-card' href="#">
          <div class="card p-3 mb-5 bg-body rounded m-auto" style="width: 18rem;">
            <img src="img/svarnye.png" class="card-img-top shadow-sm rounded" alt="..." width="250" height="250">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center">Сварные формы</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <router-link class='a-card' :to="{name:'Confectionery'}">
          <div class="card p-3 mb-5 bg-body rounded m-auto" style="width: 18rem;">
            <img src="img/konditer.png" class="card-img-top shadow-sm rounded" alt="..." width="250" height="250">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center">Кондитерские формы</h5>
            </div>
          </div>
          </router-link>
      </div>
      <div class="col-md-4">
        <a class='a-card' href="#">
          <div class="card p-3 mb-5 bg-body rounded m-auto" style="width: 18rem;">
            <img src="img/protivni.png" class="card-img-top shadow-sm rounded" alt="..." width="250" height="250">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center">Противни для выпечки</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a class='a-card' href="#">
          <div class="card p-3 mb-5 bg-body rounded m-auto" style="width: 18rem;">
            <img src="img/telezh.png" class="card-img-top shadow-sm rounded" alt="..." width="250" height="250">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center">Тележки для печей</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a class='a-card' href="#">
          <div class="card p-3 mb-5 bg-body rounded m-auto" style="width: 18rem;">
            <img src="img/press.png" class="card-img-top shadow-sm rounded" alt="..." width="250" height="250">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center">Пресс-формы</h5>
              <!-- <h6 class="card-subtitle mb-2 text-muted">150х200х50</h6> -->
            </div>
          </div>
        </a>
      </div>
    </div>


  </div>

</template>


<script>
import Category from "../components/Category";
export default {
  components: {Category}
}
</script>