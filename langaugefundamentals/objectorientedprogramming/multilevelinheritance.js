class Parent
{
    m1()
    {
        console.log("inside m1");
    }
}
class Child extends Parent
{
    m2()
    {
        console.log("inside m2");
    }
}
class Subchild extends Child
{
    m3()
    {
        console.log("inside m3")
    }
}
let obj1 = new Subchild();
obj1.m1();
obj1.m2();
obj1.m3();