/// Function construction
function Invoices(name, position, id = 0) {
    this.name = name
    this.position = position
    this.id = id
    this.isReport = false
    this.isAdved = false
    this.availableAmount = 0

    Invoices.static = function () {
        return 'I do not have access to instance'
    }
}

Invoices.prototype.getInfo = function () {
    return `Hello ${this.name}, your position ${this.position}. Id : ${this.id}`
}
Invoices.prototype.getName = function () {
    return `Hello ${this.name}`
}

function AccountantInvoice(name, position, id, isReport) {
    Invoices.call(this, name, position, id)
    this.isReport = isReport
}
AccountantInvoice.prototype = Object.create(Invoices.prototype)
AccountantInvoice.prototype.constructor = AccountantInvoice
AccountantInvoice.prototype.getReport = function () {
    return this.isReport
        ? `Hello ${this.name} you can get a report`
        : `Hello ${this.name} you can't get a report`
}

const accountant1 = new AccountantInvoice('Sergeevna', 'accountant', 4, true)
const accountant2 = new AccountantInvoice('Petrovna', 'accountant', 5, true)
const accountant3 = new AccountantInvoice(
    'Valentinovna',
    'accountant',
    6,
    false
)
console.log('Ya')
console.log('Ya')

console.log(accountant1)
console.log(accountant1.getInfo())
console.log(accountant1.getReport())
console.log(accountant3.getReport())

function CEOInvoice(name, position, id, isAdved) {
    Invoices.call(this, name, position, id)
    this.isAdved = isAdved
}

CEOInvoice.prototype = Object.create(Invoices.prototype)
CEOInvoice.prototype.constructor = CEOInvoice
CEOInvoice.prototype.printAdved = function () {
    return this.isAdved
        ? `Hello ${this.name} you can advertise`
        : `Hello ${this.name} you can't advertise`
}

const seo1 = new CEOInvoice('Ivan', 'seo specialist', 21, true)
const seo2 = new CEOInvoice('Ivanka', 'seo specialist', 22, false)
console.log(seo1)
console.log(seo1.printAdved())
console.log(seo2.printAdved())

function CustomerInvoice(name, position, id, availableAmount) {
    Invoices.call(this, name, position, id)
    this.availableAmount = availableAmount
}
CustomerInvoice.prototype = Object.create(Invoices.prototype)
CustomerInvoice.prototype.constructor = CustomerInvoice
CustomerInvoice.prototype.printAccount = function () {
    return `Hello ${this.name} you have ${this.availableAmount}$`
}

const customer1 = new CustomerInvoice('Vitaliy', 'Customer', 599, 10000)
const customer2 = new CustomerInvoice('Vitaliy', 'Customer', 599, 10000)

console.log(customer1)
console.log(customer1.getInfo())
console.log(customer1.printAccount())

/// Class
console.log('///////////////////////////////////////////////////')
class ClassInvoices {
    constructor(name, position, id) {
        this.name = name
        this.position = position
        this.id = id
        this.isReport = false
        this.isAdved = false
        this.availableAmount = 0
    }
    getInfo() {
        return `Hello ${this.name}, your position ${this.position}. Id : ${this.id}`
    }
    getName() {
        return `Hello ${this.name}`
    }
    static staticMethod() {
        return 'I do not have access to instance'
    }
}

class ClassAccountantInvoice extends ClassInvoices {
    constructor(name, position, id, isReport) {
        super(name, position, id)
        this.isReport = isReport
    }
    getReport() {
        return this.isReport
            ? `Hello ${this.name} you can get a report`
            : `Hello ${this.name} you can't get a report`
    }
}

const classAccountant = new ClassAccountantInvoice(
    'Sergeevna',
    'accountant',
    4,
    true
)

console.log(classAccountant)

class ClassSEOInvoice extends ClassInvoices {
    constructor(name, position, id, isAdved) {
        super(name, position, id)
        this.isAdved = isAdved
    }
    printAdved() {
        return this.isAdved
            ? `Hello ${this.name} you can advertise`
            : `Hello ${this.name} you can't advertise`
    }
}

const classSeo = new ClassSEOInvoice('Ivan', 'seo specialist', 21, true)
console.log(classSeo)

class ClassCustomerInvoice extends ClassInvoices {
    constructor(name, position, id, availableAmount) {
        super(name, position, id)
        this.availableAmount = availableAmount
    }
    printAccount() {
        return `Hello ${this.name} you have ${this.availableAmount}$`
    }
}

const classUser = new ClassCustomerInvoice('Vitaliy', 'Customer', 599, 10000)

console.log(classUser.printAccount())
