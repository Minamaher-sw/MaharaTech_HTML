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