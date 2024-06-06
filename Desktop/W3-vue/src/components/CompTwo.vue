<template>
    <div>
    <h2>Two!</h2>
    <input type="text" v-model="msg" placeholder="Enter text">
    <p>Text:</p>
    <p><strong>{{ this.msg }}</strong></p>
    </div>
</template>

<script>
export default {
    name: 'CompTwo',
    data() {
        return {
            msg: ''
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightpink;
    }

    strong {
        background-color: yellow;
        padding: 5px;
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
    
    h2 {
        text-decoration: underline;
    }
</style>