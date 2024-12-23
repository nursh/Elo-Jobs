export function getLanguages(langs: string[] | null) {
  return langs && langs.length > 0
            ? langs.join(", ")
            : "None"
}