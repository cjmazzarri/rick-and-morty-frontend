<template>
  <div class="episodes">
    <div v-on:click="clickedRow(1)" class="seasonRow">
      <p class="title">Season 1</p>
    </div>

    <div v-if="this.showSeasons[0]" class="episodesRow">
      <p v-if="episodes.loading">LOADING...</p>
      <li class="episodeItem" v-for="(episode, index) in this.episodes.results" :key="episode.id">
        <p>{{`${index + 1}. ${episode.name}`}}</p>
        <p>{{episode.air_date}}</p>
        <hr>
      </li>
    </div>

    <div v-on:click="clickedRow(2)" class="seasonRow">
      <p class="title">Season 2</p>
    </div>

    <div v-if="this.showSeasons[1]" class="episodesRow">
      <p v-if="episodes.loading">LOADING...</p>
      <li class="episodeItem" v-for="(episode, index) in this.episodes.results" :key="episode.id">
        <p>{{`${index + 1}. ${episode.name}`}}</p>
        <p>{{episode.air_date}}</p>
        <hr>
      </li>
    </div>

    <div v-on:click="clickedRow(3)" class="seasonRow">
      <p class="title">Season 3</p>
    </div>
    
    <div v-if="this.showSeasons[2]" class="episodesRow">
      <p v-if="episodes.loading">LOADING...</p>
      <li class="episodeItem" v-for="(episode, index) in this.episodes.results" :key="episode.id">
        <p>{{`${index + 1}. ${episode.name}`}}</p>
        <p>{{episode.air_date}}</p>
        <hr>
      </li>
    </div>

    <div v-on:click="clickedRow(4)" class="seasonRow">
      <p class="title">Season 4</p>
    </div>

    <div v-if="this.showSeasons[3]" class="episodesRow">
      <p v-if="episodes.loading">LOADING...</p>
      <li class="episodeItem" v-for="(episode, index) in this.episodes.results" :key="episode.id">
        <p>{{`${index + 1}. ${episode.name}`}}</p>
        <p>{{episode.air_date}}</p>
        <hr>
      </li>
    </div>

  </div>
</template>

<style scoped lang="scss">

.episodes {
  position: absolute;
  top: 30%;
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.seasonRow {
  min-height: 20%;
  box-sizing: border-box;
  width: 75%;
  border-bottom: 2px solid #00D3FF;
  display: flex;
  align-items: center;
  transition: all .2s ease-in-out;
  &:hover {
    background: #00D3FF;
    color: #070B28;
    cursor: pointer;
  }
}

.episodesRow {
  height: auto;
  width: 75%;
  padding: 1rem 0 1rem 2rem;
}

.episodeItem {
  padding: 1rem 0;
}

.title {
  font-size: 2rem;
  font-weight: 500;
}

ul {
  box-sizing: border-box;
  widtH: 80%;
  padding: 0;
}

li {
  list-style: none;
}

hr {
  background: #00D3FF;
  height: 1px;
  border: 0;
}

</style>

<script>
import Vue from 'vue';
import gql from 'graphql-tag'
import GetEpisodesBySeason from '../graphql/GetEpisodesBySeason.gql'

export default {
  name: 'Episodes',
  apollo: {
    episodes: {
      // graphql query
      query: gql`query PingMessage($seasonId: String) {
        episodes (page: 1, filter: {episode: $seasonId} ) {
          info {
            count
          }
          results {
            id,
            name,
            air_date,
            episode
          }
        }
      }`,
      variables() {
         return {
          seasonId: this.seasonNumber,
        }
      },
    },
  },
  data() {
    return {
      type: "private",
      filterType: "all",
      seasonNumber: 'S01',
      episodes: [],
      showSeasons: [false, false, false, false],
    }
  },
  methods: {
    clickedRow(season) {
      for (let i = 0; i < this.showSeasons.length; i++) {
        if(i == season - 1) {
          Vue.set(this.showSeasons, i, !this.showSeasons[i]);
          this.seasonNumber = this.seasonNumber[0] + this.seasonNumber[1] + season;
        }
        else {
          Vue.set(this.showSeasons, i, false);
        }
      }
    }
  }
}
</script>