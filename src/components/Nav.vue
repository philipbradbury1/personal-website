<template>
    <nav>
        <div>
            <router-link @click="$emit('link-clicked')" to="/#about">About</router-link>
            <router-link @click="$emit('link-clicked')" to="/#featured">Projects</router-link>
            <router-link @click="$emit('link-clicked')" to="/#work">Work</router-link>
            <router-link @click="$emit('link-clicked')" to="/#contact">Contact</router-link>
            <div>
                <a href="./static/resume.pdf" class="button" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutSection',

  setup(props , {emit}){
      emit('link-clicked');
  }

});
</script>


<style lang="scss">

    @import "@/assets/scss/variables.scss";

    nav {
        padding: 30px;

        >div{
            display: flex;   
            align-items: center;
        }

        a {
            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;
            margin-right: 20px;
            margin-left: 20px;

            &.router-link-exact-active {
            color: $neon-purple;
            }
        }

        .button{
            background-color: $neon-purple;
            color: #ffffff;
            border-radius: 5px;
            padding: 0.75rem 1rem;
        }


        @media screen and (max-width:768px) {

            div{
                display: flex;   
                align-items: center;
                flex-direction: column;

                a{
                    padding-bottom: 40px;
                }

                div{
                    margin-top: 20px;
                }
            }
            
        }
    }

</style>