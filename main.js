const myBtn = document.getElementById("myBtn");
const myBtn1 = document.getElementById("myBtn1");
const cntClick = document.getElementById("cntClick");
const span = document.querySelector("span");

var nbClick = 0;

myBtn.addEventListener("click", increment);
myBtn1.addEventListener("click", decrement);

function increment() {
  nbClick++;
  cntClick.textContent = "You clicked " + nbClick + " times.";
  console.log(cntClick.textContent = "You clicked " + nbClick + " times.");
}

function decrement() {
  nbClick--;
  cntClick.textContent = "You clicked " + nbClick + " times.";
  console.log(cntClick.textContent = "You clicked " + nbClick + " times.");
}

// function decrement() {
//   nbClick--;
//   if (nbClick === 0) {
//     span.textContent = "you are at 0";
//   } else {
//     span.textContent = nbClick;
//   }
//   console.log(nbClick);
// }
