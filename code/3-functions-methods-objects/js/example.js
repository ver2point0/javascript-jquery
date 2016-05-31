(function() {
  
  var hotel = {
    name: "Park",
    roomRate: 240,
    discount: 15,
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };
  
  
  
  
});