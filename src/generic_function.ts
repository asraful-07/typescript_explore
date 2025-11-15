// Generic Function

// const createArrayWithString = (value: string) => [value]; 

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };


const createArrayWithGeric = <T>(value: T) => 
    {
        return value;
    };

const arrString = createArrayWithGeric("Apple");
const arrNum = createArrayWithGeric(222);
const arrObj = createArrayWithGeric({
  id: 123,
  name: "Next Level",
});


//TODO tuple 
//! const createArrayWithTuple = (param1: string, param2: string) => [param1, param2];

const createArrayTupleWithGeneric = <x, y>(param1: x, param2: y) => [param1, param2]

//* one more example 
const res = createArrayTupleWithGeneric("hello", 1234);

const addMoreAny = <T>(stduentInfo: T) => {
    return{
        ...stduentInfo
    }
}

const student1 = {
  id: 123,
  name: "Rahat",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result =addMoreAny(student2);
console.log(result);