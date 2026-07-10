const person ={
    name:'saif',
    age:24,
};

// const printname= (data)=>{
//     console.log(data.name);

// }

// printname(person);
// extracting the specific values using destructing 
  // instead of above we can write like this

  const printname= ({name,age})=>{
    console.log(name,age);

}

printname(person);


// 

const {name , age } = person;
console.log(name , age);

