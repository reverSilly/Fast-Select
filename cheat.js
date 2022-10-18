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
    document.getElementsByClassName("el-button el-button--default el-button--small el-button--primary sure-btn")[0].click();
    try{click(next);}
    catch(e)
    {
        next=document.getElementsByClassName("cepBtn cepBtnNormal");
        click(next);
        document.getElementsByClassName("next_step")[0].children[1].click();
        document.getElementById("goTest").click();
        click(document.getElementsByClassName("el-button btn-start el-button--default"));
    }
})
