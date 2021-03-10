<template>
  <div class="main">
    <div class="load" v-if="$apollo.loading">
        <img src="../assets/portal.png" class="loading" v-if="$apollo.loading" />
      </div>
    <div class="characters">      
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
    <div v-if="!$apollo.loading" class="pagination">
      <button class="page-btn" @click="prevPage">prev</button>
      <p>{{ this.page }}</p>
      <button class="page-btn" @click="nextPage">next</button>
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

.loading {
  //TODO: Center and size properly
    width: 25%;
    animation: rotation 2s linear infinite;
    position: absolute;    
    display: flex;
    align-items: center;
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
}

.pagination{
  //TODO: Add styles
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
          page: this.page,
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