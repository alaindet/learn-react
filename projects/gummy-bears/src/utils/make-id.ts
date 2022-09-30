const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const CHARACTERS_COUNT = CHARACTERS.length;

// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
export function makeId(length: number): string {
  let id = '';

  for (let i = 0; i < length; i++) {
    id += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_COUNT));
  }

  return id;
}