
var el = document.querySelector(".dropDownMenu");
var mobileEl = document.querySelector(".mobileDropDownMenu");

window.onload = function() {
    console.log("this");
    el.style.display = "none";
    mobileEl.display = "none";
    mobileEl.style.display = "none";
}

var btn = document.querySelector(".dropDown");
var mobileBtn = document.querySelector(".hamburgerClass");
console.log(btn.textContent);

btn.onclick = function() {
    if (el.style.display == "none") {
        el.style.display = "unset";
    } else if (el.style.display == "unset") {
        el.style.display = "none";
    }
}

mobileBtn.onclick = function() {
    console.log("this");
    console.log(mobileEl.style.display);

    var tempEl = document.getElementById("mobileNavGrid");
    console.log(mobileEl.display);
    if (mobileEl.style.display == "none") {
        mobileEl.style.display = "unset";
        tempEl.style.gridTemplateRows = "repeat(16, 1fr)";
    } else {
        tempEl.style.gridTemplateRows = "repeat(3, 1fr)";
        mobileEl.style.display = "none";
    }
}


