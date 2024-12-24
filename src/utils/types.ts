type Gender = 'Male' | 'Female' | 'All';
type EmploymentStatus = 'Full Time' | 'Part Time' | 'Contract';
type EducationLevel = 'Bachelors' | 'Masters' | 'PhD' | 'Diploma';
type Language = 'English' | 'Arabic' | 'French';

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  requiredAge: number;
  requiredGender: Gender;
  requiredLanguages: Language[];
  requiredCitizenship: string;
  requiredEmploymentStatus: EmploymentStatus;
}

export type JobReal = {
  id: number;
  job_title: string;
  company: string;
  company_details: string;
  location: string;
  description: string;
  required_skills: {
    name: string;
    level: number | null;
    definition: string;
  }[];
  preferred_skills: string[];
  required_education: string[];
  required_experience: number;
  required_gender: string | null;
  required_age: number;
  required_languages: string[] | null;
  optional_languages: string[] | null;
  required_citizenship: string;
  required_disability: boolean;
}

export type UserReal = {
  id: number;
  summary: string;
  name: string;
  email: string;
  gender: string;
  specialization: string[];
  languages: {
    name: string;
    level: number;
  }[];
  disability: boolean;
  age: number;
  years_of_experience: number;
  citizenship: string | null;
  level_of_education: string;
  skills: {
    name: string;
    level: number;
    definition: string;
  }[];
  education: {
    degree: string;
    institution: string;
    start_year: string | null;
    end_year: string | null;
  }[];
  experience: {
    raw_text: string;
    title: string;
    company: string;
    start_date: string;
    end_date: string;
    description: string;
  }[];
  marital_status: string;
}


export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
  languages: Language[];
  disability: string;
  age: number;
  citizenship: string;
  employmentStatus: EmploymentStatus;
  levelOfEducation: EducationLevel;
}

export type Message = {
  role: 'user' | 'chatbot';
  content: string;
}