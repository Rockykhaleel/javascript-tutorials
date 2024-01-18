//variables
// var a = 1; // var
// let b = 2; // let
// const c = 3; //const

// console.log(c);
// setTimeout( logged,2000); //async method
// console.log(c+=b);
// console.log(b);

//data types

// let d = 123;//numbers
// let e = 12345678900000000000;//bigInt
// let f = 'string'//single quotes
// let g = "string"//double quotes
// let h = `string ${f} ${g}`//back tics
// let i = false;
// if(i==true){
//     console.log("its true");
// }
// let j = undefined;
// let k = null;

// let l = [1,2,3,4];

// let m = prompt("Enter you name");

// let n = confirm(`Are you sure, you are ${m} person?`);

// console.log(n);
// if(n==true){
//     alert(`Hello ${m}`)
// }else{
//     alert("Please confirm your indentity")
// }

// const z = f +" " + g;
// console.log(h);

//functions
// function logged(){
//     console.log(a);
// }

//type convertions

// let z = '1';
// let y = '1';
// console.log(Number(z)+Number(y));
// console.log(typeof(z));
// let x = parseInt(z)
// console.log(typeof(x));

// let v = 123456;
// console.log(typeof(v));
// let w = v.toString()
// console.log(typeof(w));

//Arithmetic Operators

//+ add
//- sub
//* mul
// / div
// % mod
// ** exponential
// ++ increment
// -- decrement

// Assignment Operators
// =

//Comparison Operators

// ==
// if(a === '1'){
//     console.log("Hello");
// }
// ===
//>
//<
//>=
//<=

// Logical Operators

// || or
// && and
/* ! not */
// if(a == b || a == c){
//     console.log(a);
// }

// if(a == b && a == c){
//     console.log(a);
// }

// if(a != 2){
//     console.log("yes");
// }

// if(condition){
//     -----
// }else if(condition){
//     ----
// }else{
//     ---
// }

// a<b ? console.log("a is big") : console.log("b is big"); // ternary operator

//arthematic operators

// let ab = 2;
// let bc = 8;

// add

// console.log(ab);

// ab--;

// console.log(ab);

//funations and scope

// let global = 999;

// function hannan(){
//     console.log(global);
// }

// hannan()

// console.log(global);

//functions with parameters

// function kasai(f){
// console.log(`I need ${f}kg of meat`);
// console.log(f+f);
// return f+f+f;
// }

// document.getElementById('id').innerHTML = kasai(5);

//string manipulation

let name = "Hello corders";
//length
// console.log(name.length);

//position
//console.log(name[0]);
// console.log(name.at(0));

//last position
// console.log(name.at(-2));

//slice
// console.log(name.slice(0,2));

//substring
// console.log(name.substring(0,5));

//replace
// let rep = name.replace('corders','hannan');
// console.log(rep);
// console.log(name);
// let repp = name.replaceAll("Hello corders", "habibi come to dubai");
// console.log(name);
// console.log(repp);

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let fname = 'abdul';
// let lname = 'hannan';
// console.log(fname.concat(lname));
// console.log(fname+" "+lname);

// console.log(name.trim());
// console.log(name.trimStart());
// console.log(name.trimEnd());

// console.log(name.padStart(10,'a'));
// console.log(name.padEnd(10,'a'));

// console.log(name.charAt(0));

// console.log(name.split(' '));

// console.log(name.search('r'));

// console.log(name.match('H'));
// console.log(name.matchAll('l'));

// console.log(name.includes('corders'));
// console.log(name.startsWith('h'));

// let email = 'khaleel@gail.com'
// let valid = email.endsWith('@gmail.com')
// console.log(valid);

//array

let abcd = [2, 5, 8, 9, 1, 45];
// let abcdef = [4, 6, 5, 7, 10];
//abcd[0]

// let result = abcd.push();
// let result = abcd.pop();
// let result = abcd.toString();
// let result = abcd.join();
// let result = abcd.shift();
// let result = abcd.unshift(7);
// let result1 = result.flat();
// let result = abcd.concat(abcdef);
// let result = abcd.splice(0, 5, 55);
// let result = abcd.slice(0, 5);
// let result = abcd.sort().reverse();

// console.log(result);
// console.log(result);
// console.log(result1);

//while loop
let jj = 1;
// while (10 >= jj) {
//   console.log(`jj has looped ${jj} times`);
//   jj++;
// }

// do {
//   console.log(`jj has looped ${jj} times`);
//   jj++;
// } while (5 >= jj);

// let xyx = [1, 2, 4, 8, 9, 7];

// for (let a = 0; a < xyx.length; a++) {
//     const element = xyx[a];
//     console.log(element);
// }

// let xyx = ["a", "b", "c", "d", "e", "f"];
// for (let index = 0; index < xyx.length; index++) {
//   const element = xyx[index];
//   console.log(element);
// }

let letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
let yyy = letters.split(",");
// console.log(yyy);

// for (let index = 0; index < yyy.length; index++) {
//   const element = yyy[index];
//   console.log(element);
// }

// let lmn = yyy.map((ameen) => {
//   console.log(ameen);
// });
