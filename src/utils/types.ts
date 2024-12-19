type Gender = 'Male' | 'Female' | 'All';
type EmploymentStatus = 'Self-Employed' | 'Employed' | 'Unemployed';
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
  requiredEmploymentStatus: EducationLevel;
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