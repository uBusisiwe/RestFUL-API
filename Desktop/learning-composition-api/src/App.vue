<script setup>
import {ref, computed } from 'vue'

const app = Vue.createApp({
  data() {
    return {
      itemName: null,
      itemNumber: null,
      shoppingList: [
        { name: 'Dress', number: 10 }
      ]
    }
  },
  methods: {
    addItem() {
    let item = {
      name: this.itemName,
      number: this.itemNumber
    }

    this.shoppingList.push(item)
           this.itemName = null
           this.itemNumber = null
    }
  }
})
</script>

<template>
  <h1>Learning Composition-API</h1>
  <form v-on:submit.prevent="addItem">
    <p>
      Item needed?
      <input type="text"
       required placeholder="item name..." v-model="itemName">
    </p>
    <p>
      Number of items?
  <input type="number" 
  placeholder="number of items" v-model="itemNumber">
  </p>
  <button @click="submit" >Add item</button>
  </form>

    <div>
     <p>Shopping list:</p>
      <ul>
       <li v-for="item in shoppingList">{{ item.name }}, 
        {{ item.number }}</li>
      </ul>
    </div>
</template>

<style scoped>

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
}
</style>
