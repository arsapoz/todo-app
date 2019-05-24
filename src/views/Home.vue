<template>
  <div>
<!-- 
    <h1 class="pa-5">Add todo</h1> -->
    <AddTodo></AddTodo>

    <h1 class="pa-5">Todos</h1>
    <FilterTodos></FilterTodos>
    <Todos></Todos>
  </div>
</template>

<script>
  import Todos from '../components/Todos'
  import AddTodo from '../components/AddTodo'
  import FilterTodos from '../components/FilterTodos'

  export default {
    components: {
      Todos,
      AddTodo,
      FilterTodos
    }
  }
</script>
