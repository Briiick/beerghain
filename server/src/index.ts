import express from 'express';
const bodyParser = require('body-parser');
var companyRoutes = require('./company_endpoints');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', companyRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
