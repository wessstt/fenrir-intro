/* script to make sure HTML loads before script 
  (script can be placed anywhre on the page)  */
document.addEventListener("DOMContentLoaded", () => {
  /*
         =======================================  
         ***********    NAV BAR    *************
         =======================================
       */
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-item").forEach((nav) =>
    nav.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
  /*
         ========================================== 
         ************ SKILLS SECTION  *************
         ==========================================
       */
  const skills = [
    "HTML",
    "CSS",
    "JavaScript [node.js]",
    "Visual Studio Code",
    "GitHub",
    "Adobe Creative Cloud",
    "eCommerce Management",
    "SEO [semrush]",
    "Google Analytics",
    "Google Search Console",
    "NetSuite",
    "Microsoft Office Suite",
    "Content Management Systems",
    "BigCommerce | Webflow | Wordpress",
    "PM [Jira | Asana | Wrike | Trello]",
    "Email Marketing [Klaviyo | Mailchimp]",
  ];
  const skillsSection = document.getElementById("skills");
  skillsList = skillsSection.querySelector("ul");
  for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
  }

  /*
          ====================================  
          ************ PROJECTS  *************
          ====================================
       */
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  const url = "https://api.github.com/users/wessstt/repos";

  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  function githubRepo(repositories) {
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      const repoLink = document.createElement("a");
      repoLink.href = repositories[i].html_url;
      repoLink.textContent = repositories[i].name;

      project.appendChild(repoLink);
      projectList.appendChild(project);
    }
  }

  fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(githubRepo)
    .catch((error) => {
      console.log("Oops, there was an error fetching your request.", error);
    });

  /*
         ================================================
         ************ MESSAGE FORM SECTION **************
         ================================================
       */
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
    newMessage.innerHTML = `<a href="mailto:${userInfo[1]}">${userInfo[0]} wrote:</a> <span> ${userInfo[2]}</span>`;
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
      if (messageList.children.length) {
        messages.style.display = "block";
      } else {
        messages.style.display = "none";
      }
    });

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    messageForm.reset();
  });
  /*
         =========================================  
         ************ FOOTER SECTION *************
         =========================================  
       */
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
  copyright.style.marginBottom = "1rem";
});
