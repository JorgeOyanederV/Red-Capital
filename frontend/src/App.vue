<template>
<div>
  <Navbar/>
  <botton class="btn red">hola</botton>
</div>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
