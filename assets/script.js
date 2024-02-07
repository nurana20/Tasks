// 2) Parametr olaraq gelen stringi tersine ceviren method yazin. Meselen: Cavid gelirse divaC qaytarsin.
// function nameReverse(str) {
//     let reverseStr="";
//     for (let i = str.length-1; i >=0; i--) {    
//         reverseStr+=str[i];
//     }
//     console.log(reverseStr);
// }
// nameReverse("Cavid")


// 3) Parametr olaraq gelen yasha gore hansi ilden olduqugunu gosteren function yazin. 
// Meselen 30 gelirse function geriye 1993 qaytarmalidir.
// function ageReturn(number) {
//     return (2024-number)
// }
// let res=ageReturn(30);
// console.log(res);


// 4) Personlardan ibaret objectleriniz olacaq. (id,name,fullName,age,salary) . 
// Ashagidaki tasklari array qebul eden functionlar seklinde yazin.
// 1) Personlarin umumi sayini geri qaytaran.
// 2) Personlarin maashlarinin umumi ortalamasini qaytaran.
// 3) Personlarin fullName-ne gore search function-u yazin. (elave parametr olaraq searchText de qebul edecek)

// let person1={
//     id:1,
//     name:"Nurane",
//     fullName:"NIsmayilzade",
//     age:21,
//     salary:2500
// }

// let person2={
//     id:2,
//     name:"Arzu",
//     fullName:"AKerimli",
//     age:25,
//     salary:3800
// }

// let person3={
//     id:3,
//     name:"Heyat",
//     fullName:"HAgayeva",
//     age:22,
//     salary:6500
// }

// let person4={
//     id:4,
//     name:"Ismayil",
//     fullName:"IIsmayilov",
//     age:18,
//     salary:4300
// }

// let person5={
//     id:5,
//     name:"Konul",
//     fullName:"KQasimova",
//     age:45,
//     salary:5600
// }
// const persons=[person1,person2,person3,person4,person5]
// 1) Personlarin umumi sayini geri qaytaran.
// function Test(persons) {
//     let count=0;
//     for (let i = 0; i < persons.length; i++) {
//         count+=1;        
//     }
//     return count;
// }
// let result=Test(persons);
// console.log(result);



// 2) Personlarin maashlarinin umumi ortalamasini qaytaran.
// function salaryAverage(persons) {
//     let sum=0;
//     let count=0;
//     for (let i = 0; i < persons.length; i++) {
//         count+=1;
//         sum+=persons[i].salary;        
//     }
//     return (sum/count)
// }
// let res=salaryAverage(persons)
// console.log(res);



// 3) Personlarin fullName-ne gore search function-u yazin. (elave parametr olaraq searchText de qebul edecek)
// function searcH(persons,searchText) {
//     for (let i = 0; i < persons.length; i++) {
//         if (persons[i].fullName.includes(searchText)) {
//             console.log(`id:${persons[i].id}  name:${persons[i].name}  fullname:${persons[i].fullName}  age:${persons[i].age}  salary:${persons[i].salary}`);
//         }        
//     }
// }
// searcH(persons,"K")