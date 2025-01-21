//lab1 q1
alert("Welcome to my site");
var yourName =prompt("Enter your name","your name");
//error handling 
while(!yourName)
{
    yourName =prompt("Enter your name","your name");
}
alert("welcome "+yourName);
//q2

function sum(num1 ,num2)
{
    var result =num1+num2 ;
    return result;
}
/*
        q5-	Make a function that takes Student faculty as a parameter, checks:
        a.	If the entered faculty: FCI, show message: “You’re eligible to Programing tracks”.
        b.	If the entered faculty: Engineering, show message: “You’re eligible to Network and Embedded tracks”.
        c.	If the entered faculty: Commerce, show message: “You’re eligible to ERP and Social media tracks”.
        d.	For any other faculty, show message: “You’re eligible to SW fundamentals track”.
        (Use switch(). And why it’s better in that case?).
        */
function checkFacType(facultyName)
{
    var result ;
    switch(facultyName)
    {
        case "FCI" :
            result ="You\'re eligible to Programing tracks" ;
            break ;
        case "Engineering" :
            result ="You\'re eligible to Network and Embedded tracks"
            break ;
        case "Commerce":
            result="You\'re eligible to ERP and Social media tracks"
            break;
        default :
            result="You\'re eligible to SW fundamentals track"
            break;
    }
    return result ;
}
/*
    6-	Write a function that takes 2 parameters: start and end number and print odd numbers between the given 2 numbers
*/
function checkOddNumber(startNum ,endNum)
{
    for(var item=startNum ;item <= endNum ;item++)
    {
        if(item %2 == 1)
        {
            console.log(item);
        }
        else{
            continue ;
        }
    }
}
