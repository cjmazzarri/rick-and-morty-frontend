<template>
  <div class="main">
    <div class="characters">
      <div class="char-card" v-for="(character, index) in this.characters.results" :key="index">
        <div class="top">
          <img class="image" :src="character.image">
        </div>
        <div class="bottom">
          {{character.name}}
        </div>       
      </div>
    </div>
  </div>
  <!--TODO: Paginacion!-->
</template>

<style scoped lang="scss">
.main{
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  position: absolute;
  top: 15%;
  box-sizing: border-box;
  padding-bottom: 1.5%;
}
.characters{
  display: grid;
  gap: 6vh 9rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  width: 80%;
}

.char-card {
  background: #1A1F47;
  border: 0.45vh solid #00D3FF;
  //width: 19.05vw;
  height: 42.04vh;
  border-radius: 20px;
  min-width: 20%;
  
  .top{
    height: 80%;
  }

  .bottom{
    font-size: 1.5rem;
    display: flex;
    text-align: center;
    height: 20%;
    justify-content: center;
    align-items: center;
  }

  .image{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
}
</style>

<script>
import Vue from "vue";
import gql from "graphql-tag";
export default {
  name: "Characters",
  apollo: {
    characters: {
      query: gql`
        query CharactersByPage($page: Int!){
          characters(page: $page) {
            info {
              pages
            }
            results {
              image
              name
              status
            }
          }
        }
      `,
      variables() {
        return {
          page: this.page
        }
      }
    },
  },
  data (){
    return {
      page: 1,
      characters: []
    }
  }
};
</script>