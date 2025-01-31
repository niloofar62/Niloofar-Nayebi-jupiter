// Step 1: Create a date object and get the current year
const today = new Date();
const thisYear = today.getFullYear();

// Step 2: Select or create a footer element
let footer = document.querySelector("footer");
if (!footer) {
  footer = document.createElement("footer");
  document.body.appendChild(footer);
}
// Step 3: Create a new paragraph element for copyright
const copyright = document.createElement("p");

// Step 4: Set innerHTML with name and current year (including copyright symbol)
copyright.innerHTML = `&copy; ${thisYear} Niloofar Nayebi. All Rights Reserved. `;

// Step 5: Append the copyright paragraph to the footer
footer.appendChild(copyright);

// Step 1: Select the existing "Skills" section and the unordered list inside it
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "TypeScript",
  "Python",
  "AWS",
  "UI/UX Design",
];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

skills.forEach((skillText) => {
  const skill = document.createElement("li"); // Create an <li> for each skill
  skill.innerText = skillText; // Set the text inside the list item

  skillsList.appendChild(skill);
});
