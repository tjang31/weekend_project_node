// import express from node_modules 
let express = require('express'); // doesnt do anything but gives us access to it!
// make the application
let app = express(); // used express and ran it! 
const PORT = 5000;
//serve our files
app.use(express.static('server/public'));
// run server!
app.listen(PORT, () => {
    console.log('app is running on port 5000')
})