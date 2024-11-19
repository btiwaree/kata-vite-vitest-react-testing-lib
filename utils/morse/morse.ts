const MORSE_CODE: Record<string, string> = {
  '.-': 'A',
  '-…': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '…': 'S',
  '-': 'T',
  '..-': 'U',
  '…-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '…--': '3',
  '….-': '4',
  '…..': '5',
  '-….': '6',
  '--…': '7',
  '---..': '8',
  '----.': '9',
};

export const decodeMorseCode = (code: string) => {
  const words = code.split('   ');

  let answer = '';

  for (let i = 0; i < words.length; i++) {
    const morseCharacters = words[i].split(' ');
    let word = '';

    morseCharacters.map(i => {
      word += decodeCharacter(i);
    });

    answer += word;
    answer += ' ';
  }

  return answer;
};

const decodeCharacter = (character: string) => MORSE_CODE[character];
