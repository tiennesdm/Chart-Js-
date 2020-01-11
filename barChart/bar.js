var platformData = [];
/***********readData**************/
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
/*******************/

//usage:
readTextFile("./data.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
    let myData = data.data;
    /*********distinct value**********/
    for (let i = 0; i < myData.length; i++) {
        let count = 0;
        if (platformData.length > 0) {
            for (let j = 0; j < platformData.length; j++) {
                if (myData[i].platform == platformData[j]) {
                    count = 1;

                }
            }
        }
        if (count == 0) {
            platformData.push(myData[i].platform);
        }
    }
    /****************************************/
    for (let l = 0; l < myData.length; l++) {
        //   if (platformData)

    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: platformData,
            datasets: [{
                label: '# of Platform',
                data: [12, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});