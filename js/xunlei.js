/**
 * Created by xijinhua on 2016/8/9.
 */
$(function () {
    //鼠标触到页游
    $("#yeyou").mouseenter(function () {
        $(".ttmore").css("display", "block");
        $(".ttmore").mouseenter(function () {
            $(".ttmore").css("display", "block");
        });
        $(".ttmore").mouseleave(function () {
            $(".ttmore").css("display", "none");
        });
        $(".ttmore .tt li").css("margin-top", "-1px");
    });
    //鼠标离开页游
    $("#yeyou").mouseleave(function () {
        $(".ttmore").css("display", "none");
    });

//            加载页面时,使图片自动更换
    var timeid = null;
    begin();
    function begin() {
        timeid = setInterval(function () {

            rightclick();
        }, 2000);
    }
    //图片
    var pic = 0;
    var arr = ["1470420535959", "1470032982764", "1470217639253", "1470218312943", "1469413893836"];
    //点击大标点
    $(".circleUi>li").click(function () {
//                $(this).attr("class", "active").siblings("li").removeAttr("index");
        $(this).addClass("active").siblings("li").removeClass("active");
        pic = $(this).index();
        console.log(pic);
        $(".background").css({"background-image": "url(images/" + arr[pic] + ".jpg" + ")",
            "background-positon":"center top"," background-repeat":"no-repeat"}).show(500);
        //
//                $(".background").get(0).style("background: url("+arr[pic]+".jpg"+") center top no-repeat");


    });
    //进入轮播图,箭头出现,并且轮播图停止
    $(".background").mouseenter(function () {
        $(".ileft").css("display", "block");
        $(".iright").css("display", "block");
        //当前的图片停止
        clearInterval(timeid);
    });
    //点击左箭头
    $(".ileft").click(function () {
        if (pic == 0) {
            pic = 5;
        }
        pic--;
        console.log(pic);
        $(".background").css({"background-image": "url(images/" + arr[pic] + ".jpg" + ")",
            "background-positon":"center top"," background-repeat":"no-repeat"}).show(500);

        $(".circleUi>li").eq(pic).addClass("active").siblings("li").removeClass("active");


    });
    //点击右箭头
    $(".iright").click(rightclick);
    //点击右箭头的方法
    function rightclick() {
        if (pic == 4) {
            pic = -1;
        }
        pic++;
        $(".background").css({"background-image": "url(images/" + arr[pic] + ".jpg" + ")",
            "background-positon":"center top"," background-repeat":"no-repeat"}).show(500);
        $(".circleUi>li").eq(pic).addClass("active").siblings("li").removeClass("active");
    }

    //鼠标离开轮播图
    $(".background").mouseleave(function () {
        $(".ileft").css("display", "none");
        $(".iright").css("display", "none");
        //图片又开始更换
        begin();
    });
//         固定导航栏
    $(window).scroll(function (){
        var scrolltop = $(document).scrollTop();
        var tops = $(".header").height()+$(".logoo").height();
        if(tops<=scrolltop){
            $(".nav").css({"position":"fixed","top":0});
            $(".background").css("paddingTop",$(".nav").height());
        }
        else{
            $(".nav").css({"position":"static","top":0});
            $(".background").css("paddingTop",0);
        }
    });


    $(".navs>ul>li").mouseenter(function (){
        //鼠标进入导航栏
        //$(this).css("background", "url(images/spr_index_1.jpg) no-repeat -105px -115px");
        //$(this).css();
        console.log("kkk");
        $(this).addClass("pp");

    }).mouseleave(function (){

    });

});
$(function (){
    var i = 0;
    if(i==0){
        $(".ff").css("display","none");
    }
    var contentWidth = $(".waiceng").width();
    $(".arr .rr").click(function (){

        if(i==0){
            $(".time").animate({"left":940},1000, function (){
                var left = $(".time").get(0).offsetLeft;
                console.log(left+"pppp");
                if(left<900){
                    left =20;

                    $(".time").css("left",left+"px");
                    $(".time").animate({"left":160},1100);
                }
            });

        }


        if(i ==1){
            setTimeout(function (){
                $(".rr").css("display","none");
            },2000);
        }
        $(".ff").css("display","block");
        i++;
        console.log(i);
        var target = -i*contentWidth;
        $(".ulAll").animate({"left":target},2000);

    });
    $(".arr .ff").click(function (){
        i--;
        if(i==0){
            setTimeout(function (){
                $(".ff").css("display","none");
            },2000);
        }
        $(".rr").css("display","block");
        console.log(i);
        var target = -i*contentWidth;
        $(".ulAll").animate({"left":target},2000);

    });

});