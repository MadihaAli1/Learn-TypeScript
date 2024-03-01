//Example-One (string)
var author = "Mark Twain";
var quote = "Good decisions come from experience. Experience comes from making bad decisions";
console.log("Author: ".concat(author, "\nQuote: ").concat(quote));
//Example-Two (number)
var a = 15;
var b = 3;
console.log("a = 15 and b = 3");
console.log("a+b: ".concat(a + b));
console.log("a-b: ".concat(a - b));
console.log("a/b: ".concat(a / b));
console.log("a*b: ".concat(a * b));
//Example-Three (boolean)
var isRaining = true;
var isSunny = false;
console.log("isRaining: ".concat(isRaining, "\nisSunny: ").concat(isSunny));
//Example-Four (undefined)
var x;
console.log(x); //Output: undefined
//Example-Five (bigint)
var bigIntValue = BigInt(4568907532367899999);
console.log(bigIntValue);
//Example-Six (null)
var nullNumber = null;
console.log(nullNumber);
//Example-Seven (symbol)
var mySymbol = Symbol("Madiha Ali");
console.log(mySymbol);
