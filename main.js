let points = 0;


const myHeading = document.querySelector(".mark-type");
myHeading.textContent = "Mini Mark";

console.log("points: " + points)
console.log("storage points: " + window.localStorage.getItem("points"));

let pointCount = document.querySelector(".points");
if (window.localStorage.getItem("points")) {
  pointCount.innerHTML = Number(window.localStorage.getItem("points")) + " points"
}
else {
  pointCount.innerHTML = "loading..."
}

document.querySelector(".mark-images").addEventListener("click", () => {
  alert("mark doesn't like to be poked! minus ten points");
  points-=10;
  window.localStorage.setItem("points", points.toString());
  pointCount.innerHTML = Number(window.localStorage.getItem("points")) + " points"
});


const boxtwo = document.querySelector(".mark-two");
const boxthree = document.querySelector(".mark-three");
const boxfour = document.querySelector(".mark-four");
const boxfive = document.querySelector(".mark-five");
if (window.localStorage.getItem("points")>10) {
  boxtwo.classList.remove("locked-mark");
  boxtwo.classList.add("second-mark-photo");
  myHeading.textContent = "Cool Mark";
}
if (window.localStorage.getItem("points")>20) {
  boxthree.classList.remove("locked-mark");
  boxthree.classList.add("third-mark-photo");
  myHeading.textContent = "Average Mark";
}
if (window.localStorage.getItem("points")>30) {
  boxfour.classList.remove("locked-mark");
  boxfour.classList.add("fourth-mark-photo");
  myHeading.textContent = "Intense Mark";
}
if (window.localStorage.getItem("points")>40) {
  boxfive.classList.remove("locked-mark");
  boxfive.classList.add("fifth-mark-photo");
  myHeading.textContent = "Older Mark";
}


/*
box.addEventListener("click", () => {
  if (box.classList.contains("mark-image-1")) {
    box.classList.remove("mark-image-1");
  } else {
    box.classList.add("mark-image-1");
  }
});
*/
function addPoints() {
  points+=1;
  window.localStorage.setItem("points", points.toString());
  pointCount.innerHTML = Number(window.localStorage.getItem("points")) + " points"
  
}

function reset() {
  points = 0;
  window.localStorage.setItem("points", points.toString);
  pointCount.innerHTML = 0 + " points"
}




  



