import { getRandomInteger } from './get-random-integer';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export function getRandomHash(length = 8): string {
  const chars: string[] = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInteger(0, ALPHABET.length - 1);
    const letter = ALPHABET[randomIndex];
    chars.push(letter);
  }

  return chars.join('');
}
