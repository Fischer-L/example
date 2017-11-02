  
  
  
  
  var global_variable = "I'm global";
  function exchange() {
    let currency = {
      _allowed: true,

      country: "GBP",

      exchange: function(usd) {

        let helper = {
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
  }
  
