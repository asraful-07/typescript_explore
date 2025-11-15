//TODO dynamically generalize: Generic

type genericArray<value> = Array<value>

//* const freinds: string[] = ["x", "y", "Z", "q"];
 const freinds:genericArray<string> = ["x", "y", "Z", "q"];


//* const roll: number[] = [1,2,3,4,5,6]; 
 const roll: genericArray<number> = [1,2,3,4,5,6]; 


//* const bool: boolean[] = [true, false, true, false]; 
 const bool: genericArray<boolean> = [true, false, true, false]; 

 type User = { name: string; age: number };

//TODO new more exmaple
const userList: genericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];

const sqrFunc = (value: number) => {
  return value * value;
};

sqrFunc(4);

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];