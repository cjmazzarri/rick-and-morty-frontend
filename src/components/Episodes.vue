<template>
  <div class="episodes">
    <h1>Episodes</h1>
    <p v-if="episodes">LOADING...</p>
    <p>{{JSON.stringify(episodes)}}</p>
  </div>
</template>

<script>
import GetEpisodesBySeason from '../graphql/GetEpisodesBySeason.gql'

export default {
  name: 'Episodes',
  apollo: {
    episodes: {
      // graphql query
      query: GetEpisodesBySeason,
      variables: {
        episodeId: 'S01'
      }
    },
  },
  data() {
    return {
      type: "private",
      filterType: "all",
      episodes: [],
    }
   }
}
</script>