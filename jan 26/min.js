var n1 = prompt("Enter first number");
var n2 = prompt("Enter second number");
var n3 = prompt("Enter third number");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1<=n2 && n1<=n3)
{
alert(n1 + "is minimum");
}
else if(n2<=n1 && n2<=n3)
{
alert(n2 + "is minimum");
}
else
{
alert(n3 + "is minimum");
}
