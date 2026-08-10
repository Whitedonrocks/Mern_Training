const numbers = [1,2,3,4];   //Heteregenous data types possilbe 
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers.length);


// numbers.push(5);   //From Back
// numbers.pop();     //From back
// numbers.shift();   //remove from front 
// numbers.unshift(8); //add from front 



// console.log(numbers.slice(1,4));    // take sub arrays gives 2 3 4 last shuld be 1 more position than the one you want doesnot modfy original array

// console.log(numbers);
// numbers.splice(2,1,10);   //removes the no 1 att position to remove from and 2 attribute decides how many no to remove and 3 attribute decides what to add 
// console.log(numbers);

// Methods

// For Each

    numbers.forEach((num)=>{              //num ma xai numbers ko sab jalue palai pilo gayra basxa 
        console.log(num);
    });

// Map

    const squnum=numbers.map((num)=>{
                                        return num**2;              //work of map to covnert from one form to another
                                    });                             //make sure to write return at last if using {}
    console.log(squnum);

// Filer
    const evennum=numbers.filter((num)=> num%2==0);
    console.log(evennum);                               //filetrs ke sbaai no jun le thyo condition satisfy garxa 

// Find 
    const firsteven=numbers.find((num)=>num%2==0);
    console.log(firsteven);                             //return first eleement

// Reduce
    let sum=numbers.reduce((acc,num)=>acc+num,5);
    console.log(sum);                  //first ma xai accumualator lai ho j rakhda ni hunxa 5 le xai initial value if blank 0

