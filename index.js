1. //method forEach()
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`Element at index ${index}: ${number}`);
});

// Output:
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5

2. //method join()
const fruits = ['apple', 'banana', 'orange'];

const joinedFruits = fruits.join(', ');

console.log(joinedFruits);  // Output: 'apple, banana, orange'

3. //method pop()
const kendaraan = ['mobil', 'motor', 'bis'];

const removedkendaraan = kendaraan.pop();

console.log(removedkendaraan);  // Output: 'sepeda'
console.log(kendaraan);  // Output: ['mobil', 'motor']

4. //method slice()
const pakaian = ['kaos', 'celana panjang', 'kemeja', 'celana pendek'];

const slicedpakaian = pakaian.slice(1, 4);

console.log(slicedpakaian);  // Output: ['celana panjang', 'kaos']

5. //method substring()
let mobil = "toyota supra, mazda rx7, avanza";
let newMobil = mobil.substring(7, 13);
console.log(mobil);

6. //method toString()
const motor = ["bebek", "ninja", "vario", "beat"];
const newMotor = motor.toString(1 , 4);
console.log(motor);

7. //method splice()
const text1 = ["green, blue, black"];
text1.splice(2, 2, "yellow");
console.log(text1);

8. //method delete()
const colour = ["pink", "purple", "red", "white"];
delete colour[1];
console.log(colour);

9. //method getFullYear()
const tahun = new Date("2021-03-25");
tahun.getFullYear();
console.log(tahun);

10. //method getFullMonth()
const bulan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const newBulan = new Date("2021-03-25");
let bulan1 = bulan[newBulan.getMonth()];
console.log(bulan1);

