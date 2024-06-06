<template>
    <div>
        <img :src="imgSrc">
        <h1>One!</h1>
        <p>Choose food.</p>
        <br>
        <label>
          <input type="radio" name="rbgFood"
           v-model="imgSrc" :value="'./src/assets/img_apple.svg'" />
           Apple
        </label>
        <label>
            <input type="radio" name="rbgFood"
             v-model="imgSrc" :value="'./src/assets/img_rice.svg'" />
            Rice
        </label>
    </div>
</template>

<script>
  export default {
    name: 'CompOne',

     data() {
        return {
           imgSrc: './src/assets/img_question.svg' 
        }
     }
   }
   </script>

<style scoped>
     div {
        background-color: lightgreen;
     }

     #app {
        width: 350px;
        margin: 10px;
     }

     #app > div {
        border: solid black 2px;
        padding: 40px;
        margin-top: 10px;
     }

     img {
        float: right;
        height: 100px;
        margin-top: 20px;
     }

     label:hover {
        cursor: pointer;
     }

     h1 {
        text-decoration: underline;
     }
</style>