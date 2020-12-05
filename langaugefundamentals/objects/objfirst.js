/*Objects creat by using {}
values stored in object as key value pairs
Duplicate keys are not allowed
Values may be duplicate*/

//Create an object with key value pairs
var student={id:10,name:"Deepthi", course:"mean stack"};
//To display particular value
console.log(student.name);
console.log(student["name"]);
//Searching for a key & returns true or false
console.log("total" in student);
//To add a key and value to the object
student["total"]=150;
console.log(student);
//update total with 50
student["total"]+=50;
console.log(student.total)