export function add(numbers: string): number {
    if (numbers === '') return 0;
    numbers = numbers.replace(/\n/g, ',');
    return numbers.split(',')
                  .map(num => parseInt(num, 10))
                  .reduce((sum, num) => sum + num, 0);
  }
  