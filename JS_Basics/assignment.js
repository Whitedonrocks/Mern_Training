const user =[{
    username:"Prayag.Nepal",
    address:{
        district: "Kathmandu",
        province: "Bagmati"
    },
    age:22,
    inactive : true,
    skills: ["CYberSec","CCNA","Python"],
},{
    username:"Manjil.Chettri",
    address:{
        district: "Butwal",
        province: "Lumbini"
    },
    age:21,
    inactive : true,
    skills: ["C","C++","Python"],
},{
    username:"Bikash.Dhakal",
    address:{
        district: "Nepaljung",
        province: "Lumbini"
    },
    age:22,
    inactive : true,
    skills: ["Cloud","WebTech","Python"],
}];
const name="Prayag.Nepal"
const validate=user.filter((item)=>item.username===name);
console.log(validate);