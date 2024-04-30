const clients = require('../config/accounts')
module.exports = {
    identifyUSer,
    isCardActive,
    checkClient,
    checkIfCardIsActive
}


function identifyUSer(req, res, next) {
    const iban = req.iban || req.params.iban || req.query.iban;
    const clientExists = checkClient(iban, clients);
    if (!clientExists) {
        res.status(200).json({ message: 'Client doesnt exist' })
    }
    req.iban = iban;
    next();
}

function isCardActive(req, res, next) {
    const iban = req.iban || req.params.iban || req.query.iban;
    const isCardActive = checkIfCardIsActive(iban, clients);

    if (!isCardActive) {
        res.status(200).json({ message: 'The clients card is not active' })
    }
    next();
}



function checkClient(iban, clients) {
    const clientExists = clients.find(client => iban === client.iban);
    if (!clientExists) {
        return false;
    }
    return true
}

function checkIfCardIsActive(iban, clients) {
    const client = clients.filter(client => client.iban === iban)[0];
    const isCardActive = client.card.active;
    return isCardActive;
}