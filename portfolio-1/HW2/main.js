let myGraph2 = document.getElementById('myGraph2');

let hw2_trace1 = {};
hw2_trace1.type="bar";
hw2_trace1.name="台灣";
hw2_trace1.x = [];
hw2_trace1.y = [];

for(let i=0;i<t1.length;i++){
        hw2_trace1.x[i] = t1[i]['name'];
        hw2_trace1.y[i] = t1[i]['count'];
}

let hw2_trace2 = {};
hw2_trace2.type = "bar";
hw2_trace2.name = "美國";
hw2_trace2.x = [];
hw2_trace2.y = [];

for (let i = 0; i < t2.length; i++) {
        hw2_trace2.x[i] = t2[i]['name'];
        hw2_trace2.y[i] = t2[i]['count'];
}

let hw2_trace3 = {};
hw2_trace3.type = "bar";
hw2_trace3.name = "日本";
hw2_trace3.x = [];
hw2_trace3.y = [];

for (let i = 0; i < t3.length; i++) {
        hw2_trace3.x[i] = t3[i]['name'];
        hw2_trace3.y[i] = t3[i]['count'];
}

let hw2_trace4 = {};
hw2_trace4.type = "bar";
hw2_trace4.name = "韓國";
hw2_trace4.x = [];
hw2_trace4.y = [];

for (let i = 0; i < t4.length; i++) {
        hw2_trace4.x[i] = t4[i]['name'];
        hw2_trace4.y[i] = t4[i]['count'];
}

let hw2_trace5 = {};
hw2_trace5.type = "bar";
hw2_trace5.name = "新加坡";
hw2_trace5.x = [];
hw2_trace5.y = [];

for (let i = 0; i < t5.length; i++) {
        hw2_trace5.x[i] = t5[i]['name'];
        hw2_trace5.y[i] = t5[i]['count'];
}

let hw2_trace6 = {};
hw2_trace6.type = "bar";
hw2_trace6.name = "香港";
hw2_trace6.x = [];
hw2_trace6.y = [];

for (let i = 0; i < t6.length; i++) {
        hw2_trace6.x[i] = t6[i]['name'];
        hw2_trace6.y[i] = t6[i]['count'];
}

let hw2_trace7 = {};
hw2_trace7.type = "bar";
hw2_trace7.name = "中國";
hw2_trace7.x = [];
hw2_trace7.y = [];

for (let i = 0; i < t7.length; i++) {
        hw2_trace7.x[i] = t7[i]['name'];
        hw2_trace7.y[i] = t7[i]['count'];
}

let hw2_data = [];
hw2_data.push(hw2_trace1);
hw2_data.push(hw2_trace2);
hw2_data.push(hw2_trace3);
hw2_data.push(hw2_trace4);
hw2_data.push(hw2_trace5);
hw2_data.push(hw2_trace6);
hw2_data.push(hw2_trace7);

let hw2_layout={
    //margin: {
         //t:10
    //},
    //// barmode: 'stack',//長條圖堆疊
    title:'主要國家平均每人國內生產毛額 GDP (以美元為單位)'
};//標題 軸數值等https://plotly.com/javascript/reference/layout/

Plotly.newPlot(myGraph2, hw2_data, hw2_layout);