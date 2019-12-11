<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Login from './components/Login'
export default {
  components: {
    Login
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    background: url('./assets/Pozadina.jpg') no-repeat center fixed;
    background-size: cover;
    background-position: center center;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: -10;
    margin: 0;
  }
</style>
