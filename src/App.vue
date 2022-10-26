<script setup>
    import Main from './components/main.vue'
</script>

<template>
<Main ></Main>
  <router-link class="link" to="/">Home</router-link> |
  <router-link class="link" to="/create">Create</router-link> |
  <router-link class="link" to="/read">Read</router-link> |
  <router-link class="link" to="/update">Update</router-link> | 
  <router-link class="link" to="/delete">Delete</router-link>
  <router-view></router-view>
</template>

<style>
.link {
  text-decoration: none;
  color: yellowgreen;
}
</style>
