// // let arr = [1,2,3,4,5]
// // arr2 = arr.map((element) => {
// //   return element
// // })
// // arr2.push(8)
// // console.log(arr2)
// const inquirer = require('inquirer')

// var questions = [{
//   type: 'input',
//   name: 'name',
//   message: "What's your name boyo?",
// }]

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// })
// // let arr = [ "vinegar","cheese", "lettuce", "tomato"];
// // arr.sort();
// // console.log(arr);
// let age = 15
//     // if(age >= 21){
//     //   console.log("I'm an adult")
//     // }
//     // else if(age > 13 && age < 21) {
//     //   console.log("I'm a teenager")
//     // }
//     // else{
//     //   console.log("I'm a child")
//     // }
//   //  let allowed = null
//   //   age > 18 ? allowed = true : allowed = false
//   //   console.log(allowed)

//   // let fav_bird = "Robin"

//   // switch(fav_bird) {
//   //   case "Crow":
//   //   console.log("You like Crows");
//   //   break;
//   //   case "Robin":
//   //   console.log("You like Robins");
//   //   break;
//   //   case "Parrot":
//   //   console.log("You like Parrots");
//   //   break;
//   //   default:
//   //   console.log("We don't know that bird")
//   // }
// //   let i = 3
// //  while (i > 0) {
// //     console.log(i)
// //     i--
// //   }
// // arr = ["Tom", "Matt", "Sally"]
// // arr.forEach((element, index) => console.log(element, index))
  
// // let cohort = {name: "fast-track", 
// // students: 26, 
// // teacher: "garret"}
// // for (let key in cohort){
// //   if cohort.hasOwnProperty(k)
// //   console.log(cohort[key]);
// // }

// for(let i = 9; i > 0; i-- ){
//   if (i % 5 === 0){
//   }
//   else {
//   console.log(i);
// }
// }
// let number = 123
// let arr = []
// let numarr = []
// let cast = number.toString(10).split('');
// for (var i=0,n=cast.length; i<n; i++){
//     arr.push(cast[i]);
// }
// arr.forEach(element => {
//   numarr.push(parseInt(element))
// })
//     let sum = numarr.reduce((a, b) => a + b, 0);
//     let multiply = numarr.reduce( (a,b) => a * b );
//     if (sum == multiply){
//       console.log("This is a atomic blonde number")
//     }
//     else{
//       console.log("This is not an atomic blonde number")
//     }

// let fdn = "8082"
// fdn= fdn.split('')
// fdn.forEach(element =>{
//   parseInt(element)
// })
// console.log(fdn)

// function filter_list(l) {
//   arr = []
//   l.forEach(element => {
//   if (typeof element != 'string')
//   arr.push(element)
//   }
//     )
//     return arr
// }
// filter_list(["array", "list", 8, 9])

const scott = {
  name: "Scott",
  age: 25,
  likes: 'music'
}
const dan = {
  name: "Daniel",
  age: 28,
  likes: "dick"
}
const dave = {
  name: "David",
  age: 28,
  likes: "beer"
}

console.log({scott, dan, dave})
    


