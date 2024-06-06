<script>
export default {
  data() {
    return {
      compNbr: '1',
      name: 'CompOne',
      toggleValue: true,
      newItem:'',
      items: ['Buy apples','Make pizza','Chop the carrots'],
      foods: [
        { name:'Apples',
          desc: 'Apples are a type of fruit that grows on trees.',
          favorite: true }, 
        { name:'Pizza',
          desc: 'Pizza has base bread with tomato sauce, cheese and toppings.',
          favorite: false },
        { name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          favorite: false },
        { name: 'Carrots',
          desc: 'Carrots are a good source of vitamib D',
          favorite: true },
        { name: 'Fish',
          desc: 'Fish is an animal that lives under water',
          favorite: true }
      ]
    };
  },
  methods: {
    addItem() {
      this.items.push(this.newItem);
      this.newItem = '';
    },
    receiveEmit() {
      alert('A type of food');
      let foundFood = this.foods.find(
        food => food.name === foodId
      );
      foundFood.favorite = !foundFood.favorite;
      }
    },
    computed: {
      activeComp() {
        if(this.compNbr === 1) {
          return 'comp-one'
      }
      else if(this.compNbr === 2) {
          return 'comp-two'
      }
      else {
        return 'comp-three'
      }
    }
  },
  watch: {
    compNbr(val) {
      if(val>3) {
        this.compNbr = 1;
      }
    }
  }
}
  </script>

  <template>
    <h1>Food</h1>
    <p>My favorite food has a badge attached to it.</p>

  <!-- Badge/Favorite Food Emit-->
  <div id="wrapper">
     <food-item
       v-for=" x in foods"
       :key="x.name"
       :food-name="x.name"
       :food-desc="x.desc"
       :is-favorite="x.favorite"
       @toggle-favorite="receiveEmit"/>
    </div>
    
    <!--Todo-->
    <h3>Todo List</h3>
    <p>List of foods to buy</p>
    <ul>
    <todo-item
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen;"/>
    </ul>
    <input placeholder="Add Items Here" v-model="newItem" @keydown.enter="addItem">
    <button @click="addItem">Add</button>
    <br><br>

    <!--Card Slots-->
    <!--
    <h4>Food Item Slots</h4>
    <p>Food Card Slots</p>
    <div id="wrapper">
      <slot-comp v-for="x in foods">
        <img v-bind:src="x.url">
        <h5>{{ x.name }}</h5>
      </slot-comp>
    </div>
    -->

    <!-- Composition Slots-->
    <div>
      <slot-comp v-slot="food">
         <hr>
        <h6>{{ food.foodName }}<img v-bind:src="food.foodUrl"></h6>
        <p class="greenP">{{ food.foodDesc }}</p>
      </slot-comp>
    </div>

    <h6>Dynamic Components</h6>
    <label><input type="radio" name="rgbComp" v-model="compName" :value="'comp-one'">One</label>
    <label><input type="radio" name="rgbComp" v-model="compName" :value="'comp-two'">Two</label>
    <label><input type="radio" name="rgbComp" v-model="compName" :value="'comp-three'">Three</label>
    <p>Switch Component</p>
    <button @click="compNbr++">
      Next component
    </button>
    <KeepAlive include="CompOne, CompThree">
      <component :is="activeComp"></component>
    </KeepAlive>
  </template>

<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  width: 130px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}

#app > div:hover {
  cursor: pointer;
}

#app {
  width: 300px;
}
#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#wrapper > div {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}

ul {
  width: 150px;
  list-style-type: none;
  padding-left: 10px;
}

h6, .greenP {
  background-color: lightgreen;
  padding: 10px;
  margin: 0;
}

img {
  float: right;
  height: 70px;
  margin-left: 10px;
}
</style>
