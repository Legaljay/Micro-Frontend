import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`; //faker.datatype.number()

document.querySelector('#dev-cart').innerHTML = cartText;