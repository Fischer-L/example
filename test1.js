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
      case "US": rate = US_RATE; break;
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
    for (let i = 0; i < qty; i++) ids.push(i);
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
      case "US": rate = US_RATE; break;
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
    for (let i = 0; i < qty; i++) ids.push(i);
    let packages = ids.map(i => `Package ${i} : ${this.package(country)}`);
    return packages;
  }
};

win.shipA = () => console.log(`Ship ${productA.ship(3, "US")}`);
win.shipB = () => {
  console.log(`Ship ${productB.ship(6, "UK")}`);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var currency = {
    _allowed: true,
    
    country: "GBP",
    
    exchange: function(usd) {
      
      var helper = {
        rate: 1.33,
        
        cal: function(usd) {
          if (currency._allowed) {
             return this.rate * usd;
          }
          return -1;
        }
      };
      
      let gbp = helper.cal(usd);
      gbp && console.log(`Exchanged ${usd} to ${this.country} ${gbp}`);
    }
  };
  currency.exchange(100);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
};
  
function AA(a) { function BB(a) { return a + 1;
  }
  return BB(a);
}

})(window);
