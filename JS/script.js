const button = document.getElementById("_button");
const bar = document.getElementById("_progressbar");
const fill = document.getElementById("_fill");
const truck = document.getElementById("_truck");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  setTimeout(() => {
    bar.classList.toggle("active");
    fill.classList.toggle("active");
    truck.classList.toggle("active");
  }, 800);
});

bar.addEventListener("animationend", () => {
  setTimeout(() => {
    if (bar.classList.contains("active")) {
      bar.classList.remove("active");
      fill.classList.remove("active");
      truck.classList.remove("active");
    }
    bar.style.visibility = "hidden";
    fill.style.visibility = "hidden";
    truck.style.visibility = "hidden";
  }, 800);
});
