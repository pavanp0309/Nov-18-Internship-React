import axios from 'axios';

// Creating the Instance of an Api for fetching the Data from backend server
const api=axios.create({
    baseURL:"http://localhost:5000",
    headers:"application/json"
})

export default api