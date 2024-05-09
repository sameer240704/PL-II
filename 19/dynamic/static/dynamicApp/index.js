const color = document.getElementById("color");
const font = document.getElementById("font");
const positive = document.getElementById("positive");
const negative = document.getElementById("negative");
let change = false;

color.addEventListener("click", () => {
  if (change) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "";
  }
  change = !change;
  console.log(change);
});

font.addEventListener("click", () => {
  document.body.style.fontFamily = "Arial";
});

positive.addEventListener("click", () => {
  let currentFontSize = parseFloat(
    window.getComputedStyle(document.body).fontSize
  );

  // Increase the font size by 1px
  let newFontSize = currentFontSize + 1;

  // Set the new font size
  document.body.style.fontSize = newFontSize + "px";

  // Log the new font size to the console
  console.log(document.body.style.fontSize);
});

negative.addEventListener("click", () => {
  let currentFontSize = parseFloat(
    window.getComputedStyle(document.body).fontSize
  );

  // Increase the font size by 1px
  let newFontSize = currentFontSize - 1;

  // Set the new font size
  document.body.style.fontSize = newFontSize + "px";

  // Log the new font size to the console
  console.log(document.body.style.fontSize);
});
