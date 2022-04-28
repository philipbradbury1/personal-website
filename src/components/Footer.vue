<template>
    <footer>

        <ul class="social-links">
            <li><a href="https://github.com/philipbradbury1" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href="https://uk.linkedin.com/in/philip-b-b27b7b23?trk=public_profile_samename-profile" target="_blank" rel="noreferrer">Linkedin</a></li>
        </ul>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterMain',

});
</script>


<style lang="scss">

    footer{
        margin-bottom: 50px;
    }

    .social-links{
        display: flex;
        list-style: none;
        justify-content: center;
        padding: 0;
    }

    .social-links a{
        text-decoration: none;
        margin: 0 10px;
    }

</style>
