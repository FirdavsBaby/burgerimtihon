let burger = document.querySelector(".burger");

let cheese = document.querySelector(".cheese");
let meat = document.querySelector(".meat");
let onion = document.querySelector(".onion");
let pickle = document.querySelector(".pickle");
let salad = document.querySelector(".salad");
let tomato = document.querySelector(".tomato");


let btns = document.querySelector(".btns");
let finish = document.querySelector(".finish");
finish.addEventListener("click", () => {
  let number_z = document.createElement("h2");
  let z = Math.round(Math.random() * (35 - 10 + 1) + 10);
  btns.append(number_z);
  number_z.className = "zakaz"
  number_z.textContent = `Sizning zakazingiz №${z}`;
});

let total = document.querySelector("h1");
let narx = 2
total.textContent = `${narx}$`
meat.addEventListener("click", () => {
  narx += 2;
  let c = document.createElement("img");
  c.srcset = "burger-layers/meat.svg";
  burger.append(c);
  total.textContent = `${narx}$`;
});

cheese.addEventListener("click", () => {
  narx += 1;
  let c = document.createElement("img");
  c.srcset = "burger-layers/cheese.svg";
  burger.append(c);
  total.textContent = `${narx}$`;
});
onion.addEventListener("click", () => {
  narx += 0.5;
  let c = document.createElement("img");
  c.srcset = "burger-layers/onion.svg";
  burger.append(c);
  total.textContent = `${narx}$`;
});
tomato.addEventListener("click", () => {
  narx += 1;
  let c = document.createElement("img");
  c.srcset = "burger-layers/tomato.svg";
  burger.append(c);
  total.textContent = `${narx}$`;
});
salad.addEventListener("click", () => {
 narx += 3;
  let c = document.createElement("img");
  c.srcset = "burger-layers/salad.svg";
  burger.append(c);
  total.textContent = `${narx}$`;
});
pickle.addEventListener("click", () => {
  narx += 0.2;
  total.textContent = `${narx}$`;
  let c = document.createElement("img");
  c.srcset = "burger-layers/onion.svg";
  burger.append(c);
});

burger.addEventListener("click", (e) => {
  burger.removeChild(e.target);
});

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  burger.innerHTML = "";
  total.innerHTML = "2$";
});



