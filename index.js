let index = document.getElementsByClassName("index-number");
let supplySpans = document.getElementsByClassName("supplied-value");
let calculatedFeet = document.getElementById("calculated-feet");
let calculatedMeters = document.getElementById("calculated-meters");
let calculatedLiters = document.getElementById("calculated-liters");
let calculatedGallons = document.getElementById("calculated-gallons");
let calculatedPounds = document.getElementById("calculated-pounds");
let calculatedKilos = document.getElementById("calculated-kilos");

console.log(index);
console.log(supplySpans);

function convert() {
  let supplied = index[0].textContent;
  let suppliedInt = parseInt(supplied);

  if (isNaN(suppliedInt)) suppliedInt = 0;

  for (const span of supplySpans) {
    span.innerHTML = suppliedInt;
  }

  calculatedFeet.textContent = (suppliedInt * 3.28084).toFixed(3);
  calculatedMeters.textContent = (suppliedInt * 0.3048).toFixed(3);
  calculatedLiters.textContent = (suppliedInt * 3.78541).toFixed(3);
  calculatedGallons.textContent = (suppliedInt * 0.264172).toFixed(3);
  calculatedPounds.textContent = (suppliedInt * 2.20462).toFixed(3);
  calculatedKilos.textContent = (suppliedInt * 0.453592).toFixed(3);

  console.log(supplied);
}
