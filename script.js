//function declaration
function brian(){
    console.log('hello')
}
brian();
//function expression
const greet = function(name){
    console.log('good day ${name}');
};
greet('mario');
//arguent & parameters
const speak = function(name, time){
    console.log(`good ${name} ${time}`);
};

speak('brian', 'morning')
//returning values
//onst calcArea = function(radius){
  //  let area =3.14*radius**2
  //  return area;
//};
 //const kangi = calcArea(4);
 //console.log(kangi);
 //simplifying the code above
 const calcAreas = function(radius){
    return 3.14*radius**2
   
};
 const alex = calcAreas(4.5);
 console.log(alex);
 
//arrow functions
const calcArea = radius=>{
    return 3.14*radius**2 
}
const kangi = calcArea(4);
 console.log(kangi);

 const jump =() => "hello world";
 let resultOne = jump();
 console.log(resultOne);

//callback &for each
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});

(function(){
    console.log("hello there");
})();

const multiply = (x ,y)=> x*y;
const a = multiply(2,4)
console.log(a);

//calculating total cost with tax
function calculateTotalCost(items, taxRate){
    if (!Array.isArray(items)|| items.length ===0){
        return 'please provide items'
    }
    const subtotal = items.reduce((sum, price) => sum + price, 0);
    const totalCost = subtotal * (1 + taxRate);

    return totalCost;
}
const shoppingCart = [20, 30, 50]; // Prices of items in the cart
const taxRate = 0.1;
const totalWithTax = calculateTotalCost(shoppingCart, taxRate);
console.log(`Total Cost with Tax: $${totalWithTax.toFixed(2)}`);

// string methods
const text = 'Hello, world!';

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.indexOf('World'));
console.log(text.split(','));
console.log(text.length);

//array methods
const numbers = [1,2,3,4,5,6,7,8];

console.log(numbers.length);
console.log(numbers.join('-'));
console.log(numbers.push(9));
console.log(numbers.pop());
console.log(numbers.map(x=> x*2));
console.log(numbers.map(x=> x*3));
console.log(numbers.map(x=> x*5));

//objects method
const person = {
    firstName:'brian',
    lastName :'mwangi',
    fullName : function() {
        return this.firstName + '' +this.lastName;
    }
};
console.log(person.fullName());

//maths methods
console.log(Math.sqrt(25));
 console.log(Math.random());
 console.log(Math.floor(3.7888));

 //data methods
 const today = new Date();

 console.log(today.getFullYear());
 console.log(today.getMonth()) ;
 console.log(today.getDate());
 console.log(today.getHours());
 console.log(today.getMinutes());

