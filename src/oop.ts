class Parson {
  name: string;
  age: number;
  address: string;
  isMD: boolean;

  constructor(name: string, age: number, address: string, isMD: boolean) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.isMD = isMD;
  }

  great(nam: string) {
    console.log(`My name is ${this.name} and my age address ${nam}`);
  }
}

class ParsonOne extends Parson {
  great(namA: string): void {
    console.log(`my name is ${namA}`);
  }
}

class ParsonTwo extends Parson {
  private job: number;

  constructor(
    name: string,
    age: number,
    address: string,
    isMD: boolean,
    job: number
  ) {
    super(name, age, address, isMD);
    this.job = job;
  }

  private TopSecret(salary: number) {
    this.job += salary;
  }

  set PrivateT(salary: number) {
    this.TopSecret(salary);
  }

  get Access() {
    return this.job;
  }
}

abstract class ParsonTree extends Parson {
  abstract ab(salary?: number): void;
}

class ParsonFour extends ParsonTree {
  ab(vet: number, jet: number = 0) {
    console.log(
      `My name is ${this.name} and my address ${this.address} and more my salary range is ${vet} to ${jet}`
    );
  }
}

const user1 = new Parson("ABCD", 28, "UK", true);
const user2 = new ParsonOne("VCE", 29, "UK", true);
const user3 = new ParsonTwo("GEW", 26, "ITY", true, 123456);
const user4 = new ParsonFour("WEQ", 27, "ESP", true);

user4.ab(100, 180);

//* user3.PrivateT = 1234;
//* console.log(user3);
//* console.log(user3.Access);
//* user2.great("ZWQ");
//* user1.great("USA");
//* console.log(user1);
