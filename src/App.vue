<template lang="pug">
  div#app
    header
      app-header
    main
      app-container
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';

export default {
  name: 'App',
  components: {
    'app-container': AppContainer,
    'app-header': AppHeader,
  },
};

</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body{
    background-color: #fff;
  }
  ol, ul{
    list-style: none;
  }
  table{
    border-spacing: 0;
  }
  img{
    display: block;
    max-width: 100%;
    height: auto;
    border:0;
  }
  .button{
    width: 100%;
    min-height: 40px;
    background-color: #fff;
    color: #fff;
    display: inline-block;
    user-select:none;
    padding: 0;
    margin: 0;
    border: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    cursor: pointer;
    &:active,
    &:focus,
    &:hover{
      outline: 0;
      background: #fff;
    }
  }
</style>
