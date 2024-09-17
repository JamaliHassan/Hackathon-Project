// Add event listener to the form
var resumeForm = document.getElementById("resumeForm");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Collect form data and type cast elements
    var name = document.getElementById("name").value;
    var address = document.getElementById("address")
        .value;
    var contact = document.getElementById("contact")
        .value;
    var email = document.getElementById("email").value;
    var CareerObjective = document.getElementById("career-objective").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills")
        .value;
    var education = document.getElementById("education").value;
    // Display the collected data in the resume section
    var displayName = document.getElementById("display-name");
    var displayInfo = document.getElementById("display-Info");
    var displayCareerObjective = document.getElementById("display-Objective");
    var displayExperience = document.getElementById("display-experience");
    var displaySkills = document.getElementById("display-skills");
    var displayEducation = document.getElementById("display-education");
    displayName.innerText = name;
    displayInfo.innerText = "".concat(address, " | ").concat(contact, " | ").concat(email);
    displayCareerObjective.innerText = CareerObjective;
    displayExperience.innerText = experience;
    displaySkills.innerText = skills;
    displayEducation.innerText = education;
    // Show the resume section (make sure it's not hidden)
    document.getElementById("resume-container").style.display = "block";
    // Hide the form once the resume is generated
    resumeForm.style.display = "none";
});
// create resume editable
var editButton = document.getElementById("editbtn");
editButton.addEventListener("click", function () {
    var editableElements = document.querySelectorAll('[contenteditable="false"]');
    console.log(editableElements);
    console.log(editableElements);
    editableElements.forEach(function (el) {
        el.contentEditable = el.contentEditable === "true" ? "false" : "true";
    });
    editButton.innerText =
        editButton.innerText === "Edit Resume" ? "Lock Resume" : "Edit Resume";
});
// create resume download in pdf form 
var downloadButton = document.getElementById("downloadbtn");
downloadButton.addEventListener("click", function () {
    window.print();
});
var Name = document.getElementById("display-name");
// creating username based url
var username = Name.innerHTML.trim();
var baseUrl = window.location.origin;
var unique = "".concat(baseUrl, "/#").concat(encodeURIComponent(username));
var shareLink = document.getElementById("shareAbleLink");
shareLink.href = unique;
shareLink.innerText = unique;
console.log(unique);
console.log(username);
