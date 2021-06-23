<template>
  <div>
    <BlockCards :items = "items" :url="url"></BlockCards>
  </div>
</template>


<script>
import BlockCards from "../components/BlockCards";
import axios from 'axios'
export default {
  name: "Home",
  components: {BlockCards},
  data() {
    return {
      items: [],
      url: 'Category'
    }
  },
  created() {
    const id = this.$route.params.id
    console.log(id)
    axios('https://api.ck26904.tmweb.ru/api/Cat', {method: 'GET'})
        .then((response) => this.items = response.data)
  }
}
</script>
