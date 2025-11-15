// keyof : type operator

type RichPeoplesVehicle = {
  car: string; // key: value
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type Myvehicle2 = keyof RichPeoplesVehicle;

//! const myVehicle: Myvehicle2 = "ship";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const users: User = {
  id: 222, // key: value
  name: "Rahat",
  address: {
    city: "raj",
  },
};

// //const myId = user.id;
// const myId = users["id"];
// const myName = users["name"];
// const address = users["address"];

//console.log({ myId, myName, address

function getProperty<T>(obj: T, key: keyof T) {
  return obj[key];
}

const user = { name: "Rahat", age: 21, country: "Bangladesh" };

console.log(getProperty(user, "name"));    // ✅ OK
console.log(getProperty(user, "country")); // ✅ OK
// console.log(getProperty(user, "email"));   // ❌ Error

