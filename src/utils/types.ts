type Gender = 'Male' | 'Female' | 'All';
type EmploymentStatus = 'Full Time' | 'Part Time' | 'Contract';
type EducationLevel = 'Bachelors' | 'Masters' | 'PhD' | 'Diploma';
type Lang = {
  name: string;
  level: number;
}

export type Experience = {
  raw_text: string;
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
};

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  requiredAge: number;
  requiredGender: Gender;
  requiredLanguages: string[];
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
  preferred_skills: {
    name: string;
    level: number | null;
    definition: string;
  }[];
  required_education: string[];
  required_experience: number;
  required_gender: string | null;
  required_age: number;
  required_languages: Lang[] | null;
  optional_languages: Lang[] | null;
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
  experience:Experience[];
  marital_status: string;
}


export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
  languages: string[];
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