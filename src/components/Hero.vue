<template>
    <section class="hero" >
        <p>Hello, My name is</p>
        <h1>Philip Bradbury</h1>
        <h2>I like to create things for the web</h2>
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
        right: 0px;
        top: 85px;
    }

    .circle2{
        width: 56px;
        height: 56px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 30%;
        top: 78%;
    }

    .circle3{
        width: 56px;
        height: 56px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 20%;
        top: 37%;
    }

    .circle4{
        width: 20px;
        height: 20px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 30%;
        top: 28%;
    }

    .circle5{
        width: 8px;
        height: 8px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 5%;
        top: 40%;
    }

    .circle6{
        width: 8px;
        height: 8px;
        background: $neon-purple; 
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
        right: 12%;
        top: 75%;
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
        right: 18%;
        top: 24%;
    }

    .triangle2{
        border-bottom: 28px solid $neon-purple; 
        border-left: 16px solid transparent; 
        border-right: 16px solid transparent;
        right: 2%;
        top: 82%;
    }

    .triangle3{
        border-bottom: 70px solid $mid-purple; 
        border-left: 42px solid transparent; 
        border-right: 42px solid transparent;
        right: 8%;
        top: 54%;
    }

    .triangle-up1{
        border-top: 28px solid $dark-purple;
        border-left: 16px solid transparent; 
        border-right: 16px solid transparent;
        right: 35%;
        top: 20%;
    }

    h1{
        font-size: 70px;
        margin: 0;
    }

    h2{
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
    }

    @media screen and (max-width:991px) {

        .circle2{
            right: 56%
        }

        .circle3{
            right: 36%
        }

        .circle4{
            right: 63%
        }

        .circle6{
            right: 36%
        }
        
        .triangle1{
            right: 35%;
        }

        .triangle-up1{
            right: 77%;
        }

    }


    @media screen and (max-width:768px) {

        h1{
            font-size: 40px;
        }

        h2{
            font-size: 26px;
        }

        .circle2{
            right: 56%
        }

        .circle3{
            right: 36%
        }

        .circle4{
            right: 63%
        }

        .circle6{
            right: 36%
        }
        
        .triangle1{
            right: 35%;
        }

        .triangle-up1{
            right: 77%;
        }
    }


    @media screen and (max-width:576px) {

        
        .circle2{
            right: 64%
        }

        .circle3{
            right: 46%
        }

        .circle4{
            right: 73%
        }

        .circle6{
            right: 46%
        }
        
        .triangle1{
            right: 45%;
        }

        .triangle-up1{
            right: 87%;
        }
    
    }

</style>
