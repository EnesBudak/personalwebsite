<template>
       <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo Name"
          class="shrink mt-1 "
          contain
          min-width="100"
  
          src="@/assets/logo.png"
          width="100"
        />
          
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/EnesBudak/blog"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    
}
</script>