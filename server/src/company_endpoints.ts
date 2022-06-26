import express from 'express';
const router = express.Router();

let CompanyTable = []

function CompanyEntry(eth_address, price, name) {
    this.eth_address = eth_address;
    this.userList = []
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
    // validate new entry's keys
    for (let key of  Object.keys(newEntry)){
        if (key !== "userList") {
            if (!newEntry[key]) {
                // Error handling from front end
                res.sendStatus(400);
            }
        }
    }
    CompanyTable.push(newEntry)
    res.sendStatus(200);
})


router.get('/company/check_exist', (req, res) => {
    let companyID = req.query["eth_address"]
    for (let company of CompanyTable) {
        if(company["eth_address"] === companyID) {
            res.send(true);
            return;
        }
    }
    res.send(false)
})

router.get('/company/get_users', (req, res) => {
    let requestedCompany = req.query["eth_address"]
    for (let company of CompanyTable) {
        if(company["eth_address"] === requestedCompany) {
            res.send(company["userList"]);
            return;
        }
    }
})
 
module.exports = router;