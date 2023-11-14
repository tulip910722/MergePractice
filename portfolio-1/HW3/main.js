let myGraph3 = document.getElementById('myGraph3');

//第一筆資料
let hw3_trace1 = {};
hw3_trace1.type = "pie";
hw3_trace1.title = "民國95年";
hw3_trace1.labels = [];
hw3_trace1.values = [];
hw3_trace1.hole = 0.5; //標題在圓餅圖中間
hw3_trace1.domain = {
    row:0,
    column:0
};

for(let x=0; x<evaluation_ratio_1.length; x++){
    hw3_trace1.labels[x] = evaluation_ratio_1[x]['name'];
    hw3_trace1.values[x] = evaluation_ratio_1[x]['count'];
}

//第二筆資料
let hw3_trace2 = {};
hw3_trace2.type = "pie";
hw3_trace2.title = "民國100年";
hw3_trace2.labels = [];
hw3_trace2.values = [];
hw3_trace2.hole = 0.5; //標題在圓餅圖中間
hw3_trace2.domain = {
    row: 0,
    column: 1
};

for (let x = 0; x < evaluation_ratio_2.length; x++) {
    hw3_trace2.labels[x] = evaluation_ratio_2[x]['name'];
    hw3_trace2.values[x] = evaluation_ratio_2[x]['count'];
}

//第三筆資料
let hw3_trace3 = {};
hw3_trace3.type = "pie";
hw3_trace3.title = "民國105年";
hw3_trace3.labels = [];
hw3_trace3.values = [];
hw3_trace3.hole = 0.5; //標題在圓餅圖中間
hw3_trace3.domain = {
    row: 1,
    column: 0
};

for (let x = 0; x < evaluation_ratio_3.length; x++) {
    hw3_trace3.labels[x] = evaluation_ratio_3[x]['name'];
    hw3_trace3.values[x] = evaluation_ratio_3[x]['count'];
}


//第四筆資料
let hw3_trace4 = {};
hw3_trace4.type = "pie";
hw3_trace4.title = "民國110年";
hw3_trace4.labels = [];
hw3_trace4.values = [];
hw3_trace4.hole = 0.5; //標題在圓餅圖中間
hw3_trace4.domain = {
    row: 1,
    column: 1
};
for (let x = 0; x < evaluation_ratio_4.length; x++) {
    hw3_trace4.labels[x] = evaluation_ratio_4[x]['name'];
    hw3_trace4.values[x] = evaluation_ratio_4[x]['count'];
}

let hw3_data = [];
hw3_data.push(hw3_trace1);
hw3_data.push(hw3_trace2);
hw3_data.push(hw3_trace3);
hw3_data.push(hw3_trace4);

let hw3_layout = {
    margin:{
       t:30,
       l:5,
    },
    grid:{
        rows:2,
        columns:2
    },
    title:'進口主要國家(以美元為單位)'
};

Plotly.newPlot(myGraph3, hw3_data, hw3_layout);