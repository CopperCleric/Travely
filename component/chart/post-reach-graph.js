// data&chart for views reach

const day=[
    {x: Date.parse('2023-04-1 00:00:00 GMT+0800'), y: 10},
    {x: Date.parse('2023-04-2 00:00:00 GMT+0800'), y: 50},
    {x: Date.parse('2023-04-3 00:00:00 GMT+0800'), y: 10},
    {x: Date.parse('2023-04-4 00:00:00 GMT+0800'), y: 20},
    {x: Date.parse('2023-04-5 00:00:00 GMT+0800'), y: 20},
    {x: Date.parse('2023-04-6 00:00:00 GMT+0800'), y: 50},
    {x: Date.parse('2023-04-7 00:00:00 GMT+0800'), y: 10},
];

const week=[  
    {x: Date.parse('2023-04-02 00:00:00 GMT+0800'), y: 10},
    {x: Date.parse('2023-04-09 00:00:00 GMT+0800'), y: 20},
    {x: Date.parse('2023-04-16 00:00:00 GMT+0800'), y: 30},
    {x: Date.parse('2023-04-23 00:00:00 GMT+0800'), y: 50},
    {x: Date.parse('2023-04-30 00:00:00 GMT+0800'), y: 30},
];

const month=[  
    {x: Date.parse('2023-01-01 00:00:00 GMT+0800'), y: 10},
    {x: Date.parse('2023-02-01 00:00:00 GMT+0800'), y: 30},
    {x: Date.parse('2023-03-01 00:00:00 GMT+0800'), y: 10},
    {x: Date.parse('2023-04-01 00:00:00 GMT+0800'), y: 10},
    {x: Date.parse('2023-05-01 00:00:00 GMT+0800'), y: 40},
    {x: Date.parse('2023-06-01 00:00:00 GMT+0800'), y: 10},
    {x: Date.parse('2023-07-01 00:00:00 GMT+0800'), y: 20},
    {x: Date.parse('2023-08-01 00:00:00 GMT+0800'), y: 50},
    {x: Date.parse('2023-09-01 00:00:00 GMT+0800'), y: 70},
    {x: Date.parse('2023-10-01 00:00:00 GMT+0800'), y: 30},
    {x: Date.parse('2023-11-01 00:00:00 GMT+0800'), y: 70},
    {x: Date.parse('2023-12-01 00:00:00 GMT+0800'), y: 20},
];
// setup 
const data = {
//labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
datasets: [{
label: 'Posts',
data: day,
backgroundColor: 'rgba(255, 26, 104, 0.2)',
borderColor: 'rgba(255, 26, 104, 1)',
borderWidth: 1
}]
};

// config 
const config = {
type: 'bar',
data,
options: {
scales: {
    x :{
        type:'time',
        time:{
            unit:'day'
        }
    },
  y: {
    beginAtZero: true
  }
}
}
};

// render init block
const myChart = new Chart(
document.getElementById('myChart'),
config
);

function updateTime(time){
//console.log(time)
console.log(time.value);
if(time.value == 'day'){
    myChart.config.options.scales.x.time.unit = time.value;
    myChart.config.data.datasets[0].data = day;
}
if(time.value == 'week'){
    myChart.config.options.scales.x.time.unit = time.value;
    myChart.config.data.datasets[0].data = week;
}
if(time.value == 'month'){
    myChart.config.options.scales.x.time.unit = time.value;
    myChart.config.data.datasets[0].data = month;
}
myChart.update();
}
