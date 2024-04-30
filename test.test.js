const middlewares = require('./app/middlewares/middlewares');
const clients = require('./app/config/accounts');
test('Existance of a client account throught IBAN', () => {
    expect(middlewares.checkClient('1', clients)).toBe(false);
    expect(middlewares.checkClient('GB33BUKB20201555555555', clients)).toBe(true);
})


test('Credict card active test', () => {
    expect(middlewares.checkIfCardIsActive('GB33BUKB20201555555555', clients)).toBe(1);
    expect(middlewares.checkIfCardIsActive('GB94BARC10201530093459', clients)).toBe(0);
})