const app = require('express')();
require('dotenv').config();

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3001');
});




