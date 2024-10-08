// Add event listener to the form
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;

resumeForm.addEventListener("submit", function (event: Event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data and type cast elements
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const contact = (document.getElementById("contact") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const CareerObjective = (
    document.getElementById("career-objective") as HTMLTextAreaElement
  ).value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;

  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;

  // Display the collected data in the resume section
  const displayName = document.getElementById("display-name") as HTMLElement;
  const displayInfo = document.getElementById("display-Info") as HTMLElement;
  const displayCareerObjective = document.getElementById(
    "display-Objective"
  ) as HTMLElement;
  const displayExperience = document.getElementById(
    "display-experience"
  ) as HTMLElement;
  const displaySkills = document.getElementById(
    "display-skills"
  ) as HTMLElement;
  const displayEducation = document.getElementById(
    "display-education"
  ) as HTMLElement;
  displayName.innerText = name;
  displayInfo.innerText = `${address} | ${contact} | ${email}`;
  displayCareerObjective.innerText = CareerObjective;
  displayExperience.innerText = experience;
  displaySkills.innerText = skills;
  displayEducation.innerText = education;
  // Show the resume section (make sure it's not hidden)
  document.getElementById("resume-container")!.style.display = "block";
  // Hide the form once the resume is generated
  resumeForm.style.display = "none";
  document.getElementById("btn-container")!.style.display = "flex";
});

// create resume editable
const editButton = document.getElementById("editbtn") as HTMLButtonElement;
editButton.addEventListener("click", () => {
  const editableElements = document.querySelectorAll(
    '[contenteditable="false"]'
  ) as NodeListOf<HTMLElement>;

  editableElements.forEach((el) => {
    el.contentEditable = el.contentEditable === "true" ? "false" : "true";
  });

  editButton.innerText =
    editButton.innerText === "Edit Resume" ? "Lock Resume" : "Edit Resume";
});

const buttonContainer = document.getElementById(
  "btn-container"
) as HTMLButtonElement;

// create resume download in pdf form
const downloadButton = document.getElementById(
  "downloadbtn"
) as HTMLButtonElement;

downloadButton.addEventListener("click", () => {
  buttonContainer.style.display = "none";
  resumeForm.style.display = "none";
  window.print();
});

// create username based url
const Name = document.getElementById("display-name") as HTMLInputElement;
const username = Name.innerHTML.trim();
const baseUrl = window.location.origin;
const unique = `${baseUrl}/#${encodeURIComponent(username)}`;
const shareLink = document.getElementById("shareAbleLink") as HTMLAnchorElement;
shareLink.href = unique;
shareLink.innerText = unique;
