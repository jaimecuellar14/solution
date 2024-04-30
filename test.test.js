const middlewares = require('./app/middlewares/middlewares');
const clients = require('./app/config/accounts');
test('Existance of a client account throught IBAN', () => {
    expect(middlewares.checkClient('2', clients).toBe(false))
})