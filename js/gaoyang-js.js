/**
 * Created by Administrator on 2016/8/8.
 */
    $(function () {
        //$(".weekday>.tittle>.weekday-more").mouseenter(function () {
        //    $(".weekday>.tittle>.weekday-more").css("color","red");
        //    $(".weekday>.tittle>.weekday-more>em").css("background","url(../images/"+spr_index.png+") no-repeat -213px 0");
        //});
        //$(".weekday>.tittle>.weekday-more").mouseleave(function () {
        //    $(".weekday>.tittle>.weekday-more").css("color","black");
        //    $(".weekday>.tittle>.weekday-more>em").css("background","url(../images/spr_index.png) no-repeat -269px 0");
        //});
        //本周推荐开始
        //第一个li标签鼠标进入
        $(".weekday-bottom>ul>.l1").mouseenter(function () {
           $(".l1>.weekday-bottom-none").css("display","block");
            $(".l1>.weekday-bottom-enter").css("marginTop","-22px");
            $(".l1").css("border","1px solid #FF7346");
        });
        //鼠标离开
        $(".weekday-bottom>ul>.l1").mouseleave(function () {
            $(".l1>.weekday-bottom-none").css("display","none");
            $(".l1>.weekday-bottom-enter").css("marginTop","");
            $(".l1").css("border","1px solid  #D5D5D5");
        });
        $(".weekday-bottom>ul>.l1").mouseenter(function () {
                $(".l1>.weekday-bottom-enter>.a4").css("backgroundColor","#FF7346");
            });
        $(".weekday-bottom>ul>.l1").mouseleave(function () {
            $(".l1>.weekday-bottom-enter>.a4").css("backgroundColor","");
        });
        //第二个li标签
        $(".weekday-bottom>ul>.l2").mouseenter(function () {
            $(".l2>.weekday-bottom-none").css("display","block");
            $(".l2>.weekday-bottom-enter").css("marginTop","-22px");
            $(".l2").css("border","1px solid #FF7346");
            $(".l2>.weekday-bottom-enter>.a4").css("backgroundColor","#FF7346");
        });
        $(".weekday-bottom>ul>.l2").mouseleave(function () {
            $(".l2>.weekday-bottom-none").css("display","none");
            $(".l2>.weekday-bottom-enter").css("marginTop","");
            $(".l2").css("border","1px solid #D5D5D5");
            $(".l2>.weekday-bottom-enter>.a4").css("backgroundColor","");
        });
        //第三个li标签
        $(".weekday-bottom>ul>.l3").mouseenter(function () {
            $(".l3>.weekday-bottom-none").css("display","block");
            $(".l3>.weekday-bottom-enter").css("marginTop","-22px");
            $(".l3").css("border","1px solid #FF7346");
            $(".l3>.weekday-bottom-enter>.a4").css("backgroundColor","#FF7346");
        });
        $(".weekday-bottom>ul>.l3").mouseleave(function () {
            $(".l3>.weekday-bottom-none").css("display","none");
            $(".l3>.weekday-bottom-enter").css("marginTop","");
            $(".l3").css("border","1px solid #D5D5D5");
            $(".l3>.weekday-bottom-enter>.a4").css("backgroundColor","");
        });
        //第四个li标签
        $(".weekday-bottom>ul>.l4").mouseenter(function () {
            $(".l4>.weekday-bottom-none").css("display","block");
            $(".l4>.weekday-bottom-enter").css("marginTop","-22px");
            $(".l4").css("border","1px solid #FF7346");
            $(".l4>.weekday-bottom-enter>.a4").css("backgroundColor","#FF7346");

        });
        $(".weekday-bottom>ul>.l4").mouseleave(function () {
            $(".l4>.weekday-bottom-none").css("display","none");
            $(".l4>.weekday-bottom-enter").css("marginTop","");
            $(".l4").css("border","1px solid #D5D5D5");
            $(".l4>.weekday-bottom-enter>.a4").css("backgroundColor","");
        });
        //第五个li标签
        $(".weekday-bottom>ul>.l5").mouseenter(function () {
            $(".l5>.weekday-bottom-none").css("display","block");
            $(".l5>.weekday-bottom-enter").css("marginTop","-22px");
            $(".l5").css("border","1px solid #FF7346");
            $(".l5>.weekday-bottom-enter>.a4").css("backgroundColor","#FF7346");

        });
        $(".weekday-bottom>ul>.l5").mouseleave(function () {
            $(".l5>.weekday-bottom-none").css("display","none");
            $(".l5>.weekday-bottom-enter").css("marginTop","");
            $(".l5").css("border","1px solid #D5D5D5");
            $(".l5>.weekday-bottom-enter>.a4").css("backgroundColor","");
        });
    });
//本周推荐结束
//牛友推荐开始
        $(function () {
           $(".bestman-picl").mouseenter(function () {
               $(".bestman-picl").css("border","1px solid #FF7346");
               $(".bestman-picl-size>.a2").css({"backgroundColor":"#FF7346","color":"white"});
           });
            $(".bestman-picl").mouseleave(function () {
                $(".bestman-picl").css("border","1px solid #D5D5D5");
                $(".bestman-picl-size>.a2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
            //1
            $(".bestman-pic-more1").mouseenter(function () {
                $(".bestman-pic-more1").css("border","1px solid #FF7346");
                $(".bestman-pic-more1>.alink1>span>img").css("bottom",0);
                $(".bestman-pic-more1>.alink2").css({"backgroundColor":"#FF7346","color":"white"});
            });
            $(".bestman-pic-more1").mouseleave(function () {
                $(".bestman-pic-more1").css("border","1px solid #D5D5D5");
                $(".bestman-pic-more1>.alink1>span>img").css("bottom","-10px");
                $(".bestman-pic-more1>.alink2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
            //2
            $(".bestman-pic-more2").mouseenter(function () {
                $(".bestman-pic-more2").css("border","1px solid #FF7346");
                $(".bestman-pic-more2>.alink1>span>img").css("bottom",0);
                $(".bestman-pic-more2>.alink2").css({"backgroundColor":"#FF7346","color":"white"});
            });
            $(".bestman-pic-more2").mouseleave(function () {
                $(".bestman-pic-more2").css("border","1px solid #D5D5D5");
                $(".bestman-pic-more2>.alink1>span>img").css("bottom","-10px");
                $(".bestman-pic-more2>.alink2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
            //3
            $(".bestman-pic-more3").mouseenter(function () {
                $(".bestman-pic-more3").css("border","1px solid #FF7346");
                $(".bestman-pic-more3>.alink1>span>img").css("bottom",0);
                $(".bestman-pic-more3>.alink2").css({"backgroundColor":"#FF7346","color":"white"});
            });
            $(".bestman-pic-more3").mouseleave(function () {
                $(".bestman-pic-more3").css("border","1px solid #D5D5D5");
                $(".bestman-pic-more3>.alink1>span>img").css("bottom","-10px");
                $(".bestman-pic-more3>.alink2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
            //4
            $(".bestman-pic-more4").mouseenter(function () {
                $(".bestman-pic-more4").css("border","1px solid #FF7346");
                $(".bestman-pic-more4>.alink1>span>img").css("bottom",0);
                $(".bestman-pic-more4>.alink2").css({"backgroundColor":"#FF7346","color":"white"});
            });
            $(".bestman-pic-more4").mouseleave(function () {
                $(".bestman-pic-more4").css("border","1px solid #D5D5D5");
                $(".bestman-pic-more4>.alink1>span>img").css("bottom","-10px");
                $(".bestman-pic-more4>.alink2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
            //5
            $(".bestman-pic-more5").mouseenter(function () {
                $(".bestman-pic-more5").css("border","1px solid #FF7346");
                $(".bestman-pic-more5>.alink1>span>img").css("bottom",0);
                $(".bestman-pic-more5>.alink2").css({"backgroundColor":"#FF7346","color":"white"});
            });
            $(".bestman-pic-more5").mouseleave(function () {
                $(".bestman-pic-more5").css("border","1px solid #D5D5D5");
                $(".bestman-pic-more5>.alink1>span>img").css("bottom","-10px");
                $(".bestman-pic-more5>.alink2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
            //6
            $(".bestman-pic-more6").mouseenter(function () {
                $(".bestman-pic-more6").css("border","1px solid #FF7346");
                $(".bestman-pic-more6>.alink1>span>img").css("bottom",0);
                $(".bestman-pic-more6>.alink2").css({"backgroundColor":"#FF7346","color":"white"});
            });
            $(".bestman-pic-more6").mouseleave(function () {
                $(".bestman-pic-more6").css("border","1px solid #D5D5D5");
                $(".bestman-pic-more6>.alink1>span>img").css("bottom","-10px");
                $(".bestman-pic-more6>.alink2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
            //7
            $(".bestman-pic-more7").mouseenter(function () {
                $(".bestman-pic-more7").css("border","1px solid #FF7346");
                $(".bestman-pic-more7>.alink1>span>img").css("bottom",0);
                $(".bestman-pic-more7>.alink2").css({"backgroundColor":"#FF7346","color":"white"});
            });
            $(".bestman-pic-more7").mouseleave(function () {
                $(".bestman-pic-more7").css("border","1px solid #D5D5D5");
                $(".bestman-pic-more7>.alink1>span>img").css("bottom","-10px");
                $(".bestman-pic-more7>.alink2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
            //8
            $(".bestman-pic-more8").mouseenter(function () {
                $(".bestman-pic-more8").css("border","1px solid #FF7346");
                $(".bestman-pic-more8>.alink1>span>img").css("bottom",0);
                $(".bestman-pic-more8>.alink2").css({"backgroundColor":"#FF7346","color":"white"});
            });
            $(".bestman-pic-more8").mouseleave(function () {
                $(".bestman-pic-more8").css("border","1px solid #D5D5D5");
                $(".bestman-pic-more8>.alink1>span>img").css("bottom","-10px");
                $(".bestman-pic-more8>.alink2").css({"backgroundColor":"#D5D5D5","color":"black"});
            });
        });

