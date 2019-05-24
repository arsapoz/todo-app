<template>
  <div id="app">
    <v-app id="inspire">
      <v-container grid-list-xl>
        <div class="legend">
          <span>Double click to mark as complete</span>
          <span>
            <span class="incomplete-box"></span> = incomplete
          </span>
          <span>
            <span class="complete-box"></span> = Complete
          </span>
        </div>
        <v-layout row wrap>
          <v-flex @dblclick="onDblClick(todo)" v-for="todo in allTodos" :key="todo.id" xs12 sm6 md4>
            <v-card class="mx-auto" color="#26c6da" dark v-bind:class="{'is-complete':todo.completed}">
              <v-card-title>
                <v-icon large left>mdi-twitter</v-icon>
                <span class="title font-weight-light">{{ todo.id }}</span>
              </v-card-title>

              <v-card-text>{{ todo.title}}</v-card-text>

              <v-card-actions>
                <v-list-tile class="grow">
                  <v-list-tile-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>User {{ todo.userId}}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-layout align-center justify-end>
                    <v-icon @click="deleteTodo(todo.id)" class="ma-3">delete</v-icon>
                  </v-layout>
                </v-list-tile>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style>
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-attachment: navy;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-attachment: rgb(68, 68, 255);
}
.is-complete {
  background: rgb(19, 85, 93);
}
</style>
