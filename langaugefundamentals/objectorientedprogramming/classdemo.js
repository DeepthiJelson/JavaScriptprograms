//class: design pattern, blue print, or template
//object: real world entity
//reference: 

class Person
{
    constructor( age, name)
    {
        this.age = age;//this.age =>person has age
        this.name = name;
    }
    getPerson()
    {
        console.log(this.age);
        console.log(this.name)
    }
}

let obj1 = new Person(20,"anu");
//obj1.setPerson(20,"anu");
obj1.getPerson();