import {Invoice} from "./classes/invoice.js"
import { ListTemplete } from "./classes/listtemplete.js"
import {Payment} from "./classes/payment.js"
import { HasFormatter } from "./interfaces/hasformatter"


const ul = document.querySelector("ul")!
const list = new ListTemplete(ul)

const form = document.querySelector(".new-item-form") as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement

const tofrom = document.querySelector('#tofrom') as HTMLSelectElement

const details = document.querySelector('#details') as HTMLInputElement

const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener("submit", (e: Event)=>{
    e.preventDefault()
    let doc:HasFormatter;
    if (type.value === "invoice"){
       doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)   //asNumber == converting to number
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})