// Interface for the form data
interface ResumeData {
    firstName: string;
    surname: string;
    profession: string;
    city: string;
    country: string;
    phone: string;
    email: string;
    jobTitle: string;
    company: string;
    jobDesc: string;
    jobLocation: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    educationLevel: string;
    institute: string;
    fieldOfStudy: string;
    completionYear: string;
    skills: string[];
  }
  
  // Function to gather form data
  function getFormData(): ResumeData {
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const surname = (document.getElementById("surname") as HTMLInputElement).value;
    const profession = (document.getElementById("profession") as HTMLInputElement).value;
    const city = (document.getElementById("city") as HTMLInputElement).value;
    const country = (document.getElementById("country") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
  
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const jobDesc = (document.getElementById("job-desc") as HTMLInputElement).value;
    const jobLocation = (document.getElementById("job-location") as HTMLSelectElement).value;
  
    const startMonth = (document.getElementById("start-month") as HTMLSelectElement).value;
    const startYear = (document.getElementById("start-year") as HTMLSelectElement).value;
    const endMonth = (document.getElementById("end-month") as HTMLSelectElement).value;
    const endYear = (document.getElementById("end-year") as HTMLSelectElement).value;
  
    const educationLevel = (document.getElementById("education-level") as HTMLSelectElement).value;
    const institute = (document.getElementById("institute") as HTMLInputElement).value;
    const fieldOfStudy = (document.getElementById("field-of-study") as HTMLInputElement).value;
    const completionYear = (document.getElementById("completion-year") as HTMLSelectElement).value;
  
    const skillElements = document.querySelectorAll('input[name="skills"]:checked') as NodeListOf<HTMLInputElement>;
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
  function displayResume(data: ResumeData) {
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
  const generateResumeButton = document.querySelector(".btn-next") as HTMLButtonElement;
  generateResumeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = getFormData();
    displayResume(formData);
  });
  