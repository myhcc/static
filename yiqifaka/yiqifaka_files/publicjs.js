$.ajax({
    type: 'post',
    url: '/a/uiShow',

    success: function (res) {
        $.each(JSON.parse(res), function (index, value) {

            if (index == "fuid") {
                $(".fuid").text(value)
            }
            if (index == "allowSettle") {
                $(".todayAllowSettle").text(value);
            }
            if (index == "todayMoney") {
                $(".todayMoney").text(value);
            }
            if (index == "noReadNotice") {
                $(".noReadNotice").text(value);
            }
        })

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        layer.msg('加载商家数据失败');
    }
});
