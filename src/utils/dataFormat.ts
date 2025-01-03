import { Experience } from "./types";

type Lang = {
  name: string;
  level: number;
}

type Skill = {
  name: string;
  level: number | null;
  definition: string;
}

export function getLanguages(langs: Lang[] | null) {
  return langs && langs.length > 0
            ? langs.map(({ name }) => name).join(", ")
            : "None"
}

export function getSkills(skills: Skill[] | null) {
  return skills && skills.length > 0
          ? skills.map(({ name }) => name).join(", ")
          : "None"
}

export function getLocation(location: string) {
  if (!location || location === 'nan') return ''

  return location;
}

export function getSpecialization(specs: string[] | null) {
  return specs && specs.length > 0
        ? specs.map(spec => spec).join(', ')
        : "None"
}

export function getExperience(exp: Experience[]) {
  return exp.map(ex => ex.title).join(", ");
}

