<template>
  <main>
    <HeroSection/>
    <AboutSection/>
    <FeaturedSection/>
    <ContactSection/>
  </main>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSection from '@/components/Hero.vue'; // @ is an alias to /src
import AboutSection from '@/components/About.vue';
import FeaturedSection from '@/components/Featured.vue';
import ContactSection from '@/components/Contact.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
    AboutSection,
    FeaturedSection,
    ContactSection,
  },
});
</script>

<style lang="scss">
  main{
    padding: 0 150px;
    margin: 0 auto;
    max-width: 1800px;
  }

  @media screen and (max-width:768px) {

    body.blur main > * {
      filter: blur(4px) brightness(0.8);
    }       

    main{
        padding: 0 60px;
    }
  }

  @media screen and (max-width:575px) {
    main{
      padding: 0 40px;
    }
  }

</style>
