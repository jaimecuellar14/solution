module.exports = {
    getAllMovements,
    getDeposits,
    getWithDrawals,
    test
}

function test(req, res, next) {
    res.json({ message: 'Test' })
}

function getAllMovements(req, res, next) {
    res.json({ message: 'Here is all of your movements' })
}

function getDeposits(req, res, next) {
    res.json({ message: 'Here is all of the deposits' })

}

function getWithDrawals(req, res, next) {
    res.json({ message: 'Here is all of the withdrawals' })

}