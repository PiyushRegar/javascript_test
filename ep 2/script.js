// const arr = [1, 2, 3, 4, 5];

// console.log(arr[1]);
// console.log(arr[0]);

// const [a, b, c, d, e] = arr;
// console.log(e);

// //object destructuring
// const person = {
//     name: "John",
//     age: 30,
//     occupation: "Developer",
// };

// console.log(person);

// // merge two array
// const num1 = [1, 2, 3, 4, 5];
// const num2 = [6, 7, 8, 9, 10];

// const result = [...num1, ...num2];
// console.log(result);

//--------------- functions ---------
//  function sum(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
//  }


//    console.log(sum(1, 2, 3, 4, 5));

//    function sum(num1, num2){
//      console.log(num1+num2);
//    }
//   sum(100, 700);



// //  ------------ function expression ---------

// const sumOfTwoNumber = function (num1, num2){
//     console.log(num1+num2);
//      };

//      sumOfTwoNumber(2, 4);

//      // --------- callBack function
//      const doSomething = function(callback) {
//         console.log("samose ban rhe hai... ");
//         setTimeout(function() {
//             callback();
//         }, 3000);
//      }

//      const callback = function() {
//         console.log("samose ready ho gya hai... ");
//      }
//      doSomething(callback); 

     // Arrow function 

     const multiply = (num1, num2) => {
         return num1 * num2;
     }
     console.log(multiply(3,3));