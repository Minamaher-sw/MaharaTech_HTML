//q1
alert("Welcome to my site")
var userName=prompt("enter your name"," ")
alert("welcome " +userName)

function sum(num1,num2)
{
    return num1+num2 ;
}
function checkTemp_1(temp)
{
    var ret=(temp >=30)?'Hot' :"Cold";
    return ret;
}

function checkTemp_2(temp ,feel)
{
    var state;
    if((temp > 25 && temp <30) &&(feel >25 && feel<30) )
    {
        state="noraml"
    }
    else if(temp <25 && feel <25)
    {
        state="Cold"
    }
    else if(temp >30 && feel >30)
    {
        state="Hot"
    }
    else {
        state="Ambiguous, can\'t detect"
    }
    return state;
}
