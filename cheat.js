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
    click(chooses);
    clickSub("options");
    clickSub("option");
    clickSub("keyboard");
    next=document.getElementsByClassName("el-button el-button--default el-button--small el-button--primary sure-btn");
    if(next.length!=0)
        next[0].click();
    next=document.getElementsByClassName("yt-btn yt-btn-next");
    if(next.length!=0)
        click(next)
    else
    {
        next=document.getElementsByClassName("cepBtn cepBtnNormal");
        if(next.length!=0)
            click(next);
        else
        {
            next=document.getElementsByClassName("next_step")[0].children;
            if(next.length==1)
                next[0].click();
            else
                next[1].click();
            document.getElementById("goTest").click();
            document.getElementsByClassName("el-button btn-start el-button--default")[0].click();
        }
    }
})
