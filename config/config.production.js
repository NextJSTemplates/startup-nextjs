const localhost = 'localhost';

const production = {
    isProduction: true,
    localhost,
    API_BACKEND_URL: `http://${localhost}:8000/api`, // change this later
}

module.exports = production;
