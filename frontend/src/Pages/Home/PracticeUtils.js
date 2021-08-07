import axios from "axios";


const todoRequests=axios.create({
    baseURL:"http://localhost:5000/"
})


export {todoRequests}