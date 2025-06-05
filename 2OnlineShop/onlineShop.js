class OnlineShop {
    constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if(this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        } else {
            this.products.push({product, quantity});
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`
        }
    }
    quantityCheck(product, minimalQuantity) {
        let searchedProduct = this.products.find(p => p.product == product);
        if(!searchedProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if(minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        if(minimalQuantity <= searchedProduct.quantity) {
            return `You have enough from product ${product}.`
        } else {
            let difference = Math.abs(searchedProduct.quantity - minimalQuantity);
            searchedProduct.quantity = minimalQuantity;

            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        let searchedProduct = this.products.find(p => p.product == product);
        if(!searchedProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else {
            searchedProduct.quantity--;
            let quantity = searchedProduct.quantity;
            this.sales.push({ product, quantity});
            return `The ${product} has been successfully sold.`
        }
    }
   
    revision() {
        let revisionArray = [];
        if(this.sales.length === 0) {
           throw new Error("There are no sales today!");
        } else {  
        revisionArray.push(`You sold ${this.sales.length} products today!`);
        
        }
        revisionArray.push('Products in the warehouse:');
        this.products.forEach(p => revisionArray.push(`${p.product}-${p.quantity} more left`));
        return revisionArray.join('\n');

    } 
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());



