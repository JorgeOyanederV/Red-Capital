<template>
    <div class="nav-wrapper">
      <img src="https://www.khipu.com/wp-content/uploads/2021/09/Red-Capital.png" alt="image" >
      <div class="links">
        <router-link to='/home'>INICIO</router-link>
        <router-link to='/about'>QUIENES SOMOS</router-link>
        <router-link to='/post'>PROGRAMAS</router-link>
        <router-link to='/how'>COMO FUNCIONA</router-link>
      </div>
    </div>
</template>

<script>

export default {
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.nav-wrapper{
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 0.5rem 2rem;
}
.links{
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: 2rem;
}
</style>