<template>
    <section class="hero" >
        <p>Hello, My name is</p>
        <h1>Philip Bradbury</h1>
        <h3>I like to create things for the web</h3>
        <div>
            <p>I'm a web developer that creates immersive front-end (and occasionally back-end) digital experiences. Currently, I'm working with a team building a SaaS application.  </p>
        </div>

        <div class="shape circle1"></div>
        <div class="shape circle2"></div>
        <div class="shape circle3"></div>
        <div class="shape circle4"></div>
        <div class="shape circle5"></div>
        <div class="shape circle6"></div>
        <div class="shape triangle1"></div>
        <div class="shape triangle2"></div>
        <div class="shape triangle3"></div>
        <div class="shape triangle-up1"></div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection',

});
</script>


<style lang="scss">

@import "@/assets/scss/variables.scss";

.hero{
    position: relative;
}

    .shape{
        position: absolute;
        z-index: -1;
        
    }

    .circle1{
        width: 140px;
        height: 140px;
        background: $mid-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 0;
        top: 0;
    }

    .circle2{
        width: 56px;
        height: 56px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 30%;
        top: 66%;
    }

    .circle3{
        width: 56px;
        height: 56px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 20%;
        top: 30%;
    }

    .circle4{
        width: 20px;
        height: 20px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 30%;
        top: 21%;
    }

    .circle5{
        width: 8px;
        height: 8px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 5%;
        top: 30%;
    }

    .circle6{
        width: 8px;
        height: 8px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 12%;
        top: 64%;
    }




    .circle{
        width: 140px;
        height: 140px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
    }

    .triangle1{
        border-bottom: 14px solid $neon-purple; 
        border-left: 8px solid transparent; 
        border-right: 8px solid transparent;
        right: 15%;
        top: 15%;
    }

    .triangle2{
        border-bottom: 28px solid $neon-purple; 
        border-left: 16px solid transparent; 
        border-right: 16px solid transparent;
        right: 2%;
        top: 70%;
    }

    .triangle3{
        border-bottom: 70px solid $mid-purple; 
        border-left: 42px solid transparent; 
        border-right: 42px solid transparent;
        right: 8%;
        top: 45%;
    }


    .triangle-up1{
        border-top: 28px solid $dark-purple;
        border-left: 16px solid transparent; 
        border-right: 16px solid transparent;
        right: 35%;
        top: 10%;
    }




    h1{
        font-size: 70px;
        margin: 0;
    }

    h3{
        font-size: 60px;
        margin: 0;
    }

    p{
        max-width: 540px;
    }

    .hero{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        //background-image: url('@/assets/images/waves3.png');
        //background-repeat: no-repeat;
        //background-attachment: fixed;
        //background-position: right top;
        //background-size: 50% auto ;
    }

</style>
