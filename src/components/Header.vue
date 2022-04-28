<template>
    <header>

        <div>
        </div>

        <nav>
            <div>
                <router-link to="/#about">About</router-link>
                <router-link to="/#projects">Projects</router-link>
                <router-link to="/#work">Work</router-link>
                <router-link to="/#contact">Contact</router-link>
                <div>
                    <a href="./static/resume.pdf" class="button" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </nav>
    
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderMain',

});
</script>


<style lang="scss">
 
//$navy-blue: #160F30;
// $neon-purple: #9C19E0;
//$grey: #DBDBEB;
 
header{
    display: flex;
    justify-content: space-between;
    height: 80px;
} 

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
}

</style>