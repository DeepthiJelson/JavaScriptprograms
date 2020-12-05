class Student
{
    constructor( rollNo, name, course, total)
    {
        this.rollNo = rollNo;
        this.name = name;
        this.course = course;
        this.total = total;
    }
    getStud=()=>
    {
        console.log(this.rollNo)
        console.log(this.name)
        console.log(this.course)
        console.log(this.total);
    }
}
let obj1 = new Student(1,"arun","mca",130);
let obj2 = new Student(2,"nivya","bsc",250);
let obj3 = new Student(3,"jelson","maths",180);

//obj1.setStud( 1, "arun", "MCA", 500);
obj1.getStud();
obj2.getStud();
obj3.getStud();

var student=[]

student.push(obj1)
student.push(obj2)
student.push(obj3)
var stud=student.filter((obj)=>obj.total>130)
var to=student.map((obj)=>obj.total+20)
console.log(stud);
console.log(to);

//different type of variable
//1. local variable 
//2. instance variable ==> are always prepended with this keyword

// setStudent()  =>initializing instance variable
//getStudent()=>printing instance variables

//constructor
//constructor is a special method its duty is to initializing instance variables
//constructor name always constructor()
//constructor will invoked automatically during object creation