import axios from './axios';

export async function register(data) {
    try {
        const response = await axios.post(
            'account/register/',
            data,
        );
        return response;
    } catch (error) {
        return error;
    }
}

export async function login(data) {
    try{
        const response = await axios.post(
            'account/login/',
            data,
        );
        return response;
    } catch (error) {
        return error;
    }
}
