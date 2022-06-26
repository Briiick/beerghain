import express from 'express';
const router = express.Router();

let CompanyTable = {}

function CompanyEntry(price, name) {
    this.userList = {}
    this.price = price;
    this.name = name;
}

function UesrEntry(timestamp) {
    this.timeStamp = timestamp
}

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
    let companyID = String(req.query["eth_address"])
    if (companyID in CompanyTable) {
        res.send(true)
    } else {
        res.send(false)
    }
})

// Get enterprise wallet's associated users
// Uses query strings
router.get('/company/get_users', (req, res) => {
    let companyID = String(req.query["eth_address"])
    if (companyID in CompanyTable) {
        res.send(CompanyTable[companyID]["userList"])
    } else {
        res.send({})
    }
})

// For a user's info for a company given company ID and user ID
// Checks if user is currently subscribed to the company
// Uses body & params strings
// return 404 if company hasn't been created yet, or returns either user details or null
router.post('/user/subscriber_info/:companyId', (req, res) => {
    let companyID = req.params.companyId;
    // If the companyID doens't exist in DB, send 404
    if (!CompanyTable[companyID]) {
        res.sendStatus(404)
        return
    }
    
    let userID = String(req.body["eth_address"]);
    if(userID in CompanyTable[companyID]["userList"]) {
        // Should show the user's sub info relative to the company
        console.log("Found user",CompanyTable[companyID]["userList"][userID])
        res.send(CompanyTable[companyID]["userList"][userID])
        return
    } else {
        // Should show subscribe page on front end
        res.send(null)
        return
    }
})

// For a user's info for a company given company ID and user ID
// Adds user to company's subscription
// Uses body & param strings
router.post('/user/subscribe/:companyId', (req, res) => {
    let companyID = req.params.companyId;
    let userID = String(req.body["eth_address"]);
    let newEntry = new UesrEntry(new Date().getTime())
    
    CompanyTable[companyID]["userList"][userID] = newEntry
    res.sendStatus(200);
})

// For a user's info for a company given company ID and user ID
// Remove user from company's list of users
// Uses body & param strings
router.post('/user/cancel/:companyId', (req, res) => {
    let companyID = req.params.companyId;
    let userID = String(req.body["eth_address"]);

    delete CompanyTable[companyID]["userList"][userID]
    res.sendStatus(200)
})

module.exports = router;
