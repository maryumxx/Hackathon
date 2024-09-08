"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to gather form data
function getFormData() {
    const firstName = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const profession = document.getElementById("profession").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const jobDesc = document.getElementById("job-desc").value;
    const jobLocation = document.getElementById("job-location").value;
    const startMonth = document.getElementById("start-month").value;
    const startYear = document.getElementById("start-year").value;
    const endMonth = document.getElementById("end-month").value;
    const endYear = document.getElementById("end-year").value;
    const educationLevel = document.getElementById("education-level").value;
    const institute = document.getElementById("institute").value;
    const fieldOfStudy = document.getElementById("field-of-study").value;
    const completionYear = document.getElementById("completion-year").value;
    const skillElements = document.querySelectorAll('input[name="skills"]:checked');
    const skills = Array.from(skillElements).map(skill => skill.value);
    return {
        firstName,
        surname,
        profession,
        city,
        country,
        phone,
        email,
        jobTitle,
        company,
        jobDesc,
        jobLocation,
        startMonth,
        startYear,
        endMonth,
        endYear,
        educationLevel,
        institute,
        fieldOfStudy,
        completionYear,
        skills
    };
}
// Function to display the resume
function displayResume(data) {
    const resumeContainer = document.createElement("div");
    resumeContainer.classList.add("resume-container");
    resumeContainer.innerHTML = `
      <h2>${data.firstName} ${data.surname}</h2>
      <p>${data.profession}</p>
      <p>${data.city}, ${data.country}</p>
      <p>${data.phone} | ${data.email}</p>
  
      <h3>Work Experience</h3>
      <p><strong>${data.jobTitle}</strong> at ${data.company}</p>
      <p>${data.jobLocation} | ${data.startMonth} ${data.startYear} - ${data.endMonth} ${data.endYear}</p>
      <p>${data.jobDesc}</p>
  
      <h3>Education</h3>
      <p><strong>${data.educationLevel}</strong> in ${data.fieldOfStudy}</p>
      <p>${data.institute}, Expected Completion: ${data.completionYear}</p>
  
      <h3>Skills</h3>
      <ul>
        ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    `;
    document.body.appendChild(resumeContainer);
}
// Add event listener to the "Next" button
const generateResumeButton = document.querySelector(".btn-next");
generateResumeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = getFormData();
    displayResume(formData);
});
