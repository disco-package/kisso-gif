const axios = require('axios');
module.exports = async()=>
  {
const kiss =await axios.get('https://nekos.life/api/v2/img/kiss');
const kisso = kiss.data.url
return kisso
}
