"use strict";
var isStarted = false;

// 开始摇签
function start() {
    isStarted = true;
    $('.qiancover').hide();
    $('.decode').hide();
    $('.result').show();
    // setTimeout(showDecode, 3000);
}

// 显示正在解签
function showDecode() {
    $('.result').hide();
    $('.decode').show();
    setTimeout(jumpToDecode, 3000);
}

function jumpToDecode(){
    var urls = ["#", "#"];
    var jumpTo = urls[parseInt(Math.random() * urls.length)];
    window.location = jumpTo;
};


//摇一摇(使用DeviceMotion事件, 推荐,应为可以计算加速度)
if(window.DeviceMotionEvent) {
    var speed = 25;
    var x, y, z, lastX, lastY, lastZ;
    x = y = z = lastX = lastY = lastZ = 0;

    window.addEventListener('devicemotion', function(event){
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
            start();
        }
        lastX = x;
        lastY = y;
    }, false);
}

//摇一摇(使用DeviceOrientation事件, 本质是计算偏转角)
//测试中发现有些设备不支持(iphone5的微信内置浏览器, 魅族mx4的微信内置浏览器)
/*if(window.DeviceOrientationEvent){
    $(window).on('deviceorientation', function(e) {
        if (isStarted) {
            return true;
        }
        if (!lastAcc) {
            lastAcc = e;
            return true;
        }
        var delA = Math.abs(e.alpha - lastAcc.alpha);
        var delB = Math.abs(e.beta - lastAcc.beta);
        var delG = Math.abs(e.gamma - lastAcc.gamma);
        if ( (delA > 15 && delB > 15) || (delA > 15 && delG > 15) || (delB > 15 || delG > 15)) {
            start();
        }
        lastAcc = e;
    });
}*/


//微信分享没有用上，可以根据官方公布的 JS-SDK进行开发
var shareMeta = {
    img_url: "./img/thumbnail.gif",
    image_width: 100,
    image_height: 100,
    link: 'http://www.imeiwen.com/2015/index.html',
    title: "摇枚新年祈福签！",
    desc: "这是对过去的感悟和对新年的祈望，希望它能为你带来好运",
    appid: ''
};
document.addEventListener('WeixinJSBridgeReady', function () {
    WeixinJSBridge.on('menu:share:appmessage', function(){
        WeixinJSBridge.invoke('sendAppMessage', shareMeta);
    });
    WeixinJSBridge.on('menu:share:timeline', function(){
        WeixinJSBridge.invoke('shareTimeline', shareMeta);
    });
    WeixinJSBridge.on('menu:share:weibo', function(){
        WeixinJSBridge.invoke('shareWeibo', {
            content: shareMeta.title + shareMeta.desc,
            url: shareMeta.link
        });
    });
});