  export function sortStrings(stringArray:  string[]): string[] {
    if (stringArray.length <= 1) {
      return stringArray.slice();
    }
  
    const sortedArray =  [...stringArray].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    return sortedArray
  }
  
  