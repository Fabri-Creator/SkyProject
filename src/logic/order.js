export function createOrder(item, itemSize) {
  const productOrder = {
    name: item.Name,
    itemId: item.id,
    size: itemSize.size,
    amount: 1,
    info: item,
  };
  return productOrder;
}

export function totalPrice(order) {
  if (order.length !== 0) {
    var total = order.map(
      (item) => Number(item.info.Price.slice(0, 5)) * item.amount
    );
    var reducer = (totalPrices, price) => {
      return totalPrices + price;
    };
    var prices = total.reduce(reducer);
    return prices;
  }
}

export function addProductOrder(order, product) {
  const newOrder = order.map((item) => {
    if (item.itemId === product.itemId) {
      item.amount++;
      return item;
    } else {
      return item;
    }
  });
  return newOrder;
}

export function substractItem(order, product) {
  const newOrder = order.map((item) => {
    if (item.itemId === product.itemId) {
      item.amount--;
      return item;
    } else {
      return item;
    }
  });
  if (product.amount <= 0) {
    var filtered = newOrder.filter((item) => item.itemId !== product.itemId);
    return filtered;
  }

  return newOrder;
}

export function removeItem(order, product) {
  var filtered = order.filter((item) => item.itemId !== product.itemId);
  return filtered;
}
export function getDiscount(code) {
  var discount = 0;
  if (code === "SKY2020") {
    discount = 0.8;
    return discount;
  } else {
    return (discount = 1);
  }
}
export function productCounterFunction(order) {
  if (order != 0) {
    var counter = order.map((element) => element.amount);
    var reducer = (totalAmount, amount) => {
      return totalAmount + amount;
    };
    var finalCounter = counter.reduce(reducer);
    return finalCounter;
  }
}
