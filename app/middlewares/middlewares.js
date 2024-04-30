const clients = require('../config/accounts')
module.exports = {
    identifyUSer,
    isCardActive
}


function identifyUSer(req, res, next) {
    const iban = req.iban || req.params.iban || req.query.iban;
    const clientExists = clients.find(client => iban === client.iban);
    console.log(clientExists);
    if (!clientExists) {
        res.status(200).json({ message: 'Client doesnt exist' })
    }
    req.iban = iban;
    next();
}

function isCardActive(req, res, next) {
    const iban = req.iban || req.params.iban || req.query.iban;
    const client = clients.filter(client => client.iban === iban)[0];
    const isCardActive = client.card.active;
    if (!isCardActive) {
        res.status(200).json({ message: 'The clients card is not active' })
    }

    next();


}