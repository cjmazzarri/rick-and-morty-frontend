<template>
  <div class="navigation">
    <div id="nav">
      <router-link to="/">Rick And Morty</router-link>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/characters">Characters</router-link>
      <router-link to="/episodes">Episodes</router-link>
    </div>
    <div id="side">
      <div class="side-menu" v-bind:class="{ activeMenu: this.isActive }">
        <div class="side-link">
          <button @click="linkMethod('/')">Rick And Morty</button>
        </div>
        <div class="side-link">
          <button @click="linkMethod('/locations')">Locations</button>
        </div>
        <div class="side-link">
          <button @click="linkMethod('/characters')">Characters</button>
        </div>
        <div class="side-link">
          <button @click="linkMethod('/episodes')">Episodes</button>
        </div>
      </div>
      <div class="menu-container" @click="toggleSideMenu()" v-bind:class="{ change: this.isActive }">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleSideMenu() {
      this.isActive = !this.isActive;
    },
    linkMethod(route) {
      this.isActive = !this.isActive;
      if(route !== '/')
        this.$router.push(route);
    },
  }
}
</script>

<style lang="scss">
.navigation {
  height: 20%;
  display: flex;
}

$rosaico: #FF0080;
$azulico: #070B28;

#nav {
  width: 100%;
  height: 100%;
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

@media screen and (max-width: 700px) {
  #nav {
    display: none;
  }
}

//Side Menu

#side {
  z-index: 1;
}

.side-menu {
  display: none;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: $azulico;
}

.activeMenu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    font-family: 'Gilroy';
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    text-decoration: none;
    color: $rosaico;
    font-size: 1.5rem;
    transition: all .2s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: .6;
    }
    &:focus {
      outline: none;
    }
  }
}

.side-link {
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

//Hamburguer Button

.menu-container {
  display: none;
  cursor: pointer;
  padding: 1.5rem;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
  background-color: $rosaico;
  z-index: 10;
}

.change {
  padding: 1.5rem;
  display: inline-block;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
  z-index: 10;
  background-color: $rosaico;
}

.change .bar2 {opacity: 0;
z-index: 10;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
  background-color: $rosaico;
  z-index: 10;
}


@media screen and (max-width: 700px) {
  .navigation {
    height: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .menu-container {
    display: inline-block;
  }
}

</style>