<template >
<v-card >
  <v-card v-for="(post,index) in posts" :key="post._id"
    max-width="344"
    class="mx-auto "
    
    
  >
    <v-list-item >

    
      <v-list-item-content>
        <v-list-item-title class="headline">{{++index}}. Blog Yazısı </v-list-item-title>
        <v-list-item-subtitle>{{post.author}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    

    <v-card-text>
     {{post.content}}
    </v-card-text>
<v-card-text>
     {{post.timestamp}}
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Oku
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Daha Sonra Oku
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-card>
 
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
        url:"http://localhost:3000/api/posts/all",
        posts:[]
        }
    },
    methods:{
        
    },
    created(){
          axios.get(this.url).then((res) =>{
              console.log(res);
              console.log(res.data.result);
              this.posts = res.data.result;
          })
          
              
         

        }


}
</script>