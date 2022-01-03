<template>
  <Navbar/>
  <router-view></router-view>
</template>

<script>
import  Navbar  from './shared/Navbar'
import M from 'materialize-css'

export default {
  components:{
    Navbar
  },
  mounted () {
    M.AutoInit()
},
}
</script>

<style>

</style>
