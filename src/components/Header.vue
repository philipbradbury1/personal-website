<template>
    <header>

        <div>
          <img  src="@/assets/images/logo.png" class="logo-img" style="">  
        </div>

        <nav>
            <div>
                <router-link to="/#about">About</router-link>
                <router-link to="/#featured">Projects</router-link>
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

@import "@/assets/scss/variables.scss";
 
header{
    display: flex;
    justify-content: space-between;
    height: 80px;

    .logo-img{
      width:75px;
      margin-top:10px;
      margin-left: 48px;
    }
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