setInterval(()=>{
function click(array,size)
{
    array=[...array];
    var index=-1,length=array.length,lastIndex=length-1;
    size=size===undefined?length:size;
    while(++index<size)
    {
        var rand=index+Math.floor(Math.random()*(lastIndex-index+1))
        value=array[rand];
        array[rand]=array[index];
        array[index]=value;
    }
    array.length=size;
    array.forEach((i)=>{i.click();});
}
function clickSub(name)
{
    let a=document.getElementsByClassName(name);
    if(a.length)
    {
        while(a.length==1)
            a=a[0].children;
        click(a);
    }
}
    chooses=[...document.getElementsByClassName("el-radio__inner")];
    next=document.getElementsByClassName("yt-btn yt-btn-next");
    click(chooses);
    clickSub("options");
    clickSub("option");
    clickSub("keyboard");
    clickSub("el-message-box");
    try{click(next);}
    catch(e)
    {
    try
    {
        next=document.getElementsByClassName("cepBtn cepBtnNormal");
        click(next);
    }
    catch(e)
    {
        document.getElementsByClassName("next_step")[0].children[1].click();
        document.getElementById("goTest").click()
    }
    }
})
