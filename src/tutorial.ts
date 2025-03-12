// function sayHi(name: string) {
//     console.log(`${name.toUpperCase()} The function can have a parametr only as string!`);
// }

// sayHi("Pieter");

// let names: string[] = ["Vova", "John", "Alias"];

// function isName(name?: string): boolean {
//     return names.includes(name || "Incognito");
// }

// console.log(isName("Vova"));

// let nameToCheck: string;

// if (isName()) {
//     console.log(`The name ${nameToCheck || 'hi'} is in the arr`);
// } else {
//     console.log(`The name ${nameToCheck || 'hi'} isn't in the arr`);
// }

// function checkName(name?: string) {
//     isName(name)
//         ? console.log(`The name ${name} exist in the array`)
//         : console.log(`The name ${name} doesn't exist in the array`);
// }

/////////////////////////////////////////////////////////////////
// Function parameters

// function sumNumb(a: number, b: number) {
//     console.log(a + b);

//     // return a + b;
// }
// sumNumb(4, 5);

// Rest parameters

// function sum(text: string, ...numbers: number[]): string {
//     const doubled = numbers.map((num) => num * 2);
//     // console.log(doubled);

//     const total = doubled.reduce((acc, curr) => acc + curr, 0);

//     return `${text}: ${total}`;
// }

// let result = sum("The total is", 1, 2, 3, 4, 5);

// console.log(result);

/////////////////////////////////////////////////////////////////
// Union
// function processInput(input: string | number) {
//     if (typeof input === "string") {
//         console.log(input.toUpperCase());
//     } else {
//         console.log(input * 2);
//     }
// }

// processInput("hi");
// processInput(54);

/////////////////////////////////////////////////////////////////
// Objects

// let book = {title: 'book', cost: 20};
// let pen = {title: 'pen', cost: 5};
// let notebook = {title: 'notebook', cost: 10};

// let items: { readonly title: string; cost?: number}[] = [book, pen, notebook];
// items[0].title = 'new book'

// function createEmployee({ id }: { id: number }): {
//     id: number;
//     isActive: boolean;
// } {
//     return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });

// console.log(first, second);

// function createStudent(student: { id: number; name: string }): void {
//     console.log(`Welcom to the course ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//     id: 1,
//     name: "pavlina",
//     email: 'pavlina@gmail.com'
// };

// createStudent(newStudent);

/////////////////////////////////////////////////////////////////
// Objects as Parameters and Excess Property checks

// function processData(
//     input: string | number,
//     config: { reverse: boolean } = { reverse: false }
// ): number | string {
//     if (typeof input === "number") {
//         return input * input;
//     } else if (typeof input === "string" && config.reverse === false) {
//         return input.toUpperCase();
//     } else {
//         return input.split("").reverse().join("").toUpperCase();
//     }
// }

// const sFalse = {
//     reverse: false,
// };
// const sTrue = {
//     reverse: true,
// };

// console.log(processData(5));
// console.log(processData(6));
// console.log(processData("string"));
// console.log(processData("string", sTrue));

/////////////////////////////////////////////////////////////////
// Alias

// type User = {
//  id: number;
//  name: string;
//  online: boolean
//  };

// const Vova: User = {
//     id: 1,
//     name: "vova",
//     online: true,
// };
// const Pavlina: User = {
//     id: 2,
//     name: "pavlina",
//     online: false,
// };

// function welkomUser(user: User): User {
//     console.log(`Welcom to home ${user.name}!`);

//     return user;
// }

// welkomUser(Vova);
// console.log(welkomUser(Pavlina));

// type Employee = { id: number; name: string; department: string };

// type Manager = { id: number; name: string; employees: Employee[] };

// type Staff = Manager | Employee;

// function printStaffDetails(staff: Staff): void {
//     if ("employees" in staff) {
//         console.log(
//             `Hi ${staff.name.toUpperCase()} today on duty ${
//                 staff.employees.length
//             } employees on your shift: ${
//                 staff.employees[0].name
//             } from department ${staff.employees[0].department} and ${
//                 staff.employees[1].name
//             } from department ${staff.employees[1].department}`
//         );
//     } else {
//         console.log(
//             `Hi ${staff.name.toUpperCase()} you belong to departmen ${
//                 staff.department
//             }. Have a nice day!`
//         );
//     }
// }

// const Switlana: Employee = { id: 1, name: "switlana", department: "Support" };
// const Vadym: Employee = { id: 1, name: "vadym", department: "HR" };

// const Nick: Manager = { id: 1, name: "nick", employees: [Switlana, Vadym] };

// printStaffDetails(Nick);
// printStaffDetails(Vadym);
// printStaffDetails(Switlana);

// interface
// interface Book {
//     isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
//     printAuthor(): void;
//     printTitle(message: string): string;
//     printSomething: (someValue: number) => number;
// }

// const deepWork: Book = {
//     isbn: 123,
//     title: "Deep Work",
//     author: "Cal Newport",
//     genre: "self-help",
//     printAuthor() {
//         console.log(this.author);
//     },
//     printTitle(message) {
//         return `${this.title} ${message}`;
//     },
// first

// printSomething: (number) => {
//     return number * 5;
// },
// second

// printSomething: function (number) {
//     return number * this.isbn;
// },

// third
// printSomething(number) {
//     return number * this.isbn;
// },
// };
// deepWork.printAuthor();
// const result = deepWork.printTitle("is an awesome book");
// console.log(result);
// console.log(deepWork.printSomething(6));

// interface Computer {
//     readonly id: number;
//     brand: string;
//     ram: number;
//     storage?: number;
//     upgradeRam(value: number): number;
// }

// const Dell: Computer = {
//     id: 123,
//     brand: "Dell",
//     ram: 8,
//     upgradeRam(value) {
//         this.ram += value;
//         return this.ram;
//     },
// };

// Dell.storage = 256;

// const res = Dell.upgradeRam(8);
// console.log(res);
// console.log(Dell);
/////////////////////////////////////////////////////////////////
// interface Person {
//     name: string;
//     getDetails(): string;
// }

// interface dogOwner {
//     dogName: string;
//     getDogDetails(): string;
// }

// interface Person {
//     age: number;
// }

// interface Employee extends Person {
//     employeeId: number;
// }

// const person: Person = {
//     name: "john",
//     age: 34,
//     getDetails() {
//         return `Hi ${this.name}, ${this.age} years old!`;
//     },
// };
// const men: Employee = {
//     name: "john",
//     age: 34,
//     employeeId: 123,
//     getDetails() {
//         return `Hi ${this.name}, ${this.age} years old and Employee ID: ${this.employeeId}!`;
//     },
// };

// const res = men.getDetails();
// console.log(res);

// interface Manager extends Person, dogOwner {
//     managePeople(): void;
// }

// const manager: Manager = {
//     name: "john",
//     age: 34,
//     getDetails() {
//         return `Hi ${this.name}, ${this.age} years old and Employee ID: ${this.employeeId}!`;
//     },
//     dogName: "Bax",
//     getDogDetails() {
//         return `Hi ${this.dogName}`;
//     },
//     managePeople() {
//         console.log("Managing people...");
//     },
// };

// manager.managePeople();
///////////////////////////////////////////////////////////
// interface Person {
//     name: string;
// }

// interface DogOwner extends Person {
//     dogName: string;
// }

// interface Manager extends Person {
//     managePeople(): void;
//     delegateTask(): void;
// }

// function getEmployee(): Person | DogOwner | Manager {
//     let random = Math.random();
//     if (random < 0.033) {
//         return {
//             name: "john",
//         };
//     } else if (random < 0.66) {
//         return {
//             name: "Piter",
//             dogName: "bars",
//         };
//     } else {
//         return {
//             name: "Piet",
//             managePeople() {
//                 console.log(this.name);
//             },
//         };
//     }
// }

// let employee: Person | Manager | DogOwner = getEmployee();

// console.log(employee);

// //////////////////////////////////////////////////////////////
// Tuples and Enums

// type User = {
//     id: number;
//     name: string;
//     role: UserRole;
//     // tuples
//     contact: [string, string];
// };

// function createUser(user: User): User {
//     return user;
// }

// const newUser = createUser({
//     id: 1,
//     name: "Vika",
//     role: UserRole.Admin,
//     contact: ["vika@gmail.com", "123456789"],
// });
// console.log(newUser);

// enum ServerResponseStatus {
//     Success,
//     Error,
// }

// interface ServerRespons {
//     result: ServerResponseStatus;
//     data: string[];
// }

// function getServerResponse(): ServerRespons {
//     return {
//         result: ServerResponseStatus.Error,
//         data: ["first item", "second item"],
//     };
// }

// const result: ServerRespons = getServerResponse();
// console.log(result);

// //////////////////////////////////////////////////////////////
// Type Assertion, Type Unknown and Type Never

// let someValue: any = "This is a string";

// let strLength: number = (someValue as string).length;
// console.log(strLength);

// type Bird = {
//     name: string;
// };

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//     Pending = "pending",
//     Decline = "declined",
// }

// type User = {
//     name: string;
//     status: Status;
// };

// saveStatus.Pending in the DB as a string
// retrieve string from the DB

// const statusValue = "pending";

// const user: User = { name: "john", status: statusValue as Status };
// console.log(user);

// let unKnownValue: unknown;

// unKnownValue = "hello world";
// unKnownValue = [1, 2, 3];
// unKnownValue = 42.345;

// if (typeof unKnownValue === "number") {
//     unKnownValue.toFixed(2);
// }

// function runSomeCode() {
//     const random = Math.random();
//     if (random < 0.5) {
//         throw new Error("there was an error");
//     } else {
//         throw "some error";
//     }
// }

// try {
//     runSomeCode();
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(error.message);
//     } else {
//         console.log(error);
//     }
// }

// let value: never = 0;

// type Theme = "light" | "dark";

// function checkTheme (theme: Theme):void {
//     if (theme === "light") {
//         console.log(`The theme is ${theme}!`);
//         return;
//     }if (theme === "dark") {
//         console.log(`The theme is ${theme}!`);
//         return;
//     }
//     // theme:never
// }

//////////////////////////////////////////////////////////////
// ES6Modules
// import newStudent, {person, sayHi} from "./actions";
// sayHi("Typescript");
// console.log(person);
// console.log(newStudent);

// //////////////////////////////////////////////////////////////
// Type Guarding
// type ValueType = string | number | boolean;

// let value: ValueType = "";

// function generateValue(): ValueType {
//     const random = Math.random();
//     value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;
//     return value;
// }

// function checkValue(value: ValueType): void {
//     if (typeof value === "string") {
//         console.log(value.toLowerCase());
//         return;
//     }
//     if (typeof value === "number") {
//         console.log(value.toFixed(31));
//         return;
//     }
//     console.log(`boolean: ${value}!`);
// }

// generateValue();
// checkValue(value);

// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal):void {
//     if(animal.type === 'cat') {
//         animal.meow();
//     } else {
//         animal.bark();
//     }
// };

// function makeSound2(animal: Animal):void {
//     if("bark" in animal) {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// };

// function printLength(str: string | null | undefined): void {
//     if (typeof str === "string") {
//         console.log(str.length);
//     } else {
//         console.log("No string provided");
//     }
// }

// printLength("hi");
// printLength(null);
// printLength(undefined);

// try {
//     throw "no errors";
//     // throw new Error('this is an Error')
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(`Caught an Error : ${error.message}`);
//     } else {
//         console.log("unknown error ...");
//     }
// }

// function checkInput(input: Date | string): string {
//     if (input instanceof Date) {
//         return input.getFullYear().toString();
//     }
//     return input;
// }

// const year = checkInput(new Date());
// const random = checkInput("2020-11-23");

// console.log(year);
// console.log(random);

// //////////////////////////////////////////////////////////////
// Type Predicate

// type Student = {
//     name: string;
//     study: () => void;
// };

// type User = {
//     name: string;
//     login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
//     return Math.random() > 0.5
//         ? { name: "John", study: () => console.log("Studying") }
//         : { name: "Mick", login: () => console.log("Logging in") };
// };

// const person = randomPerson();

// function isStudent(person: Person): person is Student {
//     // return 'study' in person;
//     return (person as Student).study !== undefined;
// }

// if (isStudent(person)) {
//     person.study();
// } else {
//     person.login();
// }

// //////////////////////////////////////////////////////////////
// Discriminated Unions and exhaustive check using the never type

// type IncrementAction = {
//     type: "increment";
//     amount: number;
//     timestamp: number;
//     user: string;
// };
// type DiscrementAction = {
//     type: "discrement";
//     amount: number;
//     timestamp: number;
//     user: string;
// };
// type EqualAction = {
//     type: "equlal";
//     amount: number;
//     timestamp: number;
//     user: string;
// };

// type Action = IncrementAction | DiscrementAction;

// function reducer(state: number, action: Action) {
//     switch (action.type) {
//         case "increment":
//             return state + action.amount;
//         case "discrement":
//             return state - action.amount;
//         default:
//             const unexpectedAction: never = action;
//             throw new Error(`Unexpected action ${unexpectedAction}`);
//     }
// }

// const newState = reducer(15, {
//     user: "John",
//     amount: 5,
//     timestamp: 12345,
//     type: "increment",
// });
// console.log(newState);
// const newState1 = reducer(15, {
//     user: "John",
//     amount: 5,
//     timestamp: 12345,
//     type: "discrement",
// });
// console.log(newState);

// //////////////////////////////////////////////////////////////
// Generics
// let array1: string[] = ["hi", "goodby"];
// let array2: number[] = [1, 3, 5];
// let array3: boolean[] = [true, false, true];

// function genericFunction<T>(arg: T): T {
//     return arg;
// }

// const someStringValue = genericFunction("Hello world");
// const someNumberValue = genericFunction(1234);
// console.log(someNumberValue);
// console.log(someStringValue);

//
// interface GenericInterface<T> {
//     value: T;
//     getValue: () => T;
// }

// const getgenericString: GenericInterface<string> = {
//     value: "Hello world",
//     getValue() {
//         return this.value;
//     },
// };
// console.log(getgenericString);

// const getgenericNumber: GenericInterface<number> = {
//     value: 645785,
//     getValue() {
//         return this.value;
//     },
// };
// console.log(getgenericNumber);
//
// function generateArray(length: number, value: string): string[] {
//     let result: string[] = [];
//     result = Array(length).fill(value);
//     return result;
// }

// const arr = generateArray(15, "hi Vova");
// console.log(arr);

// function createArr<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     result = Array(length).fill(value);
//     return result;
// }

// const aar = createArr(12, true);
// console.log(aar);
//
// multiple generics
// function pair<T, U>(param1: T, param2: U): [T, U] {
//     return [param1, param2];
// }

// let result = pair<string, number>("hi", 700);
// console.log(result);
//
// extends
// function processValue<T extends string | number>(value: T): T {
//     console.log(value);
//     return value;
// }

// processValue("hi");
// processValue(123);
//
// type Car = {
//     brand: string;
//     model: string;
// };
// const car: Car = {
//     brand: "ford",
//     model: "focus",
// };

// type Product = {
//     name: string;
//     price: number;
// };
// const product: Product = {
//     name: "shoes",
//     price: 35,
// };

// type Student = {
//     name: string;
//     age: number;
// };
// const student: Student = {
//     name: "Vova",
//     age: 19,
// };

// function printName<T extends Student | Product>(input: T): void {
//     console.log(input.name);
// }
// function printName<T extends { name: string }>(input: T): void {
//     console.log(input.name);
// }

// printName(student);
// printName(product);
//
// interface StoreData<T> {
//     data: T[];
// }

// const storeNumbers: StoreData<number> = {
//     data: [1, 2, 3, 4, 5],
// };
// console.log(storeNumbers);

// const storeRandomValues: StoreData<any> = {
//     data: ["hi", 123, true],
// };
// console.log(storeRandomValues);

// //////////////////////////////////////////////////////////////
// Fetch Data and Declaration Files

// import { z } from "zod";

// const tourSchema = z.object({
//     id: z.string(),
//     image: z.string(),
//     info: z.string(),
//     name: z.string(),
//     price: z.string(),
// });

// const url = "https://www.course-api.com/react-tours-project";

// type Tour = z.infer<typeof tourSchema>;

// async function fetchData(url: string): Promise<Tour[]> {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const rawData: Tour[] = await response.json();

//         const result = tourSchema.array().safeParse(rawData);
//         if (!result.success) {
//             throw new Error(`Invalid data: ${result.error}`);
//         }
//         console.log(result);

//         return result.data;
//     } catch (error) {
//         const errorMsg =
//             error instanceof Error ? error.message : "there was an error...";
//         console.log(errorMsg);
//         return [];
//     }
// }

// const tours = await fetchData(url);
// tours.map((tour) => {
//     console.log(tour);
// });

// Decaration files
// .d.ts files type definition

// //////////////////////////////////////////////////////////////

// Classes

class Book {
    private checkedOut = false;
    constructor(title: string, author: string) {}
}

const deepWork = new Book("Deep Work", "Cal Newport");
