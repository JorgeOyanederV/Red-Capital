import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts"

const postApi = () => axios.get(url)
   .then((response) => response.data)
   .catch(error => {
      return { data: { message: error } }
   });
export default postApi;