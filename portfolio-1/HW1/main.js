let myGraph1 = document.getElementById('myGraph1');

let hw1_trace1 = {};
hw1_trace1.mode = "lines+markers+text";
hw1_trace1.type = "scatter";
hw1_trace1.name = "男性";
hw1_trace1.marker = {
    size:8
};

hw1_trace1.x = [];
hw1_trace1.y = [];
hw1_trace1.visible = true;


let hw1_trace2 = {};
hw1_trace2.mode = "lines+markers+text";
hw1_trace2.type = "scatter";
hw1_trace2.name = "女性";
hw1_trace2.marker = {
    size:8
};

hw1_trace2.x = [];
hw1_trace2.y = [];
hw1_trace2.visible = false;
hw1_trace2.line = {
    color:'purple'
};

let hw1_trace3 = {};
hw1_trace3.mode = "lines+markers+text";
hw1_trace3.type = "scatter";
hw1_trace3.name = "總人口";
hw1_trace3.marker = {
    size:8
};

hw1_trace3.x = [];
hw1_trace3.y = [];
hw1_trace3.visible = false;
hw1_trace3.line = {
    color: 'green',
};

for(let i = 0; i< hw1_set1.length; i++){
    hw1_trace1.x[i] = hw1_set1[i][0];
    hw1_trace1.y[i] = hw1_set1[i][1];
}

for (let i = 0; i < hw1_set2.length; i++) {
    hw1_trace2.x[i] = hw1_set2[i][0];
    hw1_trace2.y[i] = hw1_set2[i][1];
}
for (let i = 0; i < hw1_set3.length; i++) {
    hw1_trace3.x[i] = hw1_set3[i][0];
    hw1_trace3.y[i] = hw1_set3[i][1];
}

let hw1_data = [];
hw1_data.push(hw1_trace1);
hw1_data.push(hw1_trace2);
hw1_data.push(hw1_trace3);

let hw1_layout = {
    margin:{
        t:5
    },
    xaxis:{
        range:[95,112]
    },
    yaxis:{
        range:[-10.00,10.00]
    },
    title:'近十年人口年增率(單位為‰)',
    
    updatemenus:[
        {
            y:1.25,
            x:0.25,
            yanchor:'top',
            buttons:[
            {
                method:'restyle',
                args:['visible',[true, false, false]],
                label:'男性'
            },
            {
                method: 'restyle',
                args: ['visible', [false, true, false]],
                label: '女性'
            },
            {
                method: 'restyle',
                args: ['visible', [false, false, true]],
                label: '總人口'
            },
            {
                method: 'restyle',
                args: ['visible', [true, true, true]],
                label: '顯示全部'
            }
            ]
        }
    ]
};

Plotly.newPlot(myGraph1, hw1_data, hw1_layout);