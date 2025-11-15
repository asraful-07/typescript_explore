//TODO JS - TS
//TODO JS: array, object
//TODO TS: tuple

let list: string[] = ["apple", "banana", "orange", "kiwi"];

let addList: (string | number)[] = [
  "apple",
  12,
  "banana",
  4,
  "orange",
  6,
  "kiwi",
  8,
];

addList.push("dav", 12, "jambura", 6);

//* Not allowed any one elements
let tuple: [string, number] = ["Rahat", 80];

console.log(tuple);

let users: {
  readonly firstName: string; //! Not access modifier
  lastName: string;
  isIslam: boolean;
  isMarried?: string; //* optional type value
} = {
  firstName: "Asraful",
  lastName: "Islam",
  isIslam: true,
};

users.lastName = "Rahat";

console.log(users.isIslam);
