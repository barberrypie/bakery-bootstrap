<template>
  <div id="app">
    <header >
      <nav class="navbar navbar-expand-md navbar-light bg-light p-0">
        <div class="container-fluid">
          <router-link class="navbar-brand p-0" :to="{name:'Home'}"><img src="/img/lg.svg" width="85" height="85" alt="Логотип ООО ФОРМА" class="rounded float-start"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown d-lg-none d-sm-block">
                <router-link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" :to="{name:'Home'}">
                Каталог
              </router-link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><router-link class="dropdown-item" :to="{name:'Category', params:{id:'CastForm'}}">Формы хлебопекарные литые</router-link></li>
                  <li><router-link class="dropdown-item" :to="{name:'Products', params:{id:'WeldedForm'}}">Формы хлебопекарные сварные</router-link></li>
                  <li><router-link class="dropdown-item" :to="{name:'Category', params:{id:'PastryMolds'}}">Кондитерские формы</router-link></li>
                  <li><router-link class="dropdown-item" :to="{name:'Products', params:{id:'Trays'}}">Противни для выпечки</router-link></li>
                  <li><router-link class="dropdown-item" :to="{name:'Products', params:{id:'Trolleys'}}">Тележки и люльки для печей</router-link></li>
                  <li><router-link class="dropdown-item" :to="{name:'Category', params:{id:'MoldPress'}}">Пресс-формы для ветчин и мяса</router-link></li>
                  <li><router-link class="dropdown-item" :to="{name:'Products', params:{id:'Mixers'}}">Тестомесы</router-link></li>
                  <li><router-link class="dropdown-item" :to="{name:'Category', params:{id:'Baskets'}}">Корзины для расстойки из ротанга</router-link></li>
                  <li><router-link class="dropdown-item" :to="{name:'Coating'}">Нанесение покрытий</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'About', params: {id: 12}}">О компании</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'Delivery'}">Доставка и оплата</router-link>
              </li>

            </ul>

          </div>
          <ul class="nav justify-content-end">
            <div class="container">
              <div class="row">
                <div class="col-lg " style="color: rgba(0,0,0,.7)">
                  <!--<img src="img/map.png" width="20" height="20" alt="map" class="d-none d-sm-block "/>
              -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  г. Белгород, Михайловское шоссе, д. 23, оф. 201В
                </div>
              </div>
              <div class="row">
                <div class="col-lg phone">
                  <a class="nav-link" href="tel:+79611732393">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16" >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    +7-961-173-23-93</a>
                </div>
              </div>
              <div class="row">
                <div class="col-lg phone">
                  <a class="nav-link" href="mailto:forma2393@mail.ru">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
                    forma2393@mail.ru</a>
                </div>
              </div>
            </div>

          </ul>
        </div>
      </nav>

    </header>


    <div class="container" style="max-width: 100%; margin: auto">
      <div class="row">
        <div class="col-md-2 d-none d-lg-block" style="background-color: #F5F5F5; ">
          <div class="p-0" style="position:sticky; top: 0; width: auto;">
            <div class="container m-0 p-0">


              <div class="row p-3 a-side-top a-side">
                <router-link class="p-0 m-0" :to="{name:'Category', params:{id:'CastForm'}}">
                  <button class="a-side-button">
                    <div class ="container m-0 p-0">
                      <div class ="row" style="width: inherit;">
                        <div class="col-md-3 p-0 m-0">
                          <img  src="/img/bread.png" width="25px" height="25px" alt="Иконка литые формы хлеб">
                        </div>
                        <div class="col-md-9 p-0 m-0" style="text-align: left">
                          Литые формы
                        </div>
                      </div>
                    </div>
                  </button>
                </router-link>
              </div>
              <div class="row p-3 a-side">
                  <router-link class="p-0 m-0" :to="{name:'Products', params:{id:'WeldedForm'}}">
                  <button class="a-side-button">
                    <div class ="container m-0 p-0">
                      <div class ="row" style="width: inherit;">
                        <div class="col-md-3 p-0">
                          <img src="/img/bread2.png" width="25px" height="25px" alt="Иконка литые формы хлеб">
                        </div>
                        <div class="col-md-9 p-0 m-0" style="text-align: left">
                          Сварные формы
                        </div>
                      </div>
                    </div>
                  </button>
                </router-link>
              </div>
              <div class="row p-3 a-side">
                <router-link class="p-0 m-0" :to="{name:'Category', params:{id:'PastryMolds'}}">
                    <button class="a-side-button">
                      <div class ="container m-0 p-0">
                        <div class ="row" style="width: inherit;">
                          <div class="col-md-3 p-0 mt-2">
                            <img src="/img/cake1.png" width="25px" height="25px" alt="Иконка кондитерские формы пирог">
                          </div>
                          <div class="col-md-9 p-0 m-0" style="text-align: left">
                            Кондитерские формы
                          </div>
                        </div>
                      </div>
                    </button>
                  </router-link>
              </div>
              <div class="row p-3 a-side">
                <router-link class="p-0 m-0" :to="{name:'Products', params:{id:'Trays'}}">
                  <button class="a-side-button ">
                    <div class ="container m-0 p-0">
                      <div class ="row" style="width: inherit;">
                        <div class="col-md-3 p-0 mt-2">
                          <img src="/img/baking.png" width="25px" height="25px" alt="Иконка противни для выпечки">
                        </div>
                        <div class="col-md-9 p-0 m-0" style="text-align: left">
                          Противни для выпечки
                        </div>
                      </div>
                    </div>
                  </button>
                </router-link>
              </div>
              <div class="row p-3 a-side">
                <router-link class="p-0 m-0" :to="{name:'Products', params:{id:'Trolleys'}}">
                  <button class="a-side-button ">
                    <div class ="container m-0 p-0">
                      <div class ="row" style="width: inherit;">
                        <div class="col-md-3 p-0 m-0 ">
                          <img src="/img/TROL.png" width="30px" height="30px" alt="Иконка тележки">
                        </div>
                        <div class="col-md-9 p-0 m-0" style="text-align: left">
                          Тележки
                        </div>
                      </div>
                    </div>
                  </button>
                </router-link>
              </div>
              <div class="row p-3 a-side">
                <router-link class="p-0 m-0" :to="{name:'Category', params:{id:'MoldPress'}}">
                  <button class="a-side-button ">
                    <div class ="container m-0 p-0">
                      <div class ="row" style="width: inherit;">
                        <div class="col-md-3 p-0 m-0">
                          <img src="/img/press-machine.png" width="25px" height="25px" alt="Иконка пресс-формы для ветчин и мяса">
                        </div>
                        <div class="col-md-9 p-0 m-0" style="text-align: left">
                          Пресс-формы
                        </div>
                      </div>
                    </div>
                  </button>
                </router-link>
              </div>
              <div class="row p-3 a-side">
                <router-link class="p-0 m-0" :to="{name:'Products', params:{id:'Mixers'}}">
                  <button class="a-side-button ">
                    <div class ="container m-0 p-0">
                      <div class ="row" style="width: inherit;">
                        <div class="col-md-3 p-0 m-0">
                          <img src="/img/testomes.svg" width="25px" height="25px" alt="Иконка тестомесы">
                        </div>
                        <div class="col-md-9 p-0 m-0" style="text-align: left">
                          Тестомесы
                        </div>
                      </div>
                    </div>
                  </button>
                </router-link>
              </div>
              <div class="row p-3 a-side">
                <router-link class="p-0 m-0" :to="{name:'Category', params:{id:'Baskets'}}">
                  <button class="a-side-button ">
                    <div class ="container m-0 p-0">
                      <div class ="row" style="width: inherit;">
                        <div class="col-md-3 p-0 m-0 mt-4">
                          <img src="/img/dough-proofing.svg" width="25px" height="25px" alt="Иконка корзины для расстойки из ротанга">
                        </div>
                        <div class="col-md-9 p-0 m-0" style="text-align: left">
                          Корзины для расстойки из ротанга
                        </div>
                      </div>
                    </div>
                  </button>
                </router-link>
              </div>
              <div class="row p-3 a-side">
                <router-link class="p-0 m-0" :to="{name:'Coating'}">
                  <button class="a-side-button ">
                    <div class ="container m-0 p-0">
                      <div class ="row" style="width: inherit;">
                        <div class="col-md-3 p-0 mt-2">
                          <img src="/img/coating.svg" width="25px" height="25px" alt="Иконка нанесение покрытий">
                        </div>
                        <div class="col-md-9 p-0 m-0" style="text-align: left">
                          Нанесение покрытий
                        </div>
                      </div>
                    </div>
                  </button>
                </router-link>
              </div>
            </div>

          </div>

        </div>
          <div class="col-md-10 mt-1">
            <div class="flex mx-5 my-3 ">
            <router-view/>
            </div>
          </div>
        </div>
    </div>

    <footer>
      <div class = "container">
        <div class="row">
          <div class="col-md-4 p-0">
            <div class="container">
              <div class="row">
                <div class="col-lg ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  г. Белгород, Михайловское шоссе, д. 23, оф. 201В
                </div>
              </div>
              <div class="row">
                <div class="col-lg ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                  </svg>
                  forma2393@mail.ru
                </div>
              </div>
              <div class="row">
                <div class="col-lg phone">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16" >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                  +7-961-173-23-93
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 p-0 text-center">
            <br>ООО «ФОРМА»
            <br>&copy 2021 год
          </div>
          <div class="col-md-4 p-0 justify-content-right">
            <div class="container">
              <div class="row">
                <div class="col-lg ">
                  <a href="https://www.instagram.com/forma2393_belgorod/" style="color: rgba(255, 255, 255, 0.9);"> @forma2393_belgorod
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16" class="bi bi-instagram">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

