/* script to make sure HTML loads before script 
  (script can be placed anywhre on the page)  */
document.addEventListener("DOMContentLoaded", () => {
  /*  ///////////// SKILLS SECTION  /////////////  */
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

  /*   ///////////// MESSAGE FORM SECTION /////////////   */
  /*  Hide message header on load  */
  document.getElementById("messages").style.display = "none";
  /* FORM */
  const messageForm = document.getElementsByName("leave_message")[0];
  messageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    /* USER INFO */
    const userValue = [
      e.target.usersName.value,
      e.target.usersEmail.value,
      e.target.usersMessage.value,
    ];

    const userInfo = [
      (usersName = userValue[0]),
      (usersEmail = userValue[1]),
      (usersMessage = userValue[2]),
    ];

    /*  DISPLAYS MESSAGES FROM USERS  */
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${userInfo[1]}">${userInfo[0]} </a> wrote:<span> ${userInfo[2]}</span>`;
    document.getElementById("messages").style.display = "";

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    /* CREATE REMOVE BUTTON */
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    /* REMOVE BUTTON & HIDE MESSAGES WHEN NONE */
    removeButton.addEventListener("click", (e) => {
      const entry = e.target.parentNode;
      messageList.removeChild(entry);
      if (messageList.length === true) {
        messages.style.display = "";
      } else {
        messages.style.display = "none";
      }
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
  });

  /*  ///////////// FOOTER SECTION /////////////   */
  const today = new Date();
  const thisYear = today.getFullYear();
  const footer = document.querySelector("footer");
  const copyright = document.createElement("p");

  copyright.innerHTML = `🏳️‍⚧️ safe space 🏳️‍🌈 | &copy; Keri West_ ${thisYear}`;
  footer.appendChild(copyright);
  copyright.style.fontSize = "12px";
  copyright.style.wordSpacing = "2px";
});
