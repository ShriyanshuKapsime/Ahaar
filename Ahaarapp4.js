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

if (deficit.calories > 0) {
    document.getElementsByClassName("calorie")[0].style.display = "inline-block";
}
if (deficit.protein > 0) {
    document.getElementsByClassName("protein")[0].style.display = "inline-block";
}
if (deficit.vitaminB12 > 0) {
    document.getElementsByClassName("vitaminb12")[0].style.display = "inline-block";
}
if (deficit.vitaminD > 0) {
    document.getElementsByClassName("vitamind")[0].style.display = "inline-block";
}
if (deficit.zinc > 0) {
    document.getElementsByClassName("zinc")[1].style.display = "inline-block";
}
if (deficit.iron > 0) {
    document.getElementsByClassName("iron")[1].style.display = "inline-block";
}
if (deficit.folate > 0) {
    document.getElementsByClassName("folate")[0].style.display = "inline-block";
}
if (deficit.magnesium > 0) {
    document.getElementsByClassName("magnesium")[0].style.display = "inline-block";
}
