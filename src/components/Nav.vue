<template>
  <div id="nav">
    <router-link to="/">Rick And Morty</router-link>
    <router-link to="/locations">Locations</router-link>
    <router-link to="/characters">Characters</router-link>
    <router-link to="/episodes">Episodes</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style lang="scss">
  $rosaico: #FF0080;
#nav {
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      box-sizing: border-box;
      font-size: 1.4rem;
      font-weight: bold;
      color: $rosaico;
      text-decoration: none;
      margin-bottom: 1em;
      padding-bottom: 3px;

      &.router-link-exact-active {
        border-bottom: 1px solid $rosaico;
      }
    }
  }
</style>