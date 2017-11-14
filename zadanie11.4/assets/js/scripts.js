$( () => {
  function Phone( brand, price, color ) {
    this.brand = brand;
    this.price = price;
    this.color = color;
  }
  Phone.prototype.printInfo = function() {
    console.log( `The phone brand is ${  this.brand  }, color is ${  this.color  } and the price is ${  this.price  }.` );
  };
  const iPhone6S = new Phone( 'Apple', 2250, 'silver' );
  const Samsung = new Phone( 'Samsung', 900, 'gold' );
  const Nokia = new Phone( 'Nokia', 1800, 'rose' );

  iPhone6S.printInfo();
  Samsung.printInfo();
  Nokia.printInfo();
} );

