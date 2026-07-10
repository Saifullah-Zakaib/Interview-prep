//callback= we pass a function as an argument to another function which can execute later

// const fetch=(callback)=>{
//     setTimeout(() => {
//         callback("executed")
//     }, 2000);
// }

// setTimeout(()=>{
// console.log('HI');
// fetch( text =>{
//     console.log(text);
// })

// }, 2000);


//using promise alternative way of callback
// const fetch=()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("executed");
//     }, 2000);
//     });};

// setTimeout(()=>{
// console.log('HI');
// fetch().then( text =>{
//     console.log(text);
// })

// }, 2000);

// uinng async and aawait a better way with promises 
const fetch = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("executed");
        }, 2000);

    });
};


async function getData() {

    const text = await fetch();

    console.log(text);

}


getData();

console.log("Other operation");