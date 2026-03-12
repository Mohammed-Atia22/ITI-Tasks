class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

class Store {
    constructor(name) {
        this.name = name;
        this.products = [];
        this.users = [];
    }
    subscribe(user) {
        this.users.push(user);
    }
    unsubscribe(duser) {
        this.users = this.users.filter(user => user !== duser);
    }
    notifyAll(product) {
        this.users.forEach(user =>
        user.NotifyMe(product.price,product.name)
    );
}
    addProduct(product) {
        this.products.push(product);
        this.notifyAll(product);
    }
}
    class storeUser {
        constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    NotifyMe(productPrice, productName) {
        console.log(
        ` hello ${this.userName} ,our store added ${productName} with price :${productPrice}`
        );
    }
}

const store = new Store("store");

const user1 = new storeUser("mohamed", "1234");
const user2 = new storeUser("ahmed", "abcd");

store.subscribe(user1);
store.subscribe(user2);

const p1 = new Product("Laptop", 1500);
const p2 = new Product("Headphones", 200);

// store.addProduct(p1);
// store.addProduct(p2);

store.notifyAll(p1);
store.notifyAll(p2);
