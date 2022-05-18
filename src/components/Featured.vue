<template>
    <section id="featured">
      <div>
        <h2>Projects Coming Soon</h2>

        <div class="shape circle1-2"></div>
        <div class="shape circle2-2"></div>
        <div class="shape circle3-2"></div>
        <div class="shape circle4-2"></div>
        <div class="shape circle5-2"></div>
        <div class="shape circle6-2"></div>
        <div class="shape triangle1-2"></div>
        <div class="shape triangle2-2"></div>
        <div class="shape triangle3-2"></div>
        <div class="shape triangle-up1-2"></div>
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

@import "@/assets/scss/variables.scss";

#featured {

  margin: 70px 0px;
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    border-radius: 5px;

    h2{
      text-align: center;

    }
  }

  .circle1-2{
        width: 100px;
        height:100px;
        background: $mid-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        left: 0;
        top: 0;
    }

    .circle2-2{
        width: 56px;
        height: 56px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        left: 30%;
        top: 66%;
    }

    .circle3-2{
        width: 56px;
        height: 56px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 20%;
        top: 30%;
    }

    .circle4-2{
        width: 20px;
        height: 20px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        left: 30%;
        top: 21%;
    }

    .circle5-2{
        width: 8px;
        height: 8px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 5%;
        top: 30%;
    }

    .circle6-2{
        width: 8px;
        height: 8px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 12%;
        top: 64%;
    }

    .circle-2{
        width: 140px;
        height: 140px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
    }

    .triangle1-2{
        border-bottom: 14px solid $neon-purple; 
        border-left: 8px solid transparent; 
        border-right: 8px solid transparent;
        right: 15%;
        top: 15%;
    }

    .triangle2-2{
        border-bottom: 28px solid $neon-purple; 
        border-left: 16px solid transparent; 
        border-right: 16px solid transparent;
        right: 2%;
        top: 70%;
    }

    .triangle3-2{
        border-bottom: 70px solid $mid-purple; 
        border-left: 42px solid transparent; 
        border-right: 42px solid transparent;
        left: 8%;
        top: 45%;
    }

    .triangle-up1-2{
        border-top: 28px solid $dark-purple;
        border-left: 16px solid transparent; 
        border-right: 16px solid transparent;
        right: 35%;
        top: 10%;
    }
  
}



</style>