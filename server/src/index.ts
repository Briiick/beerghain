import express from 'express';
const bodyParser = require('body-parser');
var serviceRoutes = require('./service_endpoints');
const app = express();
const port = 8080;
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', serviceRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
