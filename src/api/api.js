import * as axios from 'axios';

export const AssortmentAPI = {
    getProducts(currentPage, pageSize, filter, sortParameter, sortDirection) {
        return axios.get(`http://127.0.0.1:8000/products?page=${currentPage}&count=${pageSize}&brands=${filter.brands}&sortParameter=${sortParameter}&sortDirection=${sortDirection}`)
        .then(response => {
            return response.data; 
        });
    },

    getBrands() {
        return axios.get(`http://127.0.0.1:8000/brands`)
        .then(response => {
            return response.data;
        });
    }
}

export const AuthAPI = {
    logIn(login, password) {
        return axios.post('http://127.0.0.1:8000/login', {login, password})
        .then((response) => {  
            return response.data;
        });
    },
}
