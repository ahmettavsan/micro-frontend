import { mount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container!");

const el = document.querySelector("#container-products");
mount(el);

const cartEl = document.querySelector("#dev-cart");
cartMount(cartEl);

console.log(cart);
