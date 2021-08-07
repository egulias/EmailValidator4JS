
interface Token {
   readonly value: string;
   readonly isAscii: boolean;
}

export function tokenize(str: string): Token[] {
  let regex = /[^\x00-\x7F]/gu
  // add runtime check for use in JavaScript
  if (typeof str !== 'string') {
    return [];
  }

  return [];
}