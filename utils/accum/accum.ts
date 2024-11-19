export const accum = (text: string) => {
  let value = '';

  for (let i = 0; i < text.length; i++) {
    let curr = '';
    const currentValue = text[i];

    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        curr += currentValue.toUpperCase();
      } else {
        curr += currentValue.toLowerCase();
      }
    }
    value += curr;
    if (i <= text.length - 2) {
      value += '-';
    }
  }

  return value;
};
