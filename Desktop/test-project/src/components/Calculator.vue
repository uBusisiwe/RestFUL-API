<script setup>
import { ref } from 'vue'

const num1 = ref(2);
const num2 = ref(4);
const result = ref(0);

const addNumbers = ()=>{
  result.value = num1.value + num2.value;
}

</script>

<template>
  <h1>Calculate</h1>

  <div>
    <label for="num1">First number</label>
    <input v-model="num1" id="num1" type="number" placeholder="2" />  
    <br/>
    <label for="num2">Second number</label>
    <input v-model="num2" id="num2" type="number" placeholder="4" />  
    <br />
    <button @click="addNumbers">
      Calculate  
    </button>
    <br /><br />

    <div v-if="num1 + num2 == result"> 
      <h2>{{ result }}</h2>
    </div>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
