function searchNames(names, searchName, searchLimit, callback) {
  const results = [];
  let count = 0;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.toLowerCase().includes(searchName.toLowerCase())) {
      results.push(name);
      count++;
      if (count === searchLimit) {
        break;
      }
    }
  }

  callback(results);
}

function printResults(results) {
  for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
const searchName = "ga";
const searchLimit = 2;

searchNames(names, searchName, searchLimit, printResults);