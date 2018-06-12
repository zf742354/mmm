$(function(){

    //弹窗 关闭
    $('.x').click(function(){
        $(".tc").addClass("d-none");
    });





    //第0页面跳转
    $('.diyiye').click(function(){
       open('../html/index4.html')
    });

    //第三页面
    $(".index").click(function(){
       open("../html/index.html")
    });

    //显示弹窗
    $('#lijizhuanfa').click(function(){
        $(".tc").removeClass('d-none');
    });

   // //第一页面跳转
    $('.ckjl').click(function(){

        open('../html/index2.html');

    });

    //第二页面跳转
    $('.qjh').click(function(){
        open("../html/index12.html")
    });

   // $(".you").click(function(){
   //     $('.you').addClass('d-none');
   //     $(".xia").removeClass('d-none');
   //     $(".yc").removeClass('d-none');
   //});

    //$(".xia").click(function(){
    //    $('.xia').addClass('d-none');
    //    $(".you").removeClass('d-none');
    //    $(".yc").addClass('d-none');
    //});



    //第四页面
    var zzbds = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
    var time;
    var num= 6;
    $(".phone").keyup(function(){
        var aaa = $(this).val();
            if(zzbds.test(aaa)){
                $(".hqyzm").attr("disabled",false);
                if($('.yzm').val().length===6){
                    $('.ljjh').attr('disabled',false)
                }else{
                    $('.ljjh').attr('disabled',true)
                }
                }else{
                //激活按钮置灰
                $('.hqyzm').attr('disabled',true);
                $(".ljjh").attr("disabled",true);
            }

    });

    //获取手机验证码
    $(".hqyzm").click(function(){
        //锁定号码输入框
        $('#ddd').attr('disabled',true);
        num--;
        $('.hqyzm').text("再次获取"+num+'s').attr('disabled',true);
        //开始倒计时
        time=setInterval(function(){
        //计时到0时
            num--;
            if(num<=0){
                //停止计时
                clearInterval(time);
                //输入手机号码高亮，更改验证码按钮内文字
                $('.hqyzm').text('获取验证码').attr("disabled",false);
                $('#ddd').attr('disabled',false);
                num = 6;
            }else{
                $('.hqyzm').text("再次获取"+num+'s').attr('disabled',true);
            }
        },1000);


        $('.yzm').attr("disabled",false);
    });

    $('.yzm').keyup(function(){
        if(zzbds.test($('.phone').val())){
            if($(this).val().length===6){
                $('.ljjh').attr('disabled',false)
            }else{
                $('.ljjh').attr('disabled',true)
            }
        }else{
            $('.ljjh').attr('disabled',true)
        }

    });

    $("#ljjh").click(function(){
        open("../html/index5.html");
    });







    //第12页跳转


    $("#ljjh2").click(function(){
        open("../html/index15.html");
    });

    //第四页面结束


    //第五页开始
    $('#xinrenll').click(function(){
        open("../html/index7.html")
    });
    //第五页结束

    //第六页开始
    $('#xinrenll2').click(function(){
        open("../html/index1.html")
    });
    //第六页结束


    //第七页开始
    $('#xinrenll3').click(function(){
        open("../html/index8.html")
    });
    //第七页结束


    //第八页开始
    $('#xinrenll4').click(function(){
        open("../html/index9.html")
    });
    //第八页结束

    //第九页开始
    $('#xinrenll5').click(function(){
        open("../html/index6.html")
    });
    //第九页结束



    //第十五页跳转
    $('#xinrenll15').click(function(){
        $('.foor-box2-img2').addClass("zzz").removeClass('d-none');
        setTimeout(function(){
            window.location.href="../html/index20.html";
        },3000);
    })


});