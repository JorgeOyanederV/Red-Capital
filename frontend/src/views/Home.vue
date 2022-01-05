<template>
  <div class="bg">
    <div class="container">
      <form @submit="log" class="form">
        <div class="icon">
         <img src="@/assets/sesion.png" alt="logo">
         <h1>INICIO DE SESION</h1>
        </div>
        <input type="text" placeholder="USUARIO" v-model="user">
        <input type="password" placeholder="CONTRASEÑA" v-model="password">
        <button type="submit" class="btn">LOGIN</button>
      </form>
    </div>
  </div>
    
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Home',
  data(){
    return{
      user: '',
      password: ''
    }
  },
  methods:{
    ...mapActions(['loggin']),
    async log(e){
      e.preventDefault()
      const response = await this.$store.dispatch('loggin', [this.user ,this.password])
      if( response == true )
        console.log(response)
        // console.log(this.$store.state.rut)
      else console.log(response)
    }
  }
}
</script>

<style scoped>
.bg{
  height: 90vh;
  width: 100%;
  background: red;
}
.container{
  max-width: 1200px;
  height: 100%;
  background: blue;
  margin: auto;
  padding-top: 5%;
}
.form{
  padding: 2rem;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.5rem;
  height:90%;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.form h1{
  font-size: 2rem;
  text-align: center;
  border-bottom: 2px solid #191FB6;
  margin: 0 25%;
}
input{
  text-align: center;
  border: none;
  border-radius: 0.3rem;
  background: rgb(153, 153, 153);
  color: white;
  font-size: 2rem;
  height: 4rem;
  
}
input::placeholder{
  color: white;
}
.btn{
  border:none;
  border-radius: 0.3rem;
  background-color: rgb(65, 65, 65);
  color: white;
  font-size: 2rem;
  height: 6rem;
  font-weight: 500;
}
.icon{
  padding-bottom: 1rem;
}
img{
  height: 10rem;
}
</style>
