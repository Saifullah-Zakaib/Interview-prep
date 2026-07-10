let sum =(name , age  , salary) => {
console.log(name ,age , salary);
}

console.log(sum('ali'));


let ab={
name:"satisfies",
age :20,
exam : ()=>{   // u can acheive thirugh this exam:function(){} arrow function will not work like this in object 
console.log("my name is "+ this.name);
}
};
ab.exam();