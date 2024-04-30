module.exports = {
    wireTransfer
}

function wireTransfer(req, res, next) {
    res.json({ message: 'Wire transfer succesful' });
}