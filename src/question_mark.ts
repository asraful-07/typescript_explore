// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

const age: number = 21;

let result = age >= 20 ? "your right" : "not ok"

const userTheme = "Green theme";

const selectedTheme = userTheme ?? "Light theme";

console.log(selectedTheme);

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";

const resultWithNulish = isAuthenticated ?? '"You are guest !';

console.log({ resultWithTernary }, { resultWithNulish });

//optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
