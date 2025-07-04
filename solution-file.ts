//problem 1

function formatString(input: string, toUpper: boolean = true): string {
    if(toUpper) {
        return input.toUpperCase();
    }
    else{
        return input.toLowerCase();
    }

}
console.log(formatString("Hello"));         
console.log(formatString("Hello", true));   
console.log(formatString("Hello", false));



// problem 2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

const output = filterByRating(books); 
console.log(output); 

// problem 3

 function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}
console.log(concatenateArrays(["a", "b"], ["c"]));      
console.log(concatenateArrays([1, 2], [3, 4], [5]));     

// problem 4
 class Vehicle {
 private make: string;
 private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;

  }   

  getInfo():string{
    return`Make:${this.make}, Year:${this.year}`;
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
const car = new Car("Toyota", 2020, "Corolla");
console.log(car.getInfo()); 
console.log(car.getModel()); 

// problem 5
function processValue(value: string|number): number {
if (typeof value === 'string') {
    return value.length;}
    else(typeof value === 'number')
     {
        return value * 2; }
}

console.log(processValue("Hello")); 
console.log(processValue(15));    


// problem 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null
{
  if (products.length === 0) {
    return null;
  }

  let mostExpensive = products[0];

  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }
  }

  return mostExpensive;
} 
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

const mostExpensiveProduct = getMostExpensiveProduct(products);
console.log(mostExpensiveProduct); 

// problem 7

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  if (day === Day.Friday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}
console.log(getDayType(Day.Friday)); 
console.log(getDayType(Day.Sunday)); 

// problem 8

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000); 
  });
}

squareAsync(4).then(console.log);   

squareAsync(3).catch(console.error);   

 

