<template>
    <section id="featured">
      <div>
        <h2>Projects Coming Soon</h2>
      </div>
        
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactSection',

});
</script>


<style lang="scss">

#featured {

  margin: 70px 0px;

  div{
    border: 2px solid #9C19E0;
    border-radius: 5px;
    height: 300px;


    h2{
      padding-top: 100px;
      text-align: center;
    }
  }
  

  
}



</style>