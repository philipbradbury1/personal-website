<template>
    <header>
        <div>
          <img src="@/assets/images/logo.png" class="logo-img" alt="Logo">  
        </div>
        <div class="main-menu">
          <NavSection/>
        </div>
        <div class="mobile-menu-container">
         <button class="btn-menu" aria-label="Hamburger Menu" :class="{ 'close': showMenu}" @click="menuToggle">
           <div class="ham-btn-container">
            <div class="ham-btn">
            </div>
          </div>
         </button>
         <div class="mobile-menu" :class="{ 'showMenu': showMenu}">
          <div>
            <NavSection @link-clicked="menuToggle" />
          </div>
        </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue'
import NavSection from '@/components/Nav.vue';

export default defineComponent({
  name: 'HeaderMain',
  components: {
    NavSection
  },

  setup(){

      let showMenu = ref(false);

      const menuToggle = () => {

        showMenu.value = !showMenu.value;
        document.body.style.overflow = showMenu.value ? 'hidden' : '';
        showMenu.value ? document.body.classList.add('blur') : document.body.classList.remove('blur');
      
      }

      return{
        showMenu,
        menuToggle
      }
    
  }

});
</script>


<style lang="scss">

  @import "@/assets/scss/variables.scss";
 
  header{
    display: flex;
    justify-content: space-between;
    height: 80px;
    position: fixed;
    z-index: 11;
    width: 100%;
    align-items: center;
    background-color: $navy-blue;

    .logo-img{
      width:60px;
      margin-top:10px;
      margin-left: 48px;
    }

    .mobile-menu{
      display: none;
    }

    .mobile-menu-container{
      display: none;
    }
} 


@media screen and (max-width:768px) {

  header{
    .logo-img{
      width:35px;
    }

    .mobile-menu.showMenu{
      display: block;
    } 

    .mobile-menu-container{
      display: block;
    }

  }

 

  .btn-menu{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    border: 0;
    background: transparent;
    position: relative;
    margin-right: 48px;
    cursor: pointer;
  }

  .ham-btn-container{
    height: 24px;
    position: relative;
    width: 25px;
  }

  .ham-btn{
    height: 2px;
    width: 25px;
    background-color: $neon-purple;
    position: absolute;
    top: 50%;
    
  }

  .ham-btn:before,
  .ham-btn:after{
    content: "";
    display: block;
    height: 2px;
    width: 25px;
    background-color: $neon-purple;
    position: absolute;
  }

  .ham-btn:before{
    top: -10px;
  }

  .ham-btn:after{
    bottom: -10px;
  }

  .btn-menu.close .ham-btn{
    transform: rotate(-45deg);
  }

  .btn-menu.close .ham-btn:before{
    transform: rotate(90deg);
    top: 0;
  }

  .btn-menu.close .ham-btn:after{
    display: none;
  }

  .main-menu{
    display: none;
  }

  .mobile-menu > div{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: $navy-blue;
    width: 70vw;
    height: 100vh;
    z-index: 10;
    position: fixed;
    right: 0px;
    top: 0px;
    bottom: 0px;
  }


}



</style>