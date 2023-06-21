///////////// script to make sure HTML loads before script //////////
//////////// (script can be placed anywhre on the page) /////////////
document.addEventListener("DOMContentLoaded", () => {
  
  
  
  ///////////////////////////////////
  ///////////// SKILLS /////////////
  /////////////////////////////////
  const skills = [
    "HTML / CSS",
    "JavaScript",
    "Visual Studio Code",
    "GitHub",
    "Adobe Creative Cloud",
    "eCommerce Management",
    "Content Management Systems (BigCommerce, Webflow, Wordpress)",
    "SEO (Google Analytics, Google Search Console, semrush)",
    "NetSuite",
    "Microsoft Office",
    "Project Management Systems (Jira, Asana, Wrike)",
    "Email Marketing (Klaviyo, Mailchimp)",
  ];
  const skillsSection = document.getElementById("skills");
  skillsList = skillsSection.querySelector("ul");
  for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
  }



  /////////////////////////////////////////
  ///////////// MESSAGE FORM /////////////
  ///////////////////////////////////////

  // HIDE MESSAGES WHEN NONE//
  document.getElementById("messages").style.display = "none";

  // FORM //
  const messageForm = document.getElementsByName("leave_message")[0];
  messageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // USER INFO //
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName} </a> wrote:<span> ${usersMessage}</span>`;

    // MESSAGES //
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    // SHOW MSGS WHEN MSGS RECIEVED //
    document.getElementById("messages").style.display = "";

    // CREATE REMOVE BUTTON //
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    // REMOVE BUTTON //
    removeButton.addEventListener("click", (e) => {
      const entry = e.target.parentNode;
      messageList.removeChild(entry);
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
  });



  //////////////////////////////////////////////////////////
  ///////////// FOOTER --- [COPYRIGHT & DATE] /////////////
  ////////////////////////////////////////////////////////
  const today = new Date();
  const thisYear = today.getFullYear();
  const footer = document.querySelector("footer");
  const copyright = document.createElement("p");

  copyright.innerHTML = `🏳️‍⚧️ safe space 🏳️‍🌈 | &copy; Keri West_ ${thisYear}`;
  footer.appendChild(copyright);
  copyright.style.fontSize = "10px";


});
