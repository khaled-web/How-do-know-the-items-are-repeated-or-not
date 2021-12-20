// return true only if all values are unique, otherwise false(How do know the items are repeated or not?)

// using array, object, string method lastIndexOf()
// no Set Data Structure
// ...........first solution...........
function unique(str) {
 for (let i = 0; i < str.length; i++) {
  if (str.lastIndexOf(str[i]) !== i) {
   return false;
  }
 }
 return true;

 // ...........second solution...........
 // let values = {};
 // for (let letter of str) {
 //  // console.log(letter)
 //  if (values[letter]) {
 //   return false;
 //  }
 //  values[letter] = "exists";
 // }
 // return true;

 // ...........Third solution...........
 // let values = [];
 // for (let letter of str) {
 //  if (values.indexOf(letter) !== -1) {
 //   return false;
 //  }
 //  values.push(letter)
 // }
 // return true;
}

console.log(unique('abcde'));
// true
console.log(unique('abacdefb'));
// false