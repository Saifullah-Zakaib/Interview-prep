//lets say we have a array and we want to copy it possible ways are using slice etc and another menthod is spread which pull out
// the elements and whatever aroud it paste it 

let array=['ali', 20 , 90];


const copiedarray=[...array];    // in case of object breackets will be {} etc etc

console.log(copiedarray);



// rest operator : it will take the arguments as much we provide without writing syntax for each argument for example arg1,arg2,arg3 instead we will write ...arg
//withour rest
// function sum(a, b, c) {
//     return a + b + c;
// }

// sum(1, 2, 3, 4);

//with rest

function sum(...a){
    console.log(a);
    return a;
}

sum(1,2,3,4)