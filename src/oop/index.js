class Customer{
    constructor(id,customerNumber){
        // this demek bu örnekte customer'a karşılık gelir
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, "12345");
// prototyping
// bir nesneye bambaşka bir özellik ekleme
customer.name = "Murat Kurtboğan"
console.log(customer.name);

Customer.bisey = "bişey";
console.log(Customer.bisey);

console.log(customer.customerNumber);

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber);
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber);
        this.companyName = companyName;
    }
}