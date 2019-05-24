<template>
   <div id="app">
      <v-container>
    <v-form
      ref="form"
      lazy-validation
    >
    <v-layout align-center>
        <v-flex md9>
      <v-text-field
        v-model="title"
        label="Add todo"
        required
      ></v-text-field>
      </v-flex>
      <v-flex md3>
      <v-btn
        color=""
        @click="onSubmit"
      >
        Add
      </v-btn>
      </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
    name: "AddTodo",
    data(){
      return {
      title: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      onSubmit(e){
        e.preventDefault();
        this.addTodo(this.title);
      }
    }
}
</script>

<style>

</style>
