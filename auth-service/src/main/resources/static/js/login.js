(function ($) {

    "use strict";

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split("&"),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var removeUrlParameter = function removeUrlParameter(sParam) {
        var url = window.location.href.split("?")[0] + "?";
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split("&"),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");
            if (sParameterName[0] != sParam) {
                url = url + sParameterName[0] + "=" + sParameterName[1] + "&"
            }
        }
        return url.substring(0, url.length - 1);
    };

    var error = getUrlParameter("error");
    if (error) {
        $(".login-form .error-message > span").html("账号或密码错误");
        $(".login-form .error-message").show();
    }
    $("#username").focus(function () {
        var error = getUrlParameter("error");
        if (error) {
            window.location = removeUrlParameter("error");
        } else {
            $(".login-form .error-message").hide();
        }
    });
    $("#password").focus(function () {
        var error = getUrlParameter("error");
        if (error) {
            window.location = removeUrlParameter("error");
        } else {
            $(".login-form .error-message").hide();
        }
    });

    $("form").submit(function (event) {
        if ($("#username").val() === "") {
            $(".login-form .error-message > span").html("请输入账号");
            $(".login-form .error-message").show();
            event.preventDefault();
            return;
        }
        if ($("#password").val() === "") {
            $(".login-form .error-message > span").html("请输入密码");
            $(".login-form .error-message").show();
            event.preventDefault();
            return;
        }
    });

})(jQuery);
