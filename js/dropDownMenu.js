
var el = document.querySelector(".dropDownMenu");

window.onload = function() {
    console.log("this");
    el.style.display = "none";
}

var btn = document.querySelector(".dropDown");
console.log(btn.textContent);

btn.onclick = function() {
    if (el.style.display == "none") {
        el.style.display = "unset";
    } else if (el.style.display == "unset") {
        el.style.display = "none";
    }
}