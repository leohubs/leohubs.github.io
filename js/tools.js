// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
String.prototype.replaceAll = function (oldStr, newStr) {
    var index = 0;
    var str = new String(this);
    if (newStr == undefined || newStr == null) newStr = "";
    while (index >= 0) {
        str = str.replace(oldStr, newStr);
        index = str.indexOf(oldStr);
    }
    return str;
}
var dynamicLoading = {
    css: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
};
var dateTimeUtil = {
    /**
     * 获取最近时间
     * @param {String} num 基于今日增减天数
     * @param {String} num 输出日期格式
     */
    getRecentDay: function (num, type) {
        d = new Date;
        d.setDate(d.getDate() - num);
        if (type == 0) return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        if (type == 1) return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        if (type == 2) return d.getHours() + ':' + d.getMinutes();
    },
    getTime: function (num) {
        var d = new Date();
        var hh = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
        var mm = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes();
        if (num == 0)return hh + ":" + mm;
        if (num == 1)return hh;
    }
};
var stringUtil = {
    /**
     * 清除空白字符
     * @param {String} sorce 原始字符串
     */
    trim: function (source) {
        return source.replace(/(^\s*)|(\s*$)/g, "");
    },
    /**
     * 判断是否是为空字符串
     * @param {Object} source    原始字符串
     */
    isEmptyString: function (source) {
        if (!source) return true;
        if (source == null) return true;
        if (source == undefined) return true;
        if (source.length == 0) return true;
        if (source.replace(/(^\s*)|(\s*$)/g, "") == "") return true;
        //if (str.trim() == "") return true;
        if (source == "null") return true;
        //        if (typeof str != "string") return true;
        return false;
    },
    /**
     * 获取字符串的字节长度(默认utf-8编码)
     * @param {Object} source    原始字符串
     * @param {Object} charset    字符编码
     */
    stringByteLength: function (source, charset) {
        //utf-8编码规则如下：
        //  字符代码在  000000 – 00007F之间的，用一个字节编码；
        //              000080 – 0007FF之间的字符用两个字节；
        //              000800 – 00D7FF 和 00E000 – 00FFFF之间的用三个字节，注: Unicode在范围 D800-DFFF 中不存在任何字符；
        //              010000 – 10FFFF之间的用4个字节。
        //UTF-16 则是定长的字符编码，大部分字符使用两个字节编码，字符代码超出 65535 的使用四个字节，如下：
        //      000000 – 00FFFF 两个字节；
        //      010000 – 10FFFF 四个字节。
        if (source) {
            var total = 0,
                charCode, i, len = source.length;
            charset = charset ? charset.toLowerCase() : '';
            if (charset === 'utf-16' || charset === 'utf16') {
                for (i = 0; i < len; i++) {
                    charCode = source.charCodeAt(i);
                    if (charCode <= 0xffff) {
                        total += 2;
                    } else {
                        total += 4;
                    }
                }
            } else {
                for (i = 0, len = source.length; i < len; i++) {
                    charCode = source.charCodeAt(i);
                    if (charCode <= 0x007f) {
                        total += 1;
                    } else if (charCode <= 0x07ff) {
                        total += 2;
                    } else if (charCode <= 0xffff) {
                        total += 3;
                    } else {
                        total += 4;
                    }
                }
            }
            return total;
        } else {
            return 0;
        }
    },
    /**
     * 根据指定长度缩略字符串
     * @param {Object} source    原始字符串
     * @param {Object} len    字符串目标长度
     */
    ellipsis: function (source, len) {
        if (source.length > len)
            return source.substr(0, len) + "...";
        return str;
    }
};
var requestUtil = {
    //测试
    serverPath: 'http://dev.feellike21.com/tahiti/wechat/',
    //生产
    // serverPath: 'https://kaiwu.feellike21.com/tahiti/wechat/api/',

    //个人
    // serverPath: 'http://10.0.0.53:8080/',
    // serverPath: 'http://10.0.0.19:8080/',
    /**
     * get请求
     * @param {Object} url    接口url
     * @param {Object} data    接口参数
     * @param {Object} options    操作选项（successCall:数据接收成功后调用方法）
     */
    get: function (url, data, options) {
        $('.loading').show();
        this.async("get", url, data, options);
    },
    /**
     * post请求
     * @param {Object} url    接口url
     * @param {Object} data    接口参数
     * @param {Object} dataType   接口类型（常用json）
     * @param {Object} contentType   传输类型（常用application/json;charset=utf-8）
     * @param {Object} options    操作选项（successCall:数据接收成功后调用方法）
     */
    post: function (url, data, options) {
        $('.loading').show();
        this.async("post", url, data, options);
    },
    /**
     * delete请求
     * @param {Object} url    接口url
     * @param {Object} data    接口参数
     * @param {Object} options    操作选项（successCall:数据接收成功后调用方法）
     */
    delete: function (url, data, options) {
        //this.async("post", url, $.extend(data, {
        //	_method: "delete"
        //}), options);
        this.async("delete", url, data, options);
    },
    async: function (method, url, data, options) {
        $.ajax({
            type: method,
            url: url,
            async: true,
            data: data,
            headers: {token: localStorage.getItem('token')},
            success: function (res) {
                if (res.code == 1001) {
                    $('.loading').hide();
                    swal({title: res.msg}, function () {
                        WeixinJSBridge.call('closeWindow');
                    })
                } else {
                    $('.loading').hide();
                    if ($.isFunction(options["successCall"])) {
                        options.successCall(res);
                    }
                }
            }
        });
    },
    getParameter: function (name) {
        var query = window.location.search;
        var iLen = name.length;
        var iStart = query.indexOf(name);
        if (iStart == -1)
            return "";
        iStart += iLen + 1;
        var iEnd = query.indexOf("&", iStart);
        if (iEnd == -1)
            return query.substring(iStart);
        return query.substring(iStart, iEnd);
    },
    redirectSecurity: function (url, options) {
        var defaults = {
            "auth": true
        };
        this.redirect(url, $.extend(defaults, options));
    },
    redirect: function (url, options) {
        window.location = this.generateUrl(url, options);
    },
    generateSecurityUrl: function (url, options) {
        var defaults = {
            "auth": true
        };
        return this.generateUrl(url, $.extend(defaults, options));
    },
    generateUrl: function (url, options) {
        var param = this.generateParamString(options);
        var connector = url.indexOf("?") > 0 ? "&" : "?";
        return url + connector + param.join("&");
    },
    generateParamString: function (options) {
        var param = [];
        if (options) {
            var p = $.extend([], options["param"]);
            if (options["auth"] === true)
                param.push("token=" + authUtil.getToken());
            for (var i = 0; i < p.length; i++) {
                param.push(p[i].p_name + "=" + p[i].p_value);
            }
        }
        return param;
    }
};
//查询入职状态
function checkBoardStatus(page, callback) {
    var text = '';
    if (page == 'index') {
        //企业付提示
        if (localStorage.getItem('payType') == 0) {
            text = '您当前无法继续预约入职体检，请与HR联系。'
        } else {
            text = '您当前无法继续预约入职体检，请与HR联系。<br><br>我们将在30个工作日内将体检费用退还至您的微信账户。'
        }
    }
    if (page == 'booking') {
        //预约过期
        if (localStorage.getItem('heId')) {
            //企业付提示
            if (localStorage.getItem('payType') == 0) {
                text = '由于您未能按照预约日期体检，预约已失效。'
            } else {
                text = '由于您未能按照预约日期体检，预约已失效，我们将在30个工作日内将体检费用退还至您的微信账户。'
            }

        //未过期
        } else {
            //企业付提示
            if (localStorage.getItem('payType') == 0) {
                text = '您的体检预约已失效。'
            } else {
                text = '您仍然可以按照预约日期参加体检，若您未按期体检，我们将退还体检费用。'
            }
        }
    }

    var url = requestUtil.serverPath + 'v1/HeInvitation/getBoardStatus';
    requestUtil.get(url, {invitationId: localStorage.getItem('invitationId')}, {
        "successCall": function (res) {
            if (res.code == 1000) {
                var status = res.data.boardStatus;
                //0是待处理 1是已入职 2是被拒
                if (status == 2) {
                    swal({
                        title: '"' + res.data.companyName + '"<br>已谢绝您入职',
                        text: text,
                        html: true,
                        confirmButtonText: '我知道了'
                    }, function () {
                        //点击知道了调用拒绝接口结束流程
                        var url = requestUtil.serverPath + 'v1/HeInvitation/checkAcceptStatus';
                        requestUtil.post(url, {
                            accept: 3,
                            invitationId: localStorage.getItem('invitationId')
                        }, {
                            "successCall": function () {
                                localStorage.removeItem('invitationId');
                                localStorage.removeItem('payType');
                                localStorage.removeItem('heId');
                                clearLocal();
                                WeixinJSBridge.call('closeWindow');
                            }
                        });
                    })
                } else {
                    //预约过期且未被拒正常提示
                    if (page == 'booking' && localStorage.getItem('heId')) {
                        //企业付提示
                        if (localStorage.getItem('payType') == 0) {
                            text = '抱歉，您未能按期参加入职体检，预约已失效。<br>如需重新预约，请联系"'+ res.data.companyName +'"。'
                        } else {
                            text = '抱歉，您未能按期参加入职体检，预约已失效。<br>如需重新预约，请联系"'+ res.data.companyName +'"。我们将在30个工作日内将体检费用退还至您的微信账户。'
                        }
                        swal({
                            title: '',
                            text: text,
                            html: true,
                            confirmButtonText: '我知道了'
                        }, function () {
                            //点击知道了调用拒绝接口结束流程
                            var url = requestUtil.serverPath + 'v1/HeInvitation/checkAcceptStatus';
                            requestUtil.post(url, {
                                accept: 3,
                                invitationId: localStorage.getItem('invitationId')
                            }, {
                                "successCall": function () {
                                    localStorage.removeItem('invitationId');
                                    localStorage.removeItem('payType');
                                    localStorage.removeItem('heId');
                                    clearLocal();
                                    WeixinJSBridge.call('closeWindow');
                                }
                            });
                        })
                    }


                    //未被拒执行函数
                    if (callback) {
                        callback()
                    }
                    console.log('0是待处理 1是已入职 2是被拒')
                    console.log('查询状态:boardStatus=' + res.data.boardStatus)
                }
            } else {
                swal(res.msg)
            }
        }
    });

}
