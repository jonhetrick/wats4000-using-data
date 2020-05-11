<template>
  <div id="app">
    <h1>Searching for Words</h1>
    <div id="nav">
      <router-link v-bind:to="{name: 'rhymesaurus'}">Rhymesaurus</router-link> | 
      <router-link v-bind:to="{name: 'soundmachine'}">Soundmachine</router-link>    
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
h1 {
  color: #42b983;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
