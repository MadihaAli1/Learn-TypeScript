interface addressTypes {
  city: string;
  streetno: number;
  buildingName: string;
}
type PersonType = {
  name: string;
  class: number;
  rollNo: number;
  subjects: string[];
  address: addressTypes;
};

let person1: PersonType = {
  name: "Madiha",
  class: 9,
  rollNo: 23,
  subjects: ["Math", "English", "Urdu"],
  address: {
    city: "Karachi",
    streetno: 12,
    buildingName: "jama building"
  }
};
console.log(person1);

let person2: PersonType[] = [
  {
    name: "Abrish",
    class: 10,
    rollNo: 4,
    subjects: ["Chemistry", "Biology", "Physics"],
    address: {
      city: "Karachi",
      streetno: 5,
      buildingName: "Main Street Building"
    }
  }
];

console.log(person2);

//number,string, boolean => types

// type alise
type carstring = string;
let car: carstring = "Supra";
console.log(car);

type agenumber = number;
let age: agenumber = 18;
console.log(age);

type isPassboolean = boolean;
let isPass: isPassboolean = true;
console.log(isPass);
