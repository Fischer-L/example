let aBrand = "A";
var bBrand = "B";
(function (win) {
"user strict";

const US_RATE = 30; 
let UK_RATE = 40;

let productA = {
  _price: 100,
  _name: "productA",
  
  getName() {
    return this._name;
  },
  
  getFullName() {
    return this.getName() + " by " + aBrand;
  },
  
  getLocalPrice() {
    return this._price;
  },
  
  getGlobalPrice(country) {
    let rate = 1;
    switch (country) {
      case "US": rate = USD_RATE; break;
      case "UK": rate = UK_RATE; break;
    }
    return rate * this.getLocalPrice();
  },
  
  package(country) {
    let n = this.getFullName();
    var p = this.getGlobalPrice(country);
    return `${n} at $${p} for ${country}`;
  },
  
  ship(qty, country) {
    let ids = [];
    for (let i of qty) ids.push(i);
    let packages = ids.map(i => `Package ${i} : ${this.package(country)}`);
    return packages;
  }
};

let productB = {
  _price: 101,
  _name: "productB",
  
  getName() {
    return this._name;
  },
  
  getFullName() {
    return this.getName() + " by " + bBrand;
  },
  
  getLocalPrice() {
    return this._price;
  },
  
  getGlobalPrice(country) {
    let rate = 1;
    switch (country) {
      case "US": rate = USD_RATE; break;
      case "UK": rate = UK_RATE; break;
    }
    return rate * this.getLocalPrice();
  },
  
  package(country) {
    let n = this.getFullName();
    var p = this.getGlobalPrice(country);
    return `${n} at $${p} for ${country}`;
  },
  
  ship(qty, country) {
    let ids = [];
    for (let i of qty) ids.push(i);
    let packages = ids.map(i => `Package ${i} : ${this.package(country)}`);
    return packages;
  }
};

win.shipA = () => console.log(`Ship ${productA.ship(3, "US")}`);
win.shipB = () => {
  console.log(`Ship ${productB.ship(6, "UK")}`);
};

})(window);
