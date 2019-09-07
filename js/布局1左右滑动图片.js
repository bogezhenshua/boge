function mouseOver() {
    document.getElementById("logo").src="../images/chi01.jpg";
}
function mouseOut() {
    document.getElementById("logo").src="../images/chan01.jpg";
}
window.onload = function () {
    var arr = ['../images/02.jpg','../images/08.jpg','../images/01.jpg','../images/10.jpg','../images/03.jpg'];
    var txt = ['肇庆宋城墙','肇庆七星岩','肇庆星湖','肇庆绿道','肇庆鼎湖山'];
    var t1 = document.getElementById("prev");
    var t2 = document.getElementById("next");
    var olmg = document.getElementById("img1");// 图片标签
    var word = document.getElementById("p1"); //显示张数文字标签
    var wordlabel = document.getElementById("span1");//显示图片信息标签
    var index = 0;//定位第几张图片的变量

    function funTab() {
        olmg.src = arr[index]; //给图片标签添加图片
        word.innerHTML = (index+1)+"/" + arr.length; //修改上方文字信息
        wordlabel.innerHTML = txt[index];
    }
    funTab();//第一次运行时，调用一次，进行初始化

    t1.onclick = prevlmg;//当点击前一张按钮，调用方法，显示前一张图片
    t2.onclick = nextlmg;//当点击后一张按钮，调用方法，显示后一张图片

    function nextlmg() {
        index++;
        if (index>arr.length - 1){//如果移到数组的最大下标
            index=0;//那么下标为0，这样就能循环显示图片
        }
        funTab();
    }

    function prevlmg() {
        index--;
        if (index<0){
            index = arr.length-1;
        }
        funTab();
    }

    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode == 37) { // 按 左方向键 (37 是←方向键码值)
            prevImg();//这里是方法调用 ,方法名后要加括号, 立刻调用方法
        }
        if(e && e.keyCode == 39) { // 按 右方向键(39 是→方向键码值)
            nextImg();//这里是方法调用 ,方法名后要加括号, 立刻调用方法
        }
    };

}
//轮播
var i=0;
var c = null;
c = setTimeout(carousel,1000);//开始执行
function carousel()
{

    clearTimeout(c);//清除定时器

    $("#pic"+i).removeClass("active");
    $("#pic"+(i+1)).addClass("active");
    i++;
    $("ol li").removeClass("active");
    $("ol li:eq("+i+")").addClass("active");

    if(i>4){
        $("#pic"+(i-1)).removeClass("active");
        $("#pic0").addClass("active");
        i=0;
        $("ol li:eq("+i+")").addClass("active");

    }
    c = setTimeout(carousel,3000); //设定定时器，循环执行
}
