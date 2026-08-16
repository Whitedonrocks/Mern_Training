// console.log("A");
// function add (num1, num2){
//     setTimeout(() => {
//         return num1+num2;
//     }, 2000);                          //2000 milisecond=2 second
// }
// const result=add(1,2);
// console.log(result);
// console.log("C");

// Solving using CallBack

console.log("A");
function add (num1, num2,callback){
    setTimeout(() => {
        callback(num1+num2);
    }, 2000);                          //2000 milisecond=2 second
}
const result=add(1,2,(result)=>{
    console.log(result);
});
console.log("C");