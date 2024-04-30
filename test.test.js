const middlewares = require('./app/middlewares/middlewares');

test('Existance of a client account throught IBAN', () => {
    expect(middlewares.checkClient('2').toBe(false))
})