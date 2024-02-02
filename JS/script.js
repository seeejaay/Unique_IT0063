const changeColor = () => {
  var element = document.querySelector(".wrapper");
  element.classList.toggle("dark");
};
const button = document.getElementById("_button");
const bar = document.getElementById("_progressbar");
const fill = document.getElementById("_fill");
const truck = document.getElementById("_truck");
const globe = document.getElementById("_globe");
const computer = document.getElementById("_computer");
const trucks = document.getElementById("_trucks");
const completed = document.getElementById("_completed");
const contain = document.getElementById("_contain");
const circle = document.getElementById("_circle");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  setTimeout(() => {
    bar.classList.toggle("active");
    fill.classList.toggle("active");
    truck.classList.toggle("active");
    globe.classList.toggle("active");
    computer.classList.toggle("active");
    trucks.classList.toggle("active");
  }, 800);
});

bar.addEventListener("animationend", () => {
  setTimeout(() => {
    if (bar.classList.contains("active")) {
      bar.classList.remove("active");
      fill.classList.remove("active");
      truck.classList.remove("active");
      globe.classList.remove("active");
      computer.classList.remove("active");
      trucks.classList.remove("active");
      completed.classList.add("active");
      circle.classList.add("active");
    }
    bar.style.visibility = "hidden";
    fill.style.visibility = "hidden";
    truck.style.visibility = "hidden";
    globe.style.visibility = "hidden";
    computer.style.visibility = "hidden";
    trucks.style.visibility = "hidden";
    contain.style.visibility = "hidden";
    circle.style.visibility = "visible";
  }, 800);

  setTimeout(() => {
    circle.style.visibility = "hidden";
    circle.style.opacity = "0";
  }, 2000);
});
