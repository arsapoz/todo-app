<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to todo app
        </h1>
        <p class="subheading font-weight-regular">
          App is made for testing purposes<br>
          <br>Developed by :
          <a href="http://nikola-arsic.com/" target="_blank">  Nikola Arsic</a>
        </p>
      </v-flex>

     
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
     
    })
  }
</script>

<style>

</style>
