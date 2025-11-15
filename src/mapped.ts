// mapped types

// map

const arrayOfNum: number[] = [1, 2, 3, 4];

const arrayOfString: string[] = ["1", "2", "3", "4"];

const result: string[] = arrayOfNum.map((num) => num.toString());
console.log(result);

type demo1 = {
  hight: string;
  width: string;
};

//* this demo means type map like demo1
type demo<T> = {
  [key in keyof T]: T[key];
  //* key >> height >> string
  //* key >> width >> number
};

const array: demo<{ height: string; width: number }> = {
  height: "67",
  width: 78,
};

console.log(array);

/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number

*/

//*"height" |"width"
