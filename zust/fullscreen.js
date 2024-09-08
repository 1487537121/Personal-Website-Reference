// 获取全屏按钮和整个网页的元素
var fullscreenButton = document.getElementById('fullscreen-button');
var webpageElement = document.documentElement;

// 检查浏览器是否支持全屏功能
if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
    fullscreenButton.style.display = 'block'; // 如果支持全屏功能，则显示全屏按钮
}

// 点击按钮时触发全屏显示或退出全屏
fullscreenButton.addEventListener('click', function() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
        // 进入全屏模式
        if (webpageElement.requestFullscreen) {
            webpageElement.requestFullscreen();
        } else if (webpageElement.webkitRequestFullscreen) {
            webpageElement.webkitRequestFullscreen();
        } else if (webpageElement.mozRequestFullScreen) {
            webpageElement.mozRequestFullScreen();
        } else if (webpageElement.msRequestFullscreen) {
            webpageElement.msRequestFullscreen();
        }
    } else {
        // 退出全屏模式
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
});