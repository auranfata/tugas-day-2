// membuat biodata

let biodata = {
     name: "Auran fata mohammad",
     age: 17,
     hobbies: ["dengerin lagu", "main game", "main bola"],
     isMarried: false,
     schoolList: [
      { keyname: "SD Cirebon Islamic School", yearIn: 2012, yearOut: 2018, major: null },
      { keyname: "Mts Negeri 2 Kota Cirebon", yearIn: 2018, yearOut: 2021, major: null },
      { keyname: "SMK Negeri 1 Kota Cirebon", yearIn: 2021, yearOut: 2024, major: null },
    ],
    skills: [
      { skillName: "Futsal", level: "advanced" },
      { skillName: "editing", level: "beginner" },
    ],
    interestInCoding: true
  }
  console.log(biodata);

// membuat program nilai UN

let mtk = 80
    bahasaIndonesia = 90
    bahasaInggris = 89
    ipa = 69

let mapel = [mtk, bahasaIndonesia, bahasaInggris, ipa];
    total = [mtk + bahasaIndonesia + bahasaInggris + ipa];
    let jumlah = mapel.length;
    let avg = total/jumlah;

    let grade;
    const nilai = 0;
if (avg <= 100 && nilai >= 90) {
  console.log('Grade: A');
} else if (avg < 90 && nilai >= 89) {
  console.log('Grade: B');
} else if (avg < 70 && nilai >= 79) {
  console.log('Grade: C');
} else if (avg < 60 && nilai >= 59) {
  console.log('Grade: D');
} else {
  console.log('Grade: E');
}

// membuat printsegitiga

function printSegitiga(n) {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    console.log('Masukkan number');
    return;
  }

  let output = '';
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      output += j + ' ';
    }
    output += '\n';
  }

  console.log(output);
}

printSegitiga(5);


//ubah data menggunakan spread operator
const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const newData = {...data,
  id: 2,
  name: "Auran fata mohammad",
  username: "auran",
  email: "auranfata456@gmail.com",
  address: {
    street: "Mutiara street",
    suite: "Permata Harjamukti D3 no 19",
    city: "Cirebon",
    zipcode: "12345",
  },
  phone: "0856-5983-0208",
  website: "auran.com",
  hobby: "futsal"
};

const {street, city} = newData.address;

console.log(newData);
console.log("Street:", street);
console.log("city", city);