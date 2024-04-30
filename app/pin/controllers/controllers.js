module.exports = {
    changePin
}

function changePin(req, res, next) {
    res.json({ message: 'Changed pin' });
}