//single level inheritance
class Parent
{
    phone()
    {
        console.log("Nokia")
    }
}
class Child extends Parent
{

}
let obj1 = new Child();
obj1.phone();