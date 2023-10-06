"use strict"
// const calAge=(birthday)=>{return 2038-birthday};
// console.log(calAge(1991));
// function calAge(age){return age+2}
// function product(birthday,age){
//     return birthday+calAge(age);
// }
// console.log(product(1999,2))

// const status1=function(today){
//     return `today is ${today}`;
// }
// const product=function(today,tommarrow){
//     const nowtoday=status1(today);
//     return `${nowtoday} tommarow is ${tommarrow}`;
// }
// console.log(product(1999,1121))

// array project

// const friends=["chen",'wang',"huang"];
// console.log(friends);
// const friends1=new Array("chen",'wang',"huang");
// console.log(friends1);
// console.log(friends1[1],friends[2],friends.length);

// const newFriends=friends.push("gu");
// const newFriends1=friends.unshift("he")
// const newFriends3=friends.shift("wang")
// const newFriends2=friends.pop()
// const newFriends4=friends.indexOf("gu");
// const newFriends5=friends.includes("gu");
// const newFriends6=friends.includes("gu");
// console.log(newFriends5);
// console.log(friends)

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
//   ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonasArray[4]);
// console.log(jonas['lastName']);

// const inputContent=prompt("input message");
// console.log(inputContent);

// object Method
// const jonas={
//     firstName:"jonas1",
//     lastName: 'Schmedtmann',

//     calAge:function(){
//         // console.log(this)
//         this.birthday=this.firstName;
//         return this.birthday;
//     }
// }
// console.log(jonas.calAge());

// for(let i=1;i<=40;i++){
//     console.log(`start i ${i}`);
//     console.log(`${i}`);
//     console.log(`last i ${i}`);
// }

// const data=[1,23];
// const data1=new Array(1,1,2,3)
// console.log(typeof data[1]);
// console.log(typeof data1);


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calTemp=temps=>{
    let max=temps[0];
    let min=temps[0];
    for(let i=0;i<temperatures.length;i++){
        const curtemp=temps[i];
        if(typeof temperatures[i]!="number")
            {
                console.log(temperatures[i]);
                continue;
            }
        if(curtemp>max) max=curtemp;
        if(curtemp<min) min=curtemp;
    }
    console.log(max,min);
    return max,min;
}
// calTemp(temperatures);
const arr1=[1,4,3];
const arr2=[2,3,5];
console.log(arr1.concat(arr2).sort().reverse());