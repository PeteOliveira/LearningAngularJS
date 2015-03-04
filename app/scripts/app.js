(function(){

  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'very cool gem',
        canPurchase: false,
      soldOut: true
    },
     {
      name: 'Pentagonal',
      price: 1.95,
      description: 'very bright gem',
      canPurchase: false,
      soldOut: false
    },
    {
      name: 'Hexagonal',
      price: 3.95,
      description: 'very nice gem',
      canPurchase: true,
      soldOut: true
   },
   {
     name: 'Octagonal',
     price: 4.95,
     description: 'exceptional gem',
     canPurchase: true,
     soldOut: false
  },
    {
      name: 'Decagonal',
      price: 8,
      description: 'exceptional gem',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Heptagonal',
      price: 6.2,
      description: 'exceptional gem',
      canPurchase: true,
      soldOut: false
    }
];

})();
