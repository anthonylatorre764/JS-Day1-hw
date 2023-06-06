//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(aString, aList){
    for(let dog_name of aList){
        if (aString.includes(dog_name)){
            console.log(`Matched ${dog_name}`);
        } 
        else {
            console.log('No Match');
        }
    }
}


findWords(dog_string, dog_names);


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


function replaceEvens(anArray){
    //code goes here
    // arr.splice(i)
    for(let i in anArray){
        if (i % 2 == 0){
            anArray.splice(i, 1, 'even index')
        } 
    }

}


replaceEvens(arr)
console.log(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]






// link to problem
// link to my solution
