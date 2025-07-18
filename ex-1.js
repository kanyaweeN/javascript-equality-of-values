// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // false คนละค่า
Object.is(0, -0); // false แยกค่า 0 -0
Object.is(NaN, 100); // false nan ไม่เท่ากับไรเลย
Object.is("one", "two"); // false string คนละอัน
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // false obj คนละตัว
Object.is(null, undefined); // false คนละประเภทไหมนะ

10 === 20; // false ตัวเลขไม่เท่ากัน
10 === "10" // false number กับ string
3.14 !== 3.14; // false ค่าเท่ากันแต่ใช้ !==
"TechUp" !== "TechUp"; //false string เท่ากันแต่ใช้ !==
NaN === NaN; // false 
0 !== -0; //false 

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; // false obj คนละ memmory 


