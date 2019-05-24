<template>
  <div>
<!-- 
    <h1 class="pa-5">Add todo</h1> -->
    <AddTodo></AddTodo>

    <h1 class="pa-5">Todos</h1>
    <Todos></Todos>
  </div>
</template>

<script>
  import Todos from '../components/Todos'
  import AddTodo from '../components/AddTodo'

  export default {
    components: {
      Todos,
      AddTodo
    }
  }
</script>
