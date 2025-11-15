let friend1: string[] = ["AB", "DB", "MB", "TU"];
let friend2: string[] = ["RE", "RJ", "AS", "MT"];

friend1.push(...friend2);

console.log(friend1);

const user = { name: "Rahat", phoneNo: "0170000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = { ...user, ...otherInfo };

//* rest operator
const Invite = (...friends: string[]) => {
  friends.forEach((f: string) => console.log(`sent invite to friend ${f}`));
};

console.log("AB", "DB", "MB", "TU", "RJ", "AS");
