const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
async function getColors(hexColor) {
  const response = await fetch(
    //pulls data from the color api
    //variable hexColor is generated using the above hexadecimal array.
    `https://www.thecolorapi.com/id?hex=${hexColor}&format=json`
  );
  const colors = await response.json();
  return colors;
}
btn.addEventListener("click", async function () {
  let colors = await getColors(getHexColor());
  let hexColorName = colors.name.value;
  let hexColor = colors.hex.value;
  console.log(hexColorName);
  console.log(hexColor);
  color.textContent = hexColorName;
  document.body.style.backgroundColor = hexColor;
});
//generates a random hex value by looping through the array 6 times and concantenating it to the end of the hexColor variable
const getHexColor = function () {
  let hexColor = "";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
};
//chooses a random index so that the value is random for each part of the hexColor variable.
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
// btn.addEventListener("click", function () {
//   let hexColor = "#";

//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }

//   document.body.style.backgroundColor = hexColor;
// });
// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }
