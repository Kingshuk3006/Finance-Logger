export class Payment {
    constructor(client, details, amount) {
        this.recipient = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
