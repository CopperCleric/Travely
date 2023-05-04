//data for view reach
const days=[
    {x: Date.parse('2023-04-1 00:00:00 GMT+0800'), y: 5},
    {x: Date.parse('2023-04-2 00:00:00 GMT+0800'), y: 20},
    {x: Date.parse('2023-04-3 00:00:00 GMT+0800'), y: 10},
    {x: Date.parse('2023-04-4 00:00:00 GMT+0800'), y: 30},
    {x: Date.parse('2023-04-5 00:00:00 GMT+0800'), y: 20},
    {x: Date.parse('2023-04-6 00:00:00 GMT+0800'), y: 50},
    {x: Date.parse('2023-04-7 00:00:00 GMT+0800'), y: 10},
];

const weeks=[  
    {x: Date.parse('2023-04-02 00:00:00 GMT+0800'), y: 90},
    {x: Date.parse('2023-04-09 00:00:00 GMT+0800'), y: 50},
    {x: Date.parse('2023-04-16 00:00:00 GMT+0800'), y: 30},
    {x: Date.parse('2023-04-23 00:00:00 GMT+0800'), y: 50},
    {x: Date.parse('2023-04-30 00:00:00 GMT+0800'), y: 30},
];

const months=[  
    {x: Date.parse('2023-01-01 00:00:00 GMT+0800'), y: 1000},
    {x: Date.parse('2023-02-01 00:00:00 GMT+0800'), y: 3000},
    {x: Date.parse('2023-03-01 00:00:00 GMT+0800'), y: 1000},
    {x: Date.parse('2023-04-01 00:00:00 GMT+0800'), y: 1000},
    {x: Date.parse('2023-05-01 00:00:00 GMT+0800'), y: 4000},
    {x: Date.parse('2023-06-01 00:00:00 GMT+0800'), y: 1000},
    {x: Date.parse('2023-07-01 00:00:00 GMT+0800'), y: 2000},
    {x: Date.parse('2023-08-01 00:00:00 GMT+0800'), y: 5000},
    {x: Date.parse('2023-09-01 00:00:00 GMT+0800'), y: 7000},
    {x: Date.parse('2023-10-01 00:00:00 GMT+0800'), y: 3000},
    {x: Date.parse('2023-11-01 00:00:00 GMT+0800'), y: 7000},
    {x: Date.parse('2023-12-01 00:00:00 GMT+0800'), y: 2000},
];

//data for post reach
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
    {x: Date.parse('2023-01-01 00:00:00 GMT+0800'), y: 2000},
    {x: Date.parse('2023-02-01 00:00:00 GMT+0800'), y: 1000},
    {x: Date.parse('2023-03-01 00:00:00 GMT+0800'), y: 1000},
    {x: Date.parse('2023-04-01 00:00:00 GMT+0800'), y: 2345},
    {x: Date.parse('2023-05-01 00:00:00 GMT+0800'), y: 4000},
    {x: Date.parse('2023-06-01 00:00:00 GMT+0800'), y: 1000},
    {x: Date.parse('2023-07-01 00:00:00 GMT+0800'), y: 7000},
    {x: Date.parse('2023-08-01 00:00:00 GMT+0800'), y: 5000},
    {x: Date.parse('2023-09-01 00:00:00 GMT+0800'), y: 7000},
    {x: Date.parse('2023-10-01 00:00:00 GMT+0800'), y: 3000},
    {x: Date.parse('2023-11-01 00:00:00 GMT+0800'), y: 7000},
    {x: Date.parse('2023-12-01 00:00:00 GMT+0800'), y: 2000},
];

// setup 
const dataView = {
    datasets: [{
    label: 'Views',
    data: days,
    backgroundColor: 'rgba(255, 26, 104, 0.2)',
    borderColor: 'rgba(255, 26, 104, 1)',
    borderWidth: 1
    }]
    };

const dataPost = {
    datasets: [{
    label: 'Posts',
    data: day,
    backgroundColor: 'rgba(255, 26, 104, 0.2)',
    borderColor: 'rgba(255, 26, 104, 1)',
    borderWidth: 1
    }]
    };

    
    // config 
    const configView = {
    type: 'line',
    data: dataView,
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

    // config 
    const configPost = {
    type: 'bar',
    data: dataPost,
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
    const viewChart= new Chart(
    document.getElementById('viewChart'),
    configView
    );

    // render init block
    const postChart = new Chart(
    document.getElementById('postChart'),
    configPost
    );

    function updateTimeline(time){
        //console.log(time)
        console.log(time.value);
        if(time.value == 'days'){
            viewChart.config.options.scales.x.time.unit = 'day';
            viewChart.config.data.datasets[0].data = days;
            postChart.config.options.scales.x.time.unit = 'day';
            postChart.config.data.datasets[0].data = day;
        }
        if(time.value == 'weeks'){
            viewChart.config.options.scales.x.time.unit ='week';
            viewChart.config.data.datasets[0].data = weeks;
            postChart.config.options.scales.x.time.unit = 'week';
            postChart.config.data.datasets[0].data = week;
        }
        if(time.value == 'months'){
            viewChart.config.options.scales.x.time.unit = 'month';
            viewChart.config.data.datasets[0].data = months;
            postChart.config.options.scales.x.time.unit = 'month';
            postChart.config.data.datasets[0].data = month;
        }
        viewChart.update();
        postChart.update();
        };

    /*// attach event listener to select element
    const selectEl = document.querySelector('.select');
    selectEl.addEventListener('change', function() {
    updateTime(this.value);
    }); */

    

