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
  }
  
</style>
