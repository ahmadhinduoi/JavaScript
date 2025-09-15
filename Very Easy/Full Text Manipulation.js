let text = "JavaScript is fun but challenging when you want to master it quickly";

// 1. Split into words
let words = text.split(" ");

// 2. Remove short words (length ≤ 2)
words = words.filter(w => w.length > 2);

// 3. Take first N words (e.g., 6)
let selected = words.slice(0, 6);

// 4. Reverse order
selected.reverse();

// 5. Add word at beginning and end
selected.unshift("Start");
selected.push("End");

// 6. Check if specific word exists
let hasMaster = selected.includes("master");
console.log("Contains 'master'? ", hasMaster);

// 7. Print each word on separate line
selected.forEach(w => console.log(w));

// 8. Join with "-"
let joined = selected.join("-");
console.log("Joined:", joined);

// 9. Sort alphabetically
let sorted = [...selected].sort();
console.log("Sorted:", sorted);

// 10. Index of specific word
let masterIndex = sorted.indexOf("master");
console.log("Index of 'master':", masterIndex);
