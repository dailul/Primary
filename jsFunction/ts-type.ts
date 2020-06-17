// interface Padder {
//   getPaddingString(): string;
// }

// class SpaceRepeatingPadder implements Padder {
//   constructor(private numSpaces: number) {}
//   getPaddingString() {
//     return Array(this.numSpaces + 1).join(" ");
//   }
// }

// class StringPadder implements Padder {
//   constructor(private value: string) {}
//   getPaddingString() {
//     return this.value;
//   }
// }

// let padder: Padder = new SpaceRepeatingPadder(6);

// console.log('padder instanceof SpaceRepeatingPadder', padder instanceof SpaceRepeatingPadder)

interface Person {
  name: string;
  age: number;
}

const sem: Person = { name: 'semlinker', age: 30 };
type Sem= typeof sem; // -> Person

console.log('Sem', Sem)