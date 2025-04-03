console.log("Ans1.");

let rows = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {

   for (let j =1; j <= i; j++){
       pattern += "* ";
   }
 pattern +="\n"
   
}
console.log(pattern);

//
console.log("Ans2.");

 let num1 =0;
for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
  } else if (i % 3 == 0) {
      console.log("Fizz");
  } else if (i % 5 == 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
}

//
console.log("Ans3.");
var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;
for (var i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log("The sum is all numbersArray: " + sum);


// 
console.log("Ans4.");

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];  
 let sum_1 = 0;
 let sum_2=0;
  for( let j=0; j < arr_1.length; j++){
    sum_1 += arr_1[j];
  }
  for( let k=0; k < arr_2.length; k++){
    sum_2 += arr_2[k];
  }

console.log(sum_1+sum_2);

console.log("Ans5.");
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// let revrse=0;
for( let l=arr.length-1; l>=0; l--){
  console.log(arr[l]);
}


