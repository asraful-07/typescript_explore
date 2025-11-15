//TODO Function type
// * Normal function, Arrow function

function Normal(num1: number, num2: number): number {
  return num1 + num2;
}

const arrow = (num1: number, num2: number): number => num1 + num2;

//object => function => method
const obj = {
  name: "hello world",
  roll: 18,
  addFunc(num: number): number {
    return this.roll + num;
  },
};

let sum = obj.addFunc(12);

let sqrArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

let mapIng = sqrArray.map((num: number): number => num * num);

console.log(mapIng);
