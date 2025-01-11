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