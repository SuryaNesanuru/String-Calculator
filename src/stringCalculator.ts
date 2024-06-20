/*export function add(numbers: string): number {
    if (numbers === '') return 0;
    numbers = numbers.replace(/\n/g, ',');
    return numbers.split(',')
                  .map(num => parseInt(num, 10))
                  .reduce((sum, num) => sum + num, 0);
  }*/

/*export function add(numbers: string): number {
  if (numbers === '') return 0;
  
  let delimiter = ',';
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }
  
  numbers = numbers.replace(/\n/g, delimiter);
  return numbers.split(delimiter)
                .map(num => parseInt(num, 10))
                .reduce((sum, num) => sum + num, 0);
}*/

/*export function add(numbers: string): number {
    if (numbers === '') return 0;
    
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }
    
    numbers = numbers.replace(/\n/g, delimiter);
    const nums = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
    return nums.reduce((sum, num) => sum + num, 0);
  }*/
    export function add(numbers: string): number {
        if (numbers === '') return 0;
        if (!numbers.includes(',')) return parseInt(numbers, 10);
        
        return numbers.split(',')
                      .map(num => parseInt(num, 10))
                      .reduce((sum, num) => sum + num, 0);
      }
      
  

  