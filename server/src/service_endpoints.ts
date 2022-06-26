import express from 'express';
const router = express.Router();

let CompanyTable = {}

function CompanyEntry(price, name) {
    this.userList = []
    this.price = price;
    this.name = name;
}

function UesrEntry() {
    this.associatedCompanies = [];
}

// Test get request
router.get('/company/setup', (req, res) => {
    console.log("Params are here ",req.query);
    
    res.send('Company route');
})

// Setup enterprise subscription service for a wallet address
router.post('/company/setup', (req, res) => {
    let companyID = req.body["eth_address"];
    let newEntry = new CompanyEntry(Number(req.body["price"]), req.body["name"])
    // validate new entry's keys
    for (let key of  Object.keys(newEntry)){
        if (key !== "userList") {
            if (!newEntry[key]) {
                // Error handling from front end
                res.sendStatus(400);
            }
        }
    }
    CompanyTable[companyID] = newEntry
    res.sendStatus(200);
})

// After wallet login, check if that eth addy has a subscription setup
// Uses query strings
router.get('/company/check_exist', (req, res) => {
    if (String(req.query["eth_address"]) in CompanyTable) {
        res.send(true)
    } else {
        res.send(false)
    }
})

// Get enterprise wallet's associated users
// Uses query strings
router.get('/company/get_users', (req, res) => {
    let requestedCompany = req.query["eth_address"]
    let companyID = String(req.query["eth_address"])
    if (companyID in CompanyTable) {
        res.send(CompanyTable[companyID]["userList"])
    } else {
        res.send([])
    }
})

module.exports = router;