const app = require('.')
require('dotenv').config();


app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor rodando na Porta 4000');
  }
); 


