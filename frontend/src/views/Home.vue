<template>
  <div class="bg">
    <div class="container">
      <form @submit="log" class="form">
        <div class="icon">
         <img src="@/assets/sesion.png" alt="logo">
         <h1>INICIO DE SESION</h1>
        </div>
        <input type="text" placeholder="USUARIO" v-model="user" @keyup="formatRut" maxlength='12' required>
        <input type="password" placeholder="CONTRASEÑA" v-model="password" required autocomplete="false">
        <button type="submit" class="btn">LOGIN</button>
      </form>
    </div>
  </div>
    
</template>

<script>
import { mapActions } from 'vuex'
import { validate, clean, format, getCheckDigit } from 'rut.js'
export default {
  name: 'Home',
  data(){
    return{
      user: '',
      password: '',
    }
  },
  methods:{
    ...mapActions(['loggin']),

    async log(e){
      e.preventDefault()
      // verify if the rut is valid before the request
      if (!validate(this.user)) { return alert('Rut invalido')}
      const response = await this.$store.dispatch('loggin', [this.user ,this.password])
      console.log(this.$store.state.rut)  
    },
    formatRut(){
      this.user = format(this.user)
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  gap: 1rem;
}
.form h1{
  font-size: 2.5rem;
  text-align: center;
  border-bottom: 2px solid #191FB6;
  margin: 0 20%;
  font-weight: 500;
}
input{
  text-align: center;
  border: none;
  border-radius: 0.3rem;
  background: rgb(177, 177, 177);
  color: white;
  font-size: 1.2rem;
  height: 4rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
input::placeholder{
  color: white;
  font-weight: 300;
}
.btn{
  border:none;
  border-radius: 0.3rem;
  background-color: rgb(65, 65, 65);
  color: white;
  font-size: 1.5rem;
  height: 6rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 300;
}
.icon{
  padding-bottom: 1rem;
}
img{
  height: 7rem;
}
</style>
