export function add(numbers: string): number {
    if (numbers === '') return 0;
    if (!numbers.includes(',')) return parseInt(numbers, 10);
    
    return numbers.split(',')
                  .map(num => parseInt(num, 10))
                  .reduce((sum, num) => sum + num, 0);
  }
  