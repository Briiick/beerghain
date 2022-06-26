import express from 'express';
const router = express.Router();

// var automatedRoutes = require('./testRoutes/automated');
// // Import my test routes into the path '/test'
// app.use('/tests', testRoutes);

router.get('/company/setup', (req, res) => {
    res.send('Company route');
})
 
module.exports = router;