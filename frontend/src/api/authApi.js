import axios from 'axios'

const authApi = ([rut, password, remember_me]) => axios.post('https://crm.redcapital.cl/api/login', {
   rut,
   password,
   remember_me
})
   .then(response => {
      return response
   })
   .catch(error => {
      return { data: { message: error } }
   });
export default authApi;