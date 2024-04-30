const pin1 = process.env.PIN1;
const pin2 = process.env.PIN2;



const accountsAsTempDB = [
    {
        name: 'Client 1',
        lastName: 'Client 1 Lastname',
        balance: 300,
        movements: [{ action: 'deposit', ammount: 10, lastBalance: 290, newBalance: 300 }],
        card: { number: '1234', isCreditCard: 0, pin: pin1, active: 1 },
        iban: 'GB33BUKB20201555555555',
    },
    {
        name: 'John',
        lastName: 'Doe',
        balance: 810,
        movements: [
            { action: 'deposit', ammount: 100, lastBalance: 800, newBalance: 900 },
            { action: 'withdraw', ammount: 90, lastBalance: 900, newBalance: 810 }
        ],
        card: { number: '1234', isCreditCard: 1, pin: pin2, active: 0 },
        iban: 'GB94BARC10201530093459'
    },
]

module.exports = accountsAsTempDB;