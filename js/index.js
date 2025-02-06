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

// // Ensure the script runs only after the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//   // Select the "leave_message" form using the name attribute
//   const messageForm = document.forms["leave_message"];

//   // Check if the form exists to avoid errors
//   if (messageForm) {
//     messageForm.addEventListener("submit", function (event) {
//       event.preventDefault(); // Prevent form from reloading

//       // Retrieve the values from the form fields
//       const usersName = event.target.usersName.value;
//       const usersEmail = event.target.usersEmail.value;
//       const usersMessage = event.target.usersMessage.value;

//       console.log("Name:", usersName);
//       console.log("Email:", usersEmail);
//       console.log("Message:", usersMessage);

//       // Select the #messages section
//       const messageSection = document.getElementById("messages");

//       // Find the <ul> element inside the #messages section
//       const messageList = messageSection.querySelector("ul");

//       // Create a new list item <li>
//       const newMessage = document.createElement("li");

//       // Set the inner HTML of newMessage
//       newMessage.innerHTML = `
//               <a href="mailto:${usersEmail}">${usersName}</a>:
//               <span>${usersMessage}</span>
//           `;

//       // Create the remove button
//       const removeButton = document.createElement("button");
//       removeButton.innerText = "Remove";
//       removeButton.type = "button";

//       // Add event listener to remove button
//       removeButton.addEventListener("click", function () {
//         const entry = removeButton.parentNode; // Find the parent <li>
//         entry.remove(); // Remove the entry from the DOM
//       });

//       // Append the remove button to newMessage
//       newMessage.appendChild(removeButton);

//       // Append the newMessage to the messageList
//       messageList.appendChild(newMessage);

//       // Clear the form fields after submission
//       messageForm.reset();
//     });
//   } else {
//     console.error(
//       "Form not found. Make sure the form's name attribute is correctly set."
//     );
//   }
// });

// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.forms["leave_message"];
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  function toggleMessageSection() {
    // Show the section if there are messages, otherwise hide it
    if (messageList.children.length > 0) {
      messageSection.style.display = "block";
    } else {
      messageSection.style.display = "none";
    }
  }

  if (messageForm) {
    messageForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form reload

      const usersName = event.target.usersName.value;
      const usersEmail = event.target.usersEmail.value;
      const usersMessage = event.target.usersMessage.value;

      console.log("Name:", usersName);
      console.log("Email:", usersEmail);
      console.log("Message:", usersMessage);

      // Create a new list item <li>
      const newMessage = document.createElement("li");
      newMessage.innerHTML = `
              <a href="mailto:${usersEmail}">${usersName}</a>: 
              <span>${usersMessage}</span>
          `;

      // Create the remove button
      const removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.type = "button";

      // Remove message when button is clicked
      removeButton.addEventListener("click", function () {
        newMessage.remove();
        toggleMessageSection(); // Hide section if no messages remain
      });

      // Append the remove button to the message
      newMessage.appendChild(removeButton);
      messageList.appendChild(newMessage);

      // Show messages section after adding a message
      toggleMessageSection();

      // Clear the form
      messageForm.reset();
    });
  }

  // Hide the section initially
  toggleMessageSection();
});
