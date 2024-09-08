"use strict";

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
        skills,
    };
}
// Function to display the resume
// Function to display the resume
function displayResume(data) {
    const resumeContainer = document.createElement("div");
    resumeContainer.classList.add("resume-container");
    resumeContainer.innerHTML = `
    <div style="
      display: flex;
      background-color: white;
      width: 70%;
      margin: 50px auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;
    ">
      <!-- Left Section -->
      <div style="background-color: #4cb2e0; padding: 20px; width: 35%; color: white; text-align: center;">
        <h2 style="margin-bottom: 10px;">${data.firstName} ${data.surname}</h2>
        <p style="font-weight: bold; margin-bottom: 30px;">${data.profession}</p>
        <p>${data.city}, ${data.country}</p>

        <h3 style="margin-top: 30px;">Contact</h3>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>

        <h3 style="margin-top: 30px;">Education</h3>
        <p><strong>${data.educationLevel}</strong> in ${data.fieldOfStudy}</p>
        <p>${data.institute}</p>
        <p>Expected Completion: ${data.completionYear}</p>
      </div>

      <!-- Right Section -->
      <div style="padding: 20px; width: 65%;">
        <h3>Experience</h3>
        <p><strong>${data.jobTitle}</strong> at ${data.company}</p>
        <p>${data.jobLocation} | ${data.startMonth} ${data.startYear} - ${data.endMonth} ${data.endYear}</p>
        <p>${data.jobDesc}</p>

        <h3 style="margin-top: 30px;">Skills</h3>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 15px;">
          ${data.skills.map(skill => `
            <li style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span>${skill}</span>
              
              </span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
    document.body.appendChild(resumeContainer);
}
// Event listener for the button
document.addEventListener("DOMContentLoaded", () => {
    const generateResumeButton = document.querySelector(".btn-next");
    if (generateResumeButton) {
        generateResumeButton.addEventListener("click", (event) => {
            event.preventDefault();
            const formData = getFormData();
            displayResume(formData);
        });
    }
    else {
        console.error('Button not found');
    }
});
