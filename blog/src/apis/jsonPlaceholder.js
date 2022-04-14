import axios from "axios";


export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
    //By doing this, I won't have to specify baseURL everytime i make an api request
    //This should only have baseURL not '/post' or '/users', etc.
})