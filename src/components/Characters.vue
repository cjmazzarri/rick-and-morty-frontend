<template>
  <div class="characters">
    {{JSON.stringify(characters)}}
    <!--div v-for="(character, index) in this.characters.results" :key="index">
      <p>{{character.name}}</p>
      <img :src="character.image">
    </div-->
    <div class="char-card">
      <div class="top">

      </div>
      <div class="bottom">

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.char-card {
  background: #1A1F47
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