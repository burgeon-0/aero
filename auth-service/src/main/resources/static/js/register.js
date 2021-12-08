(function ($) {

    "use strict";

    var showErrorAndPreventDefault = function showErrorAndPreventDefault(event, errMsg) {
        $(".register-form .error-message > span").html(errMsg);
        $(".register-form .error-message").show();
        event.preventDefault();
    };

    $("#mobile, #code, #password, #rePassword").focus(function () {
        $(".register-form .error-message").hide();
    });

    var mobileReg = /^1[3-9]\d{9}$/;
    var passwordReg = /^.*(?=.{8,16})(?=.*\d)(?=.*[A-Z|a-z]+)(?=.*[!@#$%^&*?\(\)]).*$/;
    $("form").submit(function (event) {
        if ($("#mobile").val() === "") {
            showErrorAndPreventDefault(event, "请输入手机号码");
            return;
        }
        if (!mobileReg.test($("#mobile").val())) {
            showErrorAndPreventDefault(event, "手机号码不正确");
            return;
        }
        if ($("#code").val() === "") {
            showErrorAndPreventDefault(event, "请输入验证码");
            return;
        }
        if ($("#password").val() === "") {
            showErrorAndPreventDefault(event, "请输入密码");
            return;
        }
        if (!passwordReg.test($("#password").val())) {
            showErrorAndPreventDefault(event, "密码长度8-16位，且至少包含1个数字、1个字母和1个特殊字符");
            return;
        }
        if ($("#rePassword").val() === "") {
            showErrorAndPreventDefault(event, "请输入确认密码");
            return;
        }
        if ($("#password").val() != $("#rePassword").val()) {
            showErrorAndPreventDefault(event, "两次输入密码不一致");
            return;
        }

        $("#password").val(sha256($("#password").val()));
        $("#rePassword").val(sha256($("#rePassword").val()));
    });

})(jQuery);
