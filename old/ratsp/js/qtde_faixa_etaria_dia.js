var ctx = document.getElementById("qtde_faixa_etaria_dia").getContext('2d');
var qtde_mes = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0-17", "18-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64",
            "65-69", "70-74", "75-79", "80 ou mais", "NAO DISPONIVEL",
        ],
        datasets: [{
            label: 'Domingo',
            data: [84, 254, 140, 118, 116, 91, 84, 70, 54, 42, 33, 13, 22, 15, 40],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#A61D4C',
            borderWidth: 1
        }, {
            label: 'Segunda-feira',
            data: [34, 99, 57, 57, 56, 51, 66, 52, 32, 30, 35, 21, 25, 19, 26],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#3E5DAA',
            borderWidth: 1,
        }, {
            label: 'Terça-feira',
            data: [28, 63, 46, 53, 51, 56, 41, 49, 38, 38, 28, 22, 19, 33, 24],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#63AE45',
            borderWidth: 1,
        }, {
            label: 'Quarta-feira',
            data: [24, 75, 71, 46, 56, 48, 51, 50, 38, 34, 36, 14, 26, 26, 29],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#01B79A',
            borderWidth: 1,
        }, {
            label: 'Quinta-feira',
            data: [26, 88, 62, 65, 62, 60, 56, 55, 50, 44, 33, 26, 21, 20, 33],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#F89A22',
            borderWidth: 1,
        }, {
            label: 'Sexta-feira',
            data: [42, 111, 83, 74, 68, 55, 63, 63, 49, 37, 37, 23, 29, 28, 28],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#EC3425',
            borderWidth: 1,
        }, {
            label: 'Sábado',
            data: [51, 206, 138, 117, 98, 82, 78, 75, 54, 49, 42, 26, 21, 24, 44],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#686069',
            borderWidth: 1,
        }]
    },
    options: {
        plugins: {
            datalabels: {
                backgroundColor: 'rgba(204, 204, 199, 0.6)',
                borderColor: 'grey',
                borderWidth: 0.3,
                borderRadius: 40,
                color: 'black',
                font: {
                    weight: 'bold',
                    size: 15
                },
            },
            deferred: {
                xOffset: 50, // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 300 // delay of 500 ms after the canvas is considered inside the viewport
            }

        }
    }
});