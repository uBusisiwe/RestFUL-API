<script>
export default {
  data() {
    return {
      textInput:"",
      numInput:"",
      ethnicitySelected: "",
      formData: "",
    };
  },
  methods: {
    autofillData() {
      this.data = "Predefined content to auto-fill";
    },
  },
};
</script>

<template>
  <h1>Auto-fill Form</h1>
  <br>
  <form @submit.prevent="formData">
   <div id="wrapper">
    <p>Enter Your Name</p>
     <input type="text" v-model="textInput" placeholder="Name" value="">

    <p>Enter Your Surname</p>
     <input type="text" v-model="textInput" placeholder="Surname" value="">

    <p>Enter Your Age</p>
     <input type="number" v-model="numInput" placeholder="Age" value="">

    <p>Enter Your Location</p>
     <input type="text" v-model="textInput" placeholder="Location" value="">

    <p>Select Ethnicity:</p>
      <select v-model="ethnicitySelected" id="ethnicity">
       <label for="ethnicity"></label>
       <option disabled value="">Select One</option>
       <option>African</option>
       <option>Indian</option>
       <option>White</option>
       <option>Colored</option>
       <option>Other</option>
      </select>
    <br><br>

    <button type="submit">Submit</button>
  </div>
</form>
</template>

<style scoped>

div {
   border: block white 1px;
   border-radius: 10px;
   padding: 0 20px 20px 20px;
   margin-top: 20px;
   display: inline-block;

}

button {
  margin: 10px;
  display: block;

}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

}


</style>
