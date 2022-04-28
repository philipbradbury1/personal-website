<template>
    <section class="hero">
        <p>Hello, My name is</p>
        <h1>Philip Bradbury</h1>
        <h3>I like to create things for the web</h3>
        <div>
            <p>I'm a web developer that creates immersive front-end (and occasionally back-end) digital experiences. Currently, I'm working with a team building a SaaS application.  </p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection',

});
</script>


<style lang="scss">


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
        margin-top: 80px;
    }

</style>
