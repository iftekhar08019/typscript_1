function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

console.log(formatString("Hello"))         // Output: "HELLO"
console.log(formatString("Hello", true))   // Output: "HELLO"
console.log(formatString("Hello", false));  // Output: "hello"



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }
  
  // Example usage:
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  console.log(filterByRating(books)); 
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
  
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    for (const array of arrays) {
      result.push(...array);
    }
    return result;
  }
  
  // Example usage:
  console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
  console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]
  
  
  
  
  class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
  // Example usage:
  const myCar = new Car("Toyota", 2020, "Corolla");
  console.log(myCar.getInfo());  // Output: "Make: Toyota, Year: 2020"
  console.log(myCar.getModel()); // Output: "Model: Corolla"

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
  
  // Example usage:
  console.log(processValue("hellodeded"));  // Output: 5
  console.log(processValue(104));       // Output: 20
  
  