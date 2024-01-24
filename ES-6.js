//Arrow Functions

// setTimeout(name, 1000);

function name() {
  console.log("Hello");
}
const bc = () => {
  console.log("World");
}; //es-6

// name();
// bc();

// let abd = { name: "hannan", age: 40, qualification: "diploma" };

// let abcd = [
//   { name: "Atha", age: 80 },
//   { name: "Ameen", age: 850 },
// ];

// console.log(abcd[1].name);

let menu = [
  {
    name: "burger",
    chategory: "Breakfast",
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pizza",
    chategory: "Lunch",
    url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "French Fries",
    chategory: "Lunch",
    url: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Samosa",
    chategory: "Dinner",
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// let chategories = menu.map((item) => {
//   console.log(item.chategory);
// });

// let chategories = new Set(
//   menu.map((item) => {
//     console.log(item.chategory);
//   })
// );
// console.log(typeof chategories);

// let result = document.getElementById("new");
// result.innerHTML = menu
//   .map((item) => {
//     //   console.log(item.chategory);
//     return `<div class="col-md-3 my-5"><div class="card" style="width: 100%">
//   <img src="${item.url}" class="card-img-top" alt="..." style="width: 100%; height:200px">
//   <div class="card-body">
//     <h5 class="card-title">${item.name}</h5>
//     <p class="card-text">${item.chategory}</p>
//     <a href="#" class="btn btn-primary">Book Now</a>
//   </div>
//   </div></div>`;
//   })
//   .join(" ");
// console.log(result);

//spread operator
// let boys = ["imad", "atta", "ameen", "gayaz", "khaleel"];
// let girls = ["saniya", "aisha", "rabiya", "kulsum", "fatima"];
// let bff = "Hannan";
// let bfff = "ameena";
// let combine = [...boys, bff, ...girls, bfff];
// console.log(combine);

//promises

// const ameen = new Promise((resolve, reject) => {
//   resolve("Ameen has married a girl");
// });
// console.log(ameen);

// const ameen = new Promise((resolve, reject) => {
//   resolve("Ameen has married a girl");
//   reject("Ameen has rejected a girl");
// });
// ameen.then((data) => console.log(data));
// ameen.catch((data) => console.log(data));

// let menupromise = new Promise((resolve, reject) => {
//   // const random = Math.floor(Math.random() * 4);
//   if (menu != null) {
//     resolve("There is a menu");
//   } else {
//     reject("There is no menu");
//   }
// });
// console.log(menupromise);

//async & await

// let example = async () => {
//   return "Hello Ameen";
// };
// // console.log(example);
// ameen();
// console.log("Ameen wake up!!");

//  async function ameen() {
//   const result = await example();
//   console.log(result);
// }

// const users = [
//   { id: 1, name: "hannan" },
//   { id: 2, name: "atha" },
//   { id: 3, name: "ameen" },
// ];

// const articles = [
//   { userId: 1, article: ["one", "two"] },
//   { userId: 2, article: ["seven", "nine"] },
//   { userId: 3, article: ["five", "six"] },
// ];

// function getUser(name) {
//   return new Promise((resolve, reject) => {
//     const user = users.find((user) => user.name === name);
//     if (user) {
//       return resolve(user);
//     } else {
//       return reject("No user found by the name " + name);
//     }
//   });
// }

// function getArticles(userId) {
//   return new Promise((resolve, reject) => {
//     const userArticles = articles.find((user) => user.userId === userId);
//     if (userArticles) {
//       return resolve(userArticles.article);
//     } else {
//       return reject("No id found by this user");
//     }
//   });
// }

// // console.log(getUser("hannan"));
// // console.log(getArticles(1));

// getUser("atha")
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err));

//Fetch API

const url = "https://api.publicapis.org/entries";

// fetch(url)
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

const datas = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
datas();
