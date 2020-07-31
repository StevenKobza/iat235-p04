
var el = document.querySelector(".dropDownMenu");

window.onload = function() {
    console.log("this");
    el.style.display = "none";
}

var btn = document.querySelector(".dropDown");
console.log(btn.textContent);

btn.onclick = function() {
    el.style.display = "unset";
}