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