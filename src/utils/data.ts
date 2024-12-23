import { Job, JobReal, User, UserReal } from "./types";

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechGlobe Solutions",
    location: "Dubai, UAE",
    requiredAge: 25,
    requiredGender: "All",
    requiredLanguages: ["English", "Arabic"],
    requiredCitizenship: "UAE",
    requiredEmploymentStatus: "Full Time"
  },
  {
    id: 2,
    title: "Research Scientist",
    company: "BioInnovate Labs",
    location: "Montreal, Canada",
    requiredAge: 28,
    requiredGender: "All",
    requiredLanguages: ["English", "French"],
    requiredCitizenship: "Canadian",
    requiredEmploymentStatus: "Full Time"
  },
  {
    id: 3,
    title: "Marketing Director",
    company: "Global Brands Inc",
    location: "Paris, France",
    requiredAge: 30,
    requiredGender: "All",
    requiredLanguages: ["French", "English"],
    requiredCitizenship: "French",
    requiredEmploymentStatus: "Full Time"
  },
  {
    id: 4,
    title: "Hotel Manager",
    company: "Luxury Resorts International",
    location: "Abu Dhabi, UAE",
    requiredAge: 35,
    requiredGender: "All",
    requiredLanguages: ["Arabic", "English", "French"],
    requiredCitizenship: "UAE",
    requiredEmploymentStatus: "Full Time"
  },
  {
    id: 5,
    title: "Healthcare Administrator",
    company: "Metropolitan Medical Center",
    location: "Toronto, Canada",
    requiredAge: 27,
    requiredGender: "All",
    requiredLanguages: ["English", "French"],
    requiredCitizenship: "Canadian",
    requiredEmploymentStatus: "Contract"
  },
  {
    id: 6,
    title: "Construction Project Manager",
    company: "BuildWell Corporation",
    location: "Riyadh, Saudi Arabia",
    requiredAge: 32,
    requiredGender: "Male",
    requiredLanguages: ["Arabic", "English"],
    requiredCitizenship: "Saudi Arabian",
    requiredEmploymentStatus: "Contract"
  },
  {
    id: 7,
    title: "Fashion Designer",
    company: "Elegance Fashion House",
    location: "Lyon, France",
    requiredAge: 24,
    requiredGender: "Female",
    requiredLanguages: ["French", "English"],
    requiredCitizenship: "French",
    requiredEmploymentStatus: "Part Time"
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "AI Solutions Ltd",
    location: "Ottawa, Canada",
    requiredAge: 26,
    requiredGender: "All",
    requiredLanguages: ["English"],
    requiredCitizenship: "Canadian",
    requiredEmploymentStatus: "Full Time"
  },
  {
    id: 9,
    title: "Arabic Language Instructor",
    company: "International Language Institute",
    location: "Cairo, Egypt",
    requiredAge: 28,
    requiredGender: "All",
    requiredLanguages: ["Arabic", "English"],
    requiredCitizenship: "Egyptian",
    requiredEmploymentStatus: "Contract"
  },
  {
    id: 10,
    title: "Financial Analyst",
    company: "Global Investment Bank",
    location: "Dubai, UAE",
    requiredAge: 25,
    requiredGender: "All",
    requiredLanguages: ["English", "Arabic"],
    requiredCitizenship: "UAE",
    requiredEmploymentStatus: "Part Time"
  }
]

export const qatarJobs: JobReal[] = [
  {
    id: 4,
    job_title: "Project Manager - FIFA World Cup Legacy Projects",
    company: "Qatar Sports Development",
    company_details: "Qatar Sports Development is a leading organization focused on maintaining and repurposing World Cup infrastructure and continuing Qatar's sports legacy initiatives.",
    location: "Doha, Qatar",
    description: "We are looking for an experienced Project Manager to oversee the transformation and ongoing maintenance of World Cup facilities into community sports centers and multi-purpose venues.",
    required_skills: [
      {
        name: "Project Management",
        level: 4,
        definition: "Proven experience in managing large-scale infrastructure projects"
      },
      {
        name: "Stakeholder Management",
        level: 4,
        definition: "Experience in managing relationships with government entities and private sector partners"
      },
      {
        name: "Budget Control",
        level: 3,
        definition: "Ability to manage complex project budgets and resource allocation"
      }
    ],
    preferred_skills: [
      "Sports Facility Management",
      "Sustainability Planning",
      "Event Management",
      "AutoCAD"
    ],
    required_education: ["Bachelor's in Project Management", "Civil Engineering", "Sports Management"],
    required_experience: 8,
    required_gender: null,
    required_age: 32,
    required_languages: ["English", "Arabic"],
    optional_languages: ["French"],
    required_citizenship: "Qatar",
    required_disability: false
  },
  {
    id: 5,
    job_title: "Senior Energy Engineer",
    company: "Qatar Energy Solutions",
    company_details: "Qatar Energy Solutions is a leading sustainable energy company working on Qatar's renewable energy initiatives and smart city projects.",
    location: "Lusail, Qatar",
    description: "Seeking an experienced Energy Engineer to lead sustainable energy projects, focusing on solar power installations and smart grid implementations across Qatar's new developments.",
    required_skills: [
      {
        name: "Renewable Energy Systems",
        level: 4,
        definition: "Expert knowledge of solar power systems and smart grid technologies"
      },
      {
        name: "Energy Modeling",
        level: 4,
        definition: "Advanced experience with energy modeling and simulation software"
      },
      {
        name: "Project Implementation",
        level: 3,
        definition: "Experience in implementing large-scale energy projects"
      }
    ],
    preferred_skills: [
      "LEED Certification",
      "Building Management Systems",
      "Energy Storage Systems",
      "Smart City Technologies"
    ],
    required_education: ["Master's in Energy Engineering", "Electrical Engineering or related field"],
    required_experience: 6,
    required_gender: null,
    required_age: 28,
    required_languages: ["English"],
    optional_languages: ["Arabic"],
    required_citizenship: "Qatar",
    required_disability: false
  },
  {
    id: 6,
    job_title: "Hospitality Operations Manager",
    company: "Luxury Hotels Qatar",
    company_details: "Luxury Hotels Qatar manages premium hotel properties across Qatar, known for exceptional guest experiences and world-class service standards.",
    location: "The Pearl, Qatar",
    description: "We're seeking a Hospitality Operations Manager to oversee daily operations of our flagship property, ensuring exceptional guest experiences and maintaining our 5-star service standards.",
    required_skills: [
      {
        name: "Hotel Operations",
        level: 5,
        definition: "Comprehensive experience in luxury hotel operations management"
      },
      {
        name: "Customer Service",
        level: 4,
        definition: "Excellence in premium customer service delivery and team training"
      },
      {
        name: "Revenue Management",
        level: 3,
        definition: "Experience in hotel revenue optimization and pricing strategies"
      }
    ],
    preferred_skills: [
      "Fine Dining Operations",
      "Event Management",
      "Property Management Systems",
      "Crisis Management"
    ],
    required_education: ["Bachelor's in Hospitality Management", "Hotel Management"],
    required_experience: 7,
    required_gender: null,
    required_age: 30,
    required_languages: ["English", "Arabic"],
    optional_languages: ["French"],
    required_citizenship: "Qatar",
    required_disability: false
  },
  {
    id: 7,
    job_title: "Senior Financial Analyst - Islamic Banking",
    company: "Qatar Islamic Bank",
    company_details: "Qatar Islamic Bank is a leading financial institution providing Shariah-compliant banking services and innovative financial solutions.",
    location: "West Bay, Qatar",
    description: "Looking for a Senior Financial Analyst to join our Islamic Banking division, focusing on investment analysis, financial modeling, and Shariah-compliant product development.",
    required_skills: [
      {
        name: "Islamic Finance",
        level: 4,
        definition: "Deep understanding of Islamic banking principles and products"
      },
      {
        name: "Financial Analysis",
        level: 4,
        definition: "Advanced financial modeling and analysis skills"
      },
      {
        name: "Risk Assessment",
        level: 3,
        definition: "Experience in risk assessment for Islamic financial products"
      }
    ],
    preferred_skills: [
      "Sukuk Analysis",
      "Basel III Requirements",
      "Financial Software",
      "Investment Portfolio Management"
    ],
    required_education: ["Master's in Finance", "Islamic Banking", "Economics"],
    required_experience: 5,
    required_gender: null,
    required_age: 28,
    required_languages: ["English", "Arabic"],
    optional_languages: null,
    required_citizenship: "Qatar",
    required_disability: false
  },
  {
    id: 8,
    job_title: "Medical Director",
    company: "Qatar Health Network",
    company_details: "Qatar Health Network is a growing healthcare provider network operating multiple specialized clinics and medical centers across Qatar.",
    location: "Al Wakrah, Qatar",
    description: "Seeking an experienced Medical Director to oversee clinical operations, ensure quality of care, and lead medical staff across our growing network of healthcare facilities.",
    required_skills: [
      {
        name: "Clinical Management",
        level: 5,
        definition: "Extensive experience in clinical operations and healthcare management"
      },
      {
        name: "Healthcare Leadership",
        level: 4,
        definition: "Proven leadership in healthcare settings and medical staff management"
      },
      {
        name: "Quality Assurance",
        level: 4,
        definition: "Experience in implementing and maintaining healthcare quality standards"
      }
    ],
    preferred_skills: [
      "JCI Accreditation",
      "Healthcare Technology",
      "Medical Education",
      "Research Publication"
    ],
    required_education: ["MD/MBBS", "Master's in Healthcare Administration or related field"],
    required_experience: 10,
    required_gender: null,
    required_age: 40,
    required_languages: ["English", "Arabic"],
    optional_languages: ["French"],
    required_citizenship: "Qatar",
    required_disability: false
  }
];

export const qatariUsers: UserReal[] = [
  {
    id: 1,
    summary: "Experienced software engineer with expertise in cloud computing and AI. Strong background in leading technical teams and implementing enterprise-scale solutions.",
    name: "Ahmed Al-Thani",
    email: "ahmed.althani@email.com",
    gender: "Male",
    specialization: ["Software Engineering", "Cloud Architecture", "Artificial Intelligence"],
    languages: [
      { name: "Arabic", level: 5 },
      { name: "English", level: 4 },
      { name: "French", level: 2 }
    ],
    disability: false,
    age: 32,
    years_of_experience: 8,
    citizenship: "Qatar",
    level_of_education: "Master's Degree",
    skills: [
      {
        name: "Cloud Architecture",
        level: 4,
        definition: "Expert in designing and implementing AWS and Azure cloud solutions"
      },
      {
        name: "Python",
        level: 4,
        definition: "Advanced programming with focus on AI/ML applications"
      },
      {
        name: "Team Leadership",
        level: 3,
        definition: "Experience leading technical teams of 5-10 members"
      }
    ],
    education: [
      {
        degree: "Master's in Computer Science",
        institution: "Qatar University",
        start_year: "2012",
        end_year: "2014"
      },
      {
        degree: "Bachelor's in Software Engineering",
        institution: "Carnegie Mellon University Qatar",
        start_year: "2008",
        end_year: "2012"
      }
    ],
    experience: [
      {
        raw_text: "Led cloud transformation projects at Qatar Airways",
        title: "Senior Cloud Architect",
        company: "Qatar Airways",
        start_date: "2018",
        end_date: "Present",
        description: "Leading cloud migration initiatives and implementing modern architecture patterns"
      },
      {
        raw_text: "Developed enterprise software solutions at Qatar Petroleum",
        title: "Software Engineer",
        company: "Qatar Petroleum",
        start_date: "2014",
        end_date: "2018",
        description: "Developed and maintained enterprise-level applications"
      }
    ],
    marital_status: "Married"
  },
  {
    id: 2,
    summary: "Accomplished medical professional specializing in pediatric care with research focus on childhood diabetes in the Gulf region.",
    name: "Fatima Al-Kuwari",
    email: "fatima.alkuwari@email.com",
    gender: "Female",
    specialization: ["Pediatrics", "Endocrinology", "Medical Research"],
    languages: [
      { name: "Arabic", level: 5 },
      { name: "English", level: 5 }
    ],
    disability: false,
    age: 35,
    years_of_experience: 10,
    citizenship: "Qatar",
    level_of_education: "Doctorate",
    skills: [
      {
        name: "Pediatric Care",
        level: 5,
        definition: "Comprehensive experience in pediatric medicine and patient care"
      },
      {
        name: "Medical Research",
        level: 4,
        definition: "Published researcher in pediatric endocrinology"
      },
      {
        name: "Clinical Leadership",
        level: 4,
        definition: "Experience in leading medical teams and mentoring residents"
      }
    ],
    education: [
      {
        degree: "MD",
        institution: "Weill Cornell Medicine-Qatar",
        start_year: "2006",
        end_year: "2010"
      },
      {
        degree: "Pediatric Residency",
        institution: "Hamad Medical Corporation",
        start_year: "2010",
        end_year: "2014"
      }
    ],
    experience: [
      {
        raw_text: "Lead Pediatrician at Sidra Medicine",
        title: "Lead Pediatrician",
        company: "Sidra Medicine",
        start_date: "2016",
        end_date: "Present",
        description: "Leading pediatric department and conducting research on childhood diabetes"
      },
      {
        raw_text: "Pediatrician at Hamad Medical Corporation",
        title: "Pediatrician",
        company: "Hamad Medical Corporation",
        start_date: "2014",
        end_date: "2016",
        description: "Provided comprehensive pediatric care and participated in research studies"
      }
    ],
    marital_status: "Married"
  },
  {
    id: 3,
    summary: "Energy sector professional with expertise in renewable energy projects and sustainable development initiatives in Qatar.",
    name: "Mohammad Al-Naimi",
    email: "mohammad.alnaimi@email.com",
    gender: "Male",
    specialization: ["Renewable Energy", "Project Management", "Sustainable Development"],
    languages: [
      { name: "Arabic", level: 5 },
      { name: "English", level: 4 }
    ],
    disability: false,
    age: 40,
    years_of_experience: 15,
    citizenship: "Qatar",
    level_of_education: "Master's Degree",
    skills: [
      {
        name: "Project Management",
        level: 5,
        definition: "Certified PMP with experience in large-scale energy projects"
      },
      {
        name: "Renewable Energy",
        level: 4,
        definition: "Expert in solar and wind energy implementation"
      },
      {
        name: "Sustainability",
        level: 4,
        definition: "Experience in sustainable development and environmental impact assessment"
      }
    ],
    education: [
      {
        degree: "Master's in Energy Engineering",
        institution: "Texas A&M University at Qatar",
        start_year: "2005",
        end_year: "2007"
      },
      {
        degree: "Bachelor's in Mechanical Engineering",
        institution: "Qatar University",
        start_year: "2001",
        end_year: "2005"
      }
    ],
    experience: [
      {
        raw_text: "Program Director at Qatar Solar Technologies",
        title: "Program Director",
        company: "Qatar Solar Technologies",
        start_date: "2015",
        end_date: "Present",
        description: "Leading solar energy initiatives and sustainable development projects"
      },
      {
        raw_text: "Project Manager at Qatar Petroleum",
        title: "Project Manager",
        company: "Qatar Petroleum",
        start_date: "2007",
        end_date: "2015",
        description: "Managed energy infrastructure projects and sustainability initiatives"
      }
    ],
    marital_status: "Married"
  },
  {
    id: 4,
    summary: "Financial analyst specializing in Islamic banking with expertise in Shariah-compliant investment products.",
    name: "Noora Al-Malki",
    email: "noora.almalki@email.com",
    gender: "Female",
    specialization: ["Islamic Banking", "Financial Analysis", "Investment Management"],
    languages: [
      { name: "Arabic", level: 5 },
      { name: "English", level: 4 },
      { name: "French", level: 3 }
    ],
    disability: false,
    age: 29,
    years_of_experience: 6,
    citizenship: "Qatar",
    level_of_education: "Master's Degree",
    skills: [
      {
        name: "Islamic Finance",
        level: 4,
        definition: "Expert in Shariah-compliant financial products and services"
      },
      {
        name: "Financial Analysis",
        level: 4,
        definition: "Advanced skills in financial modeling and investment analysis"
      },
      {
        name: "Risk Management",
        level: 3,
        definition: "Experience in risk assessment for Islamic banking products"
      }
    ],
    education: [
      {
        degree: "Master's in Islamic Finance",
        institution: "Hamad Bin Khalifa University",
        start_year: "2015",
        end_year: "2017"
      },
      {
        degree: "Bachelor's in Finance",
        institution: "Qatar University",
        start_year: "2011",
        end_year: "2015"
      }
    ],
    experience: [
      {
        raw_text: "Senior Financial Analyst at Qatar Islamic Bank",
        title: "Senior Financial Analyst",
        company: "Qatar Islamic Bank",
        start_date: "2019",
        end_date: "Present",
        description: "Developing and managing Shariah-compliant investment products"
      },
      {
        raw_text: "Financial Analyst at Qatar National Bank",
        title: "Financial Analyst",
        company: "Qatar National Bank",
        start_date: "2017",
        end_date: "2019",
        description: "Analyzed investment opportunities and managed client portfolios"
      }
    ],
    marital_status: "Single"
  },
  {
    id: 5,
    summary: "Civil engineer with extensive experience in infrastructure development and smart city projects across Qatar.",
    name: "Khalid Al-Mohannadi",
    email: "khalid.almohannadi@email.com",
    gender: "Male",
    specialization: ["Civil Engineering", "Infrastructure Development", "Smart Cities"],
    languages: [
      { name: "Arabic", level: 5 },
      { name: "English", level: 4 }
    ],
    disability: false,
    age: 37,
    years_of_experience: 12,
    citizenship: "Qatar",
    level_of_education: "Bachelor's Degree",
    skills: [
      {
        name: "Infrastructure Planning",
        level: 5,
        definition: "Expert in urban infrastructure development and planning"
      },
      {
        name: "Project Management",
        level: 4,
        definition: "Certified in managing large-scale construction projects"
      },
      {
        name: "Smart City Technologies",
        level: 3,
        definition: "Experience implementing smart city solutions"
      }
    ],
    education: [
      {
        degree: "Bachelor's in Civil Engineering",
        institution: "Qatar University",
        start_year: "2004",
        end_year: "2008"
      }
    ],
    experience: [
      {
        raw_text: "Infrastructure Development Manager at Lusail City",
        title: "Infrastructure Development Manager",
        company: "Lusail Real Estate Development Company",
        start_date: "2016",
        end_date: "Present",
        description: "Managing infrastructure development projects for Lusail City"
      },
      {
        raw_text: "Senior Civil Engineer at Ashghal",
        title: "Senior Civil Engineer",
        company: "Public Works Authority (Ashghal)",
        start_date: "2008",
        end_date: "2016",
        description: "Led various infrastructure and road development projects"
      }
    ],
    marital_status: "Married"
  }
];

export const users: User[] = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Mitchell",
    email: "sarah.mitchell@email.com",
    phoneNumber: "+1-555-123-4567",
    gender: "Female",
    languages: ["English", "French"],
    disability: "None",
    age: 29,
    citizenship: "Canadian",
    employmentStatus: "Contract",
    levelOfEducation: "Masters"
  },
  {
    id: 2,
    firstName: "Ahmed",
    lastName: "Hassan",
    email: "ahmed.hassan@email.com",
    phoneNumber: "+971-50-123-4567",
    gender: "Male",
    languages: ["Arabic", "English"],
    disability: "Visual impairment",
    age: 34,
    citizenship: "UAE",
    employmentStatus: "Part Time",
    levelOfEducation: "PhD"
  },
  {
    id: 3,
    firstName: "Marie",
    lastName: "Dubois",
    email: "marie.dubois@email.com",
    phoneNumber: "+33-6-12-34-56-78",
    gender: "Female",
    languages: ["French", "English", "Arabic"],
    disability: "None",
    age: 26,
    citizenship: "French",
    employmentStatus: "Full Time",
    levelOfEducation: "Bachelors"
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@email.com",
    phoneNumber: "+44-7700-900123",
    gender: "Male",
    languages: ["English"],
    disability: "None",
    age: 41,
    citizenship: "British",
    employmentStatus: "Full Time",
    levelOfEducation: "Diploma"
  },
  {
    id: 5,
    firstName: "Fatima",
    lastName: "Al-Sayed",
    email: "fatima.alsayed@email.com",
    phoneNumber: "+20-100-123-4567",
    gender: "Female",
    languages: ["Arabic", "English", "French"],
    disability: "Hearing impairment",
    age: 31,
    citizenship: "Egyptian",
    employmentStatus: "Part Time",
    levelOfEducation: "Masters"
  },
  {
    id: 6,
    firstName: "Carlos",
    lastName: "Rodriguez",
    email: "carlos.rodriguez@email.com",
    phoneNumber: "+52-1-55-1234-5678",
    gender: "Male",
    languages: ["English", "French"],
    disability: "Mobility impairment",
    age: 38,
    citizenship: "Mexican",
    employmentStatus: "Full Time",
    levelOfEducation: "PhD"
  },
  {
    id: 7,
    firstName: "Lisa",
    lastName: "Chen",
    email: "lisa.chen@email.com",
    phoneNumber: "+65-8123-4567",
    gender: "Female",
    languages: ["English", "French"],
    disability: "None",
    age: 27,
    citizenship: "Singaporean",
    employmentStatus: "Full Time",
    levelOfEducation: "Masters"
  },
  {
    id: 8,
    firstName: "Alex",
    lastName: "Thompson",
    email: "alex.thompson@email.com",
    phoneNumber: "+1-202-555-0123",
    gender: "All",
    languages: ["English"],
    disability: "None",
    age: 33,
    citizenship: "American",
    employmentStatus: "Part Time",
    levelOfEducation: "Bachelors"
  },
  {
    id: 9,
    firstName: "Yuki",
    lastName: "Tanaka",
    email: "yuki.tanaka@email.com",
    phoneNumber: "+81-80-1234-5678",
    gender: "Female",
    languages: ["English"],
    disability: "None",
    age: 29,
    citizenship: "Japanese",
    employmentStatus: "Contract",
    levelOfEducation: "Masters"
  },
  {
    id: 10,
    firstName: "Omar",
    lastName: "Ibrahim",
    email: "omar.ibrahim@email.com",
    phoneNumber: "+966-50-123-4567",
    gender: "Male",
    languages: ["Arabic", "English", "French"],
    disability: "None",
    age: 36,
    citizenship: "Saudi Arabian",
    employmentStatus: "Full Time",
    levelOfEducation: "Diploma"
  }
]