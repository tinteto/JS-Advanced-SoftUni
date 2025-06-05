class FashionRetailInventory {
    constructor(storeHouse, location) {
        this.storeHouse = storeHouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct (productName, size, quantity, price) {
        let existingProduct = this.productStock.find(p => p.productName === productName && p.size === size);
        if(existingProduct) {
            existingProduct.quantity = quantity; // ?
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({productName, size, quantity, price});
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct (productName, size) {
        let foundProduct = this.productStock.find(p => p.productName === productName && p.size === size);
        if(!foundProduct) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            let productIndex = this.productStock.indexOf(foundProduct);
            this.productStock.splice(productIndex, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }
    
    findProductsBySize(size) {
        let resultArr = [];
        let foundProduct = this.productStock.find(p => p.size === size);
        
        if(foundProduct) {
           let filtered = this.productStock.filter(p => p.size === size);
           filtered.forEach(f => resultArr.push(`${f.productName}-${f.quantity} pieces`));
           return resultArr.join(', ');
        } else if(!foundProduct) {
           return `There are no products available in that size`;
        }      
    }
    listProducts () {
        let array = [];
        if(this.productStock.length === 0) {
            return `${this.storeHouse} storehouse is empty`;
        } else {
            array.push(`${this.storeHouse} storehouse in ${this.location} available products:`);
            let sorted = this.productStock.sort((a,b) => a.productName.localeCompare(b.productName));
            sorted.forEach(s => array.push(`${s.productName}/Size:${s.size}/Quantity:${s.quantity}/Price:${s.price}$`));
           
        }
        return array.join('\n');

    }

}
const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());



