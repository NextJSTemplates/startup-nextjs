import axios from './axios';

export async function register(data) {
    const response = await axios.post(
        'account/register/',
        data,
    );
    return response;
}

export async function login(data) {
    const response = await axios.post(
        'account/login/',
        data,
    );

    localStorage.setItem('token', response.data['token'])
    localStorage.setItem('username', data['username'])

    return response;
}

export async function logout() {
    token = localStorage.getItem('token');

    const response = await axios.post(
        'account/logout/',
        {},
        {
            headers: {
                'Authorization': `Token ${token}`,
            }
        }
    )

    localStorage.removeItem('token');

    return response;
}
