import express from 'express';
const router = express.Router();

var CompanyTable = []

function CompanyEntry(eth_address, price, name) {
    this.eth_address = eth_address;
    this.price = price;
    this.name = name;
}

// Test get request
router.get('/company/setup', (req, res) => {
    console.log("Params are here ",req.query);
    
    res.send('Company route');
})

router.post('/company/setup', (req, res) => {
    let newEntry = new CompanyEntry(req.body["eth_address"], Number(req.body["price"]), req.body["name"])
    console.log(newEntry)
    // validate new entry's keys
    Object.keys(newEntry).forEach((key, _) => {
        if (newEntry[key] !== null && newEntry[key] !== NaN) {
            res.sendStatus(400);
        }
    })

    CompanyTable.push(newEntry)
    res.sendStatus(200);
})
 
module.exports = router;