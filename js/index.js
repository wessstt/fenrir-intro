  ///////////// script to make sure HTML loads before script //////////
  //////////// (script can be placed anywhre on the page) /////////////
document.addEventListener("DOMContentLoaded", () => {


  ///////////// FOOTER --- [COPYRIGHT & DATE] /////////////
  const today = new Date();
  const thisYear = today.getFullYear();
  const footer = document.querySelector("footer");
  const copyright = document.createElement("p");

  copyright.innerHTML = `🏳️‍⚧️ safe space 🏳️‍🌈 | &copy; Keri West_ ${thisYear}`;
  footer.appendChild(copyright);
 


  ///////////// SKILLS /////////////
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
  const skillsSection = document.getElementById('skills');
  skillsList = skillsSection.querySelector('ul');
  for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
  }
});
