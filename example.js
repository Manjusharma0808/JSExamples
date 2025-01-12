//Write a function that accepts an array of strings and returns the longest string in the array.
function findLongestString() {
    const arr = ['apple', 'banana', 'pineapple', 'kiwi'];
    
    if (arr.length === 0) return null;

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    document.getElementById("longestString").innerHTML = "output:" + longest;
    
    // document.getElementById("").text = longest;
    //return longest;
}

//Q2 :- Create a function to return the amount of string 'potato' there are in a string
function countPotato() {
    const str = document.getElementById("inputPotato").value;
    const count = str.split('potato').length - 1;
    document.getElementById("countPotato").innerHTML = "output:" + count;
    //return count;
}
/*What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
The wanted word is in lowercase.
The crowd of letters is all in uppercase.
The word will be spread out amongst the random letters, but their letters remain in the same order.*/
function detectWord() {
    const str = document.getElementById("inputWord").value;
    const word = str.replace(/[^a-z]/g, '');
    document.getElementById("detectWord").innerHTML = "output:" + word;
    //return word;
}


//Q4.Create a function that will receive two arrays of numbers as arguments and return an array composed of 
// all the numbers that are either in the first array or second array but not in both.
function findUnique() {
    //const arr1 = [1, 2, 3, 4, 5];
    const arr1 = document.getElementById("numberarray1").value.split(",");
    //const arr2 = [4, 5, 6, 7, 8];
    const arr2 = document.getElementById("numberarray2").value.split(",");
    const unique = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
    document.getElementById("arrayoutput").innerHTML = "output:" + unique;
    //return unique;
}

/*
Q5.Given an array of objects contains cities with multiple properties: name, population, and country.
Sort the cities primarily by population in ascending order,
	if two cities have the same population, sort them alphabetically by their country name,
	if they also share the same country, sort them alphabetically by their name, return the entire object.
Start from:
const cities = [
  { name:"Tokyo",population:37400068,country:"Japan" },
  { name:"Delhi",population:29399141,country:"India" },
  { name:"Shanghai",population:26317104,country:"China" },
  { name:"São Paulo",population:21846507,country:"Brazil" },
  { name:"Mexico City",population:21671908,country:"Mexico" },
  { name:"Cairo",population:20484965,country:"Egypt" },
  { name:"Mumbai",population:20185064,country:"India" },
  { name:"Beijing",population:20035455,country:"China" },
  { name:"Osaka",population:19222665,country:"Japan" },
  { name:"Karachi",population:15400000,country:"Pakistan" },
  { name:"Chongqing",population:15872000,country:"China" },
 {name:"Buenos Aires",population:15000000,country:"Argentina" }
]
*/
function sortCities() {
    const cities = [
        { name: "Tokyo", population: 37400068, country: "Japan" },
        { name: "Delhi", population: 29399141, country: "India" },
        { name: "Shanghai", population: 26317104, country: "China" },
        { name: "São Paulo", population: 21846507, country: "Brazil" },
        { name: "Mexico City", population: 21671908, country: "Mexico" },
        { name: "Cairo", population: 20484965, country: "Egypt" },
        { name: "Mumbai", population: 20185064, country: "India" },
        { name: "Beijing", population: 20035455, country: "China" },
        { name: "Osaka", population: 19222665, country: "Japan" },
        { name: "Karachi", population: 15400000, country: "Pakistan" },
        { name: "Chongqing", population: 15872000, country: "China" },
        { name: "Buenos Aires", population: 15000000, country: "Argentina" }
    ];
    const sorted = cities.sort((a, b) => a.population - b.population || a.country.localeCompare(b.country) 
    || a.name.localeCompare(b.name));
    document.getElementById("sortCities").innerHTML = "output:" + JSON.stringify(sorted);
    //return sorted;
}
/*
Q6. Write a program to print the following patterns on the console.
*   *   *   *   *
*   *   *   *   *
*   *   *   *   *
*   *   *   *   *
*   *   *   *   *
*/
function printPattern() {   
    for (let i = 0; i < 5; i++) {
        let str = '';
        for (let j = 0; j < 5; j++) {
            str += '*   ';
        }
        console.log(str);   
    }
}


