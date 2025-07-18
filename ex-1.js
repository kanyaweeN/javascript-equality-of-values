// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20);
Object.is(0, -0);
Object.is(NaN, 100);
Object.is("one", "two");
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 });
Object.is(null, undefined);

10 === 20; //Expression 
10 === "10" //Expression 
3.14 !== 3.14; //Expression 
"TechUp" !== "TechUp"; //Expression 
NaN === NaN; //Expression 
0 !== -0; //Expression 

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB;  //Expression 

