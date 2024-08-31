/*
JavaScript函数
*/

// 加入执勤队
var dates = [];

if (localStorage.getItem("data")) { 
    dates = JSON.parse(localStorage.getItem("data")); // 把json数据转为js对象
} else {
    localStorage.setItem("data", JSON.stringify(dates));
}

function JiaRu() {
    var jiaru_class = document.getElementById('jiaru_class').value;
    var jiaru_name = document.getElementById('jiaru_name').value;
    dates.push({
        class: jiaru_class,
        name: jiaru_name,
        state: "未实习",
        daoshi_class: null,
        daoshi_name: null
    });
    localStorage.data = JSON.stringify(dates);
    alert('加入成功！');
}

// 添加实习
function ShiXi() {
    var shixi_duiyuan_class = document.getElementById('shixi_duiyuan_class').value;
    var shixi_duiyuan_name = document.getElementById('shixi_duiyuan_name').value;
    var shixi_daoshi_class = document.getElementById('shixi_daoshi_class').value;
    var shixi_daoshi_name = document.getElementById('shixi_daoshi_name').value;
    var index = dates.findIndex(item => 
        item.class === shixi_duiyuan_class && 
        item.name === shixi_duiyuan_name && 
        item.state === "未实习"
    );
    if (index !== -1) {
        dates[index] = {
            class: shixi_duiyuan_class,
            name: shixi_duiyuan_name,
            state: "未转正",
            daoshi_class: shixi_daoshi_class,
            daoshi_name: shixi_daoshi_name
        };
        localStorage.data = JSON.stringify(dates);
        alert('修改成功！');
    } else {
        alert('未找到对应记录！');
    }
}

// 转正队员
function ZhuanZheng() {
    var zhuanzheng_daoshi_class = document.getElementById('zhuanzheng_daoshi_class').value;
    var zhuanzheng_daoshi_name = document.getElementById('zhuanzheng_daoshi_name').value;
    var zhuanzheng_duiyuan_class = document.getElementById('zhuanzheng_duiyuan_class').value;
    var zhuanzheng_duiyuan_name = document.getElementById('zhuanzheng_duiyuan_name').value;
    var index = dates.findIndex(item => 
        item.class === zhuanzheng_duiyuan_class && 
        item.name === zhuanzheng_duiyuan_name && 
        item.state === "未转正"
    );
    if (index !== -1) {
        dates[index] = {
            class: zhuanzheng_duiyuan_class,
            name: zhuanzheng_duiyuan_name,
            state: "已转正",
            daoshi_class: null,
            daoshi_name: null
        };
        localStorage.data = JSON.stringify(dates);
        alert('修改成功！');
    } else {
        alert('未找到对应记录！');
    }
}

// 踢出队员
function TiChu() {
    var tichu_class = document.getElementById('tichu_class').value;
    var tichu_name = document.getElementById('tichu_name').value;
    var index = dates.findIndex(item => 
        item.class === tichu_class && 
        item.name === tichu_name
    );
    if (index !== -1) {
        dates.splice(index, 1);
        localStorage.data = JSON.stringify(dates);
        alert('删除成功！');
    } else {
        alert('未找到对应记录！');
    }
}

// 查看队员
function ChaKan() {
    var str = "";
    dates.forEach(function(item) {
        str += "<tr><td>" + item.class + "</td><td>" + item.name + "</td><td>" + item.state + "</td><td>" + item.daoshi_class + "</td><td>" + item.daoshi_name + "</td></tr>";
    });
    document.getElementById('tbody').innerHTML = str; // 假设有一个 id 为 tbody 的元素
}