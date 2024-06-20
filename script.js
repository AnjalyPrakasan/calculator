function bclick(val){
    document.getElementById("text-box").value=document.getElementById("text-box").value+val

}
function clearDisplay()
{
    document.getElementById("text-box").value=""
}
function equalclick()
{
    var text=document.getElementById("text-box").value
    var result=eval(text)
    document.getElementById("text-box").value=result
}