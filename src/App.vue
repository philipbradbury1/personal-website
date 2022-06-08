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

@import "@/assets/scss/variables.scss";

body{
  margin: 0;
  padding: 0;
  background-color: $navy-blue;
  color: $grey;
  
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
