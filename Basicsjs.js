console.log("HELLO");
console.log("Namaste Duniya");
console.log("HELLO WORLD");
//HELLO WORLD IS: STRING
//COMMENT :LINE WHICH IS NOT EXECUTED

console.log("VARIABLES:");
console.log("Inside variable using let keyword we can store any type of data");
let a=5;
console.log(a);
let name="JIYA";
console.log(name);
let status=true;
console.log(status);

console.log("We can stroe data with the help of var keyword too");
console.log("Var and let are two keyword throught which we can create variables");
console.log("Difference betwwen var and let is just scopes");
console.log("Let has local scope where as var has global scope");
console.log("Inside let redeclaration is not possible whereas in case of var redeclaration is possible");

let ab=5;
if(ab==5)
{
    let b=6;
    console.log(b);
}
//console.log(b);//errow will come

var n=6;
var n=5;
if(n==5)
{
    var j=5;
    console.log(j);
}
console.log(j);
console.log("cONSTANT:(having fixed value,there value can,t change");
console.log("If we try to assign new value to the constant variable (Assignment to constant variable)comes as an error");
let names=3;
console.log(names);
names="Alisha"
console.log(names);
console.log("Comparison")
console.log(2>3);
console.log(5<3);
console.log(3<5);
console.log(5==3);
console.log(5!=3);
console.log("Ternary Operator");
var age=18;
let result=(age>=18)?'I can vote':'Cannot vote';
console.log(result);
console.log("Conditional Statements");
console.log("If else statement");
let marks=90;
if(marks>=90)
{
    console.log('A');
}
else if(marks>=80&& marks<=89)
{
    console.log('B');
}
else if(marks>=70&& marks<=79)
{
    console.log('C');
}
else
{
    console.log('D');
}
console.log("Switch CASE");
let num=2;
switch(num)
{
    case 1:console.log('A');
    break;
    case 2:console.log('B');
    break;
    case 3:console.log('C');
    break;
    default:
        console.log('D');

}
console.log("For loop");
for(let i=0;i<5;i++)
{
    console.log(i);
}
console.log("while loop");
let x=1;
while(x<=5)
{
    console.log(x);
    x++;
}
console.log("do-while loop");
let y=1;
do
{
    console.log(y);
    y++;
}while(y<10);