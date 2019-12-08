<template>
       <div>
           <vue-particles color="#171717"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#171717"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push" > </vue-particles>
           
        <div class="absolutely-centered">
            <span class="title">Enes BUDAK</span>
            <br>
            <div class="captions " >
              <span class="caption" id="caption-3">Web Developer</span>
            


            </div>
            <br>
            <div class="links">
                <div class="link"><a target="_blank" href="./cv.pdf">
                    <i class="fa fa-user"></i>
                    <span class="link-text">CV(Eklenecek)</span>
                    </a>
                </div>
                <br class="rwd-break">
                <div class="link"><a target="_blank" href="https://www.linkedin.com/in/enes-budak-263057141/">
                   <i class="fab fa-linkedin"></i>
                   
                    <span class="link-text">Linkedin</span>
                    </a>
                </div>
                <br class="rwd-break">
                <div class="link"><a target="_blank" href="https://github.com/EnesBudak">
                  <i class="fab fa-github"></i>
                    <span class="link-text">Github</span>
                    </a>
                </div>
                 <br class="rwd-break">
                <div class="link"><a target="_blank" href="https://trello.com/b/GxXyHzY3/development">
                    <i class="fab fa-trello"></i>
                    <span class="link-text">Trello</span>
                    </a>
                </div>
                <br class="rwd-break">
                <div class="link"><a target="_blank" href="mailto:enesbudak.mdbf17@iste.edu.tr">
                    <i class="fa fa-envelope"></i>
                    <span class="link-text">İletişim</span>
                    </a>
                </div>
                <br class="rwd-break">

               <div class="link"><a target="_blank" href="#">
                  <i class="fas fa-blog"></i>
                    <span class="link-text">Blog</span>
                    </a>
                </div>
                <br class="rwd-break">

            </div>
        </div>
        <!-- partial -->
       </div>
</template>
<script>
export default {
    data(){
        return{
       
        }
    },

    methods:{
        
    },
   
}


</script>

