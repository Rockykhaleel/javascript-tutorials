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

let result = document.getElementById("new");
result.innerHTML = menu
  .map((item) => {
    //   console.log(item.chategory);
    return `<div class="col-md-3 my-5"><div class="card" style="width: 100%">
  <img src="${item.url}" class="card-img-top" alt="..." style="width: 100%; height:200px">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.chategory}</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
  </div></div>`;
  })
  .join(" ");
console.log(result);
