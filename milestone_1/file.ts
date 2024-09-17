const skillSection = document.querySelector(".Skills") as HTMLElement;
console.log(skillSection);

const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", () => {
  if (skillSection.style.display == "block") {
    skillSection.style.display = "none";
    button.innerText = 'Show Skills'
  } else {
    skillSection.style.display = "block";
    button.innerText = 'Hide Skills'
  }
});
