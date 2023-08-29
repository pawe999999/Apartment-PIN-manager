
export function isConsecutiveNumbers(value: string): boolean {
    const digits = value.split('').map(i => +i);
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] - digits[i + 1] === 1 || digits[i] - digits[i + 1] === -1) {
        return true;
      }
    }
    return false;
  }