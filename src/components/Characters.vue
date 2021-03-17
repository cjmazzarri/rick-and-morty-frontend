<template>
  <div class="main">
    <div class="load" v-if="!$apollo.loading">
        <img src="../assets/portal.png" class="loading-pic">
      </div>
    <div v-if="!$apollo.loading" class="pagination-top">
      <button class="page-btn" @click="prevPage">Previous</button>
      <p>Page {{ this.page }} of {{this.characters.info.pages}}</p>
      <button class="page-btn" @click="nextPage">Next</button>
    </div>
    <div v-if="!$apollo.loading" class="characters">      
      <div
        class="char-card"
        v-for="(character, index) in this.characters.results"
        :key="index"
      >
        <div class="top">
          <img class="image" :src="character.image" />
        </div>
        <div class="bottom">
          {{ character.name }}
        </div>
      </div>
    </div>
    <div v-if="!$apollo.loading" class="pagination-bot">
      <button class="page-btn" @click="prevPage">Previous</button>
      <p>Page {{ this.page }} of {{this.characters.info.pages}}</p>
      <button class="page-btn" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  position: absolute;
  top: 15%;
  box-sizing: border-box;
  padding-bottom: 1.5%;
}
.characters {
  display: grid;
  gap: 6vh 9rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  width: 80%;
}

.char-card {
  background: #1a1f47;
  border: 0.45vh solid #00d3ff;
  //width: 19.05vw;
  height: 42.04vh;
  border-radius: 20px;
  min-width: 20%;

  .top {
    height: 80%;
  }

  .bottom {
    font-size: 1.5rem;
    display: flex;
    text-align: center;
    height: 20%;
    justify-content: center;
    align-items: center;
  }

  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
}

.loading-pic {
  //TODO: Center and size properly
    animation: rotation 15s linear infinite;     
  }
  @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

.load{
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
}

.pagination-bot{
  display: grid;
  place-items: center;
  grid-template-columns: 40% auto 40%;
  width: 100%;
  padding-top: 2vh;
}

.pagination-top{
  display: grid;
  place-items: center;
  grid-template-columns: 40% auto 40%;
  width: 100%;
  padding-bottom: 2vh;
}

.page-btn{
  background-color: #1a1f47;
  border-color: #00d3ff;
  border-radius: 10px;
  color: #00d3ff;
  font-size: 1rem;
  font-family: 'Gilroy';
  
  
}
</style>

<script>
import gql from "graphql-tag";
import Vue from "vue";
export default {
  name: "Characters",
  apollo: {
    characters: {
      query: gql`
        query CharactersByPage($page: Int!) {
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
        };
      },
    },
  },
  data() {
    return {
      page: 1,
      characters: [],
    };
  },
  methods: {
    nextPage() {
      if (this.page < this.characters.info.pages) {
        this.characters = [];
        this.page += 1;
        console.log(this.page);
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.characters = [];
        this.page = this.page - 1;
        console.log(this.page);
      }
    },
  },
};
</script>