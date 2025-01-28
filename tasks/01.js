function getTotalSum(array) {
    let totalSum = 0;
    purchasersPrice.forEach((price) => {
        totalSum += price;
    });
    return totalSum;
}

let purchasersPrice = [10000, 20000, 30000];
console.log(getTotalSum(purchasersPrice));
