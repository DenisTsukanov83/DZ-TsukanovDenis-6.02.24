const cleave = new Cleave('.card', {
    creditCard: true,
    creditCardStrictMode: true,
    onCreditCardTypeChanged: function (type) {
    }
});

const cleave2 = new Cleave('.phone', {
    phone: true,
    phoneRegionCode: 'RU'
});

const cleave3 = new Cleave('.date', {
    date: true,
    delimiter: '-',
    datePattern: ['Y', 'm', 'd']
});