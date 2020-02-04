import axios from 'axios';

export const axiosWithAuth=()=>{
    return axios.create({
        baseURL: 'https://business-card-collector.herokuapp.com/',
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
}
export default axiosWithAuth;