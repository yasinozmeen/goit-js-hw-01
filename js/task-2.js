function getShippingMessage(county, price, delivetyFee) {
  const sonuc = `Shipping to ${county} will cost ${
    price + delivetyFee
  } credits`;
  return sonuc;
}
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
