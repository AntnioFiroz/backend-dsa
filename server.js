const express = require('./src/config/express');
const config = require('./src/config/env/config');
const connectDB = require('./src/config/database/dbConnection')
const app = express();
connectDB();
const PORT = 9000

// app.get('/', (req, res) => {
//   res.send('hello world new latest firoz' )
// })
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});


app.listen(process.env.PORT || config.port, function () {
    console.log('----------------------------------------------------------');
    console.log(`Server listening at port  http://localhost:${PORT}`);
    console.log('Time : ' + new Date());
    console.log('----------------------------------------------------------');
});
