<template>
   <nav>
    <div class="nav-wrapper">
      <img src="https://www.khipu.com/wp-content/uploads/2021/09/Red-Capital.png" alt="image" class="vue-logo">
      <ul id="nav-mobile" class="right hide-on-small-only">
        <li><router-link to='/home'>INICIO</router-link></li>
        <li><router-link to='/about'>QUIENES SOMOS</router-link></li>
        <li><router-link to='/post'>PROGRAMAS</router-link></li>
        <li><router-link to='/how'>COMO FUNCIONA</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.vue-logo{
   float:left;
   height: 100%;
   margin-left: 5px;
}
</style>