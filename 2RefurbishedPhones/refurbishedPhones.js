class RefurbishedSmartphones {
    constructor(retailer) {
      this.retailer = retailer;
      this.availableSmartphones = [];
      this.soldSmartphones = [];
      this.revenue = 0;
}

addSmartphone(model, storage, price, condition) {
    if(model == '' || storage < 0 || price < 0 || condition == '') {
        throw new Error("Invalid smartphone!");
    } else {
        this.availableSmartphones.push({model, storage, price, condition});
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }
}

sellSmartphone(model, desiredStorage) {
    let soldPrice = 0;
    let existingPhone = this.availableSmartphones.find(phone => phone.model === model);
    console.log(existingPhone);

    if(!existingPhone) {
        throw new Error(`${model} was not found!`);
    } else {
        if (existingPhone.storage >= desiredStorage) {
           soldPrice = existingPhone.price;

        } else if (Math.abs(existingPhone.storage - desiredStorage) <= 128) {
            soldPrice = existingPhone.price - (existingPhone.price * 0.10);

        } else if (Math.abs(existingPhone.storage - desiredStorage) > 128) {
            soldPrice = existingPhone.price - (existingPhone.price * 0.20);
        }

        this.soldSmartphones.push({ 
            model: existingPhone.model,
            storage: existingPhone.storage,
            soldPrice,
         });
    
        this.availableSmartphones.filter(phone => phone.model !== model);
        this.revenue += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

}
upgradePhones() {
    if(this.availableSmartphones.length === 0) {
        throw new Error("There are no available smartphones!");
    }

    this.availableSmartphones = this.availableSmartphones.map((phone) => { // първият обект в масива, вторият и т.н
        const doubledStorage = phone.storage * 2;
        const roundedPrice = (phone.price).toFixed(2);
    return {
        ...phone,
        storage: doubledStorage,
        price: roundedPrice,
      };
    });

    const availablePhones = this.availableSmartphones.map((phone) =>
          `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price}$`
      ).join("\n");

    return `Upgraded Smartphones:\n${availablePhones}`;
  }

  salesJournal(criteria) {
    if(criteria != 'model' && criteria != 'storage') {
        throw new Error("Invalid criteria!");
    }
    if (criteria == 'storage') {
        this.soldSmartphones.sort((a,b) => b.storage - a.storage);
    } else if (criteria == 'model') {
        this.soldSmartphones.sort((a,b) => a.model.localeCompare(b.model));
    }

    let array = [];
    array.push(`${this.retailer} has a total income of ${(this.revenue).toFixed(2)}$`);
    array.push(`${this.soldSmartphones.length} smartphones sold:`);
    this.soldSmartphones.map(ph => array.push(`${ph.model} / ${ph.storage} GB / ${(ph.soldPrice).toFixed(2)}$`));
    return array.join('\n');
  }
    
}
let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));






