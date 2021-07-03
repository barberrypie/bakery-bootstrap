<template>
  <div>
    <BlockCards :items = "items" :url="url"></BlockCards>
  </div>
</template>


<script>
import BlockCards from "../components/BlockCards";
import axios from 'axios'
import Vue from "vue";
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
    axios('https://ck26904.tmweb.ru/api/Cat', {method: 'GET'})
        .then((response) => this.items = response.data)
  }
}
</script>
