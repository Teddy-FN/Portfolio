/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Teddy Ferdian.A.A",
  title: "Hi all, I'm Teddy",
  subTitle: emoji(
    "A passionate Front end Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1eIaGDIhR40AN51QKAF0oemY01MgAi7_h/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Teddy-FN",
  linkedin: "https://www.linkedin.com/in/teddy-ferdian-abrar-amrullah-852aa5178/",
  gmail: "contact@tedd.ferdy.com",
  gitlab: "https://gitlab.com/Teddy-FN",
  facebook: "https://www.facebook.com/profile.php?id=100051266324589",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Responsive Design on web Applications"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Code Igniter",
      fontAwesomeClassname: "fab fa-free-code-camp"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
    // ,{
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Glints Academy",
      logo: require("../src/assets/images/GA.png"),
      subHeader: "Front End Developer",
      duration: "November 2020 - February 2021",
      desc: "Activities and Societies: learn built some apps and website",
      descBullets: [
        'HTML, CSS, and JavaScript technology to create responsive websites',
        'ReactJS framework for building frontends',
        'A wide variety of application architecture and information structure (MVR) designs',
        'Optimized Redux to create a consistent and flexible web on any platform',
        'Using CI / CD for development and deployment automation',
        'Implementing the Agile method in making websites',
        'Soft skill abilities'
      ]
    },
    {
      schoolName: "Academy Technology Warga Surakarta",
      logo: require("../src/assets/images/ATW.png"),
      subHeader: "Associate Degree of Mechanical Industry",
      duration: "September 2016 - November 2019",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend / Design", //Insert stack or technology you have experience in
//       progressPercentage: "90%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "70%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "90%"
//     }
//   ],
//   displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
// };

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Developer",
      company: "PT. Majapahit",
      companylogo: require("../src/assets/images/majapahit.png"),
      date: "April, 2021 - Present",
      desc:
        'Created a web application system on a subsystem intended for licensing in business and facilities for doing business based on the Online Single Submission - Risk-Based Approach (OSS RBA). Includes verifikator login UMK and non-UMK.',
      descBullets: [
        'Created a web application system on a subsystem intended for licensing in business and facilities for doing business based on the Online Single Submission'
      ]
    },
    {
      role: "Front End Developer",
      company: "Glints Academy",
      companylogo: require("../src/assets/images/GA.png"),
      date: "November, 2020 - February, 2021",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        'Learn HTML,CSS,Javascript, Git, GitLab,React JS, CI/CD, heroku / netlify for the deploying.',
        'Build a Mini Product in Mini Project in a Team with three stack Back End, Front End, and React Native (Movie Review) Role in this project: Team Lead, Stack Lead Front End.',
        'Build a Product in Final Project in a Team with another stack Back End, Front End, and React Native (SOKA) Role in this Project: Stack Lead Front End'
      ]
    },
    {
      role: "Full Stack PHP Developer - (CodeIgniter)",
      company: "Rachacha Indonesia",
      companylogo: require("../src/assets/images/Rachacha.png"),
      date: "October 2020 – November 2020",
      descBullets: [
        'Colaborating some team Programmer.',
        'build websites data all employers in Rachacha using CodeIgniter.',
        'Help To Repairing Hardware Computer,Help to Coordinating events'
      ]
    },
    {
      role: "Sales Marketing Positions",
      company: "PT Bank Mandiri Tbk.",
      companylogo: require("../src/assets/images/Mandiri.png"),
      date: "January 2020 – September 2020",
      desc:
        "sellers of cash loan products/services specifically for micro-entrepreneurs, Check Report Customer payloan,"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("../src/assets/images/soka-logo.png"),
      projectName: "Soka",
      projectDesc: "SOKA is an application to reach the peak of your health in playing soccer by avoiding all the failures of playing soccer due to the unavailability of soccer field rentals",
      footerLink: [
        {
          name: "Visit Soka Website",
          url: "https://sokaweb.netlify.app/"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("../src/assets/images/SlackLogo.png"),
      projectName: "Slack Clone App",
      projectDesc: "Making slack clone app on react challenge 5 days by Clever Programmer",
      footerLink: [
        {
          name: "Visit Slack Clone",
          url: "https://slackcloneweb.netlify.app/"
        }
      ]
    },

    // EASY BANK CHALLENGE
    {
      image: require("../src/assets/images/logo-easy.svg"),
      projectName: "Easy Bank - Frontend Mentors Challenge",
      projectDesc: "Making EasyBank using HTML5, SASS, JavaScript by frontend mentors",
      footerLink: [
        {
          name: "Visit Easy Bank",
          url: "https://easybankchlnge.netlify.app/"
        }
      ]
    },
    // OSS RBA
    {
      image: require("../src/assets/images/LOGO_OSS_NEW.png"),
      projectName: "OSS RBA (Online Single Submission)",
      projectDesc: "Created a web application system on a subsystem intended for licensing in business and facilities for doing business based on the Online Single Submission - Risk-Based Approach (OSS RBA).",
      footerLink: [
        {
          name: "Visit OSS RBA",
          url: "https://oss.go.id/"
        }
      ]
    },
    // OMNIFOOD
    {
      image: require("../src/assets/images/logo.png"),
      projectName: "Omnifood - (Udemy Project)",
      projectDesc: "Created a web application system on a subsystem intended for licensing in business and facilities for doing business based on the Online Single Submission - Risk-Based Approach (OSS RBA).",
      footerLink: [
        {
          name: "Visit Omnifood",
          url: "https://omnifood-websites.netlify.app/"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("../src/assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("../src/assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("../src/assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url:
//         "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 859 2605 1064",
  email_address: "contact@tedd.ferdy.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  // techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
