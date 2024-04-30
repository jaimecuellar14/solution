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
    res.json({ message: 'All movements', data: users })

}

function getDeposits(req, res, next) {
    res.json({ message: 'Deposit of money' })

}

function getWithdrawals(req, res, next) {
    res.json({ message: 'Withdraw money' })

}