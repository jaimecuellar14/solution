module.exports = {
    getAll,
    getDeposits,
    getWithdrawals,
    test
}

const users = require('../../config/accounts')

function test(req, res, next) {
    res.json({ message: 'All movements' })
}


function getAll(req, res, next) {
    const client = users.filter(client => client.iban === req.iban);
    try {
        const clientMovements = client[0].movements;
        res.status(200).json({ message: 'Here is your account movements', movements: clientMovements })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

function getDeposits(req, res, next) {
    try {
        const clientMovements = client[0].movements;
        const depositsMovements = clientMovements.filter(movements => movements.action === 'deposit');
        res.status(200).json({ message: 'Here is your account deposits', movements: depositsMovements })
    } catch (err) {
        res.status(500).json({ error: err })
    }

}

function getWithdrawals(req, res, next) {
    try {
        const clientMovements = client[0].movements;
        const withdrawalMovements = clientMovements.filter(movements => movements.action === 'withdraw');
        res.status(200).json({ message: 'Here is your account withdrawals', movements: withdrawalMovements })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}