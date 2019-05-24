<template>
   <div id="app">
      <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <v-layout align-center>
        <v-flex md9>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Add todo"
        required
      ></v-text-field>
      </v-flex>
      <v-flex md3>
      <v-btn
        color=""
        @click="reset"
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
export default {
    name: "AddTodo"
}
</script>

<style>

</style>
