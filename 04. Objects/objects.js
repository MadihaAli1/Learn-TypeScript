// Define a simple object 
var person = {
    name: "Ali",
    age: 30,
    gender: "male"
};
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Gender:", person.gender);
// Define a nested object 
var personWithAddress = {
    name: "Dua",
    age: 22,
    address: {
        street: "5 Main St",
        city: "karachi",
    }
};
console.log(personWithAddress);
// Accessing properties of the nested object
console.log("Name:", personWithAddress.name);
console.log("Age:", personWithAddress.age);
console.log("Street:", personWithAddress.address.street);
console.log("City:", personWithAddress.address.city);
// Define an array of objects representing fruits
var fruits_ = [
    { name: "Apple", color: "Red", price: 15 },
    { name: "Banana", color: "Yellow", price: 10 },
    { name: "Orange", color: "Orange", price: 20 }
];
console.log(fruits_);
