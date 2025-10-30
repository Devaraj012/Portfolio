// Data.js file to dynamically load content for the portfolio

const portfolioData = {
  navbar: [
    { id: "home", label: "Home" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
  home: {
    name: "Devaraj S",
    title: "Data Analyst",
    description: [
      "My passion is turning raw data into meaningful insights that drive effective business decisions. I love solving real problems with numbers.",
      "I specialize in Power BI, SQL, and Python to deliver clear, actionable data stories."
    ],
    socialLinks: [
      { href: "https://github.com/Devaraj012", icon: "fa-brands fa-github" },
      { href: "https://www.linkedin.com/in/devaraj-s-841bb7207", icon: "fa-brands fa-linkedin-in" },
      { href: "mailto:devarajsn0901@email.com", icon: "fa-solid fa-envelope" }
    ],
    actions: [
      { href: "#contact", label: "Hire Me", icon: "fa-solid fa-paper-plane" },
      { href: "https://drive.google.com/file/d/1arIrpTWk4FpFa41S-GMvHg59tKGOfO8q/view?usp=sharing", label: "Resume", icon: "fa-solid fa-download" }
    ],
    image: "Dev.jpg"
  },
  journey: {
    education: [
      {
        date: "Jun 2019 - Jun 2023",
        degree: "Bachelor of Engineering",
        institution: "K.S. Rangasamy College of Technology",
        institutionLink: "https://www.ksrct.ac.in/",
        description: "Completed B.E. in Electronics and Communications Engineering with strong fundamentals in digital systems, communication, and embedded technologies. Engaged in projects on IoT, microcontrollers, and wireless communication. CGPA: 8.7.",
        logo: "KSRCT_LOGO_2.png"
      },
      {
        date: "Jun 2018 - March 2019",
        degree: "ISC(XII), Mathematics with Biology",
        institution: "Mahendra Marticulation Higher Secondary School",
        institutionLink: "https://mahendra.org/schools/aboutus.html",
        description: "Completed my Class 12 (ISC) at Mahendra Matriculation Higher Secondary School, specializing in Mathematics with Biology.",
        logo: "Mahendra-1.png"
      }
    ],
    experience: [
      {
        date: "Jan 2024 - Present",
        role: "Data Analyst",
        company: "I-Bacus Tech Solution Private Limited",
        companyLink: "https://www.ibacustech.com/",
        description: [
          "Designed and developed Power BI dashboards and reports to visualize key performance indicators (KPIs) and business metrics, improving decision-making processes by 20%.",
          "Collaborated with business stakeholders to understand their data requirements and translate them into effective visualizations.",
          "Extracted, transformed, and loaded data from various sources using Power Query and ETL processes.",
          "Connected Power BI to diverse data sources, such as MySQL, SQL Server, Excel, MongoDB, and MariaDB.",
          "Maintained and updated existing Power BI reports and dashboards to ensure data accuracy and relevance."
        ],
        logo: "I BACUS TECH SOLUTION PRIVATE LIMITED NEW LOGO.png"
      }
    ]
  },
  skills: {
    categories: [
      {
        title: "Data & Analytics",
        skills: [
          { name: "Power BI", icon: "https://img.icons8.com/color/48/power-bi.png" },
          { name: "Tableau", icon: "https://img.icons8.com/color/48/tableau-software.png" },
          { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" },
          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
        ]
      },
      {
        title: "Database Management",
        skills: [
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
          { name: "SQL Server", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
          { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ]
      },
      {
        title: "Data Science & Libraries",
        skills: [
          { name: "Pandas", icon: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
          { name: "Numpy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
          { name: "Matplotlib", icon: "https://matplotlib.org/_static/logo2.svg" }
        ]
      },
      {
        title: "API & Integration",
        skills: [
          { name: "API", icon: "https://img.icons8.com/ios/50/api.png" },
          { name: "Twilio (SMS automation)", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" },
          { name: "Postman (API Testing)", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" }
        ]
      }
    ]
  },
  projects: [
    {
      title: "IPL 2023 Analysis",
      category: "Data Analysis",
      description: "Exploratory data analysis of IPL 2023 covering team stats, player performance, and season insights.",
      technologies: ["Power BI", "Excel", "DAX"],
      image: "ipl-2023.jpg",
      githubLink: "https://github.com/Devaraj012/IPL"
    },
    {
      title: "Call-Centre Dashboard",
      category: "Data Visualization",
      description: "Interactive dashboard to monitor call volumes, agent performance, and customer satisfaction in real time.",
      technologies: ["Power BI", "Excel"],
      image: "call-Centre.webp",
      githubLink: "https://github.com/Devaraj012/Call-Centre"
    }
  ]
};