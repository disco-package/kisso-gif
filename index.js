const axios = require('axios');
module.exports.gifkiss = () => {
const kiss = axios.get('https://nekos.life/api/v2/img/kiss');
const kisso = kiss.data.url
}
module.exports.gifhug = () => {
const hug1 = axios.get('https://nekos.life/api/v2/img/hug');
const hug = hug1.data.url
}