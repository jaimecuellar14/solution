module.exports = {
    deposit,
    withdraw,
    test
}

function test(req, res, next) {
    res.json({ message: 'Test' })
}



function deposit(req, res, next) {
    res.json({ message: 'Deposit of money' })

}

function withdraw(req, res, next) {
    res.json({ message: 'Withdraw money' })

}