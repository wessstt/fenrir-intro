/* script to make sure HTML loads before script 
  (script can be placed anywhre on the page)  */
document.addEventListener("DOMContentLoaded", () => {

  /*  ///////////// SKILLS SECTION  /////////////  */
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Visual Studio Code",
    "GitHub",
    "Adobe Creative Cloud",
    "eCommerce Management",
    "CMS (BigCommerce/ Webflow/ Wordpress)",
    "SEO (semrush)",
    "Google Analytics", 
    "Google Search Console",
    "NetSuite",
    "Microsoft Office",
    "Project Management (Jira/ Asana/ Wrike)",
    "Email Marketing (Klaviyo/Mailchimp)",
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

  copyright.innerHTML = `🏳️‍⚧️ safe space 🏳️‍🌈 | &copy; Keri West ${thisYear}`;
  footer.appendChild(copyright);
 
  /*  /// Styling ///   */
  copyright.style.fontSize = "11px";
  copyright.style.wordSpacing = "1px";
  copyright.style.textAlign = "center";
  copyright.style.color = "#298c6f";
  copyright.style.fontWeight = "300";


/*  //////////// NAV BAR  ///////////// */
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector("closeIcon");
  const menuIcon = document.querySelector(".menuIcon")

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "block";
      hamburger.style.display = "none";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    }
  } hamburger.addEventListener("click", toggleMenu);
  
  menuItems.forEach(
    function(menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    }
  )

});

