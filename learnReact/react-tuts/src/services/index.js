import axios from 'axios'
import apis from './apis';

const ajax = axios.create({
  baseURL:apis.baseURL
})




export const getTodos = () =>{
  return ajax.get(apis.getTodos)
}
