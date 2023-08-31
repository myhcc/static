$(function () {
    if ($(".goods_box_xz").text().length < 100) {
        var classid = $(".fl_box_leng").first().attr("fclassid");
        getShangpinInfo(classid)
    }
})
var getShangpinInfo = function (classid) {
    $.ajax({
        type: 'post',
        url: '/b/getShangpinInfo',
        dataType: "json",
        data: "classId=" + classid,
        beforeSend: function (xhr) {
            loading = layer.load()
        },
        success: function (res) {
            layer.close(loading);
            $(".goods_box_xz").html("")
            $.each(res, function (index, value) {
                if (value.fkucun==0){
                    $(".goods_box_xz").append("                        <div class=\"goods_box_leng\" fshangpinInfoid=\"" + value.fid + "\" " +
                        "fprice=\"" + value.fprice + "\" >\n" +
                        "                            <div class=''>" + value.fname +
                        "                            </div>\n" +
                        "                            <div><span>￥</span>\n" + value.fprice +
                        "                            </div>\n" +
                        "                            <div> <span class='fkucun' style='color: #fb636b' fNum='" + value.fkucun + "'>剩余" + value.fkucun + "件</span></div> <!----> </div>"
                    )
                }else{
                    $(".goods_box_xz").append("                        <div class=\"goods_box_leng\" fshangpinInfoid=\"" + value.fid + "\" " +
                        "fprice=\"" + value.fprice + "\" >\n" +
                        "                            <div class=''>" + value.fname +
                        "                            </div>\n" +
                        "                            <div><span>￥</span>\n" + value.fprice +
                        "                            </div>\n" +
                        "                            <div> <span class='fkucun' style='color: #0db26a' fNum='" + value.fkucun + "'>剩余" + value.fkucun + "件</span></div> <!----> </div>"
                    )
                }

                ;

            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.close(loading);
            layer.msg('连接错误');
        }
    });
}
$(document).on("click", ".goods_box_leng", function () {
    // 点击商品

    $(".goods_box_leng").removeClass("goods_box_leng_xz")
    $(this).addClass("goods_box_leng_xz")
    $(".goods_box_leng img").remove();
    $(this).append("<img src=\"/pay_files/xiadui.29ad1d0.png\">")
    $(".shuliang_box input").val("1")
    $(".jiage .fprice").text("￥" + $(this).attr("fprice"))
    $(".totalTitle").text($(".fl_box_leng_xz div").first().text() + ":" + $(".goods_box_leng_xz div").first().text())

    var shangpinId = $(this).attr("fshangpininfoid");
    $.ajax({
        type: 'post',
        url: '/b/selectOnlyShangpin',
        dataType: "json",
        data: "shangpinId=" + shangpinId,
        success: function (res) {
            $(".notic .msg").text("");
            $.each(res, function (index, value) {
                if (index == "fuseNotice" && value != null && value != "") {
                    $(".notic .msg").text("商家提醒:" + value)
                }
                if (index == "fnotice" && value != null && value != "") {
                    layer.open({
                        title: '商家提醒'
                        , content: value
                    });
                }
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg('连接错误');
        }
    });

})
$(function () {
//点击切换分类
    $(".fl_box_leng").click(function () {
        if (!$(this).hasClass("fl_box_leng_xz")) {
            $(".fl_box_leng").removeClass("fl_box_leng_xz")
            $(this).addClass("fl_box_leng_xz")
            var fclassid = $(this).attr("fclassid")
            getShangpinInfo(fclassid)
        }
    })


// 点击商品数量
    $(".shuliang_box .minus").click(function () {
        var minus = parseInt($(".shuliang_box input").val());
        if (minus <= 1) {
            layer.open({
                title: '一起发卡网提醒'
                , content: '购买数量不能小于1'
            });
        } else {
            $(".shuliang_box input").val(minus - 1)
            $(".jiage .fprice").text("￥" + toFixed(Number($(".goods_box_leng_xz").attr("fprice")) * Number($(".shuliang_box input").val())))

        }
    })
    $(".shuliang_box .plus").click(function () {
        var minus = parseInt($(".shuliang_box input").val());

        $(".shuliang_box input").val(minus + 1)
        $(".jiage .fprice").text("￥" + toFixed(Number($(".goods_box_leng_xz").attr("fprice")) * Number($(".shuliang_box input").val())))

    })

    $(".fl_box_leng").first().addClass("fl_box_leng_xz")
});

//确认订单
$(document).on('click', '.qued_btn', function () {
    var fclassid = $(".fl_box_leng_xz").attr("fclassid")
    var fshangpinInfoid = $(".goods_box_leng_xz").attr("fshangpinInfoid")
    var fprice = $(".goods_box_leng_xz").attr("fprice")
    var contact = $(".ure_info_input_box input").val()
    var orderNum = $(".shuliang_box input").val()
    var fkucun = parseInt($(".goods_box_leng_xz .fkucun").attr("fnum"))
    if (fshangpinInfoid == null || fshangpinInfoid.length == 0 || fprice == null || fprice.length == 0) {

        layer.open({
            title: '一起发卡网提醒'
            , content: '未选择商品'
        });
        return false;
    }
    if (fkucun < orderNum) {
        layer.open({
            title: '一起发卡网提醒'
            , content: '该商品库存不足数量' + orderNum
        });
        return false;
    }
    if (contact == null || contact.length == 0) {
        layer.open({
            title: '一起发卡网提醒'
            , content: '未输入联系方式'
        });
        return false;
    }
    if (contact.length < 5) {
        layer.open({
            title: '一起发卡网提醒'
            , content: '联系方式太短'
        });
        return false;
    }
    if (contact.indexOf("12345") >= 0) {
        layer.open({
            title: '一起发卡网提醒'
            , content: '联系方式太简单'
        });
        return false;
    }
    if (orderNum == null || orderNum.length == 0) {
        layer.open({
            title: '一起发卡网提醒'
            , content: '订单数量错误'
        });
        return false;
    }
    $.ajax({
        type: 'post',
        url: '/b/createOrder',
        // dataType: "json",
        data: "fclassid=" + fclassid + "&fshangpinInfoid=" + fshangpinInfoid + "&fprice=" + fprice + "&contact=" + contact + "&orderNum=" + orderNum,
        beforeSend: function (xhr) {
            loading = layer.load()
        },
        success: function (res) {
            layer.close(loading);
            if (res.indexOf("订单创建成功") != -1) {


                layer.confirm(res + "<br>是否支付", {
                    title: ['是否支付订单', 'font-size:18px;'],
                    btn: ['确认支付', '取消支付'],
                    btn1: function () {
                        var strarray = res.split(":")
                        window.open("/scancode.html?orderNo=" + strarray[1], "_blank");
                    }, btn2: function () {
                        layer.closeAll();
                        return false;
                    }
                })
            } else {
                layer.alert(res, {
                    btn: ['知道了']
                });
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.close(loading);
            layer.msg('连接错误');
        }
    });
})


//取小数点后两位
var toFixed = function (sum) {
    return sum.toFixed(2);
}

