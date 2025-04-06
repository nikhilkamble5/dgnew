const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      jobType: "Full-time",
      experience: "1-3 Years",
      description: "We are looking for a talented Frontend Developer to join our team. You will be responsible for building user interfaces and implementing frontend features.",
      postedDate: "2023-04-15",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      responsibilities: [
        "Develop and maintain frontend applications using React",
        "Collaborate with UX/UI designers to implement designs",
        "Optimize applications for maximum speed and scalability",
        "Write clean, maintainable, and efficient code"
      ],
      requirements: [
        "1-3 years of experience in frontend development",
        "Strong knowledge of React, JavaScript, CSS and HTML",
        "Experience with responsive design and cross-browser compatibility",
        "Familiarity with modern frontend build pipelines and tools"
      ],
      education: "Bachelor's degree in Computer Science or related field (or equivalent experience)",
      shift: ["9am-5pm"],
      category: "Development",
      applyLink: "mailto:careers@example.com?subject=Frontend%20Developer%20Application"
    },
    {
      id: 2,
      title: "Backend Engineer",
      location: "Pune, India",
      jobType: "Full-time",
      experience: "3-5 Years",
      description: "Join our backend team to build robust, scalable services and APIs that power our applications.",
      postedDate: "2023-04-10",
      skills: ["Node.js", "Express", "MongoDB", "REST API", "AWS"],
      responsibilities: [
        "Design and implement backend services using Node.js",
        "Create and maintain RESTful APIs",
        "Optimize application performance and scalability",
        "Collaborate with frontend developers to integrate user-facing elements"
      ],
      requirements: [
        "3-5 years of experience in backend development",
        "Strong knowledge of Node.js and Express",
        "Experience with MongoDB and database design",
        "Familiarity with cloud services like AWS"
      ],
      education: "Bachelor's degree in Computer Science or related field",
      shift: ["9am-5pm"],
      category: "Development",
      applyLink: "mailto:careers@example.com?subject=Backend%20Engineer%20Application"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "Bangalore, India",
      jobType: "Full-time",
      experience: "3-5 Years",
      description: "We're looking for a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.",
      postedDate: "2023-04-05",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage and optimize cloud infrastructure",
        "Implement monitoring and alerting solutions",
        "Automate deployment processes"
      ],
      requirements: [
        "3-5 years of DevOps experience",
        "Strong knowledge of AWS services",
        "Experience with containerization using Docker and Kubernetes",
        "Knowledge of Infrastructure as Code using Terraform or similar tools"
      ],
      education: "Bachelor's degree in Computer Science or equivalent experience",
      shift: ["9am-5pm"],
      category: "Operations",
      applyLink: "mailto:careers@example.com?subject=DevOps%20Engineer%20Application"
    },
    {
      id: 4,
      title: "UI/UX Designer",
      location: "Remote",
      jobType: "Full-time",
      experience: "1-3 Years",
      description: "We're seeking a creative UI/UX Designer to craft beautiful, intuitive user interfaces and experiences.",
      postedDate: "2023-04-01",
      skills: ["Figma", "Adobe XD", "UI Design", "User Research", "Wireframing"],
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers to implement designs",
        "Create and maintain design systems"
      ],
      requirements: [
        "1-3 years of UI/UX design experience",
        "Proficiency in design tools like Figma or Adobe XD",
        "Strong portfolio demonstrating UI/UX projects",
        "Understanding of web and mobile design principles"
      ],
      education: "Degree in Design, Human-Computer Interaction, or related field",
      shift: ["9am-5pm"],
      category: "Design",
      applyLink: "mailto:careers@example.com?subject=UI/UX%20Designer%20Application"
    },
    {
      id: 5,
      title: "Technical Support Engineer",
      location: "Pune, India",
      jobType: "Full-time",
      experience: "0-1 Years",
      description: "Join our support team to provide excellent customer service and resolve technical issues for our users.",
      postedDate: "2023-03-25",
      skills: ["Technical Support", "Troubleshooting", "Customer Service", "Linux"],
      responsibilities: [
        "Respond to customer inquiries and troubleshoot issues",
        "Create and update documentation for common issues",
        "Work with development team to report bugs and feature requests",
        "Provide timely and accurate support to customers"
      ],
      requirements: [
        "0-1 years of experience in technical support or related field",
        "Excellent communication skills",
        "Ability to troubleshoot and solve complex problems",
        "Basic understanding of Linux systems"
      ],
      education: "Bachelor's degree or equivalent experience",
      shift: ["6am-3pm", "2pm-11pm", "10pm-7am"],
      category: "Support",
      applyLink: "mailto:careers@example.com?subject=Technical%20Support%20Engineer%20Application"
    },
    {
      id: 6,
      title: "Product Manager",
      location: "Bangalore, India",
      jobType: "Full-time",
      experience: "5+ Years",
      description: "We're looking for an experienced Product Manager to lead our product development efforts and drive our product strategy.",
      postedDate: "2023-03-20",
      skills: ["Product Management", "Agile", "User Stories", "Roadmapping", "Market Research"],
      responsibilities: [
        "Define and prioritize product features and requirements",
        "Lead the product development process from conception to launch",
        "Work closely with engineering, design, and marketing teams",
        "Analyze market trends and competitive landscape"
      ],
      requirements: [
        "5+ years of experience in product management",
        "Experience with agile development methodologies",
        "Strong analytical and problem-solving skills",
        "Excellent communication and leadership abilities"
      ],
      education: "Bachelor's degree in Business, Computer Science, or related field",
      shift: ["9am-5pm"],
      category: "Management",
      applyLink: "mailto:careers@example.com?subject=Product%20Manager%20Application"
    },
    {
      id: 7,
      title: "Data Analyst",
      location: "Mumbai, India",
      jobType: "Full-time",
      experience: "1-3 Years",
      description: "Join our data team to analyze information, identify trends, and provide insights that drive business decisions.",
      postedDate: "2023-03-15",
      skills: ["SQL", "Python", "Data Visualization", "Excel", "Power BI"],
      responsibilities: [
        "Collect, clean, and analyze large datasets",
        "Create reports and visualizations to present findings",
        "Work with stakeholders to define metrics and KPIs",
        "Identify trends and patterns in data to support decision-making"
      ],
      requirements: [
        "1-3 years of experience in data analysis",
        "Strong SQL and Python skills",
        "Experience with data visualization tools",
        "Strong analytical and problem-solving abilities"
      ],
      education: "Bachelor's degree in Statistics, Mathematics, Computer Science, or related field",
      shift: ["9am-5pm"],
      category: "Analytics",
      applyLink: "mailto:careers@example.com?subject=Data%20Analyst%20Application"
    },
    {
      id: 8,
      title: "QA Engineer",
      location: "Hyderabad, India",
      jobType: "Full-time",
      experience: "1-3 Years",
      description: "We're seeking a detail-oriented QA Engineer to ensure the quality of our products through comprehensive testing.",
      postedDate: "2023-03-10",
      skills: ["Manual Testing", "Automated Testing", "Selenium", "JIRA", "Test Plans"],
      responsibilities: [
        "Create and execute test plans and test cases",
        "Identify, document, and track bugs",
        "Develop and maintain automated tests",
        "Collaborate with developers to resolve issues"
      ],
      requirements: [
        "1-3 years of experience in software testing",
        "Experience with both manual and automated testing",
        "Familiarity with testing tools and methodologies",
        "Strong attention to detail"
      ],
      education: "Bachelor's degree in Computer Science or related field",
      shift: ["9am-5pm"],
      category: "Quality Assurance",
      applyLink: "mailto:careers@example.com?subject=QA%20Engineer%20Application"
    },
    {
      id: 9,
      title: "Marketing Specialist",
      location: "Remote",
      jobType: "Part-time",
      experience: "1-3 Years",
      description: "Join our marketing team to help create and execute strategies that drive brand awareness and customer engagement.",
      postedDate: "2023-03-05",
      skills: ["Digital Marketing", "Content Creation", "Social Media", "SEO", "Analytics"],
      responsibilities: [
        "Plan and execute marketing campaigns",
        "Create engaging content for various channels",
        "Manage social media accounts and community engagement",
        "Track and analyze marketing performance metrics"
      ],
      requirements: [
        "1-3 years of experience in digital marketing",
        "Strong content creation and copywriting skills",
        "Experience with social media management and SEO",
        "Analytical mindset and data-driven approach"
      ],
      education: "Bachelor's degree in Marketing, Communications, or related field",
      shift: ["Flexible Hours"],
      category: "Marketing",
      applyLink: "mailto:careers@example.com?subject=Marketing%20Specialist%20Application"
    },
    {
      id: 10,
      title: "Mobile Developer",
      location: "Pune, India",
      jobType: "Contract",
      experience: "3-5 Years",
      description: "We're looking for a skilled Mobile Developer to join our team and help build cross-platform mobile applications.",
      postedDate: "2023-03-01",
      skills: ["React Native", "iOS", "Android", "JavaScript", "Firebase"],
      responsibilities: [
        "Develop and maintain mobile applications using React Native",
        "Collaborate with the design team to implement UI/UX",
        "Ensure app performance and reliability",
        "Contribute to the architecture and planning of mobile projects"
      ],
      requirements: [
        "3-5 years of experience in mobile development",
        "Strong knowledge of React Native and JavaScript",
        "Experience with both iOS and Android platforms",
        "Familiarity with native app development is a plus"
      ],
      education: "Bachelor's degree in Computer Science or related field",
      shift: ["9am-5pm"],
      category: "Development",
      applyLink: "mailto:careers@example.com?subject=Mobile%20Developer%20Application"
    },
    {
      id: 11,
      title: "HR Specialist",
      location: "Delhi, India",
      jobType: "Full-time",
      experience: "1-3 Years",
      description: "Join our HR team to help manage recruitment, employee relations, and HR operations.",
      postedDate: "2023-02-25",
      skills: ["Recruitment", "Employee Relations", "HRIS", "Onboarding", "Benefits Administration"],
      responsibilities: [
        "Coordinate the full recruitment cycle from job posting to onboarding",
        "Assist with employee relations and conflict resolution",
        "Maintain HR records and HRIS",
        "Support benefits administration and employee programs"
      ],
      requirements: [
        "1-3 years of experience in HR",
        "Knowledge of HR policies and best practices",
        "Strong interpersonal and communication skills",
        "Experience with HRIS systems"
      ],
      education: "Bachelor's degree in Human Resources, Business Administration, or related field",
      shift: ["9am-5pm"],
      category: "Human Resources",
      applyLink: "mailto:careers@example.com?subject=HR%20Specialist%20Application"
    },
    {
      id: 12,
      title: "Network Administrator",
      location: "Bangalore, India",
      jobType: "Full-time",
      experience: "3-5 Years",
      description: "We're seeking a Network Administrator to maintain and optimize our IT infrastructure and ensure network security.",
      postedDate: "2023-02-20",
      skills: ["Network Security", "Cisco", "Firewalls", "VPN", "TCP/IP"],
      responsibilities: [
        "Maintain and monitor network infrastructure",
        "Configure and manage network devices",
        "Implement security measures and monitor for threats",
        "Troubleshoot network issues and performance problems"
      ],
      requirements: [
        "3-5 years of experience in network administration",
        "Strong knowledge of network protocols and technologies",
        "Experience with Cisco equipment and firewall management",
        "Security certifications are a plus"
      ],
      education: "Bachelor's degree in IT, Computer Science, or related field",
      shift: ["9am-5pm", "On-call rotations"],
      category: "IT Infrastructure",
      applyLink: "mailto:careers@example.com?subject=Network%20Administrator%20Application"
    }
  ];
  
  export default jobsData;