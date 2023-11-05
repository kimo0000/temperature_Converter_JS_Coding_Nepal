const celscius = document.querySelector(".cels");
const fohrenheit = document.querySelector(".fohr");

celscius.focus();

celscius.addEventListener("keyup", (e) => {
  //   console.log(e.target.value)
  fohrenheit.value = `${((+celscius.value * 9) / 5 + 32).toFixed(
    2
  )} fohrenheit`;
  if (!celscius.value) fohrenheit.value = "";
});
fohrenheit.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
  celscius.value = `${(((+fohrenheit.value - 32) * 5) / 9).toFixed(
    2
  )} celscius`;
  if (!fohrenheit.value) celscius.value = "";
});
