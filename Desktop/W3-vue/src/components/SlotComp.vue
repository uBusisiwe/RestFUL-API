<template>
    <div> <!-- This div makes the card-like appearance -->
        <slot
        v-for="x in foods"
        :key="x.name"
        :foodName="x.name"
        :foodDesc="x.desc"
        :foodUrl="x.url"
      ></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // foods:['Apple', 'Orange', 'Lemon', 'Beetle']

            foods:[
                { name:'Apples',
                  desc: 'Apples are a type of fruit that grows on trees.',
                   url: '/src/assets/img_apple.svg' }, 
                { name:'Pizza',
                  desc: 'Pizza has base bread with tomato sauce, cheese and toppings.',
                  url: '/src/assets/img_pizza.svg' },
                { name: 'Rice',
                  desc: 'Rice is a type of grain that people like to eat.',
                  url: './src/assets/img_rice.svg' },
                { name: 'Carrots',
                  desc: 'Carrots are a good source of vitamin D.',
                  url: './src/assets/img_carrot.png' },
                { name: 'Fish',
                  desc: 'Fish is an animal that lives under water.',
                  url: '/src/assets/img_fish.svg' }
            ]
        }
    }
}
</script>

<style scoped>
div {
    background-color: lightgreen;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0,2);
    transition: 0,3s;
    flex-basis: 150px;
    border-radius: 10px;
    border: solid black 2px;
    margin: 10px;
    padding: 0px 10px 0 10px;
    font-weight: bold;
}

div:hover {
    box-shadow: 0 8px 16px 0 rgba (0,0,0,0,2);
}

h6 {
    color: rgb(159, 0, 0);
}
</style>