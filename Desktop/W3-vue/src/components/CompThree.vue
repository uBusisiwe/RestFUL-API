<template>
  <div :style="{ backgroundColor: bgColor}">
    <h1>Three!</h1>
    <p>Background Color Component</p>
    <input type="color" v-model="bgColor">
    <strong>{{ this.bgColor }}</strong>
  </div>
</template>

<script>
export default {
    name: 'CompThree',
    data() {
        return {
            bgColor: ''
        }
    }
}
</script>

<style scoped>
h1 {
    text-decoration: underline;
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

</style>