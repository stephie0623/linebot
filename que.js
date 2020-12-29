function Appear() {
    //获取随机数
    var luckyNum = Math.round(Math.random() * 7);
    //alert(luckyNum);
    if (luckyNum == 0) {
        window.location.href = "./ans/ans1.html";
    } else if (luckyNum == 1) {
        window.location.href = "./ans/ans2.html";
    } else if (luckyNum == 2) {
        window.location.href = "./ans/ans3.html";
    } else if (luckyNum == 3) {
        window.location.href = "./ans/ans4.html";
    } else if (luckyNum == 4) {
        window.location.href = "./ans/ans5.html";
    } else if (luckyNum == 5) {
        window.location.href = "./ans/ans6.html";
    } else if (luckyNum == 6) {
        window.location.href = "./ans/ans7.html";
    }
}
