<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <h3>Swivel Form </h3>
    </div>

    <!-- <img src="./assets/logo.png"> -->
    <!-- the router outlet, where all matched components would be viewed 
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>-->

    <div class="app-wrapper">
      <div id="app">
        <component :is="layout">

          <router-view></router-view>
        </component>
      </div>
    </div>


    <div class="demo-footer">
    </div>
  </div>
</template>

<script>
  const default_layout = "default";

  export default {
    name: 'App',
    computed: {
      layout(){
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
  }
</script>

<style lang="scss">
@import './src/assets/scss/main.scss';
</style>
