type Lang = {
  name: string;
  level: number;
}

export function getLanguages(langs: Lang[] | null) {
  return langs && langs.length > 0
            ? langs.map(({ name }) => name).join(", ")
            : "None"
}