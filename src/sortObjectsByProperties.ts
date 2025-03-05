export interface Data {
  [key: string]: any;
}

export interface Order {
  key: string;
  direction: "ascending" | "descending";
}

export function sortObjectsByProperties(data: Data[], order: Order[]): Data[] {
  return data.sort((a, b) => {
    for (const { key, direction } of order) {
      let valueA = a[key];
      let valueB = b[key];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) {
        return direction === "ascending" ? -1 : 1;
      } else if (valueA > valueB) {
        return direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });
}
