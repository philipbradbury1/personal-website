<template>
  <HeaderMain/>
  <router-view/>
  <FooterMain/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from '@/components/Header.vue';
import FooterMain from '@/components/Footer.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderMain,
    FooterMain,
  },
});
</script>

<style lang="scss">

$navy-blue: #160F30;
$neon-purple: #9C19E0;
$grey: #DBDBEB;

body{
  margin: 0;
  padding: 0;
  background-color: $navy-blue;
  color: $grey;
  max-width: 1800px;
  padding: 0 150px;
  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  p{
    font-size: 16px;
  }

}

</style>
