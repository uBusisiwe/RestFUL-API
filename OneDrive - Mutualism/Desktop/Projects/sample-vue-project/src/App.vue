<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'


let value = 45;

const reactV = ref(45)

const items = ['name 1',' name2']

const changeNum=()=>{
  reactV.value = 67;


  console.log(value);
}


console.log(value);
</script>

<template>
  <div>
    <h1>{{ reactV }}</h1>


    <button @click="changeNum">Change the number</button>

  
    <ul>
      <li
        v-for="(item,index) in items"
        v-bind:key="index"
      >
        {{ item }}
    </li>
    </ul>

    </div>
  
   <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>



  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
