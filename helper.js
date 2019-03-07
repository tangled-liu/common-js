/**
 * @author tangled
 */
/**
 * 生成锚和页数组成的页码
 * @param pageBody 分页div的Id
 * @param pageHref 请求位置
 * @param PageClick 触发函数名
 * @param pageThis 当前样式id
 * @param page 当前页
 * @param allPages 总页数
 */
function commonPageShow(pageBody, pageHref, PageClick, pageThis, page, allPages) {
    $("#" + pageBody).html("");
    if (allPages == 0) {
        return;
    }
    $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(this.href,1)>首页</a>");
    if (1 != page) {
        $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(this.href,"+(page-1)+")>上一页</a>");
    }
    var pageLeft =  pageShow(page, allPages);
    if (pageLeft > 1) {
        $("#" + pageBody).append("<span>...</span>");
    }
    for (var i = 0; i < (10 < allPages ? 10: allPages); i++) {
        $("#" + pageBody).append("<a id='"+pageThis+""+(pageLeft + i)+"' href='#"+pageHref+"' onclick="+PageClick+"(this.href,"+(pageLeft + i)+")>"+(pageLeft + i)+"</a>");
    }
    $("#"+pageThis+""+page).css("background-color","white");
    if (pageLeft + 9 < allPages) {
        $("#" + pageBody).append("<span>...</span>");
    }
    if (page != allPages) {
        $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(this.href,"+(page+1)+")>下一页</a>");
    }
    $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(this.href,"+allPages+")>尾页</a>");
}
/**
 * 生成锚和页数组成的页码，若keyword参数为空则执行commonPageShow函数
 * @param pageBody 分页div的Id
 * @param pageHref 请求位置
 * @param PageClick 触发函数名
 * @param pageThis 当前样式id
 * @param page 当前页
 * @param allPages 总页数
 * @param keyword 点击数尾部参数
 */
function commonPageShow2(pageBody, pageHref, PageClick, pageThis, page, allPages, keyword) {
    if (isEmpty(keyword)) {
        commonPageShow(pageBody, pageHref, PageClick, pageThis, page, allPages);
        return;
    }
    $("#" + pageBody).html("");
    if (allPages == 0) {
        return;
    }
    $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(this.href,1,"+keyword+")>首页</a>");
    if (1 != page) {
        $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(this.href,"+(page-1)+","+keyword+")>上一页</a>");
    }
    var pageLeft =  pageShow(page, allPages);
    if (pageLeft > 1) {
        $("#" + pageBody).append("<span>...</span>");
    }
    for (var i = 0; i < (10 < allPages ? 10: allPages); i++) {
        $("#" + pageBody).append("<a id='"+pageThis+""+(pageLeft + i)+"' href='#"+pageHref+"' onclick="+PageClick+"(this.href,"+(pageLeft + i)+","+keyword+")>"+(pageLeft + i)+"</a>");
    }
    $("#"+pageThis+""+page).css("background-color","white");
    if (pageLeft + 9 < allPages) {
        $("#" + pageBody).append("<span>...</span>");
    }
    if (page != allPages) {
        $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(this.href,"+(page+1)+","+keyword+")>下一页</a>");
    }
    $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(this.href,"+allPages+","+keyword+")>尾页</a>");
}
/**
 * 生成锚和页数组成的页码，若keyword参数为空则执行commonPageShow函数
 * @param pageBody 分页div的Id
 * @param pageHref 请求位置
 * @param PageClick 触发函数名
 * @param pageThis 当前样式id
 * @param page 当前页
 * @param allPages 总页数
 * @param keyword 点击数尾部参数
 * @param index 搜索项
 */
function commonPageShow3(pageBody, pageHref, PageClick, pageThis, page, allPages, keyword, index) {
    if (isEmpty(index)) {
        commonPageShow2(pageBody, pageHref, PageClick, pageThis, page, allPages, keyword);
        return;
    }
    $("#" + pageBody).html("");
    if (allPages == 0) {
        return;
    }
    $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"(1,"+index+",'"+keyword+"')>首页</a>");
    if (1 != page) {
        $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"("+(page-1)+","+index+",'"+keyword+"')>上一页</a>");
    }
    var pageLeft =  pageShow(page, allPages);
    if (pageLeft > 1) {
        $("#" + pageBody).append("<span>...</span>");
    }
    for (var i = 0; i < (10 < allPages ? 10: allPages); i++) {
        $("#" + pageBody).append("<a id='"+pageThis+""+(pageLeft + i)+"' href='#"+pageHref+"' onclick="+PageClick+"("+(pageLeft + i)+","+index+",'"+keyword+"')>"+(pageLeft + i)+"</a>");
    }
    $("#"+pageThis+""+page).css("background-color","white");
    if (pageLeft + 9 < allPages) {
        $("#" + pageBody).append("<span>...</span>");
    }
    if (page != allPages) {
        $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"("+(page+1)+","+index+",'"+keyword+"')>下一页</a>");
    }
    $("#" + pageBody).append("<a href='#"+pageHref+"' onclick="+PageClick+"("+allPages+","+index+",'"+keyword+"')>尾页</a>");
}
/**
 * 生成锚和页数组成的页码，若keyword参数为空则执行commonPageShow函数
 * @param pageBody 分页div的Id
 * @param PageClick 触发函数名
 * @param pageThis 当前样式id
 * @param page 当前页
 * @param allPages 总页数
 * @param keyword 点击数尾部参数
 */
function commonPageShow4(pageBody, PageClick, pageThis, page, allPages, keyword) {
    $("#" + pageBody).html("");
    if (allPages == 0) {
        return;
    }
    $("#" + pageBody).append("<a href='javascript:void(0)' onclick="+PageClick+"(1,"+keyword+")>首页</a>");
    if (1 != page) {
        $("#" + pageBody).append("<a href='javascript:void(0)' onclick="+PageClick+"("+(page-1)+","+keyword+")>上一页</a>");
    }
    var pageLeft =  pageShow(page, allPages);
    if (pageLeft > 1) {
        $("#" + pageBody).append("<span>...</span>");
    }
    for (var i = 0; i < (10 < allPages ? 10: allPages); i++) {
        $("#" + pageBody).append("<a id='"+pageThis+""+(pageLeft + i)+"' href='javascript:void(0)' " +
        		"onclick="+PageClick+"("+(pageLeft + i)+","+keyword+")>"+(pageLeft + i)+"</a>");
    }
    $("#"+pageThis+""+page).css("background-color","white");
    if (pageLeft + 9 < allPages) {
        $("#" + pageBody).append("<span>...</span>");
    }
    if (page != allPages) {
        $("#" + pageBody).append("<a href='javascript:void(0)' onclick="+PageClick+"("+(page+1)+","+keyword+")>下一页</a>");
    }
    $("#" + pageBody).append("<a href='javascript:void(0)' onclick="+PageClick+"("+allPages+","+keyword+")>尾页</a>");
}
/**
 * 生成锚和页数组成的页码
 * @param obj 分页div的dom
 * @param PageClick 触发函数名
 * @param pageThis 当前样式id
 * @param page 当前页
 * @param allPages 总页数
 */
function simplePageShow(obj, PageClick, pageThis, page, allPages) {
    var thisBody = $(obj);
    thisBody.html("");
    if (allPages == 0) {
        return;
    }
    thisBody.append("<a href='javascript:void(0)' onclick="+PageClick+"(1)>首页</a>");
    if (1 != page) {
        thisBody.append("<a href='javascript:void(0)' onclick="+PageClick+"("+(page-1)+")>上一页</a>");
    }
    var pageLeft =  pageShow(page, allPages);
    if (pageLeft > 1) {
        thisBody.append("<span>...</span>");
    }
    for (var i = 0; i < (10 < allPages ? 10: allPages); i++) {
        thisBody.append("<a id='"+pageThis+""+(pageLeft + i)+"' href='javascript:void(0)' onclick="+PageClick+"("+(pageLeft + i)+")>"+(pageLeft + i)+"</a>");
    }
    $("#"+pageThis+page).css("background-color","white");
    if (pageLeft + 9 < allPages) {
        thisBody.append("<span>...</span>");
    }
    if (page != allPages) {
        thisBody.append("<a href='javascript:void(0)' onclick="+PageClick+"("+(page+1)+")>下一页</a>");
    }
    thisBody.append("<a href='javascript:void(0)' onclick="+PageClick+"("+allPages+")>尾页</a>");
}
/**
 * 生成锚和页数组成的页码
 * @param obj 分页div的dom
 * @param PageClick 触发函数名
 * @param pageThis 当前样式id
 * @param page 当前页
 * @param allPages 总页数
 * @param keyword 关键字
 */
function simplePageShow2(obj, PageClick, pageThis, page, allPages, keyword) {
    var thisBody = $(obj);
    thisBody.html("");
    if (allPages == 0) {
        return;
    }
    thisBody.append("<a href='javascript:void(0)' onclick="+PageClick+"(1,"+keyword+")>首页</a>");
    if (1 != page) {
        thisBody.append("<a href='javascript:void(0)' onclick="+PageClick+"("+(page-1)+","+keyword+")>上一页</a>");
    }
    var pageLeft =  pageShow(page, allPages);
    if (pageLeft > 1) {
        thisBody.append("<span>...</span>");
    }
    for (var i = 0; i < (10 < allPages ? 10: allPages); i++) {
        thisBody.append("<a id='"+pageThis+""+(pageLeft + i)+"' href='javascript:void(0)' onclick="+PageClick+"("+(pageLeft + i)+","+keyword+")>"+(pageLeft + i)+"</a>");
    }
    if (pageLeft + 9 < allPages) {
        thisBody.append("<span>...</span>");
    }
    if (page != allPages) {
        thisBody.append("<a href='javascript:void(0)' onclick="+PageClick+"("+(page+1)+","+keyword+")>下一页</a>");
    }
    thisBody.append("<a href='javascript:void(0)' onclick="+PageClick+"("+allPages+","+keyword+")>尾页</a>");
}
/**
 * @param page 当前页
 * @param allPage 总页数
 * @returns {Number} 左边起始分页位置，最多显示10页
 */
function pageShow(page, allPage) {
    
    if (allPage < 10) {
        return 1;
    }
    var pageLeft = page - 1 <= 5 ? page - 1 : 5;
    var pageRight = page + 4 >= allPage ? allPage -page : 4;
    if (pageLeft < 5) {
        pageRight += 5 - pageLeft;
    }
    if (pageRight < 4) {
        pageLeft += 4 - pageRight;
    }
    return page - pageLeft;
}

/**
 * @param obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
    if (obj == null || obj == undefined || "" === obj || obj == "null") {
        return true;
    }
    return false;
}
/**
 * @param obj
 * @returns {Boolean}
 */
function isNotEmpty(obj) {
    return !isEmpty(obj);
}
/**
 * 见触发事件的元素变为input元素
 * @param className
 * @param btn
 */
function useDefined(select, option, cv) {
    if (option.value >= cv) {
        $(select).after("<input type='text' name="+select.getAttribute("name")+">");
        $(select).remove();
    }
//    console.log(btn)
//    var p = btn.parentElement;
//    $(p).after("<input type='text' name="+className+">");
//    $(p).remove();
//    var obj = $(":input[name="+className+"]");
//    obj.after("<input type='text' name="+className+">");
//    obj.remove();
}
/**
 * @param obj thisObj
 * @param e event
 */
function defaultDelShow(obj, e) {
    var defaultViewId = "#defaultDelModal";
    var object = $(defaultViewId);
      var boxObj = $("[type='checkbox']:checked:visible");
      boxObj.each(function(i){                     
          if (this.value == 'on') {
             boxObj.splice(i,1);
         } 
       });
      if (boxObj.length == 0) {
          out_info.msg.warn("至少需要操作一项");
          $(obj).attr("data-target", "");
          object.css("display", "none");
      } else {
          var idArray = new Array();
          var reg = new RegExp("^[0-9]*$");           //匹配复选框值为数字
          boxObj.each(function(){
              if (reg.test(this.value)) {
                  idArray.push(this.value);
              }
          });
          $("#delConf").attr("onclick", e + "('"+idArray.toString()+"')");
          obj.setAttribute("data-target", defaultViewId);
          $("#delConfNum").text(idArray.length);
          object.css("display", "table");
      }
}
/**
 * 为使用参数2的元素列中添加一个样式，若其他元素已经使用了该样式，则清空之前的样式再添加到当前样式中
 * @param obj 当前点击对象
 * @param className 当前样式名
 * @param addClassName 要添加的样式
 * @author tangled
 */
function changeClassStyle(obj, className, addClassName) {
    var thisObj = $(obj);
    var isRun = true;
    if (thisObj.hasClass(addClassName)) {
        return false;
    }
    $("." + className + ":visible").each(function(){
       if ($(this).hasClass(addClassName)) {
           $(this).removeClass(addClassName);
           thisObj.addClass(addClassName);
           isRun = false;
           return isRun;
       }
    });
    if (!isRun) {
        return isRun;
    }
    thisObj.addClass(addClassName);
}
/**
 * 字符串转int，字符串中存在非数字，则返回0
 * @param str 需要转int的字符串
 * @returns number
 */
function stringToInt(str) {
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(str)) {
        return 0;
    }
    return parseInt(str);
}
/**
 * 字符串转int，获得befor_str字符串之后的字符并转为int，若此字符串中存在非数字，则返回0
 * @param str 需要转int的字符串
 * @param befor_str str字符串中需要剔除的字符串
 * @returns number
 */
function stringToIntBefor(str, befor_str) {
    var n = str.substring(str.indexOf(befor_str) + 1);
    return stringToInt(n);
}
/**
 * 若bol为true，则获得befor_str字符串之后的字符并转为int，若此字符串中存在非数字，则返回0
 * 若bol为false，直接返回剔除后的字符串
 * @param str 需要转int的字符串
 * @param befor_str
 * @param bol
 * @returns number or str
 */
function stringToIntBefor(str, befor_str, bol) {
    if (bol) {
        return stringToIntBefor(str, befor_str);
    }
    var n = str.substring(str.indexOf(befor_str) + 1);
    return n;
}
/**
 * 字符串转int，获得last_str字符串之前的字符并转为int，若此字符串中存在非数字，则返回0
 * @param str 需要转int的字符串
 * @param last_str str字符串中需要剔除的字符串
 * @returns number
 */
function stringToIntAfter(str, last_str) {
    var n = str.substring(0, str.indexOf(last_str));
    return stringToInt(n);
}
/**
 * 若bol为true，则获得last_str字符串之前的字符并转为int，若此字符串中存在非数字，则返回0
 * 若bol为false，直接返回剔除后的字符串
 * @param str 需要转int的字符串
 * @param last_str
 * @param bol
 * @returns number or str
 */
function stringToIntAfter(str, last_str, bol) {
    if (bol) {
        return stringToIntAfter(str, last_str);
    }
    var n = str.substring(0, str.indexOf(last_str));
    return n;
}
function numberTextShow(number) {
    var str = number.toString();
    if (str.length == 1 && str != "0") {
        return "第" + day(str) + "天";
    } else if (str.length == 2) {
        var o = str.charAt(0);
        var t = str.charAt(1);
        if (o == "1" && t == "0") {
            return "第十天";
        }
        else if (o == "1" && t != "0") {
            return "第十" + day(t) + "天";
        } else if (t == "0") {
            return "第" + day(o) + "十天";
        }
        return "第" + day(o) + "十" + day(t) + "天";
    } else {
        return number;
    }
    function day(day) {
        var char = "";
        switch (parseInt(day)) {
        case 1:
            char = "一";
            break;
        case 2:
            char = "二";
            break;
        case 3:
            char = "三";
            break;
        case 4:
            char = "四";
            break;
        case 5:
            char = "五";
            break;
        case 6:
            char = "六";
            break;
        case 7:
            char = "七";
            break;
        case 8:
            char = "八";
            break;
        case 9:
            char = "九";
            break;
        default:
            break;
        }
        return char;
    }
}
/**
 *   页面等待效果，必须与等待效果联合使用
 */
function loadWaitStyle() {
    var body = document.getElementsByTagName('body')[0];
    var loadBackgroundDiv = document.createElement('div');
    var loadLogDiv = document.createElement("div");
    loadLogDiv.setAttribute("class", "wait-load");
    loadBackgroundDiv.setAttribute("class", "modal-backdrop fade in");
    loadBackgroundDiv.setAttribute("style", "opacity: 0.25");
    loadBackgroundDiv.setAttribute("id", "load-background");
    $(body).append(loadLogDiv);
    $(body).append(loadBackgroundDiv);
}
/**
 * 关闭页面等待效果，必须与等待效果联合使用
 */
function loadWaitClose() {
    var body = document.getElementsByTagName('body')[0];
    $(body).children("#load-background").remove();
    $(body).children(".wait-load").remove();
}

/**
 * ajax成功返回统一数据处理
 * data: 由result返回后写入，暂用于返回正确时填写页数信息等
 * result:数据返回后首先赋值该属性，可配置一下三种情况的回调
 *  1.返回成功，可通过配置success执行一个函数的回调，默认返回服务器消息
 *  2.警告：可配置warn执行一个警告提示，默认返回服务器警告信息
 *  3.错误：可配置error执行一个函数回调，默认提示"出错了"信息
 * body: 自定义一个表格填充函数，例：table_plugin.body(functionName())
 * footer: 填充分页信息
 * @author tangled
 */
var table_plugin = {
        data : null,
        result: function(setting){
            var result = setting.result;
            var code = result.code;
            var msg = result.msg;
            if (code == 0) {
                if (isNotEmpty(setting.success))
                    setting.success();
                else {
                    if (isNotEmpty(msg) && msg != 'success') {
                        out_info.msg.success(msg);
                    }
                }
            }
            else if (code == 1) {
                if (isNotEmpty(setting.error))
                    setting.error();
                else {
                    out_info.msg.error("出错了");
                    throw new Error("result error:" + msg);
                }
            }
            else if (code == 2) {
                if (isNotEmpty(setting.warn))
                    setting.warn();
                else {
                    out_info.msg.warn(msg);
                    throw new Error("response warn");
                }
            }
            this.data = result;
        },
        body: function(){},
        footer: function(page_id, totalPage_id, pageSize_id, total_id){
            $("#" + page_id).text(this.data.page);
            $("#" + totalPage_id).text(this.data.totalPage);
            $("#" + pageSize_id).text(this.data.pageSize);
            $("#" + total_id).text(this.data.total);
        }
};
var subTitle_plugin = {
        t : null,
        init : function() {this.t = $("#headTitle");},
        append: function(content) {
            if (isEmpty(this.t))
            this.init();
            this.t.append(content);},
        clearAppend: function(content) {this.clear();this.append(content);},
        clear: function(){
            if (isEmpty(this.t))
            this.init();
            this.t.html("");},
};
/**
 * 基于layer插件提示插件
 * out_info：
 *      1.msg: 默认居中显示两秒
 *          1).msg: 黑色半透明提示窗，通用提示窗
 *          2).success: 对勾icon白色背景提示窗，操作成功调用
 *          3).warn: 感叹号icon白色背景提示窗，用于提示警告信息
 *          4).error: 红色叉icon白色背景提示窗，输出错误信息时调用
 */
var out_info = {
        defaultTime: 2000,
        msg: {
            msg: function(content) {
                layer.msg(content,{
                   time: out_info.defaultTime, 
                   offset: ['50%'],
                });
            },
            success: function(content) {
                layer.msg(content, {
                   icon: 1,
                   time: out_info.defaultTime,
                   offset: ['50%'],
                });
            },
            warn: function(content) {
                layer.msg(content, {
                   icon: 0,
                   time: out_info.defaultTime,
                   offset: ['50%'],
                });
            },
            error: function(content) {
                layer.msg(content, {
                    icon: 2,
                    time: out_info.defaultTime,
                    offset: ['50%'],
                });
            }
        }
};

/**
 * view_req(success_setting) 若不输入参数则不请求回调函数，以默认形式发送后台请求
 * 使用方式：1.view_req:  几个重要参数：
 *                     v_url: String(必须参数，是视图请求url);
 *                     v_data: String(可选参数，设置视图参数);
 *                     sub_url: String(可选参数，设置提交表单数据，若是交互窗必须设置此参数);
 *                     callBlack: String(可选参数，回调函数名，使用交互窗口时可自定义处理交互回调函数);
 *                     conf: Object(可选参数，配置弹窗视图：如title属性:标题，
 *                     默认使用“信息”标题和“确定”、“取消”按钮，居上“100px”的交互窗口)
 */
var form_window = {
        view_req: function(success_setting) {
            var v_url = success_setting.v_url;
            var v_data = success_setting.v_data;
            var sub_url = success_setting.sub_url;
            $.ajax({
                type: "GET",
                url: v_url,
                data: isNotEmpty(v_data) ? v_data : "",
                success: function(view_data) {
                    var param = JSON.parse(view_data);
                    var op = null;
                    var setting = $.extend({
                            offset: ['100px'],
                            type: 1,
                            btn: ['保存', '取消'],
                            content: param.data,
                            yes: function(index, layero) {
                                var func = param.funcName;
                                if (isNotEmpty(sub_url) && isNotEmpty(func)) {
                                    var t = window[func]();
                                    if (isNotEmpty(t) && t) {
                                        if (isNotEmpty(success_setting.callBlack)) {
                                            //自定义函数参数数目：1：表单数据， op：弹窗， 请求地址
                                            window[success_setting.callBlack](t, op, sub_url);
                                        } else {
                                            //非自定义函数，执行默认ajax请求
                                            $.ajax({
                                                type: "POST",
                                                url: sub_url,
                                                data: "data=" + JSON.stringify(t),
                                                success: function(r_data) {
                                                    table_plugin.result({
                                                        result: r_data,
                                                        success: function() {
                                                            out_info.msg.success(r_data.msg);
                                                            layer.close(op);}
                                                    });
                                                }
                                            });
                                        }
                                    }
                                } else {
                                    //非校验表单
                                    layer.close(op);
                                }
                            }//自定义弹窗信息
                        }, success_setting.conf != null ? success_setting.conf : {});
                    op = layer.open(setting);
                }
            });
        },
};