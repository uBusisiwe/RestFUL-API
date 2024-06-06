<script setup>
import { ref } from 'vue';

 // compostion API

const searchData = ref([]);
const query = ref('');

const searchProducts = () => {
  fetch('https://dummyjson.com/products/search?q=' + query.value)
      .then(res => res.json())
      .then(data => {
        searchData.value = data.products;
        console.log(data);
      })
      .catch((e)=>{
        console.log(e);
      })
   
} 

const selectCentralLocation = () => {
  console.log("Selected central location");
}
</script>

<template>

    <div>
      <h1>{{ locations }}</h1>
      <input v-model="query" type="text" ref="search" placeholder="Enter location" />
       <button @click="searchProducts">Search</button>
       <div v-if="searchData.length > 0">
       </div>
      <div v-else-if="searchData.length === 0">
        <p>no results returned..</p>
     </div>
    <div 
      v-for="product in searchData" 
      :key="product.id" 
      style="display: flex; flex-direction: column;"> 
    <div>
    <button @click="selectCentralLocation">
      {{ product.title }} 
    </button>
   </div>
  </div>
 </div>
</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
}
</style>
