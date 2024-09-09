import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

const myProducts = document.querySelector('#my-products');
const myCarts = document.querySelector('#my-cart');
productsMount(myProducts);
cartMount(myCarts);