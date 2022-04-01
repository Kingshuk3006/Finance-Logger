import { Invoice } from "./classes/invoice.js";
import { ListTemplete } from "./classes/listtemplete.js";
import { Payment } from "./classes/payment.js";
const ul = document.querySelector("ul");
const list = new ListTemplete(ul);
const form = document.querySelector(".new-item-form");
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber); //asNumber == converting to number
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
