<template>
  <div class="home">

    <BlockCards :items = "items" :url="url"></BlockCards>
  </div>
</template>



<script>
import BlockCards from "../components/BlockCards";
import axios from 'axios'
export default {
  name: 'Category',
  components: {BlockCards},
  data() {
    return {
      items: [],
      props: ['id'],
      url: 'Products'
    }
  },
  created() {
    const id = this.$route.params.id
    console.log(id)
    axios('https://ck26904.tmweb.ru/api/SubCat/' + id, {method: 'GET'})
        .then((response) => this.items = response.data)
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        axios('https://ck26904.tmweb.ru/api/SubCat/' + this.$route.params.id, {method: 'GET'})
            .then((response) => this.items = response.data)
      },
    },
  }
}
</script>
