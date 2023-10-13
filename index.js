var counting = 0;
function decRease()
{
    counting--
    document.getElementById("numb").innerHTML = counting
    if(counting < 0 && counting != 0)
    {
        document.getElementById("numb").style.color = "rgb(248, 76, 76)"
    }
    else if (counting == 0)
    {
    document.getElementById("numb").style.color = "black" 
    }
}
function reSet()
{
    counting = 0
    document.getElementById("numb").innerHTML = counting
    document.getElementById("numb").style.color = "black"
}
function incRease()
{
    counting++
    document.getElementById("numb").innerHTML = counting
    if(counting > 0 && counting != 0)
    {
    document.getElementById("numb").style.color = "rgb(170, 238, 101)"
    }
    else if (counting == 0)
    {
    document.getElementById("numb").style.color = "black" 
    }

}