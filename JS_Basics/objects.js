// const user ={
//     username:"Prayag.Nepal",
//     address:"Kadaghari",
//     age:20,
// };
// console.log(user.username);
// console.log(user["age"]);
// console.log(user.address);

// user.username="ABC";
// user.email="acd@gmail.com";
// console.log(user);


const user ={
    username:"Prayag.Nepal",
    address:{
        district: "Kathmandu",
        province: "Bagmati"
    },
    age:20,
    inactive : true,
    skills: ["C","C++","Python"],
};

// console.log(user.address.district);

// for (let key in user){
//     console.log(key,user[key]);
// }


// Object Spreading and Destructuring 

// Object Spreading 
    // copying object form 1 object to another 

        const newuser={...user,experience: 2};   //... le xai leuxau spreading to syntx
        console.log(newuser);

// Object Destructuring
    // moveing only sepected keys 

    const {username,age,skills} = user    //key nai hunua pato if username ko sato aaru kei xayo vani username: fullname yesari


// For array 
    const num=[0,1,2];
    const [a,b,c]=num;
    console.log(a);
    const x=[...num];
    console.log(x);


// Array of Object

const users=[
    {username: "Prayag", password: "123454"},
    {username: "Nepal", password: "123454"}
];