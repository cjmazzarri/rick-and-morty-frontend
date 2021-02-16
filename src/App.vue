<template>
  <div id="app">
    <Nav/>
    <div class="contentWrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav';
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">

  $celestico: #00D3FF;
  $fondo: #070B28;

  @font-face {
    font-family: 'Freestyle Script Regular';
    src: url('../src/fonts/FREESCPT.woff') format('woff');
  }
  @font-face {
    font-family: 'Gilroy';
    src: url('../src/fonts/Gilroy-Regular.woff') format('woff');
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    margin: 0;
    background: $fondo;
    color: $celestico;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Gilroy';
  }
  #app {
    height: 100%;
  }
  .contentWrapper {
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
