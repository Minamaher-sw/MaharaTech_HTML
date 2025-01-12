function sayHello(){

    alert("Hello SIR");
}
/*
    Control Statements that can be used are: 
    1. Conditional Statements 
        a.  if ….else 
        b.  switch/case 
    2.  Loop Statements 
        a.  for 
        b.  while 
        c.  do…while
*/ 
function exCondStat()
{
    var temp =23 ;
    if(temp > 20)
    {
        document.write("air is little cold <br>")
    }
    else
    {
        document.write("air is very cold <br>") 
    }

    var stuudent_grade='f'
    switch(stuudent_grade)
    {
        case 'f':document.write("student fall <br>") ; break ;
        case 'g' :document.write("student succces <br>") ; break ;
        default :
                document.write("student not pass <br>") ; break ;
    }
}

function exLoopStat()
{
    //for loop
    //as c prog
    for (var count=0 ;count <10 ;count++)
    {
        
        if(count ==6)
        {
            continue
        }
        if(count == 9)
        {
            break
        }
        document.write("<br>",count);
    }

    var array=["index1","index2",3,4,5]
    for( var item in array)
    {
        document.write("<br>",array[item]);
    }
}

/*                                              ********** 
 *                                             Dialogue Boxes
                                                ************      
        o The simplest way  to direct output to a dialog box  

 * */
//Alert: 
alert("clock ok to continue")

//Prompt:The simplest way to interact with the user. 
var name_1=prompt("Enter your name ","write here") ;
alert("welcome  " + name_1) ;
/*
    Confirm: 
    o displays a dialog box with two buttons: OK and Cancel. 
    • If the user clicks on OK it will return true. 
    • If the user clicks on the Cancel  it will return false.
*/
var chack =confirm("do you want confirm data");
if(chack)
{
    alert("thanks sir")
}
else
{
    alert("good")
}
/* 
    ******************************8   JavaScript Built-in Functions  **************
 parseInt()    Convert string to int 
                                        parseInt("3") //returns 3 
                                        parseInt(“3a”) //returns 3 
                                        parseInt(“a3”) //returns NaN 
parseFloat()   Convert string to float 
 
                                        parseFloat("3.55") //returns 3.55 
                                        parseFloat(“3.55a”) //returns 3.55 
                                        parseFloat(“a3.55”) //returns NaN 
Number()  
                The Number() function converts the 
                object argument to a number that 
                represents the object's value. 
                if the value cannot be converted to a 
                legal number, NaN is returned . 
                                        var x1 = false, x2 = "999“, x3 = "999 888"; 
                                        document.write(Number(x1), 
                                        Number(x2), Number(x3));  
                                        // returns 0, 999, Nan 
                                        Note: 
                                        parseInt("123hui");  //returns 123 
                                        Number("123hui"); //returns NaN 
String()  
            Convert different objects to strings. 
 
                                        var x1 = New Boolean(0);, x2 = 999, x3 = 
                                        "999 888"; 
                                        document.write(String(x1), String(x2), 
                                        String(Sx3));  
                                        // returns false, 999, 999 888
*/
var parsval =parseInt("3");
document.write("<br>",parsval);

parsval =parseInt("33A");
document.write("<br>",parsval);

parsval =parseInt("a333");
document.write("<br>",parsval);

parsval =Number("3");
document.write("<br>",parsval);

parsval =Number("33A");
document.write("<br>",parsval);

parsval =Number("a333");
document.write("<br>",parsval);

parsval=String(1233)
document.write("<br>",parsval);

/**
 * ************** Check function 
 * isFinite(num) 
                (used to test number) 
                returns true if the string 
                contains numbers only, else 
                false 
                                                document.write(isFinite(33))  
                                                //returns true 
                                                document.write(isFinite(“Hello”))  
                                                //returns false 
                                                document.write(isFinite(“33a”))  
                                                //returns false 
isNaN(val) 
                (used to test string) 
                validate the argument for a 
                number and returns true if the 
                given value is not a number 
                else returns false.  
                                                document.write(isNaN(0/0)) //returns true 
                                                document.write(isNaN("348a")) //returns 
                                                true 
                                                document.write(isNaN(“abc")) //returns 
                                                true 
                                                document.write(isNaN("348")) //returns 
                                                false 
eval(expression)
                evaluates an expression and 
                                                returns the result. 
                                                a=999; b=777;  
                                                document.write(eval(b + a));  
                                                returns 1776
 */
var promnum=prompt("enter number" ,"here");
if(isFinite(promnum))
{
    document.write("<br>",Number(promnum));
}
else
{
    document.write("<br>",parseInt(promnum));
}

promnum=prompt("enter user name " ,"here");
if(isNaN(promnum))
{
    document.write("<br> correct ");
}
else
{
    document.write("<br> un correct name");
}
debugger;
for(let uy=0 ;uy>10 ;uy++)
{

    console.log(uy);
}
