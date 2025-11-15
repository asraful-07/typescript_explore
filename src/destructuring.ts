//TODO object destructuring
//TODO array destructuring

const user = {
  id: 1234,
  name: {
    firstName: "Asraful",
    middleName: "Islam",
    lastName: "Rahat",
  },
  class: [8, 9],
  gender: "male",
  favouriteColor: "black",
};

const {
  class: [firstClass, secondClass],
  id,
  name: { middleName: nam },
} = user;
console.log(nam, id);

// * array destructuring
const friend4 = ["karim", "Rahim", "Mahim", "dahim"];

const [, tim, myBestFriend] = friend4;

console.log(tim);
