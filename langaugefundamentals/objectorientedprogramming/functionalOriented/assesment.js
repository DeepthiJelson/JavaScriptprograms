let empolyee = [
    {eid:100, name:"ajay", desig:"devop", join:1981, resign:2003},
    {eid: 101, name: "vijay", desig: "devop", join: 1992, resign: 2008},
    {eid: 102, name: "bijoy", desig: "ba", join: 1999, resign: 2007 },
    { eid: 103, name: "jhon", desig: "ba", join: 1989, resign: 2010 },
    { eid: 104, name: "danie", desig: "qa", join: 2009, resign: 2014 },
    { eid: 105, name: "lari", desig: "qa", join: 1987, resign: 2010 }
    
]

//printing name and designation

empolyee.forEach(obj=>console.log(obj.name+","+obj.desig))

//print all employee details whoes  desig=devop

let des = empolyee.filter((obj)=>obj.desig=="devop")
console.log(des)

//print all employee details those who are woking in 80s  [*(>1980 & <1190)]

let det=empolyee.filter((obj)=>obj.join>1980 &&obj.join<1990)
console.log(det)

//print all employee details those who have experience >9 years

let det1=empolyee.filter((obj)=>(obj.resign-obj.join)>9)
console.log(det1)

//sort all employees based on theire joining year

let det2 = empolyee.sort((a,b)=>(a.join-b.join))
console.log(det2)


/*var arr=[];
for( key in empolyee)
{
    arr.push(empolyee[key]);
}

/*var arr=[];
arr.push(empolyee.emp1);
arr.push(empolyee.emp2);
arr.push(empolyee.emp3);
arr.push(empolyee.emp4);
arr.push(empolyee.emp5);
arr.push(empolyee.emp6);
console.log(arr);

let name = arr.map((emp)=>emp.name);
let desig = arr.map((emp)=>emp.desig);
console.log(name);
console.log(desig);

let det=arr.filter((emp)=>emp.desig=='devop');
console.log(det);

let det1=arr.filter((emp)=>emp.join>1980 & emp.join<1990)
console.log(det1)

let det2=arr.filter((emp)=>(emp.resign-emp.join )>9)
console.log(det2)

let asce = arr.sort((a,b)=>a.join-b.join)
console.log(asce)*/



