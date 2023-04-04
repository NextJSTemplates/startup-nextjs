const localhost = 'localhost';

const development = {
    isProduction: false,
    localhost,
    API_BACKEND_URL: `http://${localhost}:8000/api`,
}

module.exports = development;
