const deficit = JSON.parse(localStorage.getItem("deficitData"));
console.log("Deficit data from previous page:", deficit);

document.getElementsByClassName("cal")[0].textContent = deficit.calories;
document.getElementsByClassName("prot")[0].textContent = deficit.protein;
document.getElementsByClassName("vitb12")[0].textContent = deficit.vitaminB12;
document.getElementsByClassName("vitd")[0].textContent = deficit.vitaminD;
document.getElementsByClassName("iron")[0].textContent = deficit.iron;
document.getElementsByClassName("zinc")[0].textContent = deficit.zinc;
document.getElementsByClassName("mag")[0].textContent = deficit.magnesium;
document.getElementsByClassName("fol")[0].textContent = deficit.folate;
