var skillSection = document.querySelector(".Skills");
console.log(skillSection);
var button = document.querySelector("button");
button.addEventListener("click", function () {
    if (skillSection.style.display == "block") {
        skillSection.style.display = "none";
        button.innerText = 'Show Skills';
    }
    else {
        skillSection.style.display = "block";
        button.innerText = 'Hide Skills';
    }
});
