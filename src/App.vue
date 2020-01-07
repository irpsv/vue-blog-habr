<template>
  <div id="app">
    <template v-if="is404">
      <router-view></router-view>
    </template>
    
    <template v-else>
      <Header></Header>
      <main>
        <b-container>
          <router-view></router-view>
        </b-container>
      </main>
    </template>
  </div>
</template>

<script>
import '@/styles/index.scss';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    is404() {
      return this.$route.name === '404';
    },
  },
}
</script>