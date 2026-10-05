
// 1.Age and voting Eligibility.
console.log("-----Age and Voting Eligibility------")
let age = 20;
if (age >= 18){
    console.log(`${age} is eligible for vote`);
    if (age >= 60){
        console.log("The person is a senior citizen");
    }
    else{
        console.log("The person is not a Senior Citizen");
    }

}
else{
    console.log(`${age} is not eligible for voting`)
}
// -----------------------------------------------------------
console.log("------Student pass and Grade------")
// 2.student pass and Grade.
let marks = 85;
if(marks >= 35){
    console.log("The studentis passed");
    if(marks >= 75){
        console.log("Grade A");
    }
    else{
        console.log("Grade B");
    }
}
else{
    console.log("The student is failed");
}
// -------------------------------------------
console.log("-----Number Divisible by 5 and 10---------")
// 3.Number Divisible by 5 and 10
let n = 30;
if (n % 5 === 0) {
    console.log(`${n} is divisible by 5`);
    if (n % 10 === 0) {
        console.log(`${n} is also divisible by 10`);
    }
    else {
        console.log(`${n} is not divisible by 10`);
    }
}
else {
    console.log(`${n} is not divisible by 5`);
}
// -------------------------------------------------
console.log("--------Number Greater than 100 and even/odd---------")
// 4.Number Greater Than 100 and Even/Odd.
let a = 125;
if (a > 100) {
    console.log(`${a} is greater than 100`);
    if (a % 2 === 0) {
        console.log(`${a} is even`);
    }
    else {
        console.log(`${a} is odd`);
    }
}
else {
    console.log(`${a} is not greater than 100`);
}
// ----------------------------------------------------
console.log("----------Temperature and whether condition------------")
// 5.Temperature and Weather Condition.
let temperature = 35;
if (temperature > 30) {
    console.log("It is a hot day");
    if (temperature >= 40) {
        console.log("It is extremely hot");
    }
    else {
        console.log("It is moderately hot");
    }
}
else {
    console.log("The weather is not hot");
}
// ------------------------------------------------
console.log("-------Check shopping discount--------")
// 6.Check Shopping Discount.
let amount = 2500;

if (amount >= 1000) {
    console.log(`Purchase amount is ₹${amount}`);

    if (amount >= 2000) {
        console.log("Customer gets 10% discount");
    }
    else {
        console.log("Customer gets 5% discount");
    }
}
else {
    console.log("Customer is not eligible for a discount");
}