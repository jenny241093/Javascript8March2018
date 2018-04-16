let arr = [10, 5, 1.5];
let moneyForChockos =arr[1]*0.65;
let moneyForMilk=arr[2]*2.70;
let mandariniCount =Math.floor(arr[1] - (arr[1] * 0.35)) ;
let moneyForMandarini = mandariniCount * 0.20;

let totalSpendMony = moneyForChockos + moneyForMilk + moneyForMandarini;

if (totalSpendMony > arr[0])
{
    console.log(`Not enough money, you need ${(totalSpendMony - arr[0]).toFixed(2)} more!`);
}
else
{
    console.log(`You got this, ${(arr[0] - totalSpendMony).toFixed(2)} money left!`);
}
