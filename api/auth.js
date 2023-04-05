import axios from './axios';

export async function register(data) {
    const response = await axios.post(
        'account/register/',
        data,
    );

    localStorage.setItem('token', response.data['token'])
    localStorage.setItem('username', data['username'])

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
    const token = localStorage.getItem('token');

    if (token) {
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
        localStorage.removeItem('username');

        return response;
    }
}
