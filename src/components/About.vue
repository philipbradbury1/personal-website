<template>
    <section id="about">

        <div>
            <h3>About Me</h3>
        </div>

        <div class="about__container">
            <div class="about__text">

                <p>Hello, my name is Philip and I'm a web developer. I've had an interest in technology and engineering from a very young age. I got into building static websites when I was about 13 years old when I started to backwards engineer other websites to see how they were built. </p>
                <p>Today I work for a web agency/start-up based in Huddersfield where we develop a SaaS CRM application. We also build stunning and engaging websites to create an immersive experiance to increase user ingagement.    </p>
                <p>Here is a list of some of the technologies I use:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript/TypeScript</li>
                    <li>Angular</li>
                    <li>Vue</li>
                    <li>WordPress</li>
                    <li>PHP</li>
                    <li>Docker</li>
                </ul>
            
            </div>

            <div class="about__img text-center">
                <img src="@/assets/images/profile.jpg" alt="Image of Philip Bradbury">
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutSection',

});
</script>


<style lang="scss">

@import "@/assets/scss/variables.scss";

#about{
    margin: 80px 70px 0px;

    .about__container{
        flex-direction: row;
        display: flex;
        justify-content: space-between;
    }

    .about__text{
        vertical-align:top;
        flex-basis: 45%;

        li{
            position: relative;
            padding-left:  20px;
        }

        li::before {
            content: "\25CF";
            position: absolute;
            left: 0px;
            color: $neon-purple;
            font-size: 18px;
            line-height: 22px;
        }
    }

    .about__img{
        flex-basis: 45%;
            

        img{
            padding: 0 50px;
            box-sizing: border-box;
            width: 400px;
            max-width: 100%;
            height: auto;
        }

    }

    h3{
        font-size: 28px;
    }

    ul{
        display: grid;
        grid-template-columns: 200px min(120px, 100%);
        list-style-type: none;
        padding: 0;
    }

    img{
        max-width: 100%;
    }
}

 @media screen and (max-width:992px) {

    #about{

        .about__img{
            img{
                margin-top: 50px;
                padding: 0 20px;

            }
        }

    }
}


  @media screen and (max-width:768px) {

    #about{

        margin: 40px 0px 0px;

        .about__container{
            flex-direction: column;
        }     

        .about__text,
        .about__img{
           width: 100%;
           flex-basis: 100%;
        }
    }
  }

</style>
