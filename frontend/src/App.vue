<template>
  <div class="app">
    <div class="navbar">
      <Navbar />
    </div>

    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/shared/Navbar'

export default {
  data(){
    return {
      }
    
  },
  components:{
    Navbar
  },
  
}
</script>

<style scoped>
.app{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
