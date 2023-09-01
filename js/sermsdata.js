Date.prototype.format = function(fmt) {
        let o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
            "S": this.getMilliseconds() // 毫秒
        };

        // 根据y的长度来截取年
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((
                "00" + o[k]).substr(("" + o[k]).length)));
        }
        return fmt;
    }
    // 用法： 
    // let time1 = new Date().format("yyyy-MM-dd");
    // let time2 = new Date(1469281964000).format("yyyy-MM-dd hh:mm:ss");
let dataArry = document.getElementsByClassName("talk_date");
console.log("sermsData时间初始化");
for (let i = 0; i < dataArry.length; i++) {
    let text = dataArry[i].innerText;
    // let toText = new Date(text).format("yyyy" + "年" + "MM" + "月" + "dd" + "日" + " hh:mm");
    let toText = new Date(text).format("MM" + "月" + "dd" + "日" + " hh:mm");
    dataArry[i].innerText = toText
}